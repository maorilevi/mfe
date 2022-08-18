import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles';
import MarketingApp from "./component/MarketingApp";
import Header from './component/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});
export default () => {
    return (
        <div>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header/>
                        <MarketingApp/>
                    </div>
                </StylesProvider>
            </BrowserRouter>
        </div>
    );
}
