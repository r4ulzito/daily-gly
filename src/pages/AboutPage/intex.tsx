import Header from "../../components/Header";
import { IHeaderContent } from "../../interfaces/HeaderContentInterface";

const AboutPage = () => {
    const headerContent: IHeaderContent = {
        title: "Sobre",
        description:
            "Tudo sobre o daily gly e dicas para manter a glicemia em dia",
    };

    return (
        <>
            <Header content={headerContent} />
            <div>
                <h1>About</h1>
            </div>
        </>
    );
};

export default AboutPage;
