import React from 'react'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import SignupForm from './SignupForm'

const SignupPage = ({setRightButtonTest}) => {
    useUnProtectedPage()
    return(
        <div>
            <SignupForm setRightButtonTest={setRightButtonTest} />
        </div>
    )
}

export default SignupPage