export function ImagePlaceholder({
  label,
  showLabel = true,
  className = "",
}: {
  label: string;
  showLabel?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative border border-dashed border-border bg-muted ${className}`}
    >
      {showLabel && (
        <span className="absolute bottom-2 left-2 max-w-[calc(100%-1rem)] truncate rounded bg-background/80 px-2 py-1 text-xs text-muted-foreground">
          Image: {label}
        </span>
      )}
    </div>
  );
}
