import { IRegistrosMes } from "../interfaces/RegistrosMesInterface";

export const dataMock: IRegistrosMes = {
    ano: "2023",
    mes: "08",
    registros: [
        {
            dia: 1,
            pre_cafe: 0,
            pos_cafe: 0,
            pre_almoco: 0,
            pos_almoco: 0,
            pre_jantar: 0,
            pos_jantar: 0,
            antes_dormir: 0,
            observacao: "observacao",
        },
    ],
};
