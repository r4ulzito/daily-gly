import * as S from "./styles/ToggleIconButtonStyled";

interface UpButtonProps {
    content: IIconData;
    onClick?: () => void;
    upEffect?: boolean;
    hide?: boolean;
}

const ToggleIconButton = ({
    onClick,
    content,
    upEffect,
    hide,
}: UpButtonProps) => {
    return (
        <S.ToggleIconButtonContainer
            hide={hide ? "true" : undefined}
            upeffect={upEffect ? "true" : undefined}
            onClick={onClick}
        >
            <img src={`src/assets/${content.iconFile}`} alt={content.iconAlt} />
        </S.ToggleIconButtonContainer>
    );
};

export default ToggleIconButton;
