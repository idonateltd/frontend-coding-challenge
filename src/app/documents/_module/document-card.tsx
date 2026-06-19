import { Card, Chip } from "@heroui/react";
import type { Route } from "next";
import Link from "next/link";

import type { KnowledgeDocument } from "../../../../server/schemas";
import { DocumentFavoriteButton } from "./document-favorite-button";
import {
	getDocumentCategoryLabel,
	getDocumentStatusLabel,
	getDocumentTypeLabel,
} from "./document-options";

const statusColors: Record<
	KnowledgeDocument["status"],
	"danger" | "success" | "warning"
> = {
	verified: "success",
	"needs-review": "warning",
	archived: "danger",
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

interface DocumentCardProps {
	document: KnowledgeDocument;
}

export const DocumentCard = (props: DocumentCardProps) => (
	<Card
		className="relative gap-4 transition-colors hover:bg-surface-hover"
		role="article"
		variant="default"
	>
		<Link
			aria-label={`Open ${props.document.title}`}
			className="absolute inset-0 z-10 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
			href={`/documents/${props.document.id}` as Route}
		/>
		<div className="absolute top-4 right-4 z-30">
			<DocumentFavoriteButton isFavorite={props.document.isFavorite} />
		</div>
		<Card.Header className="pointer-events-none relative z-20 gap-3 pr-14">
			<div className="flex min-w-0 flex-1 flex-col gap-2">
				<div className="flex flex-wrap items-center gap-2">
					<Chip color="accent" size="sm" variant="soft">
						{getDocumentCategoryLabel(props.document.category)}
					</Chip>
					<Chip
						color={statusColors[props.document.status]}
						size="sm"
						variant="soft"
					>
						{getDocumentStatusLabel(props.document.status)}
					</Chip>
					{props.document.isFavorite && (
						<Chip size="sm" variant="secondary">
							Favorite
						</Chip>
					)}
				</div>
				<Card.Title className="text-lg">{props.document.title}</Card.Title>
				<Card.Description className="max-w-3xl">
					{props.document.summary}
				</Card.Description>
			</div>
		</Card.Header>
		<Card.Footer className="pointer-events-none relative z-20 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted text-sm">
			<span>{getDocumentTypeLabel(props.document.type)}</span>
			<span>{props.document.owner}</span>
			<span>{props.document.readTimeMinutes} min read</span>
			<span>Updated {formatDocumentDate(props.document.updatedAt)}</span>
		</Card.Footer>
	</Card>
);
