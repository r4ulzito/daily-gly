import { IRegistroMes } from "../../interfaces/RegistrosMesInterface";
import DailyTableHeader from "../DailyTableHeader";
import DailyTableRow from "../DailyTableRow";

interface DailyTableProps {
    data: IRegistroMes;
}

const DailyTable = ({ data }: DailyTableProps) => {
    return (
        <table>
            <DailyTableHeader />
            <tbody>
                {data.registros.map((registro) => (
                    <DailyTableRow key={registro[0]} dayRegisters={registro} />
                ))}
            </tbody>
        </table>
    );
};

export default DailyTable;
