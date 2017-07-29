import React from 'react'
export default class detailDes extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          lists: [],
          where:'暂无live'
      }
  }
  componentDidMount(){
    let where=this.refs.omitted.innerHTML
    this.setState({
      where:where
    })
    let omitted=where.substr(0,80)+'...'
    this.refs.omitted.innerHTML=omitted
  }
  handlerDelete(){
    let where=this.state.where
    this.refs.omitted.innerHTML=where
    this.refs.deleted.remove()
  }
    render() {
        return(
          <div>
            <div className="LivePage-description-dZ-4 Card-root-1Dmx">
            <h2 className="LivePage-title-2GsD">Live 简介</h2>
            <div className="LivePage-content-2uDl" ref="omitted">
            我是王煜全，海银资本创始合伙人， Frost&amp;Sullivan 中国区首席顾问，海外科技产业投资，全球科技前沿分析跟踪者，社会互联网战略咨询专家，《全球风口》作者。
            本次 Live我是马虫，《前列县志：一本书读懂前列腺》作者。哈佛大学医学院联合培养博士生，专业泌尿外科。敬业的外科医生，逗比的理想主义者。知乎医学话题下优秀回答者。我喜欢自己作为泌尿科医生的工作，当我用充满感情的手指抚摸患者前列腺的时候；当恰当的诊疗让患者症状改善的时候；当我收到邀请，开展这场 Live 的时候。
          </div><span className="Summary-expandButton-1roc" ref="deleted"onClick={this.handlerDelete.bind(this)}>展开全部</span>
            </div>
            <div className="LivePage-description-dZ-4 Card-root-1Dmx"><h2 className="LivePage-title-2GsD">Live 须知</h2><div className="LivePage-content-2uDl">版权声明：讲者在本产品上发表的全部原创内容（包括但不限于文字、音频、图片等）著作权均归讲者本人所有。未经讲者授权许可，听众用户不得以任何载体或形式使用讲者的内容。</div></div>
          </div>

        )
    }
}
