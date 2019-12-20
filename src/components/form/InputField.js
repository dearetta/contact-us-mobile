import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Text, View, TouchableHighlight, StyleSheet,  TextInput} from 'react-native';

import colors from '../../containers/style/colorprofile';

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
          secureInput: !(props.inputType === "text" || props.inputType === "email")
        };
      }
  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
    } = this.props;
    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 14; 
    const style = customStyle || 30;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || 'transparent';
    return (
      <View style={[ customStyle, styles.wrapper]}>
        <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
        <TextInput
          autoCorrect={false}
          style={[
            {color: inputColor, borderBottomColor: borderBottom, style: customStyle},
            styles.inputFiled,
          ]}
          secureTextEntry={inputType === 'password'}
        />
      </View>
    );
  }
}

InputField.propTypes = {
    labelText: propTypes.string.isRequired,
    labelTextSize: propTypes.number,
    labelColor: propTypes.string,
    textColor: propTypes.string,
    borderBottomColor: propTypes.string,
    inputType: propTypes.string.isRequired,
    customStyle: propTypes.object
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  label: {
    fontWeight: '700',
    marginBottom: 20,
    marginBottom: 20
  },
  inputFiled: {
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
