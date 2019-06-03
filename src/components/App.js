import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, NotFoundPage } from 'pages';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import OAuth2RedirectHandler from "./oauth2";

const App = () => {
    return (
        <div>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                <LoginModalContainer/>
        </div>
    );
};

export default App;