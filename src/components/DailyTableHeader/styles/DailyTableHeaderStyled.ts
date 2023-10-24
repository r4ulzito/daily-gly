import styled from "styled-components";

export const HeaderCell = styled.th`
    background-color: #bb5b42;
    font-size: 14px;
    color: #fff;
    vertical-align: super;
`;

export const DayCellContent = styled.div`
    padding: 0px 8px;
`;

export const SnackCellContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px 0px;
    min-width: 140px;
`;

export const SnackCellPeriod = styled.p`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const ObservationCellContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px 0px;
    min-width: 216px;
`;
