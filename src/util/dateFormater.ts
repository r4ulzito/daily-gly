import { IFormatDate } from "../interfaces/FormatDateInterface";

export const formatDate = (date: Date): IFormatDate => {
    const dividerDate = date.toLocaleDateString().split("/");

    return {
        day: Number(dividerDate[0]),
        month: Number(dividerDate[1]),
        year: Number(dividerDate[2]),
    };
};
