import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import AddImageForm from './AddImagesForm'
import { ImageContainer, ScreenContainer } from './styled'
import Typography from '@material-ui/core/Typography'


const AddImagePage = () => {
    useProtectedPage()
    return(
        <ScreenContainer>
            <ImageContainer>
            <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Imagem</Typography>
                <AddImageForm/>
            </ImageContainer>
        </ScreenContainer>
    )
}

export default AddImagePage