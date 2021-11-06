import { InputAdornment, TextField } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(createStyles({
  label: {
    margin: "8px 0"
  },
  input: {
    "& .MuiInputBase-root": {
      borderRadius: 12
    }
  }
}));

const MyInput = ({ label, icon, value, onChange, placeholder, ...rest }) => {
  const classes = useStyles();

  return (
    <>
      <p className={classes.label}>{label}</p>
      <TextField 
        className={classes.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        inputProps={{
          autoComplete: "new-password",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          )
        }}
        {...rest}
      />
    </>
  );
};

export default MyInput;
