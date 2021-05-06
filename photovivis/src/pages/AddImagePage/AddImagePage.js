import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const AddImagePage = (props) => {
    useProtectedPage()
    return(
        <div>
            Create Post
        </div>
    )
}

export default AddImagePage