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
        }
    }
})
export default theme;