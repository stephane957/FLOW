import { BASE_URL } from "./ServerEndpointController";
import axios from 'axios';
export async function getPollutionData() {
    try {
        const data = await axios.get(`${BASE_URL}/pollution`);
        return data.data;
    }
    catch (e) {
        console.log('Pollution data could not be fetched', e);
    }
}
