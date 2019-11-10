import pink from 'material-ui/colors/pink';
import teal from 'material-ui/colors/teal';

export default {
    palette: {
        primary: {
            light: pink[300],
            main: pink[500],
            dark: pink[700],
        },
        secondary: {
            light: teal[300],
            main: teal['A700'],
            dark: teal[700],
        }
    },
    status: {
        danger: 'orange',
    },
    typography: {
        button: {
            fontWeight: 400,
            textAlign: 'capitalize'
        },
    },
};
