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

const YoutubeItem = ({ youtubeInfo }) => {
  const { channelName, thumbnailImgUrl, url, title, viewCnt, likeCnt, createDt } = youtubeInfo.toJS();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Link href={url}>
          <Card.Body className={cx('youtube-body')}>
            <Card.Title className={cx('youtube-user')}>{channelName}</Card.Title>
            <img className={cx('youtube-sumnale')} src={thumbnailImgUrl}/>
                <Card.Text className={cx('youtube-contents')}>
                <label>{title}</label>
                </Card.Text>
              <label style={{ fontSize: '14px' }}>조회수 {viewCnt}</label>
          </Card.Body>
      </Card.Link>
    </Card>
  )
}

const Youtube = ({youtubeInfos}) => {
  const youTubeInfoList = youtubeInfos.size > 0 && youtubeInfos.map(
      (youtubeInfo, index) => {
        return(
          <div>
            <YoutubeItem youtubeInfo={youtubeInfo}/>
          </div>
        )
      }
  );
  return (
  <div className ={cx('youtube')}>
    <div className={cx('card-title')}>Youtube</div>
    <Slider {...settings} >
      {youTubeInfoList}
    </Slider>
  </div>
  );
};
export default Youtube;