import { TIDE_DATA_ENDPOINT } from "./ServerEndpointController";
import axios from 'axios';
export async function getTideData(latitude, longitude) {
    try {
        const response = await axios.get(`${TIDE_DATA_ENDPOINT}`, { params: { lat: latitude, lng: longitude } });
        const tideEvents = response.data.data;
        const lowTide = tideEvents.find(event => event.type === 'low');
        const highTide = tideEvents.find(event => event.type === 'high');
        return { lowTide, highTide };
    }
    catch (e) {
        console.log('Tide data could not be fetched', e);
    }
}