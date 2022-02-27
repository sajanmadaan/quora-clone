import React, {useState} from 'react'

import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import { GoogleLogin } from 'react-google-login';



const initialState = {
    firstname: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Regis() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [user, setUser] = useState(initialState)

    const {firstname, email, password,cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(firstname) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post('/users/signup', {
                firstname, email, password
            })

            setUser({...user, err: '', success: res.data.msg})
            alert("Registration successful")
        } catch (err) {
            alert(err)
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/users/googlelogin', {tokenId: response.tokenId})

            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

   
    return (
        <div className="login_page">
            <h2>Register</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <div className="social">
                <GoogleLogin
                    clientId="217456144859-e4gkich4qdlee1um9m4ed9mbs4btgdre.apps.googleusercontent.com"
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name" id="firstname"
                    value={firstname} name="firstname" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="cf_password">Confirm Password</label>
                    <input type="password" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <button type="submit">Register</button>
                </div>
            </form>
           

            <p>Already an account? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default Regis;
