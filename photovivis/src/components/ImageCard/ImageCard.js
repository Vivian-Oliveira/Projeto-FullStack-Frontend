import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { ImageCardContainer, ImageCardContent} from './styled'

const ImageCard = (props) => {

  return (
    <ImageCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.title}
          height={'150px'}
          // width={'100%'}
          image={props.image}
          title={props.title}
        />
        <ImageCardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
        </ImageCardContent>
      </CardActionArea>
    </ImageCardContainer>
  )
}

export default ImageCard
