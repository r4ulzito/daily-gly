import { IHeaderContent } from "../../interfaces/HeaderContentInterface";
import { IPeriod } from "../../interfaces/PeriodInterface";

import UpIcon from "../../assets/UpIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";

export const headerContent: IHeaderContent = {
    title: "Diário de Glicemia Mensal",
    description: "Registre e altere aqui seus níveis de glicemias do dia-a-dia",
};

export const periodOptions: IPeriod[] = [
    { name: "Pré / Café", code: "PRE_CAFE" },
    { name: "Pós / Café", code: "POS_CAFE" },
    { name: "Pré / Almoço", code: "PRE_ALMOCO" },
    { name: "Pós / Almoço", code: "POS_ALMOCO" },
    { name: "Pré / Jantar", code: "PRE_JANTAR" },
    { name: "Pós / Jantar", code: "POS_JANTAR" },
    { name: "Antes Dormir", code: "ANTES_DORMIR" },
    { name: "Observação", code: "OBSERVACAO" },
];

export const formButtonsIcons: Array<IIconData> = [
    {
        iconAlt: "icone botao salvar",
        iconFile: "SaveIcon.svg",
    },
    {
        iconAlt: "icone registrar",
        iconFile: "AddIcon.svg",
    },
];

export const toggleButtonsIcons: Array<IIconData> = [
    {
        iconAlt: "icone de recolher formulario",
        iconFile: UpIcon,
    },
    {
        iconAlt: "icone buscar registros",
        iconFile: SearchIcon,
    },
];
