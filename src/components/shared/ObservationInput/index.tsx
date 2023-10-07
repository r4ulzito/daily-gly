import { IFormInputError } from "../../../interfaces/FormInputErrorInterface";
import * as S from "./styles/ObservationInputStyled";

interface ObservatiorInputProps {
    observation: string;
    setObservation: (obs: string) => void;
    error?: IFormInputError | null;
}

const ObservationInput = ({
    observation,
    setObservation,
    error,
}: ObservatiorInputProps) => {
    return (
        <S.ObservationInputContainer>
            <S.ObservationInput
                error={error?.field === "ObservationInput" ? "true" : undefined}
                placeholder={
                    error?.field === "ObservationInput"
                        ? error.message
                        : "Escreva uma observação..."
                }
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
