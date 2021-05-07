import React from 'react'
import { Container, ErrorImage } from './styled'
import error from '../../assets/error.jpg'

const ErrorPage = (props) => {
    return(
        <Container>
            <ErrorImage src={error}/> 
        </Container>
    )
}

export default ErrorPage