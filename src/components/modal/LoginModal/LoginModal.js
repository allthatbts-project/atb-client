import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const LoginModal = ({visible, password, error, onCancel, onLogin, onTestConnect}) => {


    return(
        <ModalWrapper visible={visible}>
            <div className={cx('form')}>
                <div onClick={onCancel} className={cx('close')}>&times;</div>
                <div className={cx('login-logo')}>
                <img src="http://localhost:7777/abts-logo.PNG"/>
                </div>
                <span className={cx('login-title')}>WELCOME TO ABTS</span>
                <button name='google' onClick={onLogin} className={cx('login-btn', 'google')}>구글계정으로 로그인</button>
                <button name='facebook' onClick={onLogin} className={cx('login-btn', 'facebook')}>페이스북으로 로그인</button>
                <button name='kakao' onClick={onLogin} className={cx('login-btn', 'kakao')}>카카오톡으로 로그인</button>
                <Link to="/"><span className={cx('login-footer')}>로그인에 문제가 있으세요?</span></Link>
            </div>
        </ModalWrapper>
    );
};

export default LoginModal;