import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        h1: {
            fontSize: "2em"
        }
    },
    palette: {
        primary: {
            main: "#1976d2",
            light: "#63a4ff",
            dark: "#004ba0",
            contrast: "#fff"
        },
        secondary: {
            main: "#e53935",
            light: "#ff6f60",
            dark: "#ab000d",
            contrast: "#000"
        }
    }
});

console.log(theme);

function withRoot(Component) {
    function WithRoot(props) {
        // MuiThemeProvider makes the theme available down the React tree
        // thanks to React context.
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </MuiThemeProvider>
        );
    }

    return WithRoot;
}

export default withRoot;
