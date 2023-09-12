import styled from "styled-components";

export const PeriodSelectInputContainer = styled.div`
    div.p-dropdown {
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.default};
        border-radius: 4px;

        &:focus {
            box-shadow: none;
            border: 0;
        }

        &:hover {
            border-color: ${({ theme }) => theme.colors.default};
        }

        &:not(.p-disabled).p-focus {
            box-shadow: none;
            border-color: ${({ theme }) => theme.colors.default};
        }

        span {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.textColors.secondary};
            font-weight: 300;
            font-family: "Poppins";
        }

        span.p-placeholder {
            color: ${({ theme }) => theme.textColors.secondary};
        }

        div {
            svg.p-icon {
                color: ${({ theme }) => theme.colors.default};
            }
        }
    }
`;
