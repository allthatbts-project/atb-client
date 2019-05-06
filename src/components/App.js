import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, NotFoundPage } from 'pages';
import LoginModalContainer from 'containers/modal/LoginModalContainer'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <LoginModalContainer/>
        </div>
    );
};

export default App;