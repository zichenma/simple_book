import React, { Component } from 'react';
import { connect } from 'react-redux';
// Topic 组件比较小，因此可以定义一个wrapper把样式放于上层组件style.js中
import { TopicWrapper, TopicItem  } from '../style';

class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map( item => (
                        <TopicItem key={item.get('id')}>
                        <img className='topic-pic' src={item.get('imgUrl')} alt="" />
                            {item.get('title')}
                        </TopicItem> 
                    ))
                }  
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);