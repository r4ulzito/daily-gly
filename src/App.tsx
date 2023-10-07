import { ToastContainer } from "react-toastify";
import GlobalContext from "./contexts/GlobalContext";
import Routers from "./routes/routes";
import ThemesProvider from "./styles/ThemesProvider";
import GlobalStyles from "./styles/globalStyles";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
    return (
        <>
            <ThemesProvider>
                <GlobalContext>
                    <GlobalStyles />
                    <Routers />
                </GlobalContext>
            </ThemesProvider>
            <ToastContainer />
        </>
    );
}

export default App;
