import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = ({logged, onLoginClick}) => (
    <header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('brand')}>
                <Link to="/">All That BTS</Link>
            </div>
            <div onClick={onLoginClick} className={cx('login')}>
                {logged ? '로그아웃' : '로그인'}
            </div>
        </div>
    </header>
)

export default Header;