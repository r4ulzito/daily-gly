import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import * as S from "./styles/CalendarInputStyled";

interface CalendarInputProps {
    date: Nullable<Date>;
    setDate: (value: Nullable<Date>) => void;
}

const CalendarInput = ({ date, setDate }: CalendarInputProps) => {
    return (
        <S.CalendarInputContainer>
            <Calendar
                maxDate={new Date()}
                style={{ width: "256px", height: "43px" }}
                inputStyle={{
                    color: "#fff",
                    fontWeight: "300",
                    fontFamily: "Poppins",
                }}
                value={date === null ? new Date() : date}
                onChange={(e) => setDate(e.value as Date)}
                dateFormat="dd/mm/yy"
                showIcon
            />
        </S.CalendarInputContainer>
    );
};

export default CalendarInput;
