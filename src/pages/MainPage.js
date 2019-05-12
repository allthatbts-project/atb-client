import React, {Component} from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MainContainer from 'containers/main/MainContainer'

class MainPage extends Component {
    render() {
        return (
            <PageTemplate>
                <MainContainer/>
            </PageTemplate>
        );
    }
}

export default MainPage;