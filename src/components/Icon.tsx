const paths: Record<string, string> = {
  layout: "M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 4h18M9 9v12",
  target: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z",
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zm-3 9l2 2 4-4",
  check: "M5 13l4 4L19 7",
  arrow: "M5 12h14m-6-6l6 6-6 6",
  plus: "M12 5v14M5 12h14",
};

export function Icon({ name, className = "h-5 w-5" }: { name: keyof typeof paths | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name] ?? paths.check} />
    </svg>
  );
}
