import { React, useEffect, useState } from 'react';
import { ApiServices } from '../../controllers/SummaryController';
import { View } from 'react-native';
import DateLocationCard from './DateLocationCard';
import { formatDate, formatTime } from '../../(navbar)/Statistics/StatsUtils';

export default InfoCardWrapper = (props) => {
    const { userID } = props;
    const fetchingText = "Chargement...";

    const [infoSampling, setInfoSampling] = useState({
        date: fetchingText,
        time: fetchingText,
        location: fetchingText,
        locationName: fetchingText,
    })


    useEffect(() => {
        const initializeData = async () => {
            try {
                const responses = await Promise.all([
                    ApiServices.getLastSampleGenInfo(userID),
                ]);
                setInfoSampling({
                    date: formatDate(responses[0].data.sample_date),
                    time: formatTime(responses[0].data.sample_time),
                    location: responses[0].data.site_location !== null ? responses[0].data.site_location : fetchingText,
                    locationName: responses[0].data.river_name !== null ? responses[0].data.river_name : fetchingText,
                });
            } catch (error) {
                console.log("Failed to initialize data in InfoCard Wrapper:", error);
            }
        };
        initializeData();
    }, []);


    return (
        <View>
            <DateLocationCard
                date={infoSampling.date}
                time={infoSampling.time}
                location={infoSampling.location}
                locationName={infoSampling.locationName}
            />
        </View>
    );
};
