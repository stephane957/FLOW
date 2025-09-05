import { React } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { IconButton, Text, Icon } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from '../../styles/screen.styles';

export default function PlasticItem(props) {
  const showCategory = props.category !== undefined ? true : false;
  if (props.amount == 0) return null;
  return (
    <View style={styles.plasticItemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.plasticName}>{props.name}</Text>
        {showCategory && <View style={styles.viewRowContainer}>
          <View style={{ backgroundColor: 'white', height: moderateScale(25), width: moderateScale(25), borderRadius: 12.5 }}>
            <Icon source={'circle'} size={moderateScale(25)} color={props.color} />
          </View>
          <Text style={styles.plasticCategory}>{' |  ' + props.category}</Text>
        </View>}
      </View>
      <View style={styles.viewButtonContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={props.onDecrement} style={styles.decrButton}>
            <IconButton icon={"minus"} size={moderateScale(35)} iconColor={'white'} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>{props.amount}</Text>
          <TouchableOpacity onPress={props.onIncrement} style={styles.incrButton}>
            <IconButton icon={"plus"} size={moderateScale(35)} iconColor={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  plasticItemContainer: {
    backgroundColor: '#232348',
    borderRadius: '20$rem',
    marginLeft: '7$rem',
    marginBottom: '8$rem',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: '4$rem',
    width: '95%',
    shadowOffset: {
      width: '2$rem',
      height: '2$rem',
    },
    height: '100$rem',
    flexDirection: 'row'
  },
  plasticName: {
    fontSize: '16$rem',
    fontWeight: '700',
    flexWrap: 'wrap',
    textAlign: 'left',
    color: 'white',
    height: '60%',
    width: '100%',
  },
  plasticCategory: {
    fontSize: '14$rem',
    fontWeight: '700',
    paddingLeft: '5$rem',
    textAlign: 'left',
    color: 'white',
    width: '100%',
    flexWrap: 'wrap'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  incrButton: {
    borderRadius: '8$rem',
    width: '45%',
    paddingRight: '5$rem',
    alignItems: 'center'
  },
  decrButton: {
    alignItems: 'center',
    borderRadius: '8$rem',
    width: '40%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '24$rem',
    width: '20%',
    textAlign: 'center'
  },
  viewRowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '40%',
    width: '100%',
  },
  textContainer: {
    height: '100%',
    width: '60%',
    paddingTop: '10$rem',
    paddingLeft: '10$rem'
  },
  viewButtonContainer: {
    height: '100%',
    width: '40%'
  }
});
