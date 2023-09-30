import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IRegisterMonth } from "../interfaces/RegisterMonthInterface";
import { formatDate } from "../util/dateFormater";
import { IFormatDate } from "../interfaces/FormatDateInterface";

export const getUserMonthDayRegisters = (date: Date, userId: number) => {
    const { data, isLoading, isFetching, refetch } = useQuery<IRegisterMonth>(
        ["monthRegisters"],
        async () => {
            let formatedDate: IFormatDate = formatDate(
                date === null ? new Date() : date!
            );

            const response = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/registers?year=${
                    formatedDate.year
                }&month=${formatedDate.month}`,
                {
                    headers: {
                        userId: userId,
                    },
                }
            );

            return {
                year: response.data.year,
                month: response.data.month,
                registers: response.data.registers,
            };
        },
        {
            staleTime: 1000 * 60,
            retry: 3,
            enabled: false,
        }
    );

    return { data, isLoading, isFetching, refetch };
};
