import { createTheme } from '@mui/material/styles';



// ----------------    MUI THEME    ----------------
export default function getTheme(lang = 'fa') {
  return createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
      mode: "light",
    },
    direction: lang === "fa" ? "rtl" : "ltr",
    typography: {
      fontFamily: 'IRANYekan, Arial, sans-serif',
    },
  });
}

// ----------------    TAILWIND THEME COLOR   ----------------

export function colors (){
    const muiTheme = getTheme()
    const colors = {
        primary:"",
        secondary:"",
    }
    // console.log(muiTheme.palette.mode);
    switch (muiTheme.palette.mode) {
        case "light":
            colors.primary = muiTheme.palette.primary.light
            colors.secondary = muiTheme.palette.secondary.light
            break;
        case "dark":
            colors.primary = muiTheme.palette.primary.dark
            colors.secondary = muiTheme.palette.secondary.dark
            break;
    
        default:
             colors.primary = muiTheme.palette.primary.main
            colors.secondary = muiTheme.palette.secondary.main
            break;
    }
    return colors
}