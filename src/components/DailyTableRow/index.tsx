import { useState } from "react";
import * as S from "./styles/DailyTableRowStyled";
import { IRegister } from "../../interfaces/RegisterInterface";

interface DailyTableRowProps {
    dayRegisters: IRegister;
}

const DailyTableRow = ({ dayRegisters }: DailyTableRowProps) => {
    const [select, setSelect] = useState(false);

    return (
        <tr>
            <S.RowCell>
                <S.RowDayCell
                    selected={select}
                    onClick={() => setSelect(!select)}
                >
                    {dayRegisters.day}
                </S.RowDayCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.before_breakfast === 0 ? (
                        <S.EmptyMarker>empty</S.EmptyMarker>
                    ) : (
                        dayRegisters.before_breakfast
                    )}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.after_breakfast === 0 ? (
                        <S.EmptyMarker>empty</S.EmptyMarker>
                    ) : (
                        dayRegisters.after_breakfast
                    )}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.before_lunch === 0 ? (
                        <S.EmptyMarker>empty</S.EmptyMarker>
                    ) : (
                        dayRegisters.before_lunch
                    )}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.after_lunch === 0 ? (
                        <S.EmptyMarker>empty</S.EmptyMarker>
                    ) : (
                        dayRegisters.after_lunch
                    )}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell colSpan={1}>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.before_dinner === 0 ? (
                        <S.EmptyMarker>empty</S.EmptyMarker>
                    ) : (
                        dayRegisters.before_dinner
                    )}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.after_dinner === 0 ? (
                        <S.EmptyMarker>empty</S.EmptyMarker>
                    ) : (
                        dayRegisters.after_dinner
                    )}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowBeforeSleepCell selected={select}>
                    {dayRegisters.before_sleep === 0 ? (
                        <S.EmptyMarker>empty</S.EmptyMarker>
                    ) : (
                        dayRegisters.before_sleep
                    )}
                </S.RowBeforeSleepCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowObservationCell selected={select}>
                    {dayRegisters.observation.length === 0 ? (
                        <S.EmptyMarker>empty</S.EmptyMarker>
                    ) : (
                        dayRegisters.observation
                    )}
                </S.RowObservationCell>
            </S.RowCell>
        </tr>
    );
};

export default DailyTableRow;
