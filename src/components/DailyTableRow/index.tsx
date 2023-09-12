import { useState } from "react";
import * as S from "./styles/DailyTableRowStyled";

interface DailyTableRowProps {
    dayRegisters: Array<string>;
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
                    {dayRegisters[0]}
                </S.RowDayCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters[1]}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters[2]}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters[3]}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters[4]}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell colSpan={1}>
                <S.RowSnackCell selected={select}>
                    {dayRegisters[5]}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters[6]}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowBeforeSleepCell selected={select}>
                    {dayRegisters[7]}
                </S.RowBeforeSleepCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowObservationCell selected={select}>
                    {dayRegisters[8]}
                </S.RowObservationCell>
            </S.RowCell>
        </tr>
    );
};

export default DailyTableRow;
