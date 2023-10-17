import { useContext, useEffect, useState } from "react";
import CalendarInput from "../shared/CalendarInput";
import * as S from "./styles/MediaGlyPanelStyled";
import { Nullable } from "primereact/ts-helpers";
import MediaGlyCard from "../shared/MediaGlyCard";
import { AuthContext } from "../../contexts/AuthContext";
import { getUserMonthDayRegistersService } from "../../service/registerService";
import { IRegister } from "../../interfaces/RegisterInterface";
import { ThreeDots } from "react-loader-spinner";

const MediaGlyPanel = () => {
    const [selectDate, setSelectDate] = useState<Nullable<Date>>(new Date());

    const { user } = useContext(AuthContext);

    const {
        data,
        isLoading: isLoadingSearchRegisters,
        isFetching,
        refetch,
    } = getUserMonthDayRegistersService(selectDate!, user?.id!);

    useEffect(() => {
        refetch();
    }, [selectDate]);

    const calculateMediaDayRegister = (register: IRegister) => {
        let periodsSumValues = 0;
        let periodsWithValue = 0;

        Object.values(register)
            .slice(1, 8)
            .map((value) => {
                if (value > 0) {
                    periodsSumValues += value;
                    periodsWithValue += 1;
                }
            });

        return periodsSumValues / periodsWithValue;
    };

    const calculateMonthDaysMedia = () => {
        let totalMonth = 0;
        let registersWithValue = 0;

        data?.registers.map((r) => {
            let dayMediaValue = calculateMediaDayRegister(r);

            if (dayMediaValue > 0) {
                totalMonth += dayMediaValue;
                registersWithValue += 1;
            }
        });

        return totalMonth === 0
            ? 0
            : Math.round(totalMonth / registersWithValue);
    };

    return (
        <S.MediaGlyPanelContainer>
            <S.MediaGlyPanelHeader>
                <h1>Médias de Glicemia</h1>
                <CalendarInput
                    view="month"
                    dateFormat="mm/yy"
                    date={selectDate}
                    setDate={setSelectDate}
                />
            </S.MediaGlyPanelHeader>
            <S.MediaGlyPanelDivider />
            <S.MediaGlyPanelContent>
                {isLoadingSearchRegisters || isFetching ? (
                    <S.MediaGlyPanelLoadingContainer>
                        <ThreeDots
                            height="60"
                            width="60"
                            radius="9"
                            color="#ffff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            visible={true}
                        />
                    </S.MediaGlyPanelLoadingContainer>
                ) : (
                    <MediaGlyCard
                        headerTitle="Atual do Mês"
                        value={calculateMonthDaysMedia()}
                        subTitle="por dia"
                    />
                )}
            </S.MediaGlyPanelContent>
        </S.MediaGlyPanelContainer>
    );
};

export default MediaGlyPanel;
