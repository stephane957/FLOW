import { React, useRef, useState } from 'react';
import { View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';
import { router } from 'expo-router';
import { Linking } from 'react-native';
import styles from '../../styles/views.styles';
import navbarStyles from '../../styles/navbar.styles';
import { scale } from '../../styles/screen.styles';
import QuizCard from '../../components/QuizCard/QuizCard';
import { QUIZ_DATA } from '../../constants/object_lists';

export default function Quiz() {

    const swipeRef = useRef(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalCards, setTotalCards] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [passedQuiz, setPassedQuiz] = useState(false);
    const handleSwipe = (cardIndex, isRight) => {
        const currentAnswer = QUIZ_DATA[cardIndex].answer;

        if (isRight && currentAnswer === QUIZ_DATA[cardIndex].propositon) {
            setCorrectAnswers(correctAnswers + 1);
        }
        if (!isRight && currentAnswer !== QUIZ_DATA[cardIndex].propositon) {
            setCorrectAnswers(correctAnswers + 1);
        }

        setTotalCards(totalCards => totalCards + 1);
    };

    const handleEndOfQuiz = () => {
        const percentageCorrect = (correctAnswers / totalCards) * 100;
        const passed = percentageCorrect >= 80;
        setPassedQuiz(passed);
        setQuizFinished(true);
    };

    return (
        <View style={navbarStyles.view}>
            <View style={styles.quizHeaderView}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.arrowBackQuiz}>
                        <IconButton icon="arrow-left" onPress={() => router.back()} iconColor={'rgb(0, 38, 90)'} size={scale(30)} />
                    </View>
                    <Text style={styles.quizTitle}>Quiz d'Identification</Text>
                </View>
            </View>

            <View style={styles.quizPageContainer}>

                {/* Cards */}
                {!quizFinished && <View style={styles.quizCardContainer}>
                    <Swiper
                        ref={swipeRef}
                        containerStyle={{ backgroundColor: 'transparent' }}
                        stackSize={3}
                        cardIndex={0}
                        animatedCardOpacity
                        verticalSwipe={false}
                        onSwipedLeft={totalCards === QUIZ_DATA.length - 1 ? handleEndOfQuiz : (cardIndex) => handleSwipe(cardIndex, false)}
                        onSwipedRight={totalCards === QUIZ_DATA.length - 1 ? handleEndOfQuiz : (cardIndex) => handleSwipe(cardIndex, true)}
                        cards={QUIZ_DATA}
                        overlayLabels={{
                            left: {
                                title: "FALSE",
                                style: styles.overLayLabelLeft,
                            },
                            right: {
                                title: "TRUE",
                                style: styles.overLayLabelRight,
                            },
                        }}
                        renderCard={(quizCard) => <QuizCard card={quizCard} quizFinished={quizFinished} passedQuiz={passedQuiz} correctAnswers={correctAnswers} totalCards={totalCards} />}
                    >
                    </Swiper>
                </View>}

                {!quizFinished && (
                    <View style={styles.quizFooter}>
                        <Text style={styles.quizFooterText}>Le plastique est-il correctement identifié ?</Text>
                    </View>
                )}

                {!quizFinished && (
                    <View style={styles.swipeButtonsContainer}>
                        <TouchableOpacity style={styles.swipeButtonLeft}
                            onPress={() => swipeRef.current?.swipeLeft()}>
                            <IconButton icon="close" iconColor={'red'} size={scale(24)} onPress={() => swipeRef.current.swipeRight} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.swipeButtonRight}
                            onPress={() => swipeRef.current?.swipeRight()}>
                            <IconButton icon="check" iconColor={'green'} size={scale(24)} onPress={() => swipeRef.current.swipeRight} />
                        </TouchableOpacity>
                    </View>
                )}
                {quizFinished && (
                    <View style={{ height: '100%' }}>
                        <View style={{ height: '70%' }}>
                            <QuizCard card={{}} quizFinished={quizFinished} passedQuiz={passedQuiz} correctAnswers={correctAnswers} totalCards={totalCards} />
                        </View>
                        <View style={{ height: '30%', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com/drive/folders/17C06I9Tx-3UKrcSFdN4U9ccl0feMsIoj')}>
                                <Text style={styles.quizButtonText}>Allez au guide</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
}