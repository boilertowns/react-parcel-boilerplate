interface SingleColumnLayoutProps {
	header: React.ReactNode;
	main: React.ReactNode;
	footer: React.ReactNode;
}

/**
 * A traditional layout with a header, main content and footer in a single column.
 */
export const SingleColumnLayout = (props: SingleColumnLayoutProps) => {
	return (
		<>
			<header>{props.header}</header>
			<main>
				<div className="container mx-auto my-0">{props.main}</div>
			</main>
			<footer>{props.footer}</footer>
		</>
	);
};
