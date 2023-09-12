import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import * as S from "./styles/CalendarInputStyled";

interface CalendarInputProps {
    date: Nullable<string | Date | Date[]>;
    setDate: (value: Nullable<string | Date | Date[]>) => void;
}

const CalendarInput = ({ date, setDate }: CalendarInputProps) => {
    return (
        <S.CalendarInputContainer>
            <Calendar
                style={{ width: "256px", height: "43px" }}
                inputStyle={{
                    color: "#fff",
                    fontWeight: "300",
                    fontFamily: "Poppins",
                }}
                value={date}
                onChange={(e) => setDate(e.value)}
                dateFormat="dd/mm/yy"
                showIcon
            />
        </S.CalendarInputContainer>
    );
};

export default CalendarInput;
