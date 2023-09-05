import GlobalContext from "./contexts/GlobalContext";
import Routers from "./routes/routes";
import ThemesProvider from "./styles/ThemesProvider";
import GlobalStyles from "./styles/globalStyles";

function App() {
    return (
        <>
            <ThemesProvider>
                <GlobalContext>
                    <GlobalStyles />
                    <Routers />
                </GlobalContext>
            </ThemesProvider>
        </>
    );
}

export default App;
