import { ThemeProvider } from "styled-components";

const DefaultTheme = {
    colors: {
        default: "#ffff",
        first_color: "#BB5B42",
        first_color_hover: "#f8a38e",
        secondary_color: "#274F83",
        third_color: "#8D422E",
        third_color_opace: "rgba(141, 66, 46, 0.6)",
        fourth_color: "#461D11",
    },

    textColors: {
        primary: "#000",
        secondary: "#ffff",
        third: "#BB5B42",
        header_title: "#D45331",
        user_name: "#461D11",
    },

    fonts: {
        default: "Poppins",
    },

    hovers: {
        secondary_color_hover: "#1e3c63",
    },
};

interface Props {
    children: React.ReactNode;
}

const ThemesProvider = ({ children }: Props) => {
    return <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>;
};

export default ThemesProvider;
