import { React, useEffect, useState } from 'react';
import GenericCard from './PolyvalentCard';
import { statsTypes } from '../../constants/enums';
import { statsPeriods } from '../../constants/enums';
import { ApiServices } from '../../controllers/SummaryController';
import { View } from 'react-native';

export default WeightCard = (props) => {
    const { type, period, userID, lastSample } = props;
    const [weightValues, setWeightValues] = lastSample ?
        useState({ total_weight: "..." }) :
        useState({
            monthly: { average_weight: "...", total_weight: "..." },
            yearly: { average_weight: "...", total_weight: "..." },
            everything: { average_weight: "...", total_weight: "..." }
        });

    useEffect(() => {
        const initializeData = async () => {
            try {
                const responses = lastSample ?
                    await Promise.all([
                        ApiServices.getLastSampleInfoCard(userID),
                    ]) :
                    await Promise.all([
                        ApiServices.getMonthlyMacroWeight(userID),
                        ApiServices.getYearlyMacroWeight(userID),
                        ApiServices.getEverythingMacroWeight(userID),
                    ]);
                if (lastSample) {
                    setWeightValues(responses[0].data)
                } else {
                    setWeightValues({
                        monthly: responses[0].data,
                        yearly: responses[1].data,
                        everything: responses[2].data,
                    });
                }
            } catch (error) {
                console.log("Failed to initialize data in weightCard:", error);
            }
        };
        initializeData();
    }, []);

    const getWeightByPeriod = () => {
        switch (period) {
            case statsPeriods.MONTH:
                return weightValues.monthly;
            case statsPeriods.YEAR:
                return weightValues.yearly;
            case statsPeriods.ALLTIME:
                return weightValues.everything;
        }
    }

    return (
        <View>
            {lastSample ? <GenericCard
                title="Poids"
                logo="weight-kilogram"
                value={weightValues.total_weight}
                metric="Kg"
            /> :
                <GenericCard
                    title="Poids"
                    logo="weight-kilogram"
                    value={type == statsTypes.AVG ? getWeightByPeriod().average_weight : getWeightByPeriod().total_weight}
                    metric="Kg"
                />}
        </View>
    );
};
