import ThemesProvider from "./styles/ThemesProvider";
import GlobalStyles from "./styles/globalStyles";

function App() {
    return (
        <>
            <ThemesProvider>
                <GlobalStyles />
                <div className="App" style={{ textAlign: "center" }}>
                    <h1>Daily Gly</h1>
                </div>
            </ThemesProvider>
        </>
    );
}

export default App;
