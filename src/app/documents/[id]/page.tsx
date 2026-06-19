import { Card, Chip, IconChevronLeft, Link, Separator } from "@heroui/react";

import type { KnowledgeDocument } from "../../../../server/schemas";
import { DocumentFavoriteButton } from "../_module/document-favorite-button";
import {
	getDocumentCategoryLabel,
	getDocumentStatusLabel,
	getDocumentTypeLabel,
} from "../_module/document-options";

const data = {
	category: "engineering",
	content: "This is placeholder content for the document detail page.",
	id: "document-id",
	isFavorite: false,
	owner: "Document owner",
	readTimeMinutes: 5,
	status: "verified",
	summary:
		"This placeholder summary shows where the document description should render.",
	tags: ["example", "details", "sample"],
	title: "Document title",
	type: "guide",
	updatedAt: "2026-06-19T12:00:00.000Z",
} satisfies KnowledgeDocument;

const statusColors: Record<
	KnowledgeDocument["status"],
	"danger" | "success" | "warning"
> = {
	archived: "danger",
	"needs-review": "warning",
	verified: "success",
};

const dateFormatter = new Intl.DateTimeFormat("en", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

const formatDocumentDate = (value: string) => {
	const date = new Date(value);

	if (Number.isNaN(date.getTime())) {
		return "Unknown date";
	}

	return dateFormatter.format(date);
};

export default function DocumentDetailsPage(
	_props: PageProps<"/documents/[id]">
) {
	// TODO: Fetch document.
	// TODO: Add empty and error states.
	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-8 lg:px-10">
			<Link className="button button--tertiary gap-1" href="/documents">
				<IconChevronLeft />
				Back
			</Link>

			<article className="grid gap-6">
				<header className="relative grid gap-4 pr-14">
					<div className="absolute top-0 right-0">
						<DocumentFavoriteButton isFavorite={data.isFavorite} />
					</div>
					<div className="flex flex-wrap items-center gap-2">
						<Chip color="accent" size="sm" variant="soft">
							{getDocumentCategoryLabel(data.category)}
						</Chip>
						<Chip color={statusColors[data.status]} size="sm" variant="soft">
							{getDocumentStatusLabel(data.status)}
						</Chip>
						{data.isFavorite && (
							<Chip size="sm" variant="secondary">
								Favorite
							</Chip>
						)}
					</div>

					<div className="grid gap-2">
						<h1 className="font-semibold text-3xl tracking-normal">
							{data.title}
						</h1>
						<p className="text-muted">{data.summary}</p>
					</div>
				</header>

				<Card variant="default">
					<Card.Content className="gap-6">
						<div className="grid gap-3 text-sm sm:grid-cols-2">
							<div>
								<p className="font-medium text-foreground">Type</p>
								<p className="text-muted">{getDocumentTypeLabel(data.type)}</p>
							</div>
							<div>
								<p className="font-medium text-foreground">Owner</p>
								<p className="text-muted">{data.owner}</p>
							</div>
							<div>
								<p className="font-medium text-foreground">Updated</p>
								<p className="text-muted">
									{formatDocumentDate(data.updatedAt)}
								</p>
							</div>
							<div>
								<p className="font-medium text-foreground">Read time</p>
								<p className="text-muted">{data.readTimeMinutes} min read</p>
							</div>
						</div>

						<Separator variant="secondary" />

						<div className="grid gap-3">
							<h2 className="font-semibold text-xl tracking-normal">Content</h2>
							<p className="text-foreground leading-7">{data.content}</p>
						</div>

						<div className="flex flex-wrap gap-2">
							{data.tags.map((tag) => (
								<Chip key={tag} size="sm" variant="secondary">
									{tag}
								</Chip>
							))}
						</div>
					</Card.Content>
				</Card>
			</article>
		</div>
	);
}
