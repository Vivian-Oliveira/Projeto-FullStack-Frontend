import style from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

  export const ContainerFeed = style.div`
  display: block;
  justify-content: center;
  padding: 3%;
  
  `


  export const TitleFeed = style.h1`
  display: flex;
  justify-content: center;
  margin-top: 2vh;
  margin-bottom: 6vh;
  `
  