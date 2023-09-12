import styled from "styled-components";

export const ObservationInputContainer = styled.div``;

export const ObservationInput = styled.textarea`
    width: 256px;
    height: 84px;
    resize: none;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.default};
    padding: 12px;
    font-size: 16px;
    font-weight: 300;
    outline: none;
`;
