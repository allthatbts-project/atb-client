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

const TwitterItem = ({ message, fullname, username,tag }) => {
  return (
    <Card style={{ width: '18rem' }}>
          <Card.Body className={cx('twitter-body')}>
            <Card.Title className={cx('twitter-user')}>@계정명</Card.Title>
            <Card.Link href="https://twitter.com/BTS_twt/status/1102514349875183617">
                <Card.Text className={cx('twitter-contents')}>
                <label>앞으로 우리도 응원할게요<br/>
                        화이팅<br/>
                        데뷔 진심으로 축하합니다☺️👍🙏👏👏<br/>
                </label> 
                </Card.Text>
            </Card.Link>
            <Card.Link className={cx('twitter-tag')}>
              <Link key={tag} to={'/테그주소입력할것'}><label>#JIMIN #TXT</label><br/></Link>
            </Card.Link>
              <label style={{ fontSize: '14px' }}>12.2M Tweets</label>
          </Card.Body>
    </Card>
  )
}

const Twitter = () => {

  return (

    <div className ={cx('twitter')}>
      <div className={cx('card-title')}>Twitter</div>

      
      <Slider {...settings} >
        <div>
        {/* 여기에 Twitter API에서 받아온 데이터 넣어줄것 */}
          <TwitterItem/>
        </div>
        <div>
          <TwitterItem/>
        </div>
        <div>
          <TwitterItem/>
        </div>
        <div>
          <TwitterItem/>
        </div>
        <div>
          <TwitterItem/>
        </div>
        <div>
          <TwitterItem/>
        </div>
      </Slider>
    </div>
    );
  }

  export default Twitter;