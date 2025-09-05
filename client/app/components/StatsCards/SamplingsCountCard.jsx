import { React, useEffect, useState } from 'react';
import GenericCard from './PolyvalentCard';
import { statsPeriods } from '../../constants/enums';
import { ApiServices } from '../../controllers/SummaryController';
import { View } from 'react-native';

export default SamplingsCountCard = (props) => {
    const { period, userID } = props;
    const [sampleCounts, setSampleCounts] = useState({
        monthly: "...",
        yearly: "...",
        everything: "...",
    });

    useEffect(() => {
        const initializeData = async () => {
            try {
                const responses = await Promise.all([
                    ApiServices.getMonthlySamplesCountPerDay(userID),
                    ApiServices.getYearlySamplesCountPerMonth(userID),
                    ApiServices.getEverythingSamplesCountPerYear(userID),
                ]);
                setSampleCounts({
                    monthly: sumSampleCounts(responses[0].data),
                    yearly: sumSampleCounts(responses[1].data),
                    everything: sumSampleCounts(responses[2].data),
                });

            } catch (error) {
                console.log("Failed to initialize data in sample card:", error);
            }
        };
        initializeData();
    }, []);

    const sumSampleCounts = (data) => {
        let count = 0;
        data.forEach(sample => {
            count += sample.total_samples;
        });

        return count
    }

    const getCountByPeriod = () => {
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
            <GenericCard
                title="Nombre de collectes"
                logo="note"
                value={getCountByPeriod()}
                metric="Coll."
            />
        </View>
    );
};
