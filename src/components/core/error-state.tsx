import { Card } from "@heroui/react";
import type { ReactNode } from "react";

interface ErrorStateProps {
	children?: ReactNode;
	description?: string;
	title: string;
}

export const ErrorState = (props: ErrorStateProps) => (
	<Card className="border border-danger/30" role="alert" variant="transparent">
		<Card.Header>
			<Card.Title>{props.title}</Card.Title>
			{props.description && (
				<Card.Description>{props.description}</Card.Description>
			)}
		</Card.Header>
		{props.children && <Card.Footer>{props.children}</Card.Footer>}
	</Card>
);
