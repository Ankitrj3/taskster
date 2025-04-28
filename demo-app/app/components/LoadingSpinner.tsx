export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        {/* Pulse effect around loader */}
        <div className="absolute -inset-2 rounded-full bg-slate-600/30 animate-pulse"></div>
        {/* Multi-layered spinner */}
        <div className="w-16 h-16 relative">
          <div className="loading-spinner-inner"></div>
          <div className="loading-spinner-outer"></div>
        </div>
      </div>
      <p className="text-slate-400 mt-8 font-medium">Checking status...</p>
    </div>
  );
}
