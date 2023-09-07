import Header from "../../components/Header";
import { IHeaderContent } from "../../interfaces/HeaderContentInterface";

const DiaryPage = () => {
    const headerContent: IHeaderContent = {
        title: "Diário de Glicemia Mensal",
        description:
            "Registre e altere aqui seus níveis de glicemias do dia-a-dia",
    };

    return (
        <>
            <Header content={headerContent} />
            <div>
                <h1>DiaryPage</h1>
            </div>
        </>
    );
};

export default DiaryPage;
