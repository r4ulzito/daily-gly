import * as S from "./styles/DiaryPageStyled";
import DailyTable from "../../components/DailyTable";
import Header from "../../components/Header";
import { IHeaderContent } from "../../interfaces/HeaderContentInterface";
import { dataMock } from "../../mock/registersMock";
import { useEffect, useState } from "react";
import { Nullable } from "primereact/ts-helpers";
import CalendarInput from "../../components/shared/CalendarInput";
import PeriodSelectInput from "../../components/shared/PeriodSelectInput";
import { IPeriod } from "../../interfaces/PeriodInterface";
import ValueInput from "../../components/shared/ValueInput";
import ObservationInput from "../../components/shared/ObservationInput";
import FormButton from "../../components/shared/FormButton";
import ToggleIconButton from "../../components/shared/ToggleIconButton";

const DiaryPage = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const [selectDate, setSelectDate] =
        useState<Nullable<string | Date | Date[]>>();
    const [selectPeriod, setSelectPeriod] = useState<IPeriod | null>(null);
    const [selectValue, setSelectValue] =
        useState<Nullable<number | null>>(100);
    const [observation, setObservation] = useState<string>("");

    const headerContent: IHeaderContent = {
        title: "Diário de Glicemia Mensal",
        description:
            "Registre e altere aqui seus níveis de glicemias do dia-a-dia",
    };

    const periodOptions: IPeriod[] = [
        { name: "Pré / Café", code: 1 },
        { name: "Pós / Café", code: 2 },
        { name: "Pré / Almoço", code: 3 },
        { name: "Pós / Almoço", code: 4 },
        { name: "Pré / Jantar", code: 5 },
        { name: "Pós / Jantar", code: 6 },
        { name: "Antes Dormir", code: 7 },
        { name: "Observação", code: 8 },
    ];

    const formButtonsIcons: Array<IIconData> = [
        {
            iconAlt: "icone botao salvar",
            iconFile: "SaveIcon.svg",
        },
        {
            iconAlt: "icone registrar",
            iconFile: "AddIcon.svg",
        },
    ];

    const toggleButtonsIcons: Array<IIconData> = [
        {
            iconAlt: "icone de recolher formulario",
            iconFile: "UpIcon.svg",
        },
        {
            iconAlt: "icone buscar registros",
            iconFile: "SearchIcon.svg",
        },
    ];

    useEffect(() => {
        setSelectDate(new Date());
    }, []);

    return (
        <>
            <Header content={headerContent} />
            <S.DiaryPageContainer>
                <DailyTable data={dataMock} />
                <S.FormContainer>
                    <S.CalendarContainer>
                        <CalendarInput
                            date={selectDate}
                            setDate={setSelectDate}
                        />
                        <ToggleIconButton content={toggleButtonsIcons[1]} />
                    </S.CalendarContainer>
                    {showForm ? (
                        <>
                            <PeriodSelectInput
                                options={periodOptions}
                                selectPeriod={selectPeriod!}
                                setSelectPeriod={setSelectPeriod}
                            />
                            {selectPeriod?.code === 8 ? (
                                <ObservationInput
                                    observation={observation}
                                    setObservation={setObservation}
                                />
                            ) : (
                                <ValueInput
                                    selectValue={selectValue}
                                    setSelectValue={setSelectValue}
                                />
                            )}
                            <S.SaveButtonContainer>
                                <FormButton content={formButtonsIcons[0]}>
                                    Salvar
                                </FormButton>
                                <ToggleIconButton
                                    upEffect
                                    content={toggleButtonsIcons[0]}
                                    onClick={() => setShowForm(false)}
                                />
                            </S.SaveButtonContainer>
                        </>
                    ) : (
                        <FormButton
                            onClick={() => setShowForm(!showForm)}
                            content={formButtonsIcons[1]}
                        >
                            Adicionar
                        </FormButton>
                    )}
                </S.FormContainer>
            </S.DiaryPageContainer>
        </>
    );
};

export default DiaryPage;
