import { React, useState, useEffect } from 'react';
import { View, Text, Modal } from 'react-native';
import { IconButton } from 'react-native-paper';
import { scale } from '../../styles/screen.styles';
import QuestionItem from './QuestionItem';
import styles from '../../styles/views.styles';
import { sendQuestionnaireData } from '../../controllers/QuestionnaireController';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { ScrollView } from 'react-native-gesture-handler';
import { Redirect } from 'expo-router';
import getAllApiResponses from '../../controllers/QuestionnaireAPICalls';
import questionnaireFR from '../../locales/french/questionnaireFR.json';

export default function Questionnaire() {
  const [responses, setResponses] = useState({});
  const [questionnaireData, setQuestionnaireData] = useState([]);
  const [apiResponses, setApiResponses] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const data = questionnaireFR.sections;
  const currentSection = data[currentSectionIndex];
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [routing, setRouting] = useState(false);

  useEffect(() => {
    async function callApi() {
      setApiResponses(await getAllApiResponses());
    }
    callApi();
  }, [])

  const toggleModal = (content = '') => {
    setModalContent(content);
    setModalVisible(!modalVisible);
  };

  const handleNextSection = () => {
    if (currentSectionIndex < data.length - 1)
      setCurrentSectionIndex(currentSectionIndex + 1);
  };

  const handlePrevSection = () => {
    if (currentSectionIndex > 0)
      setCurrentSectionIndex(currentSectionIndex - 1);
  };

  const handleCompletion = async () => {
    await sendQuestionnaireData([...questionnaireData, ...apiResponses]);
    setRouting(true);
  };

  if (routing) {
    return <Redirect replace href={{ pathname: '../PostSampling/Celebration/' }} />;
  };

  const onStepChange = (step) => {
    setCurrentSectionIndex(step);
  };

  const handleAnswer = (sectionIndex, answer, question_id) => {
    const sectionKey = sectionIndex;
    setResponses({
      ...responses,
      [sectionKey]: {
        ...responses[sectionKey],
        [question_id]: answer,
      },
    });

    setQuestionnaireData((prevQuestionnaireData) => {
      const dataCopy = [...prevQuestionnaireData];
      const existingIndex = dataCopy.findIndex((item) => item.id === question_id);

      if (existingIndex !== -1) {
        dataCopy[existingIndex] = { id: question_id, answer: answer };
      } else {
        dataCopy.push({ id: question_id, answer: answer });
      }
      return dataCopy;
    });
  };

  return (
    <View style={{ flex: 1, marginTop: 25 }}>
      <ProgressSteps
        marginBottom={30}
        activeStepIconBorderColor='#232348'
        disabledStepIconColor='#232348'
        progressBarColor='#232348'
        activeLabelColor='#232348'
        labelColor='transparent'
        borderWidth={4}
        activeStep={currentSectionIndex}
        onStepChange={onStepChange}>
        {data.map((section, index) => (
          <ProgressStep
            scrollViewProps={ScrollView}
            key={index}
            label={section.title}
            onNext={() => handleNextSection(index)}
            onPrevious={() => handlePrevSection(index)}
            nextBtnStyle={styles.progressButtonStyle}
            previousBtnStyle={index > 0 ? styles.progressButtonStyle : null}
            nextBtnTextStyle={styles.progressButtonText}
            previousBtnTextStyle={styles.progressButtonText}
            nextBtnText="Suivant"
            previousBtnText="Précédent"
            finishBtnText="Compléter"
            isCompleteButton={index === data.length - 1}
            onSubmit={handleCompletion}
          >
            <QuestionItem
              currentSection={currentSection}
              handleAnswer={handleAnswer}
              toggleModal={toggleModal}
              dataLength={data.length}
              responses={responses}
              currentSectionIndex={currentSectionIndex}
            />
            <Modal visible={modalVisible}>
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <View style={styles.modalHeader}>
                    <IconButton icon="close-circle-outline" size={scale(30)} onPress={() => setModalVisible(false)} style={styles.closeButtonIcon} />
                  </View>
                  <View style={styles.modalContent}>
                    {Array.isArray(modalContent) ? modalContent.map((item, index) => (
                      <Text style={styles.modalText} key={index}>{item.trim()}</Text>
                    )) : (
                      <Text style={styles.modalText}>{String(modalContent)}</Text>
                    )}
                  </View>
                </View>
              </View>
            </Modal>
          </ProgressStep>
        ))}
      </ProgressSteps>
    </View>
  );
}