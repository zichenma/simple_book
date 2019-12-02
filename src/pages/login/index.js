import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button} from './style';
import { actionCreators } from './store'

class Login extends PureComponent {
    render() {
        const { login, loginStatus } = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        {/* {innerRef is provided by styled Component, simlar as ref} */}
                        <Input placeholder='account' innerRef={input => this.account = input}></Input>
                        <Input placeholder='password' innerRef={input => this.password = input}></Input>
                        <Button onClick={() => login(this.account, this.password)}> Log In </Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
 
}


const mapDispatch = dispatch => ({
   login(accountElem, passwordElem) {
       dispatch(actionCreators.login(accountElem.value, passwordElem.value));
   }
})

const mapState = state => ({
    loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, mapDispatch)(Login);