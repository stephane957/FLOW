import React from 'react';
import { Text } from "react-native";
import { Button } from 'react-native-paper';
import { Link } from "expo-router";
import styles from './RouterButton.styles'

export function RouterButton(props) {
    const defaulText = "Continuer";
    let outputText = props.hasOwnProperty('text') ? props.text : defaulText;
    let outputStyle = buttonMode(props.mode);
    const onPress = props.hasOwnProperty('onPress') ? props.onPress : () => { };
    const params = props.hasOwnProperty('params') ? props.params : {};
    return (
        <Link href={{ pathname: `${props.path}`, params: params }} asChild>
            <Button mode={outputStyle.mode}
                buttonColor={outputStyle.buttonColor}
                style={outputStyle.style}
                contentStyle={outputStyle.contentStyle}
                disabled={props.disabled}
                onPress={onPress}>
                <Text style={outputStyle.textStyle}>
                    {outputText}
                </Text>
            </Button>
        </Link>
    );
}

//function that will contain a switch case to determine the mode of a button, depending on the value of the variable outputMode it will change the style
export function buttonMode(mode) {
    switch (mode) {
        case RouterButtonStyles.onboarding:
            return { mode: "contained", buttonColor: '#232348', style: styles.onboardingButton, contentStyle: {}, textStyle: styles.onboardingButtonText };
        case RouterButtonStyles.frontPage:
            return { mode: "contained", buttonColor: '#232348', style: styles.frontPageStyle, contentStyle: styles.frontPageContentStyle, textStyle: styles.frontPageTextStyle };
        case RouterButtonStyles.inverted:
            return { mode: "contained", buttonColor: '#232348', style: styles.frontPageStyle, contentStyle: styles.buttonInvertedColor, textStyle: styles.textInvertedColor };
        case RouterButtonStyles.questionnaire:
            return { mode: "contained", buttonColor: '#232348', style: styles.questionnaireButton, contentStyle: {}, textStyle: { fontSize: 18 } };
        case RouterButtonStyles.modal:
            return { mode: "contained", buttonColor: '#232348', style: styles.modalButtonStyle, contentStyle: styles.modalButtonStyle, textStyle: styles.textInvertedColor };
        default:
            return { mode: "contained", buttonColor: "#232348", style: styles.button, contentStyle: styles.button, textStyle: styles.text };
    }
}

export const RouterButtonStyles = {
    onboarding: 0,
    frontPage: 1,
    inverted: 2,
    questionnaire: 3,
    modal: 4,
}
