import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, BoardPage, PostPage, NotFoundPage, WritePage } from 'pages';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import OAuth2RedirectHandler from "./oauth2";

const App = () => {
    return (
        <div>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                    <Route path="/board" component={BoardPage}/>
                    <Route path="/post/:id" component={PostPage}/>
                    <Route path="/:boardId/write" component={WritePage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                <LoginModalContainer/>
        </div>
    );
};

export default App;