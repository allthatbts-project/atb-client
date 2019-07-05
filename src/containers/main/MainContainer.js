import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as mainActions from 'store/modules/main';
import Twitter from 'components/Twitter';
import Youtube from 'components/Youtube';

class MainContainer extends Component {
    initialize = async () => {
        const { MainActions } = this.props;
        try{
            await MainActions.getYoutubeInfoList();
            await MainActions.getTwitterInfoList();
            //await MainActions.getInstagramInfoList();
        }catch(e){
            console.log(e);
        }
    };

    componentDidMount() {
        this.initialize();
    };

   
    render() {
        const { youtubeInfos, twitterInfos } = this.props;
        return (
            <div>
                <Twitter twitterInfos={twitterInfos}/>
                <Youtube youtubeInfos={youtubeInfos}/>
            </div>
            
        );
    }
}

export default connect(
    (state) => ({
        youtubeInfos: state.main.get('youtubeInfos'),
        twitterInfos: state.main.get('twitterInfos'),
    }),
    (dispatch) => ({
        MainActions: bindActionCreators(mainActions, dispatch)
    })
)(MainContainer);