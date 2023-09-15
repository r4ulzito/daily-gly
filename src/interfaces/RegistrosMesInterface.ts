import { IRegistro } from "./RegistroInterface";

export interface IRegistrosMes {
    ano: String;
    mes: String;
    registros: Array<IRegistro>;
}
