import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { ScreenContainer, ImageContainer, Images } from "./styled";
import Typography from '@material-ui/core/Typography'

const DetailsPage = (props) => {
  const params = useParams();
  const imageDetail = useRequestData({}, `${BASE_URL}/image/${params.id}`);

  useProtectedPage();
  return (
    <ScreenContainer>
      {imageDetail && (
        <ImageContainer>
          <Typography
            gutterBottom
            align={"center"}
            variant={"h4"}
            color={"primary"}
          >
            {imageDetail.subtitle}
          </Typography>
          <Images src={imageDetail.file} />
        </ImageContainer>
      )}
    </ScreenContainer>
  );
};

export default DetailsPage;
