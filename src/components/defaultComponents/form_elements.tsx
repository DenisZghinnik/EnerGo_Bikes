import {Button, TextField, withStyles} from "@material-ui/core";
import {grey, greyHover} from "../../css vars/colors";
import {css} from "styled-components";
import {ChangeEvent} from "react";

export const CssTextInput = withStyles({
  root: {
    '& label.Mui-focused': {color:  grey,},
    '& .MuiOutlinedInput-root': {
        minHeight: '50px',
        '&.Mui-focused fieldset': {borderColor: grey},
    },
  },
})(TextField);

export const CssSubmitButton = withStyles({
    root: {
        height: '60px',
        backgroundColor: '#000',
        fontSize: '15px',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 600,
        marginTop: '20px',
        marginBottom: '20px',
        '&:hover' : {
            backgroundColor: greyHover,
        }
    }
})(Button);

export const CssAdditionalButton = withStyles({
    root:{
    textTransform: 'none',
    color: '#c5c4c4',
    fontSize: '15px',
    '&:hover': {
        color: greyHover,
    }
}
})(Button)

export const formTitleIconStyle = css`&& {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 55px;
  margin-bottom: 10px;
}`;

export const textInputCreator = (type:string,
                                 focus:boolean,
                                 value:string|null,
                                 handler: (e: string | ChangeEvent ) => void,
                                 error1: boolean | undefined,
                                 error2: string | undefined
                                 ) => {
    const label = type[0].toUpperCase() + type.slice(1);
    return (
        <>
            <CssTextInput
                value={value}
                onChange={handler}
                id={type}
                label={label}
                name={type}
                error={error1&&Boolean(error2)}
                helperText={error1&&error2}
                autoFocus={focus}
                variant="outlined"
                margin="normal"
                fullWidth
            />
        </>
    )
}