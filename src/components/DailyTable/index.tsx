import { IFormatDate } from "../../interfaces/FormatDateInterface";
import { IRegister } from "../../interfaces/RegisterInterface";
import { IRegisterMonth } from "../../interfaces/RegisterMonthInterface";
import { formatDate } from "../../util/dateFormater";
import DailyTableHeader from "../DailyTableHeader";
import DailyTableRow from "../DailyTableRow";

interface DailyTableProps {
    data: IRegisterMonth;
    targetDate: IFormatDate;
}

const DailyTable = ({ data, targetDate }: DailyTableProps) => {
    const emptyDate = (day: number): IRegister => {
        return {
            day: day,
            before_breakfast: 0,
            after_breakfast: 0,
            before_lunch: 0,
            after_lunch: 0,
            before_dinner: 0,
            after_dinner: 0,
            before_sleep: 0,
            observation: "",
        };
    };

    const monthDaysRegisters = (): Array<IRegister> => {
        const monthDaysNumber = formatDate(
            new Date(targetDate.year, targetDate.month, 0)
        ).day;

        const daysRegisters: Array<IRegister> = [];

        for (let i = 1; i <= monthDaysNumber; i++) {
            const register = data.registers.find((r) => r.day === i);

            if (!register) {
                daysRegisters.push(emptyDate(i));
            } else {
                daysRegisters.push(register);
            }
        }

        return daysRegisters;
    };

    return (
        <table style={{ width: "100%" }}>
            <DailyTableHeader />
            <tbody>
                {monthDaysRegisters().map((register, index) => (
                    <DailyTableRow key={index} dayRegisters={register} />
                ))}
            </tbody>
        </table>
    );
};

export default DailyTable;
