var  React =require('react')
var ReactDOM = require('react-dom');
var Modal = require('react-modal')

var detailActity =React.createClass({
    getInitialState: function() {
    return {
      modalIsOpen: false,
      modalIsOpenGift:false,
      modalIsOpenPay:false,
      inputNum:5,
      sumNum:9.9
     }
  },
  componentDidMount() {

  },
  //改变input的值
  handleChange: function(event) {
    this.setState({inputNum: event.target.value});
  },
  //加
  plus:function(){
    var num=this.state.inputNum
    num++
    this.setState({inputNum: num})
  },
  //减
   subtract:function(){
     var num=this.state.inputNum
     num--
     if(num==0){
       num=0
       return false
     }
     this.setState({inputNum: num})
   },
  // 赞助
  openModalSponsorship: function() {
    this.setState({modalIsOpen: true})
  },
  //礼物
  openModalGift: function() {
    this.setState({modalIsOpenGift: true})
  },
  //支付
  pay(){
    this.setState({modalIsOpen: false})
    this.setState({modalIsOpenGift: false})
    this.setState({modalIsOpenPay: true})
  },
  afterOpenModal: function() {
  },

  closeModal: function() {
    this.setState({modalIsOpen: false})
    this.setState({modalIsOpenGift: false})
    this.setState({modalIsOpenPay: false})
 },
    render() {
      var inputNum = this.state.inputNum
        return(
        <div className="LivePage-liveActions-EgLr Card-root-1Dmx">
            <div className="LivePage-buttonWrapper-2FzJ">
            <button className="LivePage-button-181X LivePage-applyButton-3KH8 Button-primary-5q6- Button-buttonBase-3YR6 Button-base-3ydE Button-block-3rjb"
            onClick={this.openModalSponsorship}>赞助并参与活动¥1.9
            </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              overlayClassName="Dialog-overlay-2RlI"
              className="Dialog-content-3qxv"
            >
            <div className="DialogContent-content-2pSe">
              <h1 className="DialogTitle-root-1xzv">提示</h1>
              <div className="ConfirmDialog-text-SoKk">当前 Live 互动环节已结束，你仍然可以参与并浏览全部内容，但将不能提问，是否继续？</div>
              <button className="Button-primary-5q6- Button-buttonBase-3YR6 Button-base-3ydE Button-block-3rjb" onClick={this.pay}>继续</button>
            </div>
            <button title="关闭" className="Dialog-closeButton-2qrC" onClick={this.closeModal}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><title>close</title>
            <path d="M11.75 10.94L8.034 7.223c-.29-.29-.764-.29-1.057.003-.295.295-.294.766-.003 1.057L10.69 12l-3.716 3.716c-.29.29-.292.762.003 1.057.293.293.766.294 1.057.003l3.716-3.715 3.716 3.718c.29.29.764.29 1.057-.003.295-.295.294-.766.003-1.057L12.81 12l3.716-3.716c.29-.29.292-.762-.003-1.057-.293-.293-.766-.294-1.057-.003L11.75 10.94z" fillRule="evenodd"></path>
            </svg></button>
            </Modal>
            <button className="LivePage-giftButton-1fYX Button-ghost-37SQ Button-buttonBase-3YR6 Button-base-3ydE Button-primary-5q6- Button-buttonBase-3YR6 Button-base-3ydE Button-block-3rjb" onClick={this.openModalGift}>
            <svg fill="currentColor" width="22" height="22" className="LivePage-giftIcon-29DK" viewBox="0 0 44 44">
            <path fillRule="evenodd" d="M18.8612798,16 L9,16 L9,38 L21,38 L21,18.1039516 L17.5787887,21.6452164 L15.4212113,19.5607836 L18.8612798,16 L18.8612798,16 Z M26.3625418,16 L36,16 L36,38 L24,38 L24,17.8981528 L28.0656575,21.6987748 L30.1143425,19.5072252 L26.3625418,16 L26.3625418,16 Z M34.9498943,13 C35.8413503,11.9542909 36.37,10.6670339 36.37,9.253 C36.37,5.40725129 33.9476021,2.5 29.922,2.5 C26.8447702,2.5 24.2661468,3.98247309 22.685,6.77307456 C21.1038532,3.98247309 18.5252298,2.5 15.448,2.5 C11.4223979,2.5 9,5.40725129 9,9.253 C9,10.6670339 9.52864968,11.9542909 10.4201057,13 L9.00135749,13 C7.33451092,13 6,14.3415745 6,15.9964905 L6,38.0035095 C6,39.6495018 7.34375352,41 9.00135749,41 L35.9986425,41 C37.6654891,41 39,39.6584255 39,38.0035095 L39,15.9964905 C39,14.3504982 37.6562465,13 35.9986425,13 L34.9498943,13 L34.9498943,13 Z M16.685,12.695 C15.0153042,12.3281695 12,11.0707373 12,9.253 C12,6.95538513 13.212665,5.5 15.448,5.5 C18.5820251,5.5 20.930499,7.80473787 21.3146969,12.7214081 C21.3512279,13.1889031 18.3546958,13.0618305 16.685,12.695 L16.685,12.695 Z M33.37,9.253 C33.37,11.0707373 30.9924107,12.3072825 28.685,12.695 C26.3775893,13.0827175 24.0173788,13.226092 24.0512337,12.7745617 C24.4226173,7.82134685 26.7767026,5.5 29.922,5.5 C32.157335,5.5 33.37,6.95538513 33.37,9.253 L33.37,9.253 Z"></path></svg>送给好友</button>
            <Modal
              isOpen={this.state.modalIsOpenGift}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              overlayClassName="Dialog-overlay-2RlI"
              className="Dialog-content-3qxv"
            >
            <div className="DialogContent-content-2pSe">
              <div className="GiftDialog-title-2z4r">前端开发者成长之路</div>
              <div className="GiftDialog-subTitle-1MIQ">赠礼将于 90 天后过期，</div>
              <div className="GiftDialog-subTitle-1MIQ">过期未领取的 Live 不退回</div>
              <div className="GiftDialog-detailItem-2uRC">
                <div className="GiftDialog-detailTitle-2Uzm">支付方式</div>
                <div className="GiftDialog-wechatPay-198p">
                <svg fill="currentColor" width="14" height="14" className="GiftDialog-wechatIcon-2kJO" viewBox="0 0 24 24"><title>wechat_pay</title><path d="M8.68 14.624c-.107.056-.23.088-.358.088-.298 0-.557-.168-.694-.416l-.05-.118-2.174-4.875c-.024-.053-.038-.113-.038-.172 0-.223.178-.406.398-.406.09 0 .17.03.238.08l2.563 1.868c.188.126.41.2.652.2.144 0 .28-.028.408-.076l12.057-5.488C19.522 2.703 15.962 1 11.934 1 5.344 1 0 5.554 0 11.172c0 3.065 1.608 5.824 4.123 7.688.202.148.335.39.335.663 0 .09-.02.173-.042.26l-.538 2.05c-.025.097-.064.198-.064.3 0 .223.178.405.398.405.086 0 .156-.033.23-.076l2.612-1.542c.197-.116.404-.188.634-.188.122 0 .24.02.35.054 1.22.358 2.534.558 3.896.558 6.59 0 11.934-4.554 11.934-10.172 0-1.702-.493-3.304-1.36-4.714L8.77 14.573l-.087.05z" fill="#00C800" fillRule="evenodd"></path></svg>微信支付
                </div>
              </div>
              <div className="GiftDialog-detailItem-2uRC">
              <div className="GiftDialog-detailTitle-2Uzm">赠送数量</div>
              <div><div className="NumberSetter-container-1Ptd">
              <button className="NumberSetter-adjustButton-ahDs"><svg fill="currentColor" width="16" height="16" viewBox="24 28 32 4"
              onClick={this.subtract}><path fillRule="evenodd" d="M24 28h32v4H24z"></path></svg></button>
              <input type="number" className="NumberSetter-input-I7-A" pattern="[0-9]*" value={inputNum}  onChange={this.handleChange}/>
              <button className="NumberSetter-adjustButton-ahDs" onClick={this.plus}>
              <svg fill="currentColor" width="16" height="16" viewBox="134 14 32 32">
              <path fillRule="evenodd" d="M166 28.452h-14.452V14h-3.096v14.452H134v3.096h14.452V46h3.096V31.548H166"></path></svg></button>
              </div></div></div>
              <div className="GiftDialog-detailItem-2uRC"><div className="GiftDialog-detailTitle-2Uzm">合计</div>
              <div className="GiftDialog-price-14cN">¥{(9.99*inputNum).toFixed(2)}
              </div>
              </div>
              <button className="Button-primary-5q6- Button-buttonBase-3YR6 Button-base-3ydE Button-block-3rjb" onClick={this.pay}>打包{inputNum}份赠礼</button>
            </div>
            <button title="关闭" className="Dialog-closeButton-2qrC" onClick={this.closeModal}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><title>close</title>
            <path d="M11.75 10.94L8.034 7.223c-.29-.29-.764-.29-1.057.003-.295.295-.294.766-.003 1.057L10.69 12l-3.716 3.716c-.29.29-.292.762.003 1.057.293.293.766.294 1.057.003l3.716-3.715 3.716 3.718c.29.29.764.29 1.057-.003.295-.295.294-.766.003-1.057L12.81 12l3.716-3.716c.29-.29.292-.762-.003-1.057-.293-.293-.766-.294-1.057-.003L11.75 10.94z" fillRule="evenodd"></path>
            </svg></button>
            </Modal>
            <Modal
              isOpen={this.state.modalIsOpenPay}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              overlayClassName="Dialog-overlay-2RlI"
              className="Dialog-content-3qxv QRCodePaymentModal-dialog-2jfa "
            >
            <div className="QRCodePaymentModal-content-2pni">
              <div className="QRCodePaymentModal-imgWrapper-IJGB">
              <img className="QRCodePaymentModal-img-3eMI" src="//www.zhihu.com/qrcode?url=weixin%3A%2F%2Fwxpay%2Fbizpayurl%3Fpr%3Dhe6sP6u" />
              </div>
              <h2 className="QRCodePaymentModal-title-27h-"><svg width="24" height="24" fill="currentColor" className="QRCodePaymentModal-icon-1oS6" viewBox="0 0 24 24"><title>wechat_pay</title><path d="M8.68 14.624c-.107.056-.23.088-.358.088-.298 0-.557-.168-.694-.416l-.05-.118-2.174-4.875c-.024-.053-.038-.113-.038-.172 0-.223.178-.406.398-.406.09 0 .17.03.238.08l2.563 1.868c.188.126.41.2.652.2.144 0 .28-.028.408-.076l12.057-5.488C19.522 2.703 15.962 1 11.934 1 5.344 1 0 5.554 0 11.172c0 3.065 1.608 5.824 4.123 7.688.202.148.335.39.335.663 0 .09-.02.173-.042.26l-.538 2.05c-.025.097-.064.198-.064.3 0 .223.178.405.398.405.086 0 .156-.033.23-.076l2.612-1.542c.197-.116.404-.188.634-.188.122 0 .24.02.35.054 1.22.358 2.534.558 3.896.558 6.59 0 11.934-4.554 11.934-10.172 0-1.702-.493-3.304-1.36-4.714L8.77 14.573l-.087.05z" fill="#00C800" fillRule="evenodd"></path></svg>微信扫码支付</h2>
            </div>
            <button title="关闭" className="Dialog-closeButton-2qrC" onClick={this.closeModal}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><title>close</title>
            <path d="M11.75 10.94L8.034 7.223c-.29-.29-.764-.29-1.057.003-.295.295-.294.766-.003 1.057L10.69 12l-3.716 3.716c-.29.29-.292.762.003 1.057.293.293.766.294 1.057.003l3.716-3.715 3.716 3.718c.29.29.764.29 1.057-.003.295-.295.294-.766.003-1.057L12.81 12l3.716-3.716c.29-.29.292-.762-.003-1.057-.293-.293-.766-.294-1.057-.003L11.75 10.94z" fillRule="evenodd"></path>
            </svg></button>
            </Modal>
            </div>
            <div className="LivePage-alert-14y5">为了让更多人拥有参与 Live 的机会，本场 Live 特别定价为 1.90 元，Live 结束后价格将回到 19 元，欢迎大家参与。</div>
        </div>
        )
    }
})
module.exports = detailActity
