import React from 'react'
import request from '../commen/request.js'
import Loading  from '../commen/Loading.jsx'
export default class Specials extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          lists: [],
          loading:false
      }
  }
  componentWillMount(){
    this.setState({
      loading:true
    })
  }
  // 获取数据
  fetchFn = () => {
    var that=this
    request.get('http://rap.taobao.org/mockjs/7918/songhao/batch')
      .then((data) => {
        console.log(data.listData)
        this.setState(
          {
            lists:data.listData,
            loading:false
          }
        )
       })
      .catch((e) => { console.log(e.message) })
  }

  componentDidMount() {
       this.fetchFn()
  }
  render() {
    return (
        <div>
          <div className="Layout-layout-OUK">
            <div className="Layout-main-hHHt">
                <div className="Card-card-102t">
                    <div className="SpecialListsPage-banner"></div>
                    {
                        this.state.loading
                        ?<Loading/>
                        :null
                    }
                    {    
                        this.state.lists.map((e,index) => {
                        return (
                            <a className="SpecialListsPage-specialListItem-2Kk" key={index}>
                            <div className="SpecialListsPage-artwork-18yh"></div>
                            <div className="SpecialListsPage-description-3785 utils-textEllipsis-3FN2">
                            10 场 Live . 100 人 参与
                            </div>
                        </a>
                        )
                        })
                    }
                </div>
            </div>
          </div>
        </div>
    )
  }
}
