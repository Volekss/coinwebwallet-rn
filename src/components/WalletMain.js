import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {HeaderWallet} from './HeaderWallet';
import {TokenRow} from "./TokenRow";


class WalletMain extends Component {
    render() {
        return (
            <View>
                <HeaderWallet
                    name={'Mike Conte'}
                    date={'30 Jul 2018'}/>
                <TokenRow/>


            </View>
        );
    }
}

export default WalletMain;