import { Route } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function PrivateRoute({children, ...rest}){
    const login = useSelector(state => state)
    // <Route {...rest}
    //     render={({location}) => {
    //         login?(children):
            
    //     }}    
    // >

    // </Route>

}