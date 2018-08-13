import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import WalletMain from './components/WalletMain';


const RouterComponent = () => {
    return (
        <Router>
            <Scene
                key="root"
                hideNavBar>
                    <Scene
                        key="main"
                        hideNavBar
                        component={WalletMain}
                        title="Coinweb"
                        initial/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;