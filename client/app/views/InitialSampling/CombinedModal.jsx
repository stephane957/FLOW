import React, { useState } from 'react';
import { height, width } from '../../styles/screen.styles'
import viewStyle from '../../styles/views.styles';
import RNModal from 'react-native-modal';
import MaterialsModal from '../../components/Modals/MaterialsModal';
import SampleShare from './SampleShare';
import SelectionType from './SelectionType';
import { deleteSample } from '../../controllers/SamplesController';

export default function CombinedModal({ isVisible = false, onClose }) {
    const [modalDisplayed, setModalDisplayed] = useState(0);

    function handleClose() {
        setModalDisplayed(0);
        onClose();
    }

    function displayContent() {
        switch (modalDisplayed) {
            case 0:
                return (<SelectionType setModalDisplayed={setModalDisplayed} onClose={handleClose} />);
            case 1:
                return (<SampleShare setModalDisplayed={setModalDisplayed} onClose={handleClose} />);
            case 2:
                return (<MaterialsModal onClose={handleClose} />);
        }
    }

    function handleSampleDelete() {
        handleClose();
        if (modalDisplayed > 0)
            deleteSample();
    }

    return (
        <RNModal
            isVisible={isVisible}
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            deviceHeight={height}
            deviceWidth={width}
            onBackdropPress={() => { handleSampleDelete }}
            onBackButtonPress={() => { handleSampleDelete }}
            propagateSwipe={true}
            style={viewStyle.modalViewPage}
        >
            {displayContent()}
        </RNModal>
    );
}
