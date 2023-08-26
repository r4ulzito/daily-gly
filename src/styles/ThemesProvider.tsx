import { ThemeProvider } from "styled-components";

const DefaultTheme = {
    colors: {
        default: "#ffff",
        first_color: "#BB5B42",
        secondary_color: "#274F83",
    },

    textColors: {
        primary: "#000",
        secondary: "#ffff",
        header_title: "#D45331",
    },
};

interface Props {
    children: React.ReactNode;
}

const ThemesProvider = ({ children }: Props) => {
    return <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>;
};

export default ThemesProvider;
