import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons';
import colors from '../containers/style/colorprofile';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class Notification extends Component {
  closeNotification() {
    this.props.handleCloseNotification()
  }
  render() {
    const {title, message} = this.props;
    return (
      <View>
        <View style={styles.notificationContent}>
          <Text style={styles.titleText}> {title} </Text>
          <Text style={styles.messageText}> {message} </Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.closeNotification}>
          <Icon name="times" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notificationContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  titleText: {
    color: colors.red,
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
