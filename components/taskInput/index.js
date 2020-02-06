import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../../action';

import {
    Button,
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native';

class TaskInput extends Component {
    state = {
        currentInput: ''
    };
    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                    editable
                    ref={input => { this.textInput = input }}
                    placeholder={'Add new task'}
                    style={styles.textInput}
                    value={this.state.currentInput}
                    onChangeText={text => this.setState({
                        currentInput: text
                    })}
                />
                <Button
                    title="Add"
                    onPress={() => {
                        if (this.state.currentInput !== '') {
                            this.props.addTask(this.state.currentInput);
                            this.setState({
                                currentInput: ''
                            });
                        }
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 16
    },
    textInput: {
        color: '#fff'
    }
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addTask,
    }, dispatch)
  );
export default connect(null, mapDispatchToProps)(TaskInput);