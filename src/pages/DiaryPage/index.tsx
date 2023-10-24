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
import { createRegisterValidate } from "../../validation/schemas/createRegisterSchema";
import { IFormInputError } from "../../interfaces/FormInputErrorInterface";
import moment from "moment";
import { toast } from "react-toastify";

const DiaryPage = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const [selectDate, setSelectDate] = useState<Nullable<Date>>(new Date());
    const [selectPeriod, setSelectPeriod] = useState<IPeriod | null>(null);
    const [selectValue, setSelectValue] =
        useState<Nullable<number | null>>(100);
    const [observation, setObservation] = useState<string | null>("");

    const [error, setError] = useState<IFormInputError | null>(null);

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

        if (error) {
            setError(null);
        }

        const payload: ICreateRegisterRequest = {
            user_id: user?.id!,
            date: moment(selectDate!).format().slice(0, 10)!,
            period: selectPeriod?.code!,
            gly_value:
                selectPeriod?.code! === "OBSERVACAO" ? null : selectValue!,
            observation: observation!,
        };

        try {
            await createRegisterValidate(payload);

            await createDayRegister(payload);
            setShowForm(!showForm);
            resetForms();
            await refetch();
        } catch (error: any) {
            switch (error.message.field) {
                case "PeriodInput":
                    setError(error.message);
                    break;
                case "GlyValueInput":
                    setError(error.message);
                    break;
                case "ObservationInput":
                    setError(error.message);
                    break;
                default:
                    toast.error("Não foi possível criar o registro!");
            }
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
                            view="date"
                            dateFormat="dd/mm/yy"
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
                                error={error}
                                options={periodOptions}
                                selectPeriod={selectPeriod!}
                                setSelectPeriod={setSelectPeriod}
                            />
                            {selectPeriod?.code === "OBSERVACAO" ? (
                                <ObservationInput
                                    error={error}
                                    observation={observation!}
                                    setObservation={setObservation}
                                />
                            ) : (
                                <ValueInput
                                    error={error}
                                    selectValue={selectValue}
                                    setSelectValue={setSelectValue}
                                />
                            )}
                            <S.SaveButtonContainer>
                                {isLoadingCreateRegister ? (
                                    <>
                                        <FormButton
                                            disabled={isLoadingCreateRegister}
                                        >
                                            <ThreeDots
                                                height="32"
                                                width="32"
                                                radius="9"
                                                color="#ffff"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                visible={true}
                                            />
                                        </FormButton>
                                        <ToggleIconButton
                                            upEffect
                                            content={toggleButtonsIcons[0]}
                                            onClick={() =>
                                                isLoadingCreateRegister
                                                    ? null
                                                    : setShowForm(false)
                                            }
                                        />
                                    </>
                                ) : (
                                    <>
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
                                    </>
                                )}
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
