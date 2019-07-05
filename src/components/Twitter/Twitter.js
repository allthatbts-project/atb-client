import Slider from "react-slick";
import React from "react";
import styles from './Twitter.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Card from '@bit/react-bootstrap.react-bootstrap.card';

const cx = classNames.bind(styles);

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

const TwitterItem = ({ twitterInfo }) => {
    const { accountName, url, tweetText, hashtags, retweetCnt } = twitterInfo.toJS();
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Link href={url}>
          <Card.Body className={cx('twitter-body')}>
            <Card.Title className={cx('twitter-user')}>@{accountName}</Card.Title>

                <Card.Text className={cx('twitter-contents')}>
                <label>
                    {tweetText}
                </label> 
                </Card.Text>

            <Card.Link className={cx('twitter-tag')}>
              <Link key="" to={'/테그주소입력할것'}><label>{hashtags}</label><br/></Link>
            </Card.Link>
              <label style={{ fontSize: '14px' }}>retweet: {retweetCnt}</label>
          </Card.Body>
        </Card.Link>
    </Card>
  )
}

const Twitter = ({ twitterInfos }) => {
    const twiiterInfoList = twitterInfos.size > 0 && twitterInfos.map(
        (twitterInfo, index) => {
            return(
                <div>
                    <TwitterItem twitterInfo={twitterInfo}/>
                </div>
            )
        }
    );
  return (
    <div className ={cx('twitter')}>
      <div className={cx('card-title')}>Twitter</div>
      <Slider {...settings} >
          {twiiterInfoList}
      </Slider>
    </div>
    );
};
export default Twitter;