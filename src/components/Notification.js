import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons';
import colors from '../containers/style/colorprofile';

export default class Notification extends Component {
  closeNotification = () => {
    this.props.handleCloseNotification();
  };
  render() {
    const {title, message} = this.props;
    return (
      <View style={styles.wrapper}>
        {/* <Text> Notification</Text> */}
        <View style={styles.notificationContent}>
          <Text style={styles.titleText}> {title} </Text>
          <Text style={styles.messageText}> {message} </Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.closeNotification}>
              <Icon name="times"
              size={20}
              color={colors.lightGray}/>
          </TouchableOpacity>
      </View>
    );
  }
}

Notification.propTypes = {
  showNotification: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  handleCloseNotification: propTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    padding: 10,
  },
  notificationContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  titleText: {
    color: colors.red,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
  },
  message: {
    marginBottom: 2,
    fontSize: 14,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
