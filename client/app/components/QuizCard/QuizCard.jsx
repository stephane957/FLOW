import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/views.styles';
import wave_quiz from '../../assets/images/wave_quiz.jpg';

const QuizCard = ({ card, quizFinished, passedQuiz, correctAnswers, totalCards }) => {

    if (card && !quizFinished) {
        return (
            <View key={card.id} style={styles.quizCard}>
                <Image source={card.photoUrl} style={styles.quizCardImage} />

                <View style={styles.quizCardDescription}>
                    <View>
                        <Text style={styles.quizCardProposition}>{card.propositon}</Text>
                        <Text style={styles.quiz}>{card.type} - {card.macroOrMicro}</Text>
                    </View>
                </View>
            </View>
        );
    }
    if (card && quizFinished) {
        if (passedQuiz) {
            return (
                <View style={styles.quizEndingCard}>
                    <Text style={styles.quizCardProposition}>Félicitations! Tu as {correctAnswers} réponses sur {totalCards} correctes!</Text>
                    <Image source={wave_quiz} resizeMode='contain' resizeMethod='resize' style={styles.quizEndingCardImage} />
                </View>
            );
        } else {
            return (
                <View style={styles.quizEndingCard}>
                    <Text style={styles.quizCardProposition}>Tu as {correctAnswers} réponses sur {totalCards} correctes.</Text>
                    <Image source={wave_quiz} resizeMode='contain' resizeMethod='resize' style={styles.quizEndingCardImage} />
                </View>
            );
        }
    }
};

export default QuizCard;
