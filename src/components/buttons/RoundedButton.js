import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

import colors from '../../containers/style/colorprofile';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class RoundedButton extends Component {
  render() {
    const {text, color, backgroundColor} = this.props;
    return (
      <TouchableHighlight style={[{backgroundColor}, styles.wrapper]}>
        <View style={styles.ButtonTextWrapper}> 
        <Icon
            name="facebook"
            style = {styles.facebookIcon}
            size={20}
        />
          <Text style={[styles.buttonText, {color}]}> {text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundedButton.propTypes = {
  text: propTypes.string.isRequired,
  textColor: propTypes.string,
  background: propTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    display: 'flex',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  ButtonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  facebookIcon:{
    color: colors.red,
    position: "relative",
    left: 40,
    zIndex: 8,
}
});
