import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useStyles } from '../SignupPage/styled';
import Retro from '../../assets/retro.png'
import Fundo_login  from '../../assets/fundo_login.jpg'
import { TitleFeed, ContainerFeed } from './styled';
import useProtectedPage from '../../hooks/useProtectedPage'



export const ImageListPage = () => {
  useProtectedPage()
  const classes = useStyles();

  const tileData = [
    {
       img: Retro,
       title: 'Image',
       author: 'author',
       cols: 0,
     },
     {
      img: Fundo_login,
      title: 'Image',
      author: 'author',
      cols: 0,

     },
     {
      img: Retro,
      title: 'Image',
      author: 'author',
      featured: false,

     },
     {
      img: Fundo_login,
      title: 'Image',
      author: 'author',
      featured: false,

     },
     {
      img: Retro,
      title: 'Image',
      author: 'author',
      featured: false,

     },
     {
      img: Fundo_login,
      title: 'Image',
      author: 'author',
      featured: false,

     },
     {
      img: Retro,
      title: 'Image',
      author: 'author',
      featured: false,

     },
     {
      img: Fundo_login,
      title: 'Image',
      author: 'author',
      
     },
     {
      img: Retro,
      title: 'Image',
      author: 'author',
      featured: false,

     },
     {
      img: Fundo_login,
      title: 'Image',
      author: 'author',
      featured: false,

     },
     {
      img: Retro,
      title: 'Image',
      author: 'author',
      cols: 2,

     },


   ];

  return (
    <ContainerFeed>
       <TitleFeed>Photo-Grid</TitleFeed>
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </ContainerFeed>
  );
}

export default ImageListPage
