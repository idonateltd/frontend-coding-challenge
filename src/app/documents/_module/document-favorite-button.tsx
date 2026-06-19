import { Button } from "@heroui/react";
import type { SVGProps } from "react";

interface HeartIconProps extends SVGProps<SVGSVGElement> {
	isFilled: boolean;
}

interface DocumentFavoriteButtonProps {
	isFavorite: boolean;
}

const HeartIcon = ({ isFilled, ...props }: HeartIconProps) => (
	<svg
		aria-hidden="true"
		fill={isFilled ? "currentColor" : "none"}
		height="16"
		role="presentation"
		viewBox="0 0 16 16"
		width="16"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M8 13.25s-5.25-3.1-5.25-7.15A2.85 2.85 0 0 1 7.78 4.27L8 4.55l.22-.28a2.85 2.85 0 0 1 5.03 1.83C13.25 10.15 8 13.25 8 13.25Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
		/>
	</svg>
);

export const DocumentFavoriteButton = (props: DocumentFavoriteButtonProps) => (
	<Button
		aria-label={
			props.isFavorite
				? "Remove document from favorites"
				: "Add document to favorites"
		}
		isIconOnly
		type="button"
		variant="tertiary"
	>
		{/* TODO: Add favorite action. */}
		<HeartIcon className="size-4" isFilled={props.isFavorite} />
	</Button>
);
