import React from 'react'
import Slider from '../lib/Slider.jsx'
import NavLink from '../lib/NavLink.jsx'
import request from '../commen/request.js'
import Loading  from '../commen/Loading.jsx'
import {livesData1,livesData2} from '../../staticdata/livesData'
export default class Lives extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: [],
            loading: false,
            bottomTxt: '',
            pageIndex: 1,
            pageCount: 0,

        }
    }

    componentWillMount() {
        this.setState({
            loading: true
        })
    }

    // 获取数据
    fetchFn = () => {
        console.log("fetchFn")
        var that = this
        // var url='http://rapapi.org/mockjsdata/23356/lives'
        that.setState({
            pageCount: livesData1.total
        })

        if (that.state.pageIndex == 1) {
            that.setState({lists: livesData1.data, loading: false})
        } else {
            that.setState({lists: that.state.lists.concat(livesData2.listData), loading: false})
        }
        that.setState({pageIndex: that.state.pageIndex + 1}, function () {
            console.log("pageIndex", that.state.pageIndex);
        })

    }

    // request.post(url,{
    //   page:that.state.pageIndex
    // })
    //   .then((data) => {
    //
    //     that.setState({
    //       pageCount:data.total
    //     })
    //     if(that.state.pageIndex == 1){
    //             that.setState({lists: data.listData,loading:false})
    //         }else{
    //             that.setState({lists: that.state.lists.concat(data.listData),loading:false})
    //         }
    //         that.setState({pageIndex: that.state.pageIndex+1},function(){
    //             console.log("pageIndex",that.state.pageIndex);})
    //    })
    //   .catch((e) => { console.log(e.message) })

componentWillUnmount()
{
    document.removeEventListener('scroll', this.handleScroll);
}

componentDidMount()
{
    this.fetchFn()
    document.addEventListener('scroll', this.handleScroll);
}

handleScroll = () => {
    var that = this;
    var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    if (scrolltop + clientHeight == document.body.clientHeight) {
        if (that.state.pageIndex <= that.state.pageCount) {
            that.fetchFn();
        } else {
            that.setState({bottomTxt: '我是有底线的'});
        }
    }
}

render()
{
    var that = this
    return (
            <div>
                <div className="lives">
                    <div className="Card-root-1Dmx Card-group-24-a">
                        <Slider/>
                        {
                            that.state.loading
                                    ? <Loading/>
                                    : null
                        }
                        {
                            this.state.lists.map((e, index) => {
                                return (
                                        <div className="Card-root-1Dmx" key={index}>
                                            <NavLink to="/detail"
                                                     className="LiveItem-root-a6A2 common-clearfix-3JMt">{e.involvement}
                                                天热门
                                                <img className="LiveItem-avatar-vumW Avatar-img--rfs" src={e.avatar}
                                                     width="60" height="60"/>
                                                <div className="LiveItem-content-1pZp">
                                                    <svg fill="currentColor" className="LiveItem-arrow-1bM5"
                                                         width="48" height="48" viewBox="0 0 48 48"><title>
                                                        arrow</title>
                                                        <path d="M19.608308 11.291022c-.39064-.387697-1.037868-.388717-1.42788-.019096l-1.879672 1.7814c-.397956.37715-.40446 1.001224-.020242 1.388148l9.488537 9.55542-9.488535 9.55542c-.386777.389504-.36977 1.01853.020242 1.38815l1.879672 1.7814c.397955.37715 1.041186.364683 1.42788-.019096l12.09502-12.003886c.39064-.387697.386693-1.020195 0-1.403974L19.60831 11.291022z"></path>
                                                    </svg>
                                                    <div className="LiveItem-subject-1fn7 common-textEllipsis-3N5q">{e.title}</div>
                                                    <div className="LiveItem-authorName-ghXZ common-textEllipsis-3N5q">{e.author}</div>
                                                    <div className="LiveItem-tag-PtGy"><span
                                                            className="Label-root-xrSQ">5 小时后开始</span></div>
                                                </div>
                                            </NavLink>
                                        </div>
                                )
                            })
                        }
                        { that.state.bottomTxt ? <div className="loadmore">{that.state.bottomTxt}</div> : null }
                    </div>
                </div>
            </div>
    )
}
}
