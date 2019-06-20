import React, {Component} from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MainContainer from 'containers/main/MainContainer'
import SearchBar from 'components/SearchBar';
import Twitter from 'components/Twitter';
import Youtube from 'components/Youtube';



class MainPage extends Component {
    render() {
        return (
            <PageTemplate>
                <SearchBar/>
                <Twitter/>
                <Youtube/>
                <MainContainer/>

            </PageTemplate>
        );
    }
}

export default MainPage;