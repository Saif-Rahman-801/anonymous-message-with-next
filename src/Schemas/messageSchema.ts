import { z } from "zod";

export const messageSchema = z.object({
  content: z.string().min(10, "message should contain at least 10 characters").max(
    300, "message shouldn't contain more than 300 characters"
  )
});