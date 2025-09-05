import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GOOGLE_API_KEY } from './ServerEndpointController';


export default getAllApiResponses = async () => {
    const latitude = await AsyncStorage.getItem('latitude');
    const longitude = await AsyncStorage.getItem('longitude');
    const responses = []
    responses.push(await fetchNearestUrbanArea(latitude, longitude));
    responses.push(await fetchNearbyFacilities(latitude, longitude));
    responses.push(await fetchTakeawayFoodShops(latitude, longitude));
    responses.push(await fetchNearestPort(latitude, longitude));
    responses.push(await fetchNearestEstuary(latitude, longitude));
    responses.push(await fetchNearestRiver(latitude, longitude));
    responses.push(await fetchNearestWasteFacility(latitude, longitude));
    return responses.flat();
}

const fetchNearestUrbanArea = async (latitude, longitude) => {
    const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&type=locality&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(placesUrl);
        if (response.data.results && response.data.results.length > 0) {
            const nearestUrbanArea = response.data.results.find(result => result.geometry && result.geometry.location);
            if (!nearestUrbanArea) {
                return [{ id: 'nearest_agglomeration', answer: null }, { id: 'agglomeration_distance', answer: null }]
            }
            const urbanAreaName = nearestUrbanArea.name;
            const urbanAreaLocation = nearestUrbanArea.geometry.location;
            const distance = await calculateDistance(latitude, longitude, urbanAreaLocation.lat, urbanAreaLocation.lng, GOOGLE_API_KEY);
            return [{ id: 'nearest_agglomeration', answer: urbanAreaName }, { id: 'agglomeration_distance', answer: distance }]
        }
        return [{ id: 'nearest_agglomeration', answer: null }, { id: 'agglomeration_distance', answer: null }]

    } catch (error) {
        console.error('Error fetching nearest urban area:', error);
    }
};

const fetchNearbyFacilities = async (latitude, longitude) => {
    const facilitiesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=point_of_interest&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(facilitiesUrl);
        if (response.data.results && response.data.results.length > 0) {
            return { id: 'immediate_infrastructure', answer: 'Yes' }
        }
        return { id: 'immediate_infrastructure', answer: 'No' }

    } catch (error) {
        console.error('Error fetching nearby facilities:', error);
    }
};

const fetchTakeawayFoodShops = async (latitude, longitude) => {
    const takeawayUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=restaurant&keyword=takeaway&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(takeawayUrl);
        if (response.data.results && response.data.results.length > 0) {
            return { id: 'immediate_takeaway_food', answer: 'Yes' }
        }
        return { id: 'immediate_takeaway_food', answer: 'No' }

    } catch (error) {
        console.error('Error fetching takeaway food shops:', error);
    }
};

const fetchNearestPort = async (latitude, longitude) => {
    const portUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&keyword=port+plaisance+peche+touriste+&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(portUrl);
        if (response.data.results && response.data.results.length > 0) {
            const nearestPort = response.data.results[0];
            return [{ id: 'nearest_port_name', answer: nearestPort.name }, { id: 'nearest_port_type', answer: nearestPort.types.length > 1 ? nearestPort.types[0] : nearestPort.types }];
        }
        return [{ id: 'nearest_port_name', answer: null }, { id: 'nearest_port_type', answer: null }];

    } catch (error) {
        console.error('Error fetching the nearest port:', error);
    }
};

const fetchNearestEstuary = async (latitude, longitude) => {
    const estuaryUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&keyword=estuaire+estuary&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(estuaryUrl);
        if (response.data.results && response.data.results.length > 0) {
            const nearestEstuary = response.data.results[0];
            const estuaryLocation = nearestEstuary.geometry.location;
            const distance = await calculateDistance(latitude, longitude, estuaryLocation.lat, estuaryLocation.lng, GOOGLE_API_KEY);
            return [{ id: 'nearest_estuary_name', answer: nearestEstuary.name }, { id: 'nearest_estuary_distance', answer: distance }];
        }
        return [{ id: 'nearest_estuary_name', answer: null }, { id: 'nearest_estuary_distance', answer: null }];

    } catch (error) {
        console.error('Error fetching the nearest estuary:', error);
    }
};

const fetchNearestRiver = async (latitude, longitude) => {
    const riverUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&keyword=river+riviere&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(riverUrl);
        if (response.data.results && response.data.results.length > 0) {
            const nearestRiver = response.data.results[0];
            return { id: 'nearest_river_name', answer: nearestRiver.name };
        }
        return { id: 'nearest_river_name', answer: null };

    } catch (error) {
        console.error('Error fetching the nearest estuary:', error);
    }
};


const fetchNearestWasteFacility = async (latitude, longitude) => {
    const wasteFacilityUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&keyword=decharge+waste&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(wasteFacilityUrl);
        if (response.data.results && response.data.results.length > 0) {
            const nearestWasteFacility = response.data.results[0];
            const facilityLocation = nearestWasteFacility.geometry.location;
            const distance = await calculateDistance(latitude, longitude, facilityLocation.lat, facilityLocation.lng, GOOGLE_API_KEY);
            return [{ id: 'waste_disposal_distance', answer: distance }];
        }
        return [{ id: 'waste_disposal_distance', answer: null }];

    } catch (error) {
        console.error('Error fetching the nearest waste facility:', error);
    }
};

const calculateDistance = async (originLat, originLng, destinationLat, destinationLng, apiKey) => {
    const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${originLat},${originLng}&destination=${destinationLat},${destinationLng}&key=${apiKey}`;
    try {
        const response = await axios.get(directionsUrl);
        if (response.data.routes && response.data.routes.length > 0) {
            const distance = response.data.routes[0].legs[0].distance.text;
            return extractNumber(distance);
        }
    } catch (error) {
        console.error('Error calculating distance:', error);
    }
};

function extractNumber(inputString) {

    var pattern = /(\d+\.\d+|\d+)/;
    var match = inputString.match(pattern);

    if (match) {
        return JSON.parse(match[0]);
    } else {
        return 9999;
    }
}