import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button} from './style';

class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='account'></Input>
                    <Input placeholder='password'></Input>
                    <Button> Log In </Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
 
}

const mapState = state => ({

});

const mapDispatch = dispatch => ({
   
})

export default connect(mapState, mapDispatch)(Login);