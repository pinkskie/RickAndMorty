import { createTheme } from '@material-ui/core/styles';
import { PaletteRounded } from '@material-ui/icons';

const palette = {
    type: 'dark',
    primary: {
        main: '#43D049'
    },
    background: {
        default: '#0B1E2D',
        paper: '#152A3A'
    },
    secondary: {
        main: '#5B6975'
    }
};
const button = {
    type: 'light',
    primary: {
        main: '#22A2BD'
    }
}
const theme = createTheme({
    palette,
    overrides: {
        MuiOutlinedInput:  {
            root: {
                borderRadius: '999rem',
                background: palette.background.paper
            },
            notchedOutline: {
                borderColor: 'transparent',
            }
        },
        MuiBottomNavigationAction: {
            root: {
                color: palette.secondary.main
            }
        },
        MuiButton: {
            containedPrimary: {
                backgroundColor: '#22A2BD',
                borderRadius: '12px',
                color: 'white',
                textTransform: 'inherit'
            }
        }
    }
})
export default theme;