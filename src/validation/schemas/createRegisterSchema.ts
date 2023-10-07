import * as yup from "yup";
import { ICreateRegisterRequest } from "../../interfaces/request/CreateRegisterRequestInterface";

export const createRegisterValidate = async (
    formData: ICreateRegisterRequest
) => {
    const createRegisterSchema = yup.object<ICreateRegisterRequest>().shape({
        user_id: yup.number().required(),
        date: yup.string().required({
            field: "CalendarInput",
            message: "A data não pode ser nula",
        }),
        period: yup
            .string()
            .required({
                field: "PeriodInput",
                message: "Período é obrigatório",
            })
            .equals(
                [
                    "PRE_CAFE",
                    "POS_CAFE",
                    "PRE_ALMOCO",
                    "POS_ALMOCO",
                    "PRE_JANTAR",
                    "POS_JANTAR",
                    "ANTES_DORMIR",
                    "OBSERVACAO",
                ],
                {
                    field: "PeriodInput",
                    message: "O período selecionado nao existe",
                }
            ),
        gly_value:
            formData.period === "OBSERVACAO"
                ? yup
                      .number()
                      .nullable()
                      .min(1, {
                          field: "GlyValueInput",
                          message: "O valor deve ser maior que 0",
                      })
                      .max(600, {
                          field: "GlyValueInput",
                          message: "O valor deve ser menor que 600",
                      })
                : yup
                      .number()
                      .required({
                          field: "GlyValueInput",
                          message: "O valor é obrigatório",
                      })
                      .nullable()
                      .min(1, {
                          field: "GlyValueInput",
                          message: "O valor deve ser maior que 0",
                      })
                      .max(600, {
                          field: "GlyValueInput",
                          message: "O valor deve ser menor que 600",
                      }),
        observation:
            formData.period === "OBSERVACAO"
                ? yup
                      .string()
                      .required({
                          field: "ObservationInput",
                          message: "A observação nao pode ser vazia!",
                      })
                      .max(23, {
                          field: "ObservationInput",
                          message: "Limite de caracteres atingido",
                      })
                : yup.string().nullable().max(23, {
                      field: "ObservationInput",
                      message: "Limite de caracteres atingido",
                  }),
    });

    await createRegisterSchema.validate(formData);
};
