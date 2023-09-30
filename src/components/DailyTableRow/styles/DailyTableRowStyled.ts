import styled from "styled-components";

interface RowProps {
    selected: boolean;
}

export const RowCell = styled.td`
    background-color: ${({ theme }) => theme.colors.default};
    font-size: 14px;
    text-align: center;
    border: 1px solid transparent;
    border: none;
`;

export const RowDayCell = styled.div<RowProps>`
    color: ${({ theme, selected }) =>
        selected ? theme.textColors.secondary : theme.textColors.third};
    background-color: ${({ theme, selected }) =>
        selected ? theme.colors.first_color_hover : ""};

    &:hover {
        background-color: ${({ theme }) => theme.colors.first_color_hover};
        color: ${({ theme }) => theme.textColors.secondary};
        cursor: pointer;
        transition: 0.125s;
    }
`;

export const RowSnackCell = styled.div<RowProps>`
    color: ${({ theme, selected }) =>
        selected ? theme.textColors.secondary : ""};
    background-color: ${({ theme, selected }) =>
        selected ? theme.colors.first_color_hover : ""};
    min-width: calc(140px / 2);
`;

export const RowObservationCell = styled.div<RowProps>`
    color: ${({ theme, selected }) =>
        selected ? theme.textColors.secondary : ""};
    background-color: ${({ theme, selected }) =>
        selected ? theme.colors.first_color_hover : ""};
`;

export const RowBeforeSleepCell = styled.div<RowProps>`
    color: ${({ theme, selected }) =>
        selected ? theme.textColors.secondary : ""};
    background-color: ${({ theme, selected }) =>
        selected ? theme.colors.first_color_hover : ""};
`;

export const EmptyMarker = styled.span`
    opacity: 0;
`;
