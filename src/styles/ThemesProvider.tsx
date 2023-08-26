import { ThemeProvider } from "styled-components";

const DefaultTheme = {
    colors: {
        dafault: "#ffff",
    },
};

interface Props {
    children: React.ReactNode;
}

const ThemesProvider = ({ children }: Props) => {
    return <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>;
};

export default ThemesProvider;
