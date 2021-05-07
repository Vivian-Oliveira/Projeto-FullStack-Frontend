import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/urls'
import ImageCard from '../../components/ImageCard/ImageCard';
import { ImageListContainer, AddImageButton } from './styled';
import { Add } from '@material-ui/icons'
import { goToAddImage, goToDetails } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom'


const ImageListPage = () => {
  useProtectedPage()
  const history = useHistory()
  const allImages = useRequestData([], `${BASE_URL}/image/all`)

  const onclickCard = (id) => {
    goToDetails(history, id)
  }


  const imageCard = allImages.map((image) => {
    return(
      <ImageCard 
        key={image.id}
        title={image.subtitle}
        author={image.author}
        date={image.date}
        image={image.file} 
        onClick={() => onclickCard(image.id)}     
      />
    )
  })
  
  return(
    <ImageListContainer>
      {imageCard}
      <AddImageButton
         color={"primary"} 
         onClick={() => goToAddImage(history)}
         >
           <Add />
        </AddImageButton> 
        
      
    </ImageListContainer>
  )
}

export default ImageListPage