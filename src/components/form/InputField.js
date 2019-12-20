import React, {Component} from 'react';
import propTypes from 'prop-types';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from 'react-native';

import colors from '../../containers/style/colorprofile';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput:
        props.inputType === 'text' || props.inputType === 'email'
          ? false
          : true,
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }
  toggleShowPassword() {
    this.setState({secureInput: !this.state.secureInput});
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
      onChangeText
    } = this.props;
    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 14;
    // const style = customStyle || 30;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || 'transparent';
    const {secureInput} = this.state;
    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
        <View style={styles.showButton}>
          {inputType === 'password' ? (
            <TouchableOpacity
              
              onPress={this.toggleShowPassword}>
              <Text style={styles.showText}>
                {secureInput ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>

        <TextInput
          autoCorrect={false}
          style={[
            {
              color: inputColor,
              borderBottomColor: borderBottom,
            },
            styles.inputField,
          ]}
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
          autoCapitalize="none"
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
  customStyle: propTypes.object,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  label: {
    fontWeight: '700',
    marginBottom: 20,
    marginRight: 20,
    paddingRight: 30,
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  showButton: {
    position: 'absolute',
    right: 0,
    // flexDirection: 'row'
  },
  showText: {
    // position: 'absolute',
    // right: 0,
    color: colors.white,
    fontWeight: '700',
  },
});
