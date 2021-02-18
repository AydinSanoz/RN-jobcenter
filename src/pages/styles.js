import {Dimensions, StyleSheet} from 'react-native';

export const modalStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    maxHeight: Dimensions.get('window').height * 0.5,
    margin: 0,
  },
});
