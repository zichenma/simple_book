import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';

class Home extends PureComponent {
    componentDidMount() {
        this.props.handleChangeHome();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollToShow);
    }
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollToShow);
    }
    render() {
        const { showScroll } = this.props;
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
                {showScroll && <BackTop onClick={this.handleScrollTop}>Top</BackTop>}
            </HomeWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        topicList : state.getIn(['home', 'topicList']),
        articleList : state.getIn(['home', 'articleList']),
        recommendList : state.getIn(['home', 'recommendList']),
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeHome () {
            dispatch(actionCreators.getHomeData())
        },
        changeScrollToShow() {
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleTopShow(true))
            } else {
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);