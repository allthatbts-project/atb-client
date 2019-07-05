import React, {Component} from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MainContainer from 'containers/main/MainContainer'
import SearchBar from 'components/SearchBar';



class MainPage extends Component {
    render() {
        return (
            <PageTemplate>
                <SearchBar/>
                <MainContainer/>

            </PageTemplate>
        );
    }
}

export default MainPage;