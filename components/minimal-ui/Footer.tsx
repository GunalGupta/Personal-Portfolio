import Link from "next/link";
import { siteMetadata } from "../../data/siteMetadata";

export function MinimalFooter() {
  return (
    <footer className="flex justify-center align-center pt-10 pb-5 h-20px">
      <p className="text-gray-500  dark:text-gray-400 text-sm">
        © {new Date().getFullYear()}&nbsp;
        <Link
          href={siteMetadata.social.x}
          target="_blank"
          rel="noopener noreferrer"
        >
          Gunal Gupta.
        </Link>
        &nbsp; All rights reserved.
      </p>
    </footer>
  );
}
