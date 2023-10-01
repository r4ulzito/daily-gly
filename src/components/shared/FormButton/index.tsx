import { PropsWithChildren } from "react";
import * as S from "./styles/FormButtonStled";

interface FormButtonProps {
    content: IIconData;
    buttonProps?: React.ComponentProps<"button">;
    typeButton?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
}

const FormButton = ({
    children,
    content,
    typeButton,
    onClick,
    disabled,
}: PropsWithChildren<FormButtonProps>) => {
    return (
        <S.FormButtonContainer
            disabled={disabled}
            type={typeButton}
            onClick={onClick}
        >
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
