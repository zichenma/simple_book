import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
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



class Header extends PureComponent {
    getListArea = () => {
        const {focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <SearchInfoTitle>
                    Most Popular
                    {/* 用这样的方式，可以把page 和 totalPage传到方法里，最后传到reducer里面 */}
                    <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                    <i ref={icon => this.spinIcon = icon} className='iconfont spin'>
                        &#xe606;
                    </i>
                        View More
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, handleInputBlur, handleInputFocus, list, login, logout} = this.props;
        return (
            <HeaderWrapper>
            <Link to='/'><Logo /></Link>
            <Nav>
                <NavItem className="left active">Home</NavItem>
                <NavItem className="left">Download App</NavItem>
                {login ?  
                <NavItem onClick={logout} className="right">Log Out</NavItem> 
                : <Link to={'/login'}><NavItem className="right">Log In</NavItem></Link>
                }
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
                    onFocus={() => handleInputFocus(list)}
                    onBlur={handleInputBlur}>
                </NavSearch>
                </CSSTransition>
                <i className={ focused ? 'focused iconfont zoom' : 'iconfont zoom' }>
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
       list: state.getIn(['header', 'list']),
       page: state.getIn(['header', 'page']),
       totalPage: state.getIn(['header', 'totalPage']),
       mouseIn: state.getIn(['header', 'mouseIn']),
       login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      handleInputFocus(list) {
          // optimize ajax request
        (list.size === 0) && dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
      },
      handleInputBlur() {
        const action = actionCreators.searchBlur();
        dispatch(action);
      },
      handleMouseEnter() {
          dispatch(actionCreators.mouseEnter());
      },
      handleMouseLeave() {
          dispatch(actionCreators.mouseLeave());
      },
      handleChangePage(page, totalPage, spin) {
         //spin.style.transform = 'rotate(360deg)';
         let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
         
         if (originAngle) {
             originAngle = parseInt(originAngle, 10);
         } else {
             originAngle = 0;
         }
      
         spin.style.transform = `rotate(${originAngle + 360}deg)`;
          if (page < totalPage) {
            dispatch(actionCreators.changePage(page + 1));
          } else {
            dispatch(actionCreators.changePage(1));
          }
      },
      logout() {
          dispatch(loginActionCreators.logout());
      }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);