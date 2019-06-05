import React from 'react';
import styles from './Header.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = ({logged, userInfo, onLoginClick}) => {
    if (userInfo !== null) userInfo = JSON.parse(userInfo);
        return(
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <div className={cx('brand')}>
                    <Link to="/">hamberger</Link>
                </div>
                {
                    logged &&
                    <div className={cx('userInfo')}>
                        <img className={cx('thumb')} src={userInfo.imageUrl} alt=""/>
                        <div className={cx('name')}>{userInfo.name}</div>
                    </div>
                }
                <div onClick={onLoginClick} className={cx('login')}>
                    {logged ? '로그아웃' : '로그인'}
                </div>
            </div>
        </header>
        )
}

export default Header;