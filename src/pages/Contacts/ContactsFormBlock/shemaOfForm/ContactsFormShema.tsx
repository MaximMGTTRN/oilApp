import { z } from "zod";

export const ContactsFormSchema = () =>
  z.object({
    name: z
      .string()
      .min(1, `Минимальная длина:${ 1 }`)
      .max(10, `Максимальная длина: ${ 10 }`),
    email: z.string().email("Некоректная почта"),
    message: z
    .string()
    .min(5, `Минимальная длина:${5}`)
    .max(1024,`Максимальная длина:${1024}`),
    agree: z.boolean().refine((val) => val === true, {
      message: "Необходимо согласиться с условиями",
    }),
  });

export type ContactsFormType = z.infer<ReturnType<typeof ContactsFormSchema>>;