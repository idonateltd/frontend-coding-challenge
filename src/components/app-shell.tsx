"use client";

import {
	Avatar,
	Card,
	cn,
	Separator as HeroSeparator,
	Label,
	ScrollShadow,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";

const MENU_SECTIONS = [
	{
		label: "Menu",
		items: [{ href: "/", label: "Home" }],
	},
] as const;

interface AppShellProps {
	children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
	const pathname = usePathname();
	return (
		<Group
			className="h-dvh w-dvw overflow-hidden bg-background text-foreground"
			orientation="horizontal"
		>
			<Panel
				className="bg-surface"
				defaultSize="320px"
				groupResizeBehavior="preserve-pixel-size"
				id="sidebar"
				maxSize="420px"
				minSize="240px"
			>
				<aside className="flex h-full flex-col">
					<div className="flex shrink-0 flex-col gap-4 px-4 py-5">
						<Card className="p-2" variant="secondary">
							<Card.Content className="flex-row items-center gap-2">
								<Avatar
									className="size-10 shrink-0 rounded-xl"
									color="accent"
									variant="soft"
								>
									<Avatar.Fallback>KH</Avatar.Fallback>
								</Avatar>
								<div className="flex min-w-0 flex-1 flex-col -space-y-1">
									<Card.Title className="w-full truncate">
										Knowledge Hub
									</Card.Title>
									<Card.Description className="w-full truncate">
										Internal workspace
									</Card.Description>
								</div>
							</Card.Content>
						</Card>
					</div>

					<HeroSeparator variant="secondary" />

					<ScrollShadow className="min-h-0 flex-1 px-3 py-4" hideScrollBar>
						<nav aria-label="Knowledge navigation" className="grid gap-6">
							{MENU_SECTIONS.map((section) => (
								<div className="grid gap-2" key={section.label}>
									<Label className="px-2 font-semibold text-muted">
										{section.label}
									</Label>
									<div className="grid gap-1">
										{section.items.map((item) => {
											const isActive =
												item.href === "/"
													? pathname === item.href
													: pathname.startsWith(item.href);

											return (
												<Link
													className={cn(
														"button w-full justify-start",
														isActive
															? "button--tertiary font-semibold"
															: "button--ghost"
													)}
													href={item.href}
													key={item.label}
													prefetch={true}
												>
													{item.label}
												</Link>
											);
										})}
									</div>
								</div>
							))}
						</nav>
					</ScrollShadow>

					<HeroSeparator variant="secondary" />
				</aside>
			</Panel>

			<Separator
				aria-label="Resize navigation panel"
				className={cn(
					"w-1 bg-border outline-none transition-colors",
					"data-[separator=active]:bg-border-secondary"
				)}
				disableDoubleClick
			/>

			<Panel className="min-h-0 bg-background" id="main">
				<main className="h-full overflow-auto">
					<div className="min-h-full w-full">{children}</div>
				</main>
			</Panel>
		</Group>
	);
}
