import * as S from "./styles/ObservationInputStyled";

interface ObservatiorInputProps {
    observation: string;
    setObservation: (obs: string) => void;
}

const ObservationInput = ({
    observation,
    setObservation,
}: ObservatiorInputProps) => {
    return (
        <S.ObservationInputContainer>
            <S.ObservationInput
                placeholder="Escreva uma observação..."
                value={observation}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setObservation(e.target.value)
                }
                maxLength={23}
            />
        </S.ObservationInputContainer>
    );
};

export default ObservationInput;
