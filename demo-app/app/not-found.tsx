import Link from "next/link";
import { Button, Icon, Card } from "./components/shared";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-6">
      <Card className="text-center">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
            <Icon name="x" size="lg" className="text-red-400 h-12 w-12" />
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-300 mb-6">
            Page Not Found
          </h2>

          <p className="text-slate-400 max-w-md mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <Link href="/">
            <Button variant="primary" size="lg">
              <Icon name="refresh" className="mr-2" />
              Return Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
