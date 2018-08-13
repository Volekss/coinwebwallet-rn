import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const HeaderWallet = (props) => {
    const {nameStyle, dateStyle} = styles;
    const {name, date} = props;
    return (
        <LinearGradient colors={['#CCFFFC', '#CCE3FF']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
            <Text
                style={nameStyle}>{name}</Text>
            <Text
                style={dateStyle}>member since {date}</Text>
        </LinearGradient>
    );
};


const styles = {
    nameStyle: {
        paddingTop: 24,
        paddingLeft: 16,
        color: '#000',
        fontSize: 30,
        fontWeight: '800',
    },
    dateStyle: {
        paddingLeft: 16,
        paddingBottom: 16,
        fontSize: 16,
        color: '#63C1C2'
    },
    linearGradient: {
        flex: 1
    }
};

export {HeaderWallet}