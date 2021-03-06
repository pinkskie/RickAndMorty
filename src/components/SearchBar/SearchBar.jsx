import { InputAdornment, TextField, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";

const SearchBar = ({ value, onChange, label, hideFilter = false }) => {
  return (
    <div style={{ padding: 16 }}>
      <TextField 
        variant='outlined'
        placeholder={label}
        fullWidth
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon/>
            </InputAdornment>
          ),
          endAdornment: !hideFilter ? (
            <InputAdornment position='end'>
              <IconButton>
                <FilterListIcon/>
              </IconButton>
            </InputAdornment>
          ) : null
        }}
      />
    </div>
  );
};

export default SearchBar;
