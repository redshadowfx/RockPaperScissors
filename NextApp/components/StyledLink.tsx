import Link from "next/link";

type Props = React.ComponentProps<"a">;

function StyledLink(props: Props) {
  return (
    <Link
      href={props.href as string}
      className="bg-secondary text-accent py-4 px-8 m-8 drop-shadow-accent-light dark:drop-shadow-accent-bold rounded-md transition ease-in-out duration-150 hover:scale-110"
    >
      {props.children}
    </Link>
  );
}

export default StyledLink;
