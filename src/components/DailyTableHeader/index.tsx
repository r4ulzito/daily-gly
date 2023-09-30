import * as S from "./styles/DailyTableHeaderStyled";

const DailyTableHeader = () => {
    return (
        <thead>
            <tr>
                <S.HeaderCell>
                    <S.DayCellContent>
                        <p>Dia</p>
                    </S.DayCellContent>
                </S.HeaderCell>
                <S.HeaderCell colSpan={2}>
                    <S.SnackCellContent>
                        <p>Café</p>
                        <S.SnackCellPeriod>
                            <span>Pré</span>
                            <span>Pós</span>
                        </S.SnackCellPeriod>
                    </S.SnackCellContent>
                </S.HeaderCell>
                <S.HeaderCell colSpan={2}>
                    <S.SnackCellContent>
                        <p>Almoço</p>
                        <S.SnackCellPeriod>
                            <span>Pré</span>
                            <span>Pós</span>
                        </S.SnackCellPeriod>
                    </S.SnackCellContent>
                </S.HeaderCell>
                <S.HeaderCell colSpan={2}>
                    <S.SnackCellContent>
                        <p>Jantar</p>
                        <S.SnackCellPeriod>
                            <span>Pré</span>
                            <span>Pós</span>
                        </S.SnackCellPeriod>
                    </S.SnackCellContent>
                </S.HeaderCell>
                <S.HeaderCell>
                    <S.SnackCellContent>
                        <p>Antes</p>
                        <p>de Dormir</p>
                    </S.SnackCellContent>
                </S.HeaderCell>
                <S.HeaderCell>
                    <S.ObservationCellContent>
                        <p>Obervações</p>
                    </S.ObservationCellContent>
                </S.HeaderCell>
            </tr>
        </thead>
    );
};

export default DailyTableHeader;
