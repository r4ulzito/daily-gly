import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IRegisterMonth } from "../interfaces/RegisterMonthInterface";
import { formatDate } from "../util/dateFormater";
import { IFormatDate } from "../interfaces/FormatDateInterface";
import { ICreateRegisterRequest } from "../interfaces/request/CreateRegisterRequestInterface";
import { handleInvalidateQuery } from "../util/invalidateQuery";

const REGISTERS_PATH = "/registers";

export const getUserMonthDayRegistersService = (date: Date, userId: number) => {
    const { data, isLoading, isFetching, refetch } = useQuery<IRegisterMonth>(
        ["monthRegisters"],
        async () => {
            let formatedDate: IFormatDate = formatDate(
                date === null ? new Date() : date!
            );

            const response = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}${REGISTERS_PATH}?year=${
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

export const createDayRegisterService = () => {
    const { data, mutateAsync, isLoading, error } = useMutation(
        async (requestBody: ICreateRegisterRequest) => {
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}${REGISTERS_PATH}`,
                requestBody
            );

            return response.data;
        }
    );

    const createDayRegister = async (requestBody: ICreateRegisterRequest) => {
        await mutateAsync(requestBody);
        await handleInvalidateQuery();
    };

    return { data, isLoading, error, createDayRegister };
};
