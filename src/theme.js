import { createMuiTheme } from '@material-ui/core/styles';
import {
    blue,
    blueGrey
} from '@material-ui/core/colors';

export const primary = blue; // * #2196f3
export const primary600 = '';
export const primaryLight = '';
export const primaryDark = '';
export const secondary = blueGrey; // * #607d8b
export const secondaryLight = blueGrey[200]; // * #b0bec5
export const secondaryDark= blueGrey[900]; // * #263238
// export const accent = '#673AB7';
// export const accentLight = '#7e57c2';
// export const accentDark = '#4527a0';
export const white = blueGrey[50]; // * #eceff1
export const red = '#F44336';

const theme = createMuiTheme({
    palette: {
        primary,
        secondary
    },
    overrides: {
        MuiChip: {
            root: {
                padding: 3
            },
            label: {
                color: white,
                fontWeight: 800
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: secondary[800],
                color: white
            }
        },
        MuiAlert: {
            standardError: {
                color: 'rgb(250, 179, 174)',
                backgroundColor: 'rgb(24, 6, 5)'
            }
        }
    //     MuiBackdrop: {
    //         root: {
    //             zIndex: 2
    //         }
    //     },
    //     MuiCircularProgress: {
    //         colorPrimary: {
    //             color: primary,
    //             zIndex: 5
    //         },
    //         colorSecondary: {
    //             color: secondary
    //         }
    //     },
    //     MuiRadio: {
    //         colorPrimary: {
    //             color: white,
    //             '&$checked': {
    //                 color: accentLight
    //             }
    //         }
    //     },
    //     MuiCheckbox: {
    //         colorPrimary: {
    //             color: white,
    //             '&$checked': {
    //                 color: accentLight
    //             }
    //         }
    //     },
    //     MuiSvgIcon: {
    //         colorPrimary: {
    //             color: primaryLight
    //         },
    //         colorSecondary: {
    //             color: white
    //         }
    //     },
    //     MuiIconButton: {
    //         colorPrimary: {
    //             color: primary
    //         },
    //         colorSecondary: {
    //             color: white
    //         }
    //     },
    //     MuiButton: {
    //         textPrimary: {
    //             color: primary
    //         },
    //         outlinedPrimary: {
    //             color: primary,
    //             borderColor: primary600,
    //             '&:hover': {
    //                 '@media (hover: none)': {
    //                     borderColor: primary,
    //                 },
    //             },
    //         },
    //         containedPrimary: {
    //             backgroundColor: primary,
    //             '&:hover': {
    //                 backgroundColor: primaryDark,
    //                 '@media (hover: none)': {
    //                     backgroundColor: primary,
    //                 },
    //             },
    //         },
    //         containedSecondary: {
    //             backgroundColor: secondary,
    //             '&:hover': {
    //                 backgroundColor: secondaryLight,
    //                 '@media (hover: none)': {
    //                     backgroundColor: secondary,
    //                 },
    //             },
    //         }
    //     }
    }
});

export default theme;