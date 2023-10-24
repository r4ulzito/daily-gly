import styled from "styled-components";

export const ValueInputContainer = styled.div`
    span.p-inputnumber {
        button {
            background-color: ${({ theme }) => theme.colors.first_color};
            border-color: ${({ theme }) => theme.colors.first_color};
            border-radius: 0px 4px 4px 0px;

            &:hover {
                background-color: ${({ theme }) =>
                    theme.colors.first_color_hover};
                border-color: ${({ theme }) => theme.colors.first_color_hover};
            }

            &:focus {
                box-shadow: none;
                border-color: ${({ theme }) => theme.colors.first_color};
            }
        }
    }

    input.p-inputtext {
        background-color: transparent;
        border: 1px 0px 1px 1px;
        border-color: ${({ theme }) => theme.colors.default};
        border-right-color: transparent;
        border-radius: 4px 0px 0px 4px;

        &:hover {
            border-color: ${({ theme }) => theme.colors.default};
            border-right-color: transparent;
        }

        &:focus {
            box-shadow: none;
            border-color: ${({ theme }) => theme.colors.default};
            border-right-color: transparent;
        }
    }
`;
