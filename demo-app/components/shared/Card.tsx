interface CardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly borderColor?: string;
  readonly header?: React.ReactNode;
  readonly footer?: React.ReactNode;
}

export default function Card({
  children,
  className = "",
  borderColor = "border-slate-700/50",
  header,
  footer,
}: CardProps) {
  return (
    <div
      className={`w-full max-w-md backdrop-blur-lg bg-slate-900/80 border ${borderColor} rounded-3xl shadow-xl overflow-hidden ${className}`}
    >
      {header}
      <div className="p-8">{children}</div>
      {footer}
    </div>
  );
}
