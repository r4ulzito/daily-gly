import { PropsWithChildren } from "react";
import * as S from "./styles/FormButtonStled";

interface FormButtonProps {
    content: IIconData;
    buttonProps?: React.ComponentProps<"button">;
    onClick?: () => void;
}

const FormButton = ({
    children,
    content,
    onClick,
}: PropsWithChildren<FormButtonProps>) => {
    return (
        <S.FormButtonContainer onClick={onClick}>
            <S.FormButtonContent>
                <img
                    src={`src/assets/${content.iconFile}`}
                    alt={content.iconAlt}
                />
                <p>{children}</p>
            </S.FormButtonContent>
        </S.FormButtonContainer>
    );
};

export default FormButton;
