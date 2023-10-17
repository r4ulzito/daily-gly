import { PropsWithChildren } from "react";
import * as S from "./styles/FormButtonStled";

interface FormButtonProps {
    content?: IIconData;
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
                {content && (
                    <img
                        src={`src/assets/${content.iconFile}`}
                        alt={content.iconAlt}
                    />
                )}
                <span>{children}</span>
            </S.FormButtonContent>
        </S.FormButtonContainer>
    );
};

export default FormButton;
