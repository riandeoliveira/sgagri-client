import { z } from "zod";

export const fazendaSchema = {
  cadastro: z.object({
    nome: z
      .string()
      .trim()
      .max(64, { message: "Máximo de 64 caracteres" })
      .nonempty("Campo Obrigatório!"),
    areaHa: z.number().min(0, { message: "Campo maior ou igual a zero!" }).optional(),
    descricao: z.string().trim().max(1024, { message: "Máximo de 1024 caracteres!" }),
  }),

  edicao: z.object({
    nome: z.string(),
    areaHa: z.number(),
    descricao: z.string(),
  }),
};

export type FazendaCadastroSchema = z.infer<typeof fazendaSchema.cadastro>;
export type FazendaEdicaoSchema = z.infer<typeof fazendaSchema.edicao>;