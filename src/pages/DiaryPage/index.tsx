import * as S from "./styles/DiaryPageStyled";
import DailyTable from "../../components/DailyTable";
import Header from "../../components/Header";
import { IHeaderContent } from "../../interfaces/HeaderContentInterface";
import { useContext, useEffect, useState } from "react";
import { Nullable } from "primereact/ts-helpers";
import CalendarInput from "../../components/shared/CalendarInput";
import PeriodSelectInput from "../../components/shared/PeriodSelectInput";
import { IPeriod } from "../../interfaces/PeriodInterface";
import ValueInput from "../../components/shared/ValueInput";
import ObservationInput from "../../components/shared/ObservationInput";
import FormButton from "../../components/shared/FormButton";
import ToggleIconButton from "../../components/shared/ToggleIconButton";
import { TypePeriodsEnum } from "../../enum/TypePeriodsEnum";
import { getUserMonthDayRegisters } from "../../service/registerService";
import { AuthContext } from "../../contexts/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import { formatDate } from "../../util/dateFormater";

const DiaryPage = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const [selectDate, setSelectDate] = useState<Nullable<Date>>(new Date());
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
        { name: "Pré / Café", code: TypePeriodsEnum.PRE_CAFE },
        { name: "Pós / Café", code: TypePeriodsEnum.POS_CAFE },
        { name: "Pré / Almoço", code: TypePeriodsEnum.PRE_ALMOCO },
        { name: "Pós / Almoço", code: TypePeriodsEnum.POS_ALMOCO },
        { name: "Pré / Jantar", code: TypePeriodsEnum.PRE_JANTAR },
        { name: "Pós / Jantar", code: TypePeriodsEnum.POS_JANTAR },
        { name: "Antes Dormir", code: TypePeriodsEnum.ANTES_DORMIR },
        { name: "Observação", code: TypePeriodsEnum.OBSERVACAO },
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

    const { user } = useContext(AuthContext);

    const { data, isLoading, isFetching, refetch } = getUserMonthDayRegisters(
        selectDate!,
        user?.id!
    );

    const searchRegisters = async () => {
        if (!isLoading && !isFetching) {
            await refetch();
        }
    };

    useEffect(() => {
        refetch();
    }, []);

    return (
        <>
            <Header content={headerContent} />
            <S.DiaryPageContainer>
                <S.TableContainer>
                    {isLoading || isFetching ? (
                        <S.TableLoaderContainer>
                            <ThreeDots
                                height="60"
                                width="60"
                                radius="9"
                                color="#ffff"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                visible={true}
                            />
                        </S.TableLoaderContainer>
                    ) : (
                        <DailyTable
                            targetDate={formatDate(
                                selectDate === null ? new Date() : selectDate!
                            )}
                            data={data!}
                        />
                    )}
                </S.TableContainer>

                <S.FormContainer
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <S.CalendarContainer>
                        <CalendarInput
                            date={selectDate}
                            setDate={setSelectDate}
                        />
                        {showForm ? (
                            <ToggleIconButton
                                hide={true}
                                content={toggleButtonsIcons[1]}
                            />
                        ) : (
                            <ToggleIconButton
                                onClick={searchRegisters}
                                content={toggleButtonsIcons[1]}
                            />
                        )}
                    </S.CalendarContainer>
                    {showForm ? (
                        <>
                            <PeriodSelectInput
                                options={periodOptions}
                                selectPeriod={selectPeriod!}
                                setSelectPeriod={setSelectPeriod}
                            />
                            {selectPeriod?.code ===
                            TypePeriodsEnum.OBSERVACAO ? (
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
