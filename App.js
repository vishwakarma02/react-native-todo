import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './reducer';

import { StyleSheet,
          Text,
          View,
          FlatList,
          Button, 
          TextInput,
          KeyboardAvoidingView} from 'react-native';

import * as Font from 'expo-font';

import CheckBox from 'react-native-check-box';

import Statusbar from './layout/statusbar';
import Header from './layout/header';
import SingleTask from './components/singleTask';

const store = createStore(taskReducer);

export default class App extends Component {

  state = {
    data: [
      'First Task',
      'Second Task'
    ]
  };

  componentDidMount() {
    Font.loadAsync({
      'nunito': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
    });

  }


  render() {
    return (
      <Provider store={store}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding">
          <Statusbar />
          <Header />
          <View style={styles.outerListWrapper}>
            <SingleTask />
          </View>

          <TextInput
            editable
            ref={input => { this.textInput = input }}
            placeholder={'Add new task'}
            onChangeText={text => this.setState({
              currentInput: text,
              currentId: this.state.data.length + 1
            })}
          />
          <Button
            title="Add"
            onPress={() => this.addNewTask()}
          />
        </KeyboardAvoidingView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#595959',
    color: '#fff',
    paddingLeft: 8,
    paddingRight: 8
  },
  outerListWrapper: {
    flex: 1,
    paddingBottom: 8
  }
});
