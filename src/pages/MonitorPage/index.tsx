import Header from "../../components/Header";
import { IHeaderContent } from "../../interfaces/HeaderContentInterface";

const MonitorPage = () => {
    const headerContent: IHeaderContent = {
        title: "Monitor",
        description:
            "Faça o acompanhamento das suas médias de glicemia e estado de saúde",
    };

    return (
        <>
            <Header content={headerContent} />
            <div>
                <h1>MonitorPage</h1>
            </div>
        </>
    );
};

export default MonitorPage;
