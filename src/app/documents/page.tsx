import { Pagination } from "@heroui/react";

import type { KnowledgeDocument } from "../../../server/schemas";
import { DocumentCard } from "./_module/document-card";
import {
	DocumentFilters,
	type DocumentFiltersValue,
} from "./_module/document-filters";

const data = [
	{
		category: "engineering",
		content: "This is placeholder content for the documents list.",
		id: "document-id",
		isFavorite: false,
		owner: "Document owner",
		readTimeMinutes: 5,
		status: "verified",
		summary:
			"This placeholder summary shows where the document description should render.",
		tags: ["example", "documents", "sample"],
		title: "Document title",
		type: "guide",
		updatedAt: "2026-06-19T12:00:00.000Z",
	},
] satisfies KnowledgeDocument[];

const getDocuments = () => {
	// TODO: Fetch documents.
	return data;
};

const getVisibleDocuments = (documents: KnowledgeDocument[]) => {
	// TODO: Add search and filters.
	return documents;
};

const getPaginatedDocuments = (documents: KnowledgeDocument[]) => {
	// TODO: Add pagination.
	return documents;
};

const emptyFilters = {
	query: "",
} satisfies DocumentFiltersValue;

export default function DocumentsPage() {
	const documents = getDocuments();
	const visibleDocuments = getVisibleDocuments(documents);
	const paginatedDocuments = getPaginatedDocuments(visibleDocuments);

	return (
		<div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 lg:px-10">
			<header className="flex flex-col gap-2">
				<p className="font-medium text-muted text-sm">Knowledge Hub</p>
				<div className="flex flex-wrap items-end justify-between gap-4">
					<div className="flex flex-col gap-2">
						<h1 className="font-semibold text-3xl tracking-normal">
							Documents
						</h1>
						<p className="max-w-2xl text-muted">
							Browse company knowledge documents, policies, runbooks, and
							decision records.
						</p>
					</div>
				</div>
			</header>

			<DocumentFilters filters={emptyFilters} hasActiveFilters={false} />

			<section aria-label="Documents list" className="grid gap-3">
				<div className="w-fit rounded-lg border border-border px-3 py-2 text-muted text-sm">
					{visibleDocuments.length} documents
				</div>
				{paginatedDocuments.map((document) => (
					<DocumentCard document={document} key={document.id} />
				))}
				<Pagination className="w-full">
					<Pagination.Summary>
						Showing 1-{paginatedDocuments.length} of {visibleDocuments.length}{" "}
						documents
					</Pagination.Summary>
					<Pagination.Content>
						<Pagination.Item>
							<Pagination.Previous isDisabled>
								<Pagination.PreviousIcon />
								<span>Previous</span>
							</Pagination.Previous>
						</Pagination.Item>
						<Pagination.Item>
							<Pagination.Link isActive>1</Pagination.Link>
						</Pagination.Item>
						<Pagination.Item>
							<Pagination.Next isDisabled>
								<span>Next</span>
								<Pagination.NextIcon />
							</Pagination.Next>
						</Pagination.Item>
					</Pagination.Content>
				</Pagination>
			</section>
		</div>
	);
}
