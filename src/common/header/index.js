import React , { Component } from 'react';
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

class Header extends Component {
    render() {
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
                    <NavSearch></NavSearch>
                    <i className="iconfont">&#xe637;</i>
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

export default Header;