import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight } from './style';

class Home extends Component {
    componentDidMount() {
        this.props.handleChangeHome();
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4732/5d0b947b56c13a3d5e96fe8fe77c66079deed975.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        topicList : state.getIn(['home', 'topicList']),
        articleList : state.getIn(['home', 'articleList']),
        recommendList : state.getIn(['home', 'recommendList'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeHome () {
            dispatch(actionCreators.getHomeData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);