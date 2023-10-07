import {
    InputNumber,
    InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import * as S from "./styles/ValueInputStyled";
import { Nullable } from "primereact/ts-helpers";
import { IFormInputError } from "../../../interfaces/FormInputErrorInterface";

interface ValueInputProps {
    selectValue: Nullable<number | null>;
    setSelectValue: (value: Nullable<number | null>) => void;
    error?: IFormInputError | null;
}

const ValueInput = ({
    selectValue,
    setSelectValue,
    error,
}: ValueInputProps) => {
    return (
        <S.ValueInputContainer>
            <InputNumber
                className={error?.field === "GlyValueInput" ? "p-invalid" : ""}
                style={{ width: "256px", height: "43px" }}
                inputStyle={{
                    color: "#fff",
                    fontWeight: "300",
                    fontFamily: "Poppins",
                    width: "208px",
                }}
                value={selectValue}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                    setSelectValue(e.value)
                }
                mode="decimal"
                showButtons
                min={1}
                max={600}
            />
        </S.ValueInputContainer>
    );
};

export default ValueInput;
