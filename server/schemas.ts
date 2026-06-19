import { z } from "zod";

const categoryIdSchema = z.enum([
	"engineering",
	"product",
	"security",
	"people",
	"operations",
]);

export const categorySchema = z.object({
	id: categoryIdSchema,
	label: z.string(),
	description: z.string(),
});

export const documentSchema = z.object({
	id: z.string(),
	title: z.string(),
	summary: z.string(),
	content: z.string(),
	type: z.enum(["runbook", "guide", "policy", "reference", "decision"]),
	category: categoryIdSchema,
	status: z.enum(["verified", "needs-review", "archived"]),
	owner: z.string(),
	tags: z.array(z.string()),
	updatedAt: z.string(),
	readTimeMinutes: z.number(),
	isFavorite: z.boolean(),
});

export const categoriesSchema = z.array(categorySchema);
export const documentsSchema = z.array(documentSchema);

export const databaseSchema = z.object({
	categories: categoriesSchema,
	documents: documentsSchema,
});

export type KnowledgeCategory = z.infer<typeof categorySchema>;
export type KnowledgeDocument = z.infer<typeof documentSchema>;
export type KnowledgeDatabase = z.infer<typeof databaseSchema>;
