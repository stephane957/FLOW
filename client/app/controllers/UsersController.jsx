import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from './ServerEndpointController';

const headerObject = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export async function getUserId() {
    try {
        const id = await AsyncStorage.getItem('userid');
        return id;
    } catch (error) {
        console.log("Failed to retrieve user ID:", error);
    }
}

export async function getUsername() {
    try {
        const userName = await AsyncStorage.getItem('username');
        return userName;
    } catch (error) {
        console.log("Failed to retrieve username:", error);
    }
}

export async function deleteUser() {
    const id = await AsyncStorage.getItem('userid');
    const USER_ENDPOINT = `${BASE_URL}/users/${id}`;
    try {
        await axios.delete(USER_ENDPOINT, headerObject);
    } catch (error) {
        console.warn(`Failed to delete user: ${id}`, error.message);
    }
}

export async function getUserAvatar() {
    try {
        const userAvatar = await AsyncStorage.getItem('image_url');
        return userAvatar;
    } catch (error) {
        console.log("Failed to retrieve user avatar:", error);
    }
}

export async function getMacroTutorialSwitch() {
    try {
        const macroTutorial = await AsyncStorage.getItem('macro_tutoriel');
        return macroTutorial;
    } catch (error) {
        console.log("Failed to retrieve tutorial switch:", error.message);
    }
}

export async function getMicroTutorialSwitch() {
    try {
        const microTutorial = await AsyncStorage.getItem('micro_tutoriel');
        return microTutorial;
    } catch (error) {
        console.log("Failed to retrieve tutorial switch:", error.message);
    }
}

export async function getMaterialsSwitch() {
    try {
        const materials = await AsyncStorage.getItem('materials');
        return materials;
    } catch (error) {
        console.log("Failed to retrieve materials switch:", error.message);
    }
}

export async function getDateInscription() {
    const id = await getUserId();
    const USER_ENDPOINT = `${BASE_URL}/users/id/${id}`;
    try {
        const response = await axios.get(USER_ENDPOINT, headerObject);
        console.log("Date inscription retrieved successfully: ", response.data.date_inscription);
        return response.data.date_inscription;
    } catch (error) {
        console.error("Failed to retrieve date inscription:", error.message);
    }
}

export async function setSwitches(userUpdate) {
    const userId = await getUserId();
    const USER_ENDPOINT = `${BASE_URL}/users/${userId}`;
    try {
        const response = await axios.put(USER_ENDPOINT, userUpdate, headerObject);
        if (response.status === 200) {
            console.log("Switches states updated successfully");
        }
    } catch (error) {
        console.error("Error sending switches information.", error.message);
    }
}

export async function saveSwitches() {
    const macro_tutorial = JSON.parse(await getMacroTutorialSwitch());
    const micro_tutorial = JSON.parse(await getMicroTutorialSwitch());
    const materials = JSON.parse(await getMaterialsSwitch());
    const userUpdate = {
        'macro_tutoriel': macro_tutorial,
        'micro_tutoriel': micro_tutorial,
        'materials': materials
    }
    setSwitches(userUpdate);
}