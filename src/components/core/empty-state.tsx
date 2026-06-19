import { Card } from "@heroui/react";
import type { ReactNode } from "react";

interface EmptyStateProps {
	children?: ReactNode;
	description?: string;
	title: string;
}

export const EmptyState = (props: EmptyStateProps) => (
	<Card className="border border-dashed" variant="transparent">
		<Card.Header>
			<Card.Title>{props.title}</Card.Title>
			{props.description && (
				<Card.Description>{props.description}</Card.Description>
			)}
		</Card.Header>
		{props.children && <Card.Footer>{props.children}</Card.Footer>}
	</Card>
);
