import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Platform } from '@unimodules/core';

export default class Statusbar extends Component {
    render() {
        return (
            <View style={styles.statusBar}></View>
        )
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: (Platform.OS === 'ios') ? 18 : 24,
    }
});