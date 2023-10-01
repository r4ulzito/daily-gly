import * as S from "./styles/DiaryPageStyled";
import DailyTable from "../../components/DailyTable";
import Header from "../../components/Header";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Nullable } from "primereact/ts-helpers";
import CalendarInput from "../../components/shared/CalendarInput";
import PeriodSelectInput from "../../components/shared/PeriodSelectInput";
import { IPeriod } from "../../interfaces/PeriodInterface";
import ValueInput from "../../components/shared/ValueInput";
import ObservationInput from "../../components/shared/ObservationInput";
import FormButton from "../../components/shared/FormButton";
import ToggleIconButton from "../../components/shared/ToggleIconButton";
import {
    createDayRegisterService,
    getUserMonthDayRegistersService,
} from "../../service/registerService";
import { AuthContext } from "../../contexts/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import { formatDate } from "../../util/dateFormater";
import { ICreateRegisterRequest } from "../../interfaces/request/CreateRegisterRequestInterface";
import {
    formButtonsIcons,
    headerContent,
    periodOptions,
    toggleButtonsIcons,
} from "./DiaryPageContents";

const DiaryPage = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const [selectDate, setSelectDate] = useState<Nullable<Date>>(new Date());
    const [selectPeriod, setSelectPeriod] = useState<IPeriod | null>(null);
    const [selectValue, setSelectValue] =
        useState<Nullable<number | null>>(100);
    const [observation, setObservation] = useState<string>("");

    const { user } = useContext(AuthContext);

    const {
        data,
        isLoading: isLoadingSearchRegisters,
        isFetching,
        refetch,
    } = getUserMonthDayRegistersService(selectDate!, user?.id!);

    const { createDayRegister, isLoading: isLoadingCreateRegister } =
        createDayRegisterService();

    const resetForms = () => {
        setSelectPeriod(null);
        setSelectValue(100);
        setObservation("");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload: ICreateRegisterRequest = {
            user_id: user?.id!,
            date: selectDate?.toISOString().slice(0, 10)!,
            period: selectPeriod?.code!,
            gly_value:
                selectPeriod?.code! === "OBSERVACAO" ? null : selectValue!,
            observation: observation,
        };

        await createDayRegister(payload);
        setShowForm(!showForm);
        resetForms();
        await refetch();
    };

    useEffect(() => {
        refetch();
    }, []);

    return (
        <>
            <Header content={headerContent} />
            <S.DiaryPageContainer>
                <S.TableContainer>
                    {isLoadingSearchRegisters || isFetching ? (
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

                <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
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
                                onClick={async () =>
                                    !isLoadingSearchRegisters && !isFetching
                                        ? refetch()
                                        : undefined
                                }
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
                            {selectPeriod?.code === "OBSERVACAO" ? (
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
                                <FormButton
                                    disabled={isLoadingCreateRegister}
                                    content={formButtonsIcons[0]}
                                >
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
                            typeButton="submit"
                            onClick={() =>
                                showForm ? undefined : setShowForm(!showForm)
                            }
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
