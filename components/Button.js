import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';

const Button = ({
  borderWidth,
  ButtonText,
  buttoncolor,
  textcolor,
  bordercolorstyle,
  height,
  fontSize,
  mHorizontal,
  fontWeight,
    onPress,
  borderRadius
}) => {
  var Button = {
    height: height,
    borderRadius: borderRadius,
    backgroundColor: buttoncolor,
    justifyContent: 'center',
    borderWidth: borderWidth,
    borderColor: bordercolorstyle,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  };
  var ButtonTextStyle = {
    color: textcolor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontStyle: 'normal',
    letterSpacing: 0,
    marginHorizontal: mHorizontal,
  };

  return (
    <View>
      <TouchableOpacity style={Button} onPress={onPress}>
        <Text style={ButtonTextStyle}>{ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Button;
