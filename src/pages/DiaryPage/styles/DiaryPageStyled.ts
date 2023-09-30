import styled from "styled-components";

export const DiaryPageContainer = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    padding: 40px 32px;

    @media screen and (max-width: 1280px) {
        flex-direction: column-reverse;
    }
`;

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 832px;
`;

export const TableLoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 485px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 2px;

    @media screen and (max-width: 1280px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        row-gap: 16px;
    }
`;

export const CalendarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
`;

export const SaveButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;
