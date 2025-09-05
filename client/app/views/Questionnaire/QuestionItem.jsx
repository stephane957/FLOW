import { React } from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import QuestionnaireAnswer from './QuestionnaireAnswer';
import styles from '../../styles/views.styles';
import { scale } from '../../styles/screen.styles';

export default QuestionItem = (props) => {
  const { currentSection, handleAnswer, toggleModal, dataLength, responses, currentSectionIndex } = props;

  const renderQuestion = (question, index, sectionQuestions) => {

    if (question.depends_on !== undefined) {
      const dependencyQuestion = sectionQuestions[question.depends_on];
      const dependencyAnswer = responses[currentSectionIndex] && responses[currentSectionIndex][dependencyQuestion.question_id];
      if (dependencyAnswer !== dependencyQuestion.dependency_trigger) return null;
    }

    return (
      <View key={index} style={styles.questionContainer}>
        {question.information ? (
          <View style={styles.questionnaireHelpButton}>
            <Text style={[styles.questionnaireHelpText, { flexShrink: 1 }]}>
              {question.text}
            </Text>
            <IconButton
              icon="help-circle-outline"
              color={'rgb(0, 38, 90)'}
              onPress={() => toggleModal(question.information)}
              size={scale(24)}
              style={styles.questionnaireHelpIcon}
            />
          </View>
        ) : (
          <Text style={styles.questionnaireText}>
            {question.text}
          </Text>
        )}

        <QuestionnaireAnswer
          question={question}
          currentSectionIndex={currentSectionIndex}
          handleAnswer={handleAnswer}
          responses={responses}
          index={index}
          dataLength={dataLength}
        />

      </View>
    );
  };

  return (
    <View style={styles.questionnaireContainer}>
      {currentSection.questions.map((question, index) => renderQuestion(question, index, currentSection.questions))}
    </View>
  );
};
