import Link from "next/link";
import { Icon } from "./shared";

export default function GitHubLink() {
  return (
    <Link
      href="https://github.com/your-username/your-repo"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-slate-800/80 hover:bg-slate-700/80 p-2 rounded-full border border-slate-700/50 transition-colors">
        <Icon name="github" size="lg" className="text-slate-300" />
      </div>
    </Link>
  );
}
