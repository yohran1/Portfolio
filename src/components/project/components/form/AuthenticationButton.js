import React from 'react'
import {loginAction, logoutAction} from '../../actions/loginActions'
import { useDispatch, useSelector } from 'react-redux'

export default function AuthenticationButton(props){

    const login = useSelector(state => state)
    const dispatch = useDispatch()

    return(
        login ?
        <button onClick={() => {dispatch(logoutAction())}}>
            logout
        </button>:
        <button onClick={() => {dispatch(loginAction())}}>
            login
        </button>
    )
}