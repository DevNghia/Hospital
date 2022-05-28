import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
//import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            isshowPassword: false,
        }
    }

    handleOnChangeUsename = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = () => {
        console.log('username: ' ,this.state.username, 'password: ' ,this.state.password)
        console.log('all state ' ,this.state.password)
    }
    handleShowhidepassword = () =>{
        this.setState({
            isshowPassword: !this.state.isshowPassword
        })
    }
    render() {
        return (
           <div className='login-backgroud'>
               <div className='login-container'>
                   <div className='login-content row'>
                       <div className='col-12 text-login'>Login</div>
                       <div className='col-12 from-group login-input' >
                           <label>Username:</label>
                           <input type="text" className='form-control' 
                           placeholder='Enter your username'
                           value={this.state.username}
                           onChange={(event)=> this.handleOnChangeUsename(event)}
                           />
                       </div>
                       <div className='col-12 from-group login-input'>
                           <label>Password:</label>
                           <div className="custom-input-password">
                           <input 
                           type={this.state.isshowPassword ? 'text' : 'password'} 
                           className='form-control' 
                           placeholder='Enter your username'
                           value={this.state.password }
                           onChange={(event)=> this.handleOnChangePassword(event)}
                           />
                           <span onClick={()=>{this.handleShowhidepassword()}}>
                           <i className={this.state.isshowPassword ? 'fa-solid fa-eye icon' : 'fa-solid fa-eye-slash icon' } ></i>
                           </span>
                           </div>
                       </div>
                       <div className='col-12 '>
                       <button className='btn-login' onClick={()=>{this.handleLogin()}}>Login</button>
                       </div>
                       <div className='col-12'>
                           <span className='forgot-password'>Forgot your password?</span>
                       </div>
                       <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or login with:</span>
                       </div>
                       <div className='col-12 social-login'>
                       <i className="fab fa-google-plus-g google"></i>
                       <i className="fab fa-facebook-f facebook"></i>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
