interface Props { label?: string; }
export function LoadingState({ label = "Loading content" }: Props) { return <div className="loading-state" role="status" aria-live="polite"><span className="loading-state__mark" aria-hidden="true" /><span>{label}</span></div>; }
