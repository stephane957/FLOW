import { React, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { width } from '../../styles/screen.styles';
import styles from '../../styles/views.styles';
import { ApiServices } from '../../controllers/SummaryController';
import { statsPeriods } from '../../constants/enums';
import { LineChart } from "react-native-gifted-charts"

export default CustomStackedAreaChart = (props) => {
    const AREACHART_WIDTH_PERCENTAGE = 0.70;
    const { period, userID } = props;
    const [areaDistribution, setAreaDistribution] = useState({
        monthly: { macro: [], micro: [], meso: [] },
        yearly: { macro: [], micro: [], meso: [] },
        everything: { macro: [], micro: [], meso: [] },
    });

    useEffect(() => {
        const initializeData = async () => {
            try {
                const responses = await Promise.all([
                    ApiServices.getMonthlyDistribution(userID),
                    ApiServices.getYearlyDistribution(userID),
                    ApiServices.getEverythingPopularDistribution(userID)
                ]);

                setAreaDistribution({
                    monthly: adaptDataForAreaChart(responses[0].data),
                    yearly: adaptDataForAreaChart(responses[1].data),
                    everything: adaptDataForAreaChart(responses[2].data)
                });

            } catch (error) {
                console.log("Failed to initialize data in Area chart :", error);
            }
        };
        initializeData();
    }, []);

    const adaptDataForAreaChart = (data) => {
        const micro = []
        const macro = []
        const meso = []

        data.forEach(item => {
            meso.push({
                value: (item.total_meso_amount != null ? item.total_meso_amount : 0) +
                    (item.total_micro_amount != null ? item.total_micro_amount : 0) +
                    (item.total_macro_amount != null ? item.total_macro_amount : 0)
            });

            micro.push({
                value: (item.total_micro_amount != null ? item.total_micro_amount : 0) +
                    (item.total_macro_amount != null ? item.total_macro_amount : 0)
            });

            macro.push({ value: (item.total_macro_amount != null ? item.total_macro_amount : 0) });
        });
        return { micro: micro, macro: macro, meso: meso }
    }

    const getAreaChartByPeriod = () => {
        switch (period) {
            case statsPeriods.MONTH:
                return areaDistribution.monthly;
            case statsPeriods.YEAR:
                return areaDistribution.yearly;
            case statsPeriods.ALLTIME:
                return areaDistribution.everything;
        }
    }

    const getMaxValueOfStackChart = () => {
        const values = []
        getAreaChartByPeriod().meso.forEach((item) => {
            values.push(item.value);
        })
        return Math.max(...values);
    }

    return (
        <View>
            <Text style={styles.samplingNumTitle}>Évolution des types de plastique collectés</Text>
            <View style={styles.stackedChartContainer}>
                <LineChart
                    areaChart={true}
                    curved={false}
                    data={getAreaChartByPeriod().macro}
                    data2={getAreaChartByPeriod().micro}
                    data3={getAreaChartByPeriod().meso}
                    height={250}
                    width={width * AREACHART_WIDTH_PERCENTAGE}
                    adjustToWidth={true}
                    showVerticalLines={false}
                    rulesLength={0}
                    initialSpacing={0}
                    hideDataPoints={true}
                    color1="#002C61"
                    color2="#004B8F"
                    color3="#006BC9"
                    startFillColor1="#002C61"
                    startFillColor2="#004B8F"
                    startFillColor3="#006BC9"
                    endFillColor1="#002C61"
                    endFillColor2="#004B8F"
                    endFillColor3="#006BC9"
                    zIndex3={0}
                    zIndex2={1}
                    zIndex1={2}
                    maxValue={getMaxValueOfStackChart()}
                />
            </View>
            <View style={styles.areaLegendContainer}>
                <View style={styles.legendItem}>
                    <View style={[styles.colorIndicator, { backgroundColor: "#002C61" }]} />
                    <Text style={styles.legendText}>macro.</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.colorIndicator, { backgroundColor: "#004B8F" }]} />
                    <Text style={styles.legendText}>micro.</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.colorIndicator, { backgroundColor: "#006BC9" }]} />
                    <Text style={styles.legendText}>meso.</Text>
                </View>
            </View>
        </View>
    );
};

