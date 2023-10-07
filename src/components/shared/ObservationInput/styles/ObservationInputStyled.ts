import styled from "styled-components";

interface ObservationInputProps {
    error?: "true";
}

export const ObservationInputContainer = styled.div``;

export const ObservationInput = styled.textarea<ObservationInputProps>`
    width: 256px;
    height: 84px;
    resize: none;
    border-radius: 4px;
    border: 1px solid
        ${({ theme, error }) =>
            error === "true" ? theme.colors.error_color : theme.colors.default};
    padding: 12px;
    font-size: 16px;
    font-weight: 300;
    outline: none;

    &::placeholder {
        color: ${({ theme, error }) =>
            error === "true" && theme.colors.error_color};
    }
`;
