import { genericSampleDataSetter } from './SamplesController';
import cityTypeMapper from '../mappings/Questionnaire/cityTypeMapping';
import binaryTypeMapper from '../mappings/Questionnaire/binaryTypeMapping';
import cleaningFrequencyMapper from '../mappings/Questionnaire/cleaningFrequencyMapping';
import cleaningMethodMapper from '../mappings/Questionnaire/cleaningMethodMapping';
import portTypeMapper from '../mappings/Questionnaire/portTypeMapping';
import cleaningResponsibilityMapper from '../mappings/Questionnaire/cleaningResponsibilityMapping';
import weatherMapping from '../mappings/Questionnaire/weatherTypeMapping';

export async function sendQuestionnaireData(results) {
    const processedData = {};
    results.forEach(item => {
        if (item.id !== undefined && item.answer !== null) {
            processedData[item.id] = item.answer;
        }
    });
    if (processedData.hasOwnProperty('cleaning_responsibility'))
        processedData['cleaning_responsibility'] = cleaningResponsibilityMapper[processedData['cleaning_responsibility']]

    if (processedData.hasOwnProperty('nearest_port_type'))
        processedData['nearest_port_type'] = portTypeMapper[processedData['nearest_port_type']]

    if (processedData.hasOwnProperty('agglomeration_type'))
        processedData['agglomeration_type'] = cityTypeMapper[processedData['agglomeration_type']]

    if (processedData.hasOwnProperty('cleaning_frequency'))
        processedData['cleaning_frequency'] = cleaningFrequencyMapper[processedData['cleaning_frequency']]

    if (processedData.hasOwnProperty('cleaning_method'))
        processedData['cleaning_method'] = cleaningMethodMapper[processedData['cleaning_method']]

    if (processedData.hasOwnProperty('recent_meteo_events'))
        processedData['recent_meteo_events'] = weatherMapping[processedData['recent_meteo_events']]

    if (processedData.hasOwnProperty('cleaning_method'))
        processedData['tide_gauge_presence'] = binaryTypeMapper[processedData['tide_gauge_presence']]

    if (processedData.hasOwnProperty('recent_cleaning'))
        processedData['recent_cleaning'] = binaryTypeMapper[processedData['recent_cleaning']]

    if (processedData.hasOwnProperty('immediate_takeaway_food'))
        processedData['immediate_takeaway_food'] = binaryTypeMapper[processedData['immediate_takeaway_food']]

    if (processedData.hasOwnProperty('immediate_infrastructure'))
        processedData['immediate_infrastructure'] = binaryTypeMapper[processedData['immediate_infrastructure']]

    console.log(processedData);
    genericSampleDataSetter(processedData);
}
