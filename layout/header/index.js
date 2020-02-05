import React, {Component} from 'react';

import {
    Button,
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class Header extends Component{
    render(){
        return (
            <View>
                <Text style={styles.title}>TODO List!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#FFF',
        paddingTop: 24,
        paddingBottom: 16,
        fontFamily: 'nunito-bold',
        fontSize: 24,
        letterSpacing: 1
    }
});