import React from 'react'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import SignupForm from './SignupForm'

const SignupPage = (props) => {
    useUnProtectedPage()
    return(
        <div>
            <SignupForm />
        </div>
    )
}

export default SignupPage