import DailyTable from "../../components/DailyTable";
import Header from "../../components/Header";
import { IHeaderContent } from "../../interfaces/HeaderContentInterface";
import { dataMock } from "../../mock/registersMock";

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
                <DailyTable data={dataMock} />
            </div>
        </>
    );
};

export default DiaryPage;
