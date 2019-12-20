import React, {Component} from 'react';
import propTypes, {PropTypes} from 'prop-types';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../containers/style/colorprofile';

export default class NextArrowButton extends Component {
  render() {
    const {disabled, handleLogin} = this.props
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight style={[{opacity: 0.5}, styles.button]}
        onPress={handleLogin}>
          <Icon
            name="angle-right"
            color={colors.red}
            size={32}
            style={styles.icon}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
    disabled: propTypes.bool,
    handleLogin: propTypes.func
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
    paddingTop: 0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: -2,
    marginTop: -2,
  },
});
