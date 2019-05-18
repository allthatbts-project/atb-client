import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as mainActions from 'store/modules/main';

class MainContainer extends Component {
    initialize = async () => {
        const { MainActions } = this.props;
        try{
            await MainActions.getMainInfo();
        }catch(e){
            console.log(e);
        }
    };

    componentDidMount() {
        this.initialize();
    };

    render() {
        const { } = this;
        const { } = this.props;

        return (
            <div>
                Main Body
                <br/>
                <a href={'/test'}>test</a>
            </div>
        );
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        MainActions: bindActionCreators(mainActions, dispatch)
    })
)(MainContainer);