export interface ICreateRegisterRequest {
    user_id: number;
    date: string;
    period: string;
    gly_value: number | null;
    observation: string;
}
