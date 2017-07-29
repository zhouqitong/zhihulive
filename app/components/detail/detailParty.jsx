import React from 'react'

export default class detailParty extends React.Component {
    render() {
        return(
          <div className="Card-root-1Dmx">
          <a className="LivePageParticipants-link-2pDP"><div><img alt="mike" className="LivePageParticipants-avatar-3fON Avatar-img--rfs Avatar-rounded-Rnjb" src={require('../../img/detail-avatar1.jpg')} width="24" height="24" />
          <img alt="二师兄" className="LivePageParticipants-avatar-3fON Avatar-img--rfs Avatar-rounded-Rnjb" src={require('../../img/detail-avatar2.jpg')}
           width="24" height="24"/>
           <img alt="彭珠珠" className="LivePageParticipants-avatar-3fON Avatar-img--rfs Avatar-rounded-Rnjb" src={require('../../img/detail-avatar3.jpg')}
          width="24" height="24" />
          <img alt="叶金锐" className="LivePageParticipants-avatar-3fON Avatar-img--rfs Avatar-rounded-Rnjb" src={require('../../img/detail-avatar4.jpg')} width="24" height="24" />
          <img alt="大虾" className="LivePageParticipants-avatar-3fON Avatar-img--rfs Avatar-rounded-Rnjb" src={require('../../img/detail-avatar5.jpg')} width="24" height="24" />
          </div><div>已有 100人参与</div>
          </a>
          </div>
        )
    }
}
