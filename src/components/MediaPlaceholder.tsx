interface MediaPlaceholderProps {
  label: string;
  variant: 'hero' | 'story';
}

export function MediaPlaceholder({ label, variant }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder media-placeholder--${variant}`}>
      <span className="media-placeholder__label">{label}</span>
      <span className="media-placeholder__geometry" aria-hidden="true" />
    </div>
  );
}
