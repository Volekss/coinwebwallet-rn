import React from 'react';
import {Text, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {Button} from "./common";
import {HeaderWallet} from "./HeaderWallet";


const TokenRow = (props) => {
    const {mainRow, currencyName, currencyPrice, currencyAbbrev, currencyAmount} = styles;
    let isCollapsed = true;
    return (
        <View>
        <View style={mainRow}>
            <Text style={{  height: 50}}>Logo</Text>
            <Text style={currencyName}>Coinweb</Text>
            <Text style={currencyPrice}>5,000</Text>
            <Text style={currencyAbbrev}>XCO</Text>
            <Text  style={currencyAmount}>$34.56</Text>
            {/*<Button style={{height: 50}} onPress={() => {isCollapsed = !isCollapsed
             console.log(isCollapsed)}}>Show</Button>
            <View style={{ height: 50, backgroundColor: 'skyblue'}} />
            <View style={{ height: 50, backgroundColor: 'steelblue'}} />*/}


        </View>
            <Collapsible collapsed={isCollapsed}>
                <HeaderWallet
                    name={'Mike Conte'}
                    date={'30 Jul 2018'}/>
            </Collapsible>
        </View>

    );
};


const styles = {
    mainRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 8
    },
    currencyName: {
        height: 50,
        fontSize: 20,
        color: '#696969',
        fontWeight: '600'
    },
    currencyPrice: {
        height: 50,
        fontSize: 20,
        color: '#696969',
        fontWeight: '600',
        paddingRight: -16
    },
    currencyAbbrev: {
        height: 50,
        fontSize: 20,
        color: '#A5A5A5',
        paddingLeft: -16
    },
    currencyAmount: {
        height: 50,
        fontSize: 20,
        color: '#696969'
    }


};

export {TokenRow}