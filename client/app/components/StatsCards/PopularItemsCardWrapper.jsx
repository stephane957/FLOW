import { React, useEffect, useState } from 'react';
import { statsTypes } from '../../constants/enums';
import { statsPeriods } from '../../constants/enums';
import { ApiServices } from '../../controllers/SummaryController';
import { View } from 'react-native';
import PopularItemsCard from './PopularItemsCard';
import { getNameByType, getNameByTypeAndLanguage, PopularModes } from '../../(navbar)/Statistics/StatsUtils';

export default PopularItemsCardWrapper = (props) => {
    const { mode, type, period, userID, lastSample, language } = props;
    const fetchingText = "Chargement...";

    const placeHolder = [
        { name: fetchingText, number: 0 },
        { name: fetchingText, number: 0 },
        { name: fetchingText, number: 0 }
    ]

    const [popularItems, setPopularItems] = lastSample ?
        useState(placeHolder) :
        useState({
            monthly: { avg: placeHolder, total: placeHolder },
            yearly: { avg: placeHolder, total: placeHolder },
            everything: { avg: placeHolder, total: placeHolder },
        });

    useEffect(() => {
        const initializeData = async () => {
            try {
                let responses = []
                if (mode == PopularModes.macro) {
                    responses = lastSample ?
                        await Promise.all([
                            ApiServices.getLastSampleMacroPopular(userID),
                        ]) :
                        await Promise.all([
                            ApiServices.getMonthlyPopularMacros(userID),
                            ApiServices.getYearlyPopularMacros(userID),
                            ApiServices.getEveythingPopularMacros(userID),
                        ]);
                } else {
                    responses = lastSample ?
                        await Promise.all([
                            ApiServices.getLastSampleMicroPopular(userID),
                        ]) :
                        await Promise.all([
                            ApiServices.getMonthlyPopularMicros(userID),
                            ApiServices.getYearlyPopularMicros(userID),
                            ApiServices.getEveythingPopularMicros(userID),
                        ]);
                }

                if (lastSample) {
                    setPopularItems(responses[0].data.map((item) => ({
                        name: mode == PopularModes.macro ? getNameByType(item.object_row) : getNameByTypeAndLanguage(item.micro_type_ordinal, language),
                        number: item.total_count.toFixed(2),
                    })));
                } else {
                    setPopularItems({
                        monthly: {
                            avg: adaptDataForPopularItemAvg(responses[0].data),
                            total: adaptDataForPopularItemTotal(responses[0].data)
                        },

                        yearly: {
                            avg: adaptDataForPopularItemAvg(responses[1].data),
                            total: adaptDataForPopularItemTotal(responses[1].data)
                        },

                        everything: {
                            avg: adaptDataForPopularItemAvg(responses[2].data),
                            total: adaptDataForPopularItemTotal(responses[2].data)
                        },
                    });
                }
            } catch (error) {
                console.log("Failed to initialize data in PopularItemsCardWrapper:", error);
            }
        };
        initializeData();
    }, []);

    const adaptDataForPopularItemAvg = (data) => {
        return data.map(item => ({
            name: mode == PopularModes.macro ? getNameByType(item.item_type) : getNameByTypeAndLanguage(item.micro_type_ordinal, language),
            number: item.average_amount.toFixed(2),
        }));
    }
    const adaptDataForPopularItemTotal = (data) => {
        return data.map(item => ({
            name: mode == PopularModes.macro ? getNameByType(item.item_type) : getNameByTypeAndLanguage(item.micro_type_ordinal, language),
            number: item.total_amount.toFixed(2),
        }));
    }

    const getItemsByPeriod = () => {
        switch (period) {
            case statsPeriods.MONTH:
                return popularItems.monthly;
            case statsPeriods.YEAR:
                return popularItems.yearly;
            case statsPeriods.ALLTIME:
                return popularItems.everything;
        }
    }

    return (
        <View>
            {lastSample ?
                <PopularItemsCard
                    items={popularItems}
                    mode={mode}
                />
                :
                <PopularItemsCard
                    items={type == statsTypes.AVG ? getItemsByPeriod().avg : getItemsByPeriod().total}
                    mode={mode}
                />
            }
        </View>
    );
};
