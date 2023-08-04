import * as yup from "yup";

export const FormContactSchema = yup.object({
    name: yup
        .string()
        .min(1, "Informe algum nome")
        .max(64, "Nome deve ter até 64 caracteres")
        .required("Informe seu nome"),
    message: yup
        .string()
        .min(1, "Informe alguma mensagem")
        .max(1024, "Nome deve ter até 1024 caracteres")
        .required("Informe sua mensagem"),
    contact: yup
        .string()
        .min(1, "Informe algum contato")
        .max(64, "Contato deve ter até 64 caracteres")
        .required("Informe seu contato"),
});
