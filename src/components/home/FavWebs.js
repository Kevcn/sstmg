import React from 'react';

export default class FavWebs extends React.Component {
  render(){
    return (
      <div className="favWebs-section flexbox flex-center">
        <a href="http://www.bbc.co.uk/" target="_blank" className="buttons">BBC</a>
        <a href="https://uk.yahoo.com/" target="_blank" className="buttons">Yahoo</a>
        <a href="https://teamtreehouse.com/home" target="_blank" className="buttons">Treehouse</a>
        <a href="http://www.panda.tv" target="_blank" className="buttons">熊猫直播</a>
        <a href="http://www.zhihu.com" target="_blank" className="buttons">知乎</a>
        <a href="http://www.bilibili.com" target="_blank" className="buttons">B站</a>
        <a href="http://www.sina.com.cn/" target="_blank" className="buttons">新浪</a>


      </div>
    );
  }
}
