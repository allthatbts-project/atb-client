import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as mainActions from 'store/modules/main';


class MainContainer extends Component {
    initialize = async () => {
        const { MainActions } = this.props;
        try{
            await MainActions.getUtubeInfoList();
            await MainActions.getInstagramInfoList();
        }catch(e){
            console.log(e);
        }
    };

    componentDidMount() {
        this.initialize();
    };

    render() {

        return (
            <div>
                Main Body
                <br/>
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