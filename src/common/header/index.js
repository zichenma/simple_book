import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  { actionCreators } from './store';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';


const Header = (props) => {
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
                in={ props.focused }
                timeout={ 200 } 
                classNames="slide" 
            >
            <NavSearch className={ props.focused ? 'focused' : '' }
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}>
            </NavSearch>
            </CSSTransition>
            <i className={ props.focused ? 'focused iconfont' : 'iconfont' }>
                &#xe637;
            </i>
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

const mapStateToProps = (state) => {
    return {
        focused : state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      handleInputFocus() {
        const action = actionCreators.searchFocus();
        dispatch(action);
      },
      handleInputBlur() {
        const action = actionCreators.searchBlur();
        dispatch(action);
      }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);