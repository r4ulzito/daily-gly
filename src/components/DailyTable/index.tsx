import { IRegistrosMes } from "../../interfaces/RegistrosMesInterface";
import DailyTableHeader from "../DailyTableHeader";
import DailyTableRow from "../DailyTableRow";

interface DailyTableProps {
    data: IRegistrosMes;
}

const DailyTable = ({ data }: DailyTableProps) => {
    return (
        <table>
            <DailyTableHeader />
            <tbody>
                {data.registros.map((registro) => (
                    <DailyTableRow key={registro.dia} dayRegisters={registro} />
                ))}
            </tbody>
        </table>
    );
};

export default DailyTable;
