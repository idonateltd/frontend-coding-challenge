import { Card, Spinner } from "@heroui/react";

interface LoadingStateProps {
	description?: string;
	title: string;
}

export const LoadingState = (props: LoadingStateProps) => (
	<Card
		aria-live="polite"
		className="border border-border"
		role="status"
		variant="transparent"
	>
		<Card.Header className="flex-row items-center gap-3">
			<Spinner aria-hidden="true" color="accent" size="sm" />
			<div className="flex min-w-0 flex-col">
				<Card.Title>{props.title}</Card.Title>
				{props.description && (
					<Card.Description>{props.description}</Card.Description>
				)}
			</div>
		</Card.Header>
	</Card>
);
