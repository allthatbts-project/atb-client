import React from 'react';
import styles from './SearchBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SearchBar = ({value,onChange,onSearch}) => {
    //EnterKey 입력시 onSearch실행
    const handleKeyPress=(e) =>{
        if(e.key ==='Enter'){
            onSearch();
        }
    }

    return(
        <div>
            <div className={cx('search-title')}>
               <div className={cx('title')}>All That BTS  <img className={cx('atbs-logo')} src="http://localhost:7777/abts-logo.png"/></div>
               <div className={cx('subtitle')}>LOVE YOUR SELF</div>
            </div>
            {/* 검색바 구역 */}
            <div className={cx('search-input')}>
                <div className={cx('search-icon')}/>
                <input placeholder ="placeholeder 뭐로 설정할까?" onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
                <div className={cx('search-button')} onClick={onSearch}>
                검색
                </div>
            </div>
        </div>
    );
};

export default SearchBar;