import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from './ServerEndpointController'

const SAMPLE_ENDPOINT = `${BASE_URL}/samples`;
const headerObject = {
    headers: {
        'Content-Type': 'application/json',
    },
};

async function _setSampleID(id) {
    try {
        await AsyncStorage.setItem('sampleid', id);
    } catch (error) {
        console.log("Sample id couldn't be saved : ", error.message)
    }
}

async function _getSampleId() {
    try {
        const id = await AsyncStorage.getItem('sampleid');
        return id;
    } catch (error) {
        console.log("Sample id couldn't be fetched : ", error.message)
    }
}

export async function createSample(data) {
    try {
        const response = await axios.post(SAMPLE_ENDPOINT, data, headerObject);
        if (response.data) {
            _setSampleID(response.data.id);
            return response.data.id
        }
    } catch (error) {
        console.log('Error creating sample', error.message);
    }
}

export async function deleteSample() {
    const id = await _getSampleId();
    try {
        await axios.delete(`${SAMPLE_ENDPOINT}/${id}`, headerObject);
    } catch (error) {
        console.log(`Error deleting sample ${id}`, error.message);
    }
}
export async function setSampleImage(imageBase) {
    const id = await _getSampleId();
    const IMAGE_ENDPOINT = `${BASE_URL}/samples/${id}/upload_image`
    try {
        await axios.post(IMAGE_ENDPOINT, { image: imageBase }, headerObject);
    } catch (error) {
        console.log('Error uploading image', error.message);
    }
}

export async function genericSampleDataSetter(data) {
    const id = await _getSampleId();
    const SAMPLE_ENDPOINT = `${BASE_URL}/samples/${id}`
    try {
        await axios.put(SAMPLE_ENDPOINT, data, headerObject);
    } catch (error) {
        console.log('Error sending data', error.message);
    }
}

export async function genericGroupSampleDataSetter(data) {
    const id = await _getSampleId();
    const SAMPLE_ENDPOINT = `${BASE_URL}/samples/${id}/group/update`
    try {
        await axios.put(SAMPLE_ENDPOINT, data, headerObject);
    } catch (error) {
        console.log('Error sending data', error.message);
    }
}

async function setSampleData(id, data) {
    const SAMPLE_ENDPOINT = `${BASE_URL}/samples/${id}`
    try {
        await axios.put(SAMPLE_ENDPOINT, data, headerObject);
    } catch (error) {
        console.log('Error sending data', error.message);
    }
}

export async function sendPostCollectData(weight) {
    const id = await _getSampleId();
    const data = {
        "macro_weight": weight
    }
    setSampleData(id, data);
}

export async function sendCollectedMacroplastics(plastics) {
    const data = {
        "macros": plastics.map(item => ({
            "object_row": item.id,
            "amount": item.amount
        }),
        )
    }
    genericGroupSampleDataSetter(data);
}

export async function sendCollectedMicroplastics(plastics) {
    const mesos = plastics.filter(obj => obj.size >= 5 && obj.size <= 25);
    const micros = plastics.filter(obj => obj.size < 5);

    const data = {
        "micros": micros.map(item => ({
            "type": item.mappings.types.type,
            "quadra_1": item.count,
            "category": item.mappings.types.category,
            "color": item.mappings.colorid,
            "texture": item.mappings.textureid
        })),
        "mesos": mesos.map(item => ({
            "quadra_1": item.count,
            "type": item.mappings.types.type,
            "category": item.mappings.types.category,
            "color": item.mappings.colorid,
            "texture": item.mappings.textureid
        }))
    }
    genericGroupSampleDataSetter(data);
}

export async function validateSampleExistence(uuid) {
    try {
        const resp = await axios.get(`${SAMPLE_ENDPOINT}/${uuid}`);
        if (resp.data)
            return true;
    } catch (e) {
        return false;
    }
    return false;
}
