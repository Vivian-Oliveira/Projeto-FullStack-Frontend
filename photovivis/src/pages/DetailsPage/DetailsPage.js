import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'


const DetailsPage = (props) => {
    useProtectedPage()
    return(
        <div>
            DetailsPage
        </div>
    )
}

export default DetailsPage