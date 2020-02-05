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
import { removeTask } from '../../action';

import CheckBox from 'react-native-check-box';

class singleTask extends Component {

    render() {
        return (
            <FlatList
                data={this.props.possible}
                keyExtractor = {(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <View style={styles.checkboxWrapper}>
                        <View
                            style={styles.statusColor}></View>
                        <CheckBox
                            checkBoxColor='#FFF'
                            onClick={() => { console.log('dhaniya') }}
                            isChecked={true}
                            rightText={item}
                            style={styles.checkBox}
                            rightTextStyle={{ color: '#FFF' }}
                        />
                        <Button
                            title="Delete Icon"
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
        borderColor: '#FFF',
        padding: 8,
        marginBottom: 16
    },
    checkBox: {
        flex: 1,
        padding: 10
    },
    statusColor: {
        backgroundColor: '#FFF',
        borderRadius: 2,
        width: 8,
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