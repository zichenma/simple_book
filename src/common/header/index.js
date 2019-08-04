import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
    SearchWrapper
} from './style';


class Header extends Component {
    getListArea = () => {
        const {focused, list} = this.props;
        if (focused) {
            return (
                <SearchInfo>
                <SearchInfoTitle>
                    Most Popular
                    <SearchInfoSwitch>
                        View More
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {
                        list.map((item, index) => {
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })
                    }
                </SearchInfoList>
            </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, handleInputBlur, handleInputFocus } = this.props;
        return (
            <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">Home</NavItem>
                <NavItem className="left">Download App</NavItem>
                <NavItem className="right">Log In</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                <CSSTransition
                    in={ focused }
                    timeout={ 200 } 
                    classNames="slide" 
                >
                <NavSearch className={ focused ? 'focused' : '' }
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}>
                </NavSearch>
                </CSSTransition>
                <i className={ focused ? 'focused iconfont' : 'iconfont' }>
                    &#xe637;
                </i>
                {this.getListArea()}
                </SearchWrapper>
                <Addition>
                    <Button className="writting">
                    <i className="iconfont">&#xe615;</i>Compose
                    </Button>
                    <Button className="reg">Register</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        // focused : state.header.focused
        // immutable 下如果需要调用某个属性，需要：
        // 但是 .header 为属性获取，.get为immutable api 获取， 为了
        // 统一，引入 redux-immutable
        // focused : state.header.get('focused')
        // after using redux-immutable:
        // using get api
        // focused : state.get('header').get('focused')
        // using get in:
       focused: state.getIn(['header', 'focused']),
       list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      handleInputFocus() {
        dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
      },
      handleInputBlur() {
        const action = actionCreators.searchBlur();
        dispatch(action);
      }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);