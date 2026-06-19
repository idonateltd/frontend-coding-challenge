import {
	Button,
	Input,
	Label,
	Link,
	ListBox,
	Select,
	TextField,
} from "@heroui/react";

import type { KnowledgeDocument } from "../../../../server/schemas";
import {
	type DocumentOption,
	documentCategoryOptions,
	documentStatusOptions,
	documentTypeOptions,
} from "./document-options";

export interface DocumentFiltersValue {
	category?: KnowledgeDocument["category"];
	query: string;
	status?: KnowledgeDocument["status"];
	type?: KnowledgeDocument["type"];
}

interface DocumentFiltersProps {
	filters: DocumentFiltersValue;
	hasActiveFilters: boolean;
}

interface SelectFilterProps<T extends string> {
	label: string;
	name: string;
	options: DocumentOption<T>[];
	placeholder: string;
	value?: T;
}

function SelectFilter<T extends string>(props: SelectFilterProps<T>) {
	return (
		<Select
			defaultValue={props.value}
			fullWidth
			name={props.name}
			placeholder={props.placeholder}
			variant="secondary"
		>
			<Label>{props.label}</Label>
			<Select.Trigger>
				<Select.Value />
				<Select.Indicator />
			</Select.Trigger>
			<Select.Popover>
				<ListBox>
					{props.options.map((option) => (
						<ListBox.Item
							id={option.value}
							key={option.value}
							textValue={option.label}
						>
							{option.label}
							<ListBox.ItemIndicator />
						</ListBox.Item>
					))}
				</ListBox>
			</Select.Popover>
		</Select>
	);
}

export const DocumentFilters = (props: DocumentFiltersProps) => (
	<form
		action="/documents"
		className="grid gap-4 rounded-lg border border-border bg-surface p-4"
	>
		<TextField defaultValue={props.filters.query} name="q" variant="secondary">
			<Label>Search</Label>
			<Input placeholder="Search title, summary, owner, or tags" />
		</TextField>

		<div className="grid gap-3 md:grid-cols-3">
			<SelectFilter
				label="Category"
				name="category"
				options={documentCategoryOptions}
				placeholder="All categories"
				value={props.filters.category}
			/>
			<SelectFilter
				label="Type"
				name="type"
				options={documentTypeOptions}
				placeholder="All types"
				value={props.filters.type}
			/>
			<SelectFilter
				label="Status"
				name="status"
				options={documentStatusOptions}
				placeholder="All statuses"
				value={props.filters.status}
			/>
		</div>

		<div className="flex flex-wrap items-center gap-2">
			<Button type="submit" variant="secondary">
				Apply filters
			</Button>
			{props.hasActiveFilters && <Link href="/documents">Clear filters</Link>}
		</div>
	</form>
);
