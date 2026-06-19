import type { KnowledgeDocument } from "../../../../server/schemas";

export interface DocumentOption<T extends string> {
	label: string;
	value: T;
}

export const documentCategoryOptions: DocumentOption<
	KnowledgeDocument["category"]
>[] = [
	{ label: "Engineering", value: "engineering" },
	{ label: "Product", value: "product" },
	{ label: "Security", value: "security" },
	{ label: "People", value: "people" },
	{ label: "Operations", value: "operations" },
];

export const documentTypeOptions: DocumentOption<KnowledgeDocument["type"]>[] =
	[
		{ label: "Runbook", value: "runbook" },
		{ label: "Guide", value: "guide" },
		{ label: "Policy", value: "policy" },
		{ label: "Reference", value: "reference" },
		{ label: "Decision", value: "decision" },
	];

export const documentStatusOptions: DocumentOption<
	KnowledgeDocument["status"]
>[] = [
	{ label: "Verified", value: "verified" },
	{ label: "Needs review", value: "needs-review" },
	{ label: "Archived", value: "archived" },
];

const getOptionLabel = <T extends string>(
	options: DocumentOption<T>[],
	value: T
) => {
	const option = options.find((item) => item.value === value);

	return option?.label ?? value;
};

export const getDocumentCategoryLabel = (
	value: KnowledgeDocument["category"]
) => getOptionLabel(documentCategoryOptions, value);

export const getDocumentTypeLabel = (value: KnowledgeDocument["type"]) =>
	getOptionLabel(documentTypeOptions, value);

export const getDocumentStatusLabel = (value: KnowledgeDocument["status"]) =>
	getOptionLabel(documentStatusOptions, value);
