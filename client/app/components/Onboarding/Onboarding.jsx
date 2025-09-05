import { React, useRef, useState } from "react";
import { View, FlatList, Animated } from "react-native";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import styles from './onboarding.styles';

export default function Onboarding({ sendDataToPage, slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    function scrollTo() {
        sendDataToPage(currentIndex);
    }
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const slidesRef = useRef(null);

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    function onScrollEvent(event) {
        scrollTo();
        Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
        })(event);
    };

    return (

        <View style={styles.container}>
            <View style={styles.viewTutorialInformation}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}

                    onScroll={(event) => onScrollEvent(event)}

                    scrollEventThrottle={1}
                    onViewableItemsChanged={viewableItemsChanged}
                    ref={slidesRef}
                    viewabilityConfig={viewConfig}
                />
            </View>
            <View style={styles.viewTutorialSlider}>
                <Paginator data={slides} scrollX={scrollX} />
            </View>
        </View>
    );
};