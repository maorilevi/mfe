import React, {lazy, Suspense, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles';

// import MarketingApp from "./component/MarketingApp";
// import AuthApp from './component/AuthApp';
import Progress from "./component/Progress";
import Header from './component/Header';

const MarketingLazy = lazy(() => import('./component/MarketingApp'));
const AuthLazy = lazy(() => import('./component/AuthApp'));
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});
export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const signInFn = () => {
        setIsSignedIn(true);
        console.log('!!!!');
    }
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <div>
                        <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                        <Suspense fallback={<Progress/>}>
                            <Switch>
                                <Route path="/auth" >
                                    <AuthLazy onSignIn={signInFn.bind(this)}/>
                                </Route>
                                <Route path="/" component={MarketingLazy}/>
                            </Switch>
                        </Suspense>
                    </div>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
}
