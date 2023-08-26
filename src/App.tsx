import Routers from "./routes/routes";
import ThemesProvider from "./styles/ThemesProvider";
import GlobalStyles from "./styles/globalStyles";

function App() {
    return (
        <>
            <ThemesProvider>
                <GlobalStyles />
                <Routers />
            </ThemesProvider>
        </>
    );
}

export default App;
