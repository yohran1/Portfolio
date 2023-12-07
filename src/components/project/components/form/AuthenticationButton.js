import React from 'react'
import {loginAction, logoutAction} from '../../actions/loginActions'
import { useDispatch, useSelector } from 'react-redux'

export default function AuthenticationButton(props){

    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const dispatch = useDispatch()

    return(
        isAuthenticated ?
        <button onClick={() => { dispatch(logoutAction()); }}>
            Logout
        </button>:
        <button onClick={() => { dispatch(loginAction()); }}>
            Login
        </button>
    )
}