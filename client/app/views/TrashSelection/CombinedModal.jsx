import { React, useState } from 'react';
import { View } from 'react-native';
import styles from '../../styles/views.styles';
import RNModal from 'react-native-modal';
import { width, height } from '../../styles/screen.styles';
import MicroTrashCategorySelection from './Microplastics/MicroTrashCategorySelection';
import MicroTrashSelection from './Microplastics/MicroTrashSelection';
import MicroDetails from './Microplastics/MicroDetails';
import TrashCategorySelection from './Macroplastics/TrashCategorySelection';
import TrashSelection from './Macroplastics/TrashSelection';
import { macrosubcategories, microsubcategories } from '../../(navbar)/Settings/index';
import { modalOptions } from '../../constants/enums';

export default function CombinedModal(props) {

    const { onClose, setList, display, setDisplay, trashList, isVisible } = props

    const [optionList, setOptions] = useState([]);
    const [selectedElement, setSelectedElement] = useState('');
    const [categoryName, setCategoryName] = useState('');

    const onSetCategory = (category, displayNum) => {
        if (displayNum === modalOptions.TRASH_SELECTION) {
            setOptions(macrosubcategories[category]);
        } else {
            setOptions(microsubcategories[category])
        }
        setCategoryName(category);
        setDisplay(displayNum)
    }

    const onSelectActiveElement = (elementName) => {
        setSelectedElement(elementName);
        setDisplay(modalOptions.MICRO_DETAILS);
    }

    function displayContent() {
        switch (display) {
            case modalOptions.TRASH_SELECTION:
                return <TrashSelection onClose={onClose} trashList={trashList} categoryName={categoryName} setList={setList} optionList={optionList} />
            case modalOptions.TRASH_CATEGORY_SELECTION:
                return <TrashCategorySelection onClose={onClose} setCategory={onSetCategory} />
            case modalOptions.MICRO_CATEGORY_SELECTION:
                return <MicroTrashCategorySelection onClose={onClose} setCategory={onSetCategory} />
            case modalOptions.MICRO_SELECTION:
                return <MicroTrashSelection onClose={onClose} optionList={optionList} categoryName={categoryName} setActiveElement={onSelectActiveElement} />
            case modalOptions.MICRO_DETAILS:
                return <MicroDetails onClose={onClose} selectedElement={selectedElement} setList={setList} />
            default:
                return <View />;
        }
    }

    return (<RNModal
        isVisible={isVisible}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        deviceHeight={height}
        deviceWidth={width}
        onBackdropPress={() => onClose()}
        onBackButtonPress={() => onClose()}
        propagateSwipe={true}
        style={styles.modalViewPage}
    >
        {displayContent()}
    </RNModal>
    );
}


