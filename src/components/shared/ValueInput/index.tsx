import {
    InputNumber,
    InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import * as S from "./styles/ValueInputStyled";
import { Nullable } from "primereact/ts-helpers";

interface ValueInputProps {
    selectValue: Nullable<number | null>;
    setSelectValue: (value: Nullable<number | null>) => void;
}

const ValueInput = ({ selectValue, setSelectValue }: ValueInputProps) => {
    return (
        <S.ValueInputContainer>
            <InputNumber
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
                max={999}
            />
        </S.ValueInputContainer>
    );
};

export default ValueInput;
