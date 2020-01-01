import React, { Component } from 'react';
import { StyleSheet,
          Text,
          View,
          FlatList,
          Button, 
          TextInput,
          KeyboardAvoidingView} from 'react-native';
import CheckBox from 'react-native-check-box';



export default class App extends Component {
  
  originalData = [
    {
      id: '1',
      title: 'First',
      isChecked: false
    }, {
      id: '2',
      title: 'Second',
      isChecked: false
    }, {
      id: '3',
      title: 'Third',
      isChecked: false
    }, {
      id: '4',
      title: 'Fourth',
      isChecked: false
    }, {
      id: '5',
      title: 'Fifth',
      isChecked: false
    }, {
      id: '6',
      title: 'Sixth',
      isChecked: false
    },
  ];


  state = {
    data: this.originalData
  };

  componentDidMount(){
      this.setState({
        data: this.originalData
      })
  }

  toggleCheckboxStatus = (id) => {
    let newData = this.state.data.map(item => {
      if(item.id === id){
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    this.setState({
      data: newData
    })
  }

  removeTask = (id) => {
    let newData = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: newData
    })
  }

  addNewTask = () => {
    if(this.state.currentInput === '' || this.state.currentInput === undefined)
      return;
    let newData = this.state.data;
    let newTask = {
      id: this.state.currentId,
      title: this.state.currentInput,
      isChecked: false
    }
    newData.push(newTask);
    this.setState({
      data:newData,
      currentInput: '',
      currentId: ''
    })
    this.textInput.clear();
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <Text style={styles.boldFont}>TODO List!</Text>
        <View style={styles.outerListWrapper}>
          <View style={styles.listWrapper}>
            <FlatList
              style={styles.flatLists}
              data={this.state.data}
              renderItem={({ item }) => <View style={styles.listWrapper}>
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() =>this.toggleCheckboxStatus(item.id)}
                  isChecked={item.isChecked}
                  rightText={item.title}
                />
                <Button
                  title="Remove"
                  onPress={() => this.removeTask(item.id)} />
              </View>}
              keyExtractor={item => item.id}
              // extraData={this.state}
            />
          </View>
        </View>

        <TextInput
          editable
          ref={input => {this.textInput = input}}
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24
  },
  listWrapper: {
    flexDirection: 'row',
    flexGrow: 1
  },
  outerListWrapper: {
    flexGrow: 1,
  },
  boldFont: {
    fontWeight: 'bold'
  }
});
