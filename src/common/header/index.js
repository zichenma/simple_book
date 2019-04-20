import React , { Component } from 'react';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem,
    NavSearch,
    Addition,
    Button
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
                   <NavItem className="right">Aa</NavItem>
                   <NavSearch></NavSearch>
                   <Addition>
                       <Button className="writting">Compose</Button>
                       <Button className="reg">Register</Button>
                   </Addition>
               </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header;