import { queryClient } from "../contexts/QueryProviderContext";

export const handleInvalidateQuery = async () => {
    await queryClient.invalidateQueries(["monthRegisters"]);
};
