import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const postUserLoginService = () => {
    const { data, isLoading, error, mutateAsync } = useMutation(
        async (token: string) => {
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/users/login`,
                null,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            return response;
        }
    );

    const userLogin = async (token: string) => {
        const response = await mutateAsync(token);

        return response;
    };

    return { data, isLoading, error, userLogin };
};
