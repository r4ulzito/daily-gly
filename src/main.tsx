import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryProvider } from "./contexts/QueryProviderContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <QueryProvider>
        <App />
    </QueryProvider>
);
