import styled from "styled-components";

interface PeriodSelectInputProps {
    error?: "true";
}

export const PeriodSelectInputContainer = styled.div<PeriodSelectInputProps>`
    div.p-dropdown {
        background-color: transparent;
        border: 1px solid
            ${({ theme, error }) =>
                error ? theme.colors.error_color : theme.colors.default};
        border-radius: 4px;

        &:focus {
            box-shadow: none;
            border: 0;
        }

        &:hover {
            border-color: ${({ theme, error }) =>
                error === "true"
                    ? theme.colors.error_color
                    : theme.colors.default};
        }

        &:not(.p-disabled).p-focus {
            box-shadow: none;
            border-color: ${({ theme, error }) =>
                error === "true"
                    ? theme.colors.error_color
                    : theme.colors.default};
        }

        span {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.textColors.secondary};
            font-weight: 300;
            font-family: "Poppins";
        }

        span.p-placeholder {
            color: ${({ theme, error }) =>
                error ? theme.colors.error_color : theme.textColors.secondary};
        }

        div {
            svg.p-icon {
                color: ${({ theme, error }) =>
                    error
                        ? theme.colors.error_color
                        : theme.textColors.secondary};
            }
        }
    }
`;
