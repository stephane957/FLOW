import { React, useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../styles/views.styles';
import { questionnaireTypes } from '../../constants/enums';
import { Dropdown } from 'react-native-element-dropdown';

export default QuestionnaireAnswer = (props) => {
  const { question, currentSectionIndex, handleAnswer, responses, index, dataLength } = props;
  const [lastClicked, setLastClicked] = useState({ section: null, answer: null });

  const handleButtonClick = (sectionIndex, answer) => {
    setLastClicked({ section: sectionIndex, answer: answer });
  };

  const getButtonStyle = (questionId, answer, buttonStyle) => {
    const isSelected = responses[currentSectionIndex]?.[questionId] === answer;
    return {
      ...buttonStyle,
      backgroundColor: isSelected ? '#232348' : 'transparent',
    };
  };

  const getTextColor = (questionId, answer) => {
    const isSelected = responses[currentSectionIndex]?.[questionId] === answer;
    return isSelected ? 'white' : '#232348';
  };

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  switch (question.answer_type) {
    case questionnaireTypes.BINARY:
      return (
        <View style={styles.buttonsContainer}>
          <Button
            mode="contained"
            onPress={() => {
              handleAnswer(currentSectionIndex, question.answers[0], question.question_id),
                handleButtonClick(currentSectionIndex, question.answers[0])
            }}
            style={getButtonStyle(question.question_id, question.answers[0], styles.questionnaireBinaryButton)}
            textColor={getTextColor(question.question_id, question.answers[0])}
            labelStyle={styles.questionnaireBinaryLabelStyle}
          >
            {question.answers[0]}
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              handleAnswer(currentSectionIndex, question.answers[1], question.question_id),
                handleButtonClick(currentSectionIndex, question.answers[1])
            }}
            style={getButtonStyle(question.question_id, question.answers[1], styles.questionnaireBinaryButton)}
            textColor={getTextColor(question.question_id, question.answers[1])}
            labelStyle={styles.questionnaireBinaryLabelStyle}
          >
            {question.answers[1]}
          </Button>
        </View>
      );
    case questionnaireTypes.TEXTBOX:
      return (
        <TextInput
          style={[styles.questionnaireTextInput, { height: currentSectionIndex === (dataLength - 1) ? 260 : 55 }]}
          onChangeText={(text) => handleAnswer(currentSectionIndex, text, question.question_id)}
          value={responses[currentSectionIndex] ? responses[currentSectionIndex][question.question_id] : ''}
          placeholder={question.placeholder}
          multiline={currentSectionIndex === (dataLength - 1) ? true : false}
          scrollEnabled={true}
        />
      );
    case questionnaireTypes.DROPDOWN:
      return (
        <View style={styles.questionnaireAnswerContainer}>
          <Dropdown
            style={styles.questionnaireAnswerDropdown}
            iconStyle={styles.iconStyle}
            data={question.answers.map((answer) => ({
              label: answer,
              value: answer,
            }))}
            maxHeight={300}
            placeholderStyle={styles.questionnaireAnswerPlaceholderStyle}
            containerStyle={styles.questionnaireAnswerContainerStyle}
            selectedTextStyle={styles.questionnaireAnswerSelectedTextStyle}
            dropdownPosition='bottom'
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Choisissez une option" : '...'}
            value={responses[currentSectionIndex]?.[question.question_id]}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
              handleAnswer(currentSectionIndex, item.value, question.question_id);
            }}
          />
        </View>
      );
    default:
      return null;
  }
};