import Slider from "react-slick";
import React from "react";
import styles from './Youtube.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Card from '@bit/react-bootstrap.react-bootstrap.card';

const cx = classNames.bind(styles);

  
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

const YoutubeItem = ({ message, fullname, username,tag }) => {
  return (
    <Card style={{ width: '18rem' }}>
          <Card.Body className={cx('youtube-body')}>
            <Card.Title className={cx('youtube-user')}>@계정명</Card.Title>
            <img className={cx('youtube-sumnale')} src="https://i.ytimg.com/vi/MBdVXkSdhwU/maxresdefault.jpg"/>
            <Card.Link href="https://www.youtube.com/watch?v=Bs8Ig7v6Q9g">
                <Card.Text className={cx('youtube-contents')}>
                <label>VOD제목_[방탄소년단/지민/음색깡패 1위 아이돌의 기계음 1도 안 썪인 음색]</label>
                </Card.Text>
            </Card.Link>
              <label style={{ fontSize: '14px' }}>12.2M Tweets</label>
          </Card.Body>
    </Card>
  )
}

const Youtube = () => {

  return (

    <div className ={cx('youtube')}>
      <div className={cx('card-title')}>Youtube</div>

      
      <Slider {...settings} >
        <div>
        {/* 여기에 Youtube API에서 받아온 데이터 넣어줄것 */}
          <YoutubeItem/>
        </div>
        <div>
          <YoutubeItem/>
        </div>
        <div>
          <YoutubeItem/>
        </div>
        <div>
          <YoutubeItem/>
        </div>
        <div>
          <YoutubeItem/>
        </div>
        <div>
          <YoutubeItem/>
        </div>
      </Slider>
    </div>
    );
  }

  export default Youtube;