import React, { Component } from 'react';
import {
    Button,
    FlatList,
    Text,
    View,
    StyleSheet
} from 'react-native';
import CheckBox from 'react-native-check-box';

const item = [
    'First',
    'Second',
];

export default class singleTask extends Component {
    render() {
        return (
            <FlatList
                data={item}
                renderItem={({item}) => (
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
                            onPress={() => { console.log('dhaniya clicked') }}
                            style={styles.closeButton} />
                    </View>
                )} />
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
})