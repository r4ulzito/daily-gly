import * as S from "./styles/ToggleIconButtonStyled";

interface UpButtonProps {
    content: IIconData;
    onClick?: () => void;
    upEffect?: boolean;
}

const ToggleIconButton = ({ onClick, content, upEffect }: UpButtonProps) => {
    return (
        <S.ToggleIconButtonContainer
            upeffect={upEffect ? "true" : undefined}
            onClick={onClick}
        >
            <img src={`src/assets/${content.iconFile}`} alt={content.iconAlt} />
        </S.ToggleIconButtonContainer>
    );
};

export default ToggleIconButton;
