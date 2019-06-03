import React from 'react';
import styles from './Header.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = ({logged, name, imageUrl, onLoginClick}) => (
    <header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('brand')}>
                <Link to="/">hamberger</Link>
            </div>

            {
                logged &&
                <div className={cx('userInfo')}>
                    <img className={cx('thumb')} src={imageUrl} alt="" />
                    <div className={cx('name')}>{name}</div>
                </div>
            }
            <div onClick={onLoginClick} className={cx('login')}>
                {logged ? '로그아웃' : '로그인'}
            </div>
        </div>
    </header>
)

export default Header;