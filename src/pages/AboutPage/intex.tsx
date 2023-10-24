import Header from "../../components/Header";
import * as S from "./styles/AboutPageStyled";
import { IHeaderContent } from "../../interfaces/HeaderContentInterface";
import AboutContentSection from "../../components/shared/AboutContentSection";

const AboutPage = () => {
    const headerContent: IHeaderContent = {
        title: "Sobre",
        description:
            "Tudo sobre o DailyGly e dicas para manter a glicemia em dia",
    };

    return (
        <>
            <Header content={headerContent} />
            <S.AboutPageContainer>
                <S.AboutPageContent>
                    <AboutContentSection
                        hideContent={false}
                        title="O que é a Diabetes?"
                    >
                        <S.AboutPageContentSectionBody>
                            <p>
                                A diabetes, também conhecida como diabetes
                                mellitus, é uma condição médica crônica que
                                afeta a forma como o corpo utiliza a glicose
                                (açúcar) presente no sangue. A glicose é a
                                principal fonte de energia do organismo e é
                                obtida a partir dos alimentos que consumimos.
                                Para que a glicose seja utilizada pelas células
                                do corpo, a insulina, um hormônio produzido pelo
                                pâncreas, desempenha um papel fundamental.
                                Existem vários tipos de diabetes, mas os dois
                                mais comuns são:
                            </p>

                            <p>
                                <strong>Diabetes Tipo 1</strong>: Neste tipo de
                                diabetes, o sistema imunológico ataca
                                erroneamente as células do pâncreas que produzem
                                insulina, chamadas de células beta. Como
                                resultado, o corpo não produz insulina
                                suficiente. A diabetes tipo 1 geralmente se
                                desenvolve na infância ou adolescência e requer
                                tratamento com injeções diárias de insulina para
                                regular os níveis de glicose no sangue.
                            </p>
                            <p>
                                <strong>Diabetes Tipo 2</strong>: Este é o tipo
                                mais comum de diabetes e geralmente ocorre em
                                adultos, embora também possa afetar crianças. No
                                diabetes tipo 2, o corpo ainda produz insulina,
                                mas as células do corpo se tornam resistentes a
                                ela, o que significa que a insulina não funciona
                                eficazmente. Isso leva a níveis elevados de
                                glicose no sangue. O tratamento pode envolver
                                medicamentos, mudanças na dieta, exercícios e,
                                em alguns casos, injeções de insulina.
                            </p>
                            <p>
                                A diabetes é uma condição séria e crônica que,
                                se não for controlada adequadamente, pode levar
                                a complicações de saúde graves, como doenças
                                cardíacas, problemas renais, neuropatia,
                                cegueira, amputações e muito mais. Portanto, o
                                gerenciamento cuidadoso da glicose no sangue é
                                fundamental para controlar a diabetes e prevenir
                                complicações.
                            </p>
                        </S.AboutPageContentSectionBody>
                    </AboutContentSection>
                    <AboutContentSection title="Dicas para controlar os níveis de glicose">
                        <S.AboutPageContentSectionBody>
                            <p>
                                Controlar os níveis de glicose no sangue é
                                fundamental para gerenciar a diabetes e prevenir
                                complicações. Aqui estão algumas dicas que podem
                                ajudar a manter os níveis de glicose sob
                                controle:
                            </p>
                            <ol type="1">
                                <li>
                                    <b>Consulte um médico:</b> Primeiramente, é
                                    importante trabalhar em estreita colaboração
                                    com um médico ou endocrinologista para
                                    desenvolver um plano de tratamento
                                    personalizado. Eles podem determinar seus
                                    objetivos de glicose no sangue e sugerir o
                                    tratamento apropriado.
                                </li>

                                <li>
                                    <b>Monitore a glicose regularmente:</b> Use
                                    um medidor de glicose para verificar seus
                                    níveis de glicose no sangue conforme as
                                    recomendações do seu médico. O monitoramento
                                    frequente ajuda a entender como a comida, o
                                    exercício e os medicamentos afetam seus
                                    níveis de glicose.
                                </li>

                                <li>
                                    <b>
                                        Siga um plano de alimentação saudável:
                                    </b>{" "}
                                    Consulte um nutricionista ou educador em
                                    diabetes para criar um plano de alimentação
                                    equilibrado. Isso geralmente envolve
                                    controlar a quantidade de carboidratos,
                                    escolher alimentos com baixo índice
                                    glicêmico e limitar o consumo de açúcares
                                    refinados.
                                </li>

                                <li>
                                    <b>Controle o tamanho das porções:</b> Comer
                                    porções adequadas é importante para evitar
                                    picos de glicose. Use medidas, copos e
                                    balanças de cozinha para ter uma ideia
                                    precisa do tamanho das porções.
                                </li>

                                <li>
                                    <b>
                                        Evite alimentos processados e ricos em
                                        açúcar:
                                    </b>{" "}
                                    Reduza ou elimine alimentos com alto teor de
                                    açúcar, como doces, refrigerantes e
                                    alimentos processados, pois eles podem
                                    elevar rapidamente os níveis de glicose no
                                    sangue.
                                </li>

                                <li>
                                    <b>Faça exercícios regularmente:</b> O
                                    exercício ajuda a melhorar a sensibilidade à
                                    insulina e a manter os níveis de glicose
                                    controlados. Consulte seu médico para criar
                                    um plano de exercícios adequado ao seu nível
                                    de condicionamento físico.
                                </li>

                                <li>
                                    <b>Mantenha um peso saudável:</b> Perder
                                    peso, se necessário, pode ajudar a melhorar
                                    o controle da glicose no sangue,
                                    principalmente no caso de diabetes tipo 2.
                                </li>

                                <li>
                                    <b>Tome medicamentos conforme indicado:</b>{" "}
                                    Se o seu médico prescrever medicamentos para
                                    controlar a diabetes, tome-os exatamente
                                    como prescrito.
                                </li>

                                <li>
                                    <b>Evite o álcool em excesso:</b> O álcool
                                    pode afetar os níveis de glicose no sangue.
                                    Se você optar por consumir álcool, faça-o
                                    com moderação e em conjunto com alimentos.
                                </li>

                                <li>
                                    <b>Durma o suficiente:</b> A falta de sono
                                    pode afetar os níveis de glicose no sangue.
                                    Tente estabelecer uma rotina de sono regular
                                    e de qualidade.
                                </li>

                                <li>
                                    <b>Gerencie o estresse:</b> O estresse pode
                                    elevar os níveis de glicose. Praticar
                                    técnicas de relaxamento, como meditação,
                                    ioga e respiração profunda, pode ajudar a
                                    controlar o estresse.
                                </li>

                                <li>
                                    <b>Mantenha um registro:</b> Anote suas
                                    medições de glicose, alimentos consumidos,
                                    exercícios e outros fatores relevantes. Isso
                                    pode ajudar a identificar padrões e ajustar
                                    seu plano de tratamento conforme necessário.
                                </li>
                            </ol>
                        </S.AboutPageContentSectionBody>
                    </AboutContentSection>
                    <AboutContentSection title="Sobre o DailyGly">
                        <S.AboutPageContentSectionBody>
                            <p>
                                Nos dias de hoje, pessoas com a doença crônica
                                diabetes mellitus precisam registrar seus
                                resultados de nível de glicemia, feitos
                                diariamente através de um aparelho medidor. Para
                                estabelecer um acompanhamento, os diabéticos
                                anotam esses resultados em cadernos ou diários
                                manuais assim podendo levar o mesmo para o seu
                                médico, e assim, o especialista dizer se está
                                tudo em ordem ou não.
                            </p>
                            <p>
                                Essa anotação manual muitas vezes pode causar
                                confusão e dificultar o acesso a registros
                                antigos, por exemplo para acompanhar ou comparar
                                níveis glicêmicos de um ano atrás ou mais.
                                Pensando nesses casos, a ideia do DailyGly
                                surgiu, uma web aplicação onde o portador de
                                diabetis poderá anotar seus resultados de testes
                                de nível de glicemia. Esses testes serão salvos
                                em uma base de dados poderá ser acessado de
                                qualquer computador do mundo. Facilitando a
                                busca por resultados mais antigos, e assim
                                também, facilitando a vida do portador dessa
                                condição.
                            </p>
                            <p>
                                Dentro do DailyGly, o usuário logado poderá
                                acessar seu histórico e ter um monitoramento em
                                tempo real da média de glicemia daquele mês e se
                                essa média atende o limite definido pelo próprio
                                usuário, além de conseguir editar e alterar mais
                                facilmente suas anotações, em caso de confusão
                                ou esquecimento. Isso sem dúvidas será um ponto
                                importante e um facilitador na vida do
                                diabético, imagine uma pessoa com 10 anos de
                                registro de glicemia, quanto tempo demoraria
                                para a mesma encontrar os resultados de um mês
                                específico, no DailyGly, com a apenas dois
                                cliques isso é resolvido.
                            </p>
                        </S.AboutPageContentSectionBody>
                    </AboutContentSection>
                </S.AboutPageContent>
            </S.AboutPageContainer>
        </>
    );
};

export default AboutPage;
