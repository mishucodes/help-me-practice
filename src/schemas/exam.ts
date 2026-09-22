import z from "zod";

export const examParamsSchema = z.object(
    {
        category: z.string(),
        exam: z.string(),
        year: z.coerce.number(),
    });

const questionSchema = z.object(
    {
        passage: z.string(),
        question: z.string(),
        options: z.array(z.string()),
        correctOptions: z.array(z.number().int().nonnegative()),
    });

export const examSchema = z.array(questionSchema).min(1);
export type Exam = z.infer<typeof examSchema>;