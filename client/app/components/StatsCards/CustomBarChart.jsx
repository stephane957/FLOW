import { React, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { width } from '../../styles/screen.styles';
import styles from '../../styles/views.styles';
import { ApiServices } from '../../controllers/SummaryController';
import { statsPeriods } from '../../constants/enums';
import { BarChart } from 'react-native-chart-kit';
import { monthsList } from '../../(navbar)/Statistics/StatsUtils';

export default CustomBarChart = (props) => {
	const CHART_WIDTH_PERCENTAGE = 0.85;
	const { period, userID } = props;
	const line = {
		labels: [],
		datasets: [
			{
				data: []
			},
		],
	};
	const [sampleCounts, setSampleCounts] = useState({
		monthly: line,
		yearly: line,
		everything: line,
	});
	const barChartConfig = {
		backgroundColor: 'transparent',
		backgroundGradientFrom: '#FFF',
		backgroundGradientTo: '#FFF',
		fillShadowGradientFrom: '#00265A',
		fillShadowGradientFromOpacity: 1,
		fillShadowGradientTo: '#00265A',
		fillShadowGradientToOpacity: 1,
		decimalPlaces: 1,
		barPercentage: 0.5,
		barRadius: 5,
		propsForBackgroundLines: {
			stroke: '#FFF'
		},
		color: (opacity) => `rgba(0, 38, 90, ${0.7})`
	}

	useEffect(() => {
		const initializeData = async () => {
			try {
				const responses = await Promise.all([
					ApiServices.getMonthlySamplesCountPerDay(userID),
					ApiServices.getYearlySamplesCountPerMonth(userID),
					ApiServices.getEverythingSamplesCountPerYear(userID)
				]);

				setSampleCounts({
					monthly: adaptDataForSampleCounts(responses[0].data, statsPeriods.MONTH),
					yearly: adaptDataForSampleCounts(responses[1].data, statsPeriods.YEAR),
					everything: adaptDataForSampleCounts(responses[2].data, statsPeriods.ALLTIME)
				});

			} catch (error) {
				console.log("Failed to initialize data in BarChart :", error);
			}
		};
		initializeData();
	}, []);

	const adaptDataForSampleCounts = (data, period) => {
		const labelsList = [];
		const datasetsList = [{ data: [] }];

		switch (period) {
			case statsPeriods.MONTH:
				data.forEach(item => {
					labelsList.push(item.day);
					datasetsList[0].data.push(item.total_samples);
				});
				break;
			case statsPeriods.YEAR:
				data.forEach(item => {
					labelsList.push(monthsList[item.month - 1]);
					datasetsList[0].data.push(item.total_samples);
				});
				break;
			case statsPeriods.ALLTIME:
				data.forEach(item => {
					labelsList.push(item.year);
					datasetsList[0].data.push(item.total_samples);
				});
				break;
		}

		const res = { labels: labelsList, datasets: datasetsList }
		return res;
	}

	const getSampleCountByPeriod = () => {
		switch (period) {
			case statsPeriods.MONTH:
				return sampleCounts.monthly;
			case statsPeriods.YEAR:
				return sampleCounts.yearly;
			case statsPeriods.ALLTIME:
				return sampleCounts.everything;
		}
	}

	return (
		<View>
			<Text style={styles.samplingNumTitle}>Nombre de collectes</Text>
			<BarChart
				data={getSampleCountByPeriod()}
				width={width * CHART_WIDTH_PERCENTAGE}
				height={250}
				showBarTops={false}
				showValuesOnTopOfBars={true}
				fromZero={true}
				segments={4}
				chartConfig={barChartConfig}
				style={styles.barChart}
			/>
		</View>
	);
};

