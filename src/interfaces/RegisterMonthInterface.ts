import { IRegister } from "./RegisterInterface";

export interface IRegisterMonth {
    year: String;
    month: String;
    registers: Array<IRegister>;
}
