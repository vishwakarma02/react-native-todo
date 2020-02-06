import React, { Component } from 'react';
import {
    Button,
    FlatList,
    Text,
    View,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleCheckedStatus, removeTask } from '../../action';

import CheckBox from 'react-native-check-box';

class singleTask extends Component {

    render() {
        return (
            <FlatList
                data={this.props.taskList}
                keyExtractor = {(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <View style={styles.checkboxWrapper}>
                        <View
                            style={styles.statusColor}></View>
                        <CheckBox
                            checkBoxColor='#FFF'
                            onClick={() => {this.props.toggleCheckedStatus(index)}}
                            isChecked={item.status}
                            rightText={item.task}
                            style={styles.checkBox}
                            rightTextStyle={{ color: '#FFF' }}
                        />
                        <Button
                            title="X"
                            onPress={() => {this.props.removeTask(index)}}
                            style={styles.closeButton} />
                    </View>
                )
            } />
        )
    }
}

const styles = StyleSheet.create({
    checkboxWrapper: {
        color: '#FFF',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#f3d008',
        padding: 8,
        marginBottom: 16
    },
    checkBox: {
        flex: 1,
        padding: 10
    },
    statusColor: {
        backgroundColor: '#f3d008',
        borderRadius: 2,
        width: 8,
    },
    closeButton: {
        backgroundColor: '#f3d008'
    }
});

const mapStateToProps = (state) => {
    const {task} = state;
    return task;
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        removeTask,
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(singleTask);