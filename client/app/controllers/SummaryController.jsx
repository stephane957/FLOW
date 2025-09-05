import axios from 'axios';
import { BASE_URL } from './ServerEndpointController'

const LASTSAMPLE_ENDPOINT = `${BASE_URL}/lastsample/`;
const SAMPLES_ENDPOINT = `${BASE_URL}/samples/`;
const MACROS_ENDPOINT = `${BASE_URL}/macros/`;
const MICROS_ENDPOINT = `${BASE_URL}/micros/`;


export const ApiServices = {
    getLastSampleGenInfo: function (userId) {
        return axios.get(`${LASTSAMPLE_ENDPOINT}info/${userId}`);
    },

    getLastSampleInfoCard: function (userId) {
        return axios.get(`${LASTSAMPLE_ENDPOINT}macros/weight/${userId}`);
    },

    getLastSampleMicroPopular: function (userId) {
        return axios.get(`${LASTSAMPLE_ENDPOINT}micros/popular/${userId}`);
    },

    getLastSampleMacroPopular: function (userId) {
        return axios.get(`${LASTSAMPLE_ENDPOINT}macros/popular/${userId}`);
    },

    getLastSampleDistribution: function (userId) {
        return axios.get(`${LASTSAMPLE_ENDPOINT}macros/distribution/${userId}`);
    },


    // METHODS FOR STATS VIEW PAGE: EVERY STAT RETURN AVG AND TOTAL
    getMonthlyMacroWeight: function (userId) {
        return axios.get(`${SAMPLES_ENDPOINT}stats/month/macrosweight/${userId}`);
    },

    getMonthlyPopularMacros: function (userId) {
        return axios.get(`${MACROS_ENDPOINT}stats/month/popular/${userId}`);
    },

    getMonthlyPopularMicros: function (userId) {
        return axios.get(`${MICROS_ENDPOINT}stats/month/popular/${userId}`);
    },

    getMonthlyDistribution: function (userId) {
        return axios.get(`${SAMPLES_ENDPOINT}stats/month/distribution/${userId}`);
    },

    getMonthlyMacroPieChart: function (userId) {
        return axios.get(`${MACROS_ENDPOINT}stats/month/distribution/piechart/${userId}`);
    },

    getMonthlySamplesCountPerDay: function (userId) {
        return axios.get(`${SAMPLES_ENDPOINT}stats/month/samples/${userId}`);
    },

    getYearlyMacroWeight: function (userId) {
        return axios.get(`${SAMPLES_ENDPOINT}stats/year/macrosweight/${userId}`);
    },

    getYearlyPopularMacros: function (userId) {
        return axios.get(`${MACROS_ENDPOINT}stats/year/popular/${userId}`);
    },

    getYearlyPopularMicros: function (userId) {
        return axios.get(`${MICROS_ENDPOINT}stats/year/popular/${userId}`);
    },

    getYearlyDistribution: function (userId) {
        return axios.get(`${SAMPLES_ENDPOINT}stats/year/distribution/${userId}`);
    },

    getYearlyMacroPieChart: function (userId) {
        return axios.get(`${MACROS_ENDPOINT}stats/year/distribution/piechart/${userId}`);
    },

    getYearlySamplesCountPerMonth: function (userId) {
        return axios.get(`${SAMPLES_ENDPOINT}stats/year/samples/${userId}`);
    },

    getEverythingMacroWeight: function (userId) {
        return axios.get(`${SAMPLES_ENDPOINT}stats/ever/macrosweight/${userId}`);
    },

    getEveythingPopularMacros: function (userId) {
        return axios.get(`${MACROS_ENDPOINT}stats/ever/popular/${userId}`);
    },

    getEveythingPopularMicros: function (userId) {
        return axios.get(`${MICROS_ENDPOINT}stats/ever/popular/${userId}`);
    },

    getEverythingPopularDistribution: function (userId) {
        return axios.get(`${SAMPLES_ENDPOINT}stats/ever/distribution/${userId}`);
    },

    getEverythingMacroPieChart: function (userId) {
        return axios.get(`${MACROS_ENDPOINT}stats/ever/distribution/piechart/${userId}`);
    },

    getEverythingSamplesCountPerYear: function (userId) {
        return axios.get(`${SAMPLES_ENDPOINT}stats/ever/samples/${userId}`);
    }
};
