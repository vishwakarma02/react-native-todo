import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../../action';

import {
    Button,
    Text,
    TextInput,
    View
} from 'react-native';

class TaskInput extends Component {
    state = {
        currentInput: ''
    };
    render() {
        return (
            <View>
                <TextInput
                    editable
                    ref={input => { this.textInput = input }}
                    placeholder={'Add new task'}
                    onChangeText={text => this.setState({
                        currentInput: text
                    })}
                />
                <Button
                    title="Add"
                    onPress={() => {
                        this.props.addTask(this.state.currentInput);
                        this.setState({
                            currentInput: ''
                        });
                    }}
                />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addTask,
    }, dispatch)
  );
export default connect(null, mapDispatchToProps)(TaskInput);