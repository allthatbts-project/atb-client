import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const LoginModal = ({visible, password, error, onCancel, onLogin}) => {


    return(
        <ModalWrapper visible={visible}>
            <div className={cx('form')}>
                <div onClick={onCancel} className={cx('close')}>&times;</div>
                <div name='oauth_google' onClick={onLogin} className={cx('login-btn', 'google')}>구글로 로그인</div>
                <div name='oauth_facebook' onClick={onLogin} className={cx('login-btn', 'facebook')}>페이스북으로 로그인</div>
                <div name='oauth_kakao' onClick={onLogin} className={cx('login-btn', 'kakao')}>카카오로 로그인</div>
            </div>
        </ModalWrapper>
    );
};

export default LoginModal;