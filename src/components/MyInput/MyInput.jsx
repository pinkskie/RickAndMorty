import { makeStyles, createStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
    border: {
        '& .MuiInputBase-root': {
            borderRadius: 12
        }
    }
  }));

const MyInput = ({label, icon, value, onChange,placeholder}) => {
    const classes = useStyles();
    return (
        <>
            <p style={{margin:'8px 0'}}>{label}</p>
            <TextField 
                className={classes.border}
                variant='outlined'
                placeholder={placeholder}
                fullWidth
                value={value}
                onChange={onChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            {icon}
                        </InputAdornment>
                    )
                }}
            />
        </>
        
     );
}

export default MyInput;
