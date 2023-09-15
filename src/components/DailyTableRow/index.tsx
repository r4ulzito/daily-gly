import { useState } from "react";
import * as S from "./styles/DailyTableRowStyled";
import { IRegistro } from "../../interfaces/RegistroInterface";

interface DailyTableRowProps {
    dayRegisters: IRegistro;
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
                    {dayRegisters.dia}
                </S.RowDayCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.pre_cafe}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.pos_cafe}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.pre_almoco}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.pos_almoco}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell colSpan={1}>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.pre_jantar}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowSnackCell selected={select}>
                    {dayRegisters.pos_jantar}
                </S.RowSnackCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowBeforeSleepCell selected={select}>
                    {dayRegisters.antes_dormir}
                </S.RowBeforeSleepCell>
            </S.RowCell>
            <S.RowCell>
                <S.RowObservationCell selected={select}>
                    {dayRegisters.observacao}
                </S.RowObservationCell>
            </S.RowCell>
        </tr>
    );
};

export default DailyTableRow;
