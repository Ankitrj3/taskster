"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Use dynamic import with suspense for the main status card
const StatusCard = dynamic(() => import("./components/StatusCard"), {
  loading: () => <StatusCardSkeleton />,
  ssr: false,
});

// Simple skeleton loader for the entire card
function StatusCardSkeleton() {
  return (
    <div className="w-full max-w-md bg-slate-900/80 border border-slate-700/50 rounded-3xl shadow-xl overflow-hidden animate-pulse">
      <div className="h-2 w-full bg-slate-700"></div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="h-8 w-36 bg-slate-700 rounded"></div>
          <div className="h-6 w-20 bg-slate-700 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center py-16">
          <div className="h-36 w-36 rounded-full bg-slate-800 mb-8"></div>
          <div className="h-10 w-64 bg-slate-800 rounded mb-3"></div>
          <div className="h-4 w-full max-w-xs bg-slate-800 rounded mb-2"></div>
          <div className="h-4 w-full max-w-xs bg-slate-800 rounded mb-8"></div>
          <div className="h-8 w-32 bg-slate-800 rounded-full"></div>
        </div>
      </div>

      <div className="bg-slate-800 px-8 py-4 border-t border-slate-700">
        <div className="flex justify-between">
          <div className="h-4 w-32 bg-slate-700 rounded"></div>
          <div className="h-4 w-32 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-800 p-6 text-slate-100">
      <Suspense fallback={<StatusCardSkeleton />}>
        <StatusCard />
      </Suspense>
    </div>
  );
}
