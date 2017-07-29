import React from 'react'

export default class detailHeader extends React.Component {
  share(){
    window.location.href="zhihu:"
  }
    render() {
        return(
          <div className="LivePageHeader-container-3_3o Card-root-1Dmx">
            <div className="LivePageHeader-liveInfo-2J1D">
              <a className="LivePageHeader-avatarContainer-2kCT">
                <img className="LivePageHeader-avatar-1q_V Avatar-img--rfs" src={require('../../img/avatar3.jpg')} width="80" height="80"/>
              </a>
              <div className="LivePageHeader-content-22FD">
                <div className="LivePageHeader-title-1q2A"> 未来五年，科技创业的机会和陷阱</div>
                <a className="LivePageHeader-name-2EAP" href="">
                  <svg fill="currentColor" className="LivePageHeader-speakerIcon-1iL6" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M8,16 C12.418278,16 16,12.418278 16,8 C16,3.581722 12.418278,0 8,0 C3.581722,0 0,3.581722 0,8 C0,12.418278 3.581722,16 8,16 Z M8,9 C8.83,9 9.495,8.33 9.495,7.5 L9.5,4.5 C9.5,3.67 8.83,3 8,3 C7.17,3 6.5,3.67 6.5,4.5 L6.5,7.5 C6.5,8.33 7.17,9 8,9 Z M10.65,7.5 C10.65,9 9.38,10.05 8,10.05 C6.62,10.05 5.35,9 5.35,7.5 L4.5,7.5 C4.5,9.205 5.86,10.615 7.5,10.86 L7.5,12.5 L8.5,12.5 L8.5,10.86 C10.14,10.62 11.5,9.21 11.5,7.5 L10.65,7.5 Z" fillRule="evenodd"></path>
                  </svg>
                  王煜全
                  <svg fill="currentColor" className="LivePageHeader-arrow-oGZZ" width="48" height="48" viewBox="0 0 48 48">
                  <title>arrow</title><path d="M19.608308 11.291022c-.39064-.387697-1.037868-.388717-1.42788-.019096l-1.879672 1.7814c-.397956.37715-.40446 1.001224-.020242 1.388148l9.488537 9.55542-9.488535 9.55542c-.386777.389504-.36977 1.01853.020242 1.38815l1.879672 1.7814c.397955.37715 1.041186.364683 1.42788-.019096l12.09502-12.003886c.39064-.387697.386693-1.020195 0-1.403974L19.60831 11.291022z" >
                  </path></svg>
                </a>
              </div>
            </div>
              <div>
                <div className="LivePageHeader-timeTitle-30N6">时间<span className="LivePageHeader-dateTip-237K"> ( 今天 )</span>
                </div>
              <div className="LivePageHeader-timeNumber-1k09">2016-11-23 19:00</div>
                <button className="LivePageHeader-button-17uS Button-ghost-37SQ Button-buttonBase-3YR6 Button-base-3ydE" onClick={this.share}>在 App 内打开</button>
              </div>
          </div>
        )
    }
}
