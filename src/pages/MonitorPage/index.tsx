import Header from "../../components/Header";
import * as S from "./styles/MonitorPageStyled";
import { IHeaderContent } from "../../interfaces/HeaderContentInterface";
import MediaGlyPanel from "../../components/MediaGlyPanel";

const MonitorPage = () => {
    const headerContent: IHeaderContent = {
        title: "Monitor",
        description:
            "Faça o acompanhamento das suas médias de glicemia e estado de saúde",
    };

    return (
        <>
            <Header content={headerContent} />
            <S.MonitorPageContainer>
                <MediaGlyPanel />
            </S.MonitorPageContainer>
        </>
    );
};

export default MonitorPage;
