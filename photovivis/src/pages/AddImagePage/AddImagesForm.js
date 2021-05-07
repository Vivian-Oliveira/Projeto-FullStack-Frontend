import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputsContainer, AddImageFormContainer } from "./styled";
import useForm from "../../hooks/useForm";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddImageForm = () => {
  const [form, onChange, clear] = useForm({
    subtitle: "",
    file: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <AddImageFormContainer>
        <InputsContainer>
          <TextField
            name={"subtitle"}
            value={form.subtitle}
            onChange={onChange}
            label={"Título"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            name={"file"}
            value={form.file}
            onChange={onChange}
            label={"Foto"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Adicionar Imagem</>
          )}
        </Button>
      </AddImageFormContainer>
    </form>
  );
};

export default AddImageForm;
