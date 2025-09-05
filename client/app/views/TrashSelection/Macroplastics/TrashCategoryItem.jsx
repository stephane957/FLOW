import { React } from 'react';
import { TouchableOpacity, View, Image } from 'react-native'
import { Text } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import { scale } from '../../../styles/screen.styles';


export default function TrashCategoryItem(props) {
    return (
        <TouchableOpacity style={styles.buttonCategory}
            onPress={() => props.onPress(props.name)}>
            <View style={styles.viewCategoryTextContainer}>
                <View style={styles.imageContainer}> 
                    <Image
                        source={props.icon}
                        resizeMode='contain'
                        style={{height:scale(32), width:scale(32)}}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textCategory}>
                        {props.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = EStyleSheet.create({
    buttonCategory: {
        width: '150$rem',
        height: '80$rem',
        flexDirection: 'column',
        margin: '6$rem',
        backgroundColor: '#D9D9D9',
        borderRadius: '10$rem',
        justifyContent: 'center'
    },
    viewCategoryTextContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3$rem',
    },
    textCategory:{ 
        width:'100%',
        padding:'7$rem',
        fontWeight: 'bold',
        color: 'black',
        fontSize: '24$rem',
        textAlign:'left'
    },
    textContainer:{
        height:'60%',
        alignItems:'flex-start',
        width:'100%'
    },
    imageContainer: { 
        width:'100%',
        alignItems:'flex-start',
        padding:'5$rem',
        height:'40%'
    }
});