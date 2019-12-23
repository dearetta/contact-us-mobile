import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../containers/style/colorprofile';
import InputField from '../components/form/InputField';
import Notification from '../components/Notification';
import NextArrowButton from '../components/buttons/NextButton';
import firebase from 'react-native-firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      email: '',
      password: '',
      formValid: true,
      error: '',
      loadingVisible: false,
    };
  }
  handleEmailChange = email => {
    this.setState({email: email});
  };
  handlePasswordChange = password => {
    this.setState({password: password});
  };
  Login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.setState({user});
        console.log(user);
      })
      .catch(error => console.log(error));
  }

  handleCloseNotification = () => {
    alert('close Notification');
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.avoidView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              onChangeText={this.handleEmailChange}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{marginBottom: 30}}
            />
            <InputField
              labelText="PASSWORD"
              onChangeText={this.handlePasswordChange}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{marginBottom: 30}}
            />
          </ScrollView>
          <NextArrowButton handleLogin={this.Login.bind(this)} />
        </View>
        <View>
          <Notification
            showNotification={true}
            handleCloseNotification={this.handleCloseNotification}
            title="Error"
            message="Something went wrong"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.red,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
});
