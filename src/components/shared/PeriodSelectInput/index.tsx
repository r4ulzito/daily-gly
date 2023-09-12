import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import * as S from "./styles/PeriodSelectStyled";
import { IPeriod } from "../../../interfaces/PeriodInterface";

interface PeriodSelectInputProps {
    options: IPeriod[];
    selectPeriod: IPeriod;
    setSelectPeriod: (period: IPeriod | null) => void;
}

const PeriodSelectInput = ({
    options,
    selectPeriod,
    setSelectPeriod,
}: PeriodSelectInputProps) => {
    return (
        <S.PeriodSelectInputContainer>
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
