import React from 'react';
import './App.css';

function Img_news({tag}) {
    return (
    <li className="img_news_info">
    <img src={tag}/>
    <div className="img_news_padding">
        <div id="img_news_first">프론트엔드 개발자</div>
        <div id="img_news_second">파머스포터</div>
        <div id="img_news_third">서울 &#183; 한국</div>
        <div id="img_news_4th">채용보상금 1,000,000원</div>
    </div>
    </li>
    );
}

export default Img_news;