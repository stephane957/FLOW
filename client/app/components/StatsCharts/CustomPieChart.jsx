import { React, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { width } from '../../styles/screen.styles';
import styles from '../../styles/views.styles';
import ChartLegend from './ChartLegend';
import { getNameByType } from '../../(navbar)/Statistics/StatsUtils';
import { colorPalette } from '../../constants/object_lists';
import { ApiServices } from '../../controllers/SummaryController';
import { statsPeriods } from '../../constants/enums';

export default CustomPieChart = (props) => {
	const CHART_WIDTH_PERCENTAGE = 0.85;
	const { period, userID, lastSample } = props;
	const [distributions, setDistributions] = lastSample ?
		useState([]) :
		useState({
			monthly: [],
			yearly: [],
			everything: []
		});

	const adaptDataToPieChart = (data) => {
		return data.map((item, index) => ({
			name: getNameByType(item.object_row),
			amount: item.amount,
			color: colorPalette[index]
		}));
	}
	const adaptDataToPieChartMonth = (data) => {
		return data.map((item, index) => ({
			name: getNameByType(item.object_row),
			amount: item.total_amount,
			color: colorPalette[index]
		}));
	}

	useEffect(() => {
		const initializeData = async () => {
			try {
				const responses = lastSample ?
					await Promise.all([
						ApiServices.getLastSampleDistribution(userID)
					]) :
					await Promise.all([
						ApiServices.getMonthlyMacroPieChart(userID),
						ApiServices.getYearlyMacroPieChart(userID),
						ApiServices.getEverythingMacroPieChart(userID)
					]);
				if (lastSample) {
					setDistributions(adaptDataToPieChart(responses[0].data));
				} else {
					setDistributions({
						monthly: adaptDataToPieChartMonth(responses[0].data),
						yearly: adaptDataToPieChart(responses[1].data),
						everything: adaptDataToPieChart(responses[2].data)
					});
				}
			} catch (error) {
				console.log("Failed to initialize data in PieChart :", error);
			}
		};
		initializeData();
	}, []);

	const getDistributionByPeriod = () => {
		switch (period) {
			case statsPeriods.MONTH:
				return distributions.monthly;
			case statsPeriods.YEAR:
				return distributions.yearly;
			case statsPeriods.ALLTIME:
				return distributions.everything;
		}
	}


	return (
		<View>
			<View>
				<Text style={styles.distributionTitle}>Distribution des macroplastiques</Text>
			</View>
			<View style={styles.chartContainer}>
				<PieChart
					data={lastSample ? distributions : getDistributionByPeriod()}
					width={width * CHART_WIDTH_PERCENTAGE}
					height={220}
					chartConfig={{
						backgroundGradientFrom: '#1E2923',
						backgroundGradientTo: '#08130D',
						color: (opacity) => `rgba(26, 255, 146, ${opacity})`,
						strokeWidth: 2,
						hideLegend: true,
					}}
					backgroundColor='transparent'
					accessor="amount"
					paddingLeft={"15"}
					hasLegend={false}
					center={[70, 0]}
				/>
			</View>
			<View>
				<ChartLegend data={lastSample ? distributions : getDistributionByPeriod()} />
			</View>
		</View>
	);
};

