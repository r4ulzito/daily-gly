import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import * as S from "./styles/PeriodSelectStyled";
import { IPeriod } from "../../../interfaces/PeriodInterface";
import { IFormInputError } from "../../../interfaces/FormInputErrorInterface";

interface PeriodSelectInputProps {
    options: IPeriod[];
    selectPeriod: IPeriod;
    setSelectPeriod: (period: IPeriod | null) => void;
    error?: IFormInputError | null;
}

const PeriodSelectInput = ({
    options,
    selectPeriod,
    setSelectPeriod,
    error,
}: PeriodSelectInputProps) => {
    return (
        <S.PeriodSelectInputContainer
            error={error?.field === "PeriodInput" ? "true" : undefined}
        >
            <Dropdown
                showOnFocus={false}
                style={{
                    width: "256px",
                    height: "43px",
                }}
                value={selectPeriod}
                onChange={(e: DropdownChangeEvent) => setSelectPeriod(e.value)}
                options={options}
                optionLabel="name"
                placeholder="Selecione um período"
            />
        </S.PeriodSelectInputContainer>
    );
};

export default PeriodSelectInput;
