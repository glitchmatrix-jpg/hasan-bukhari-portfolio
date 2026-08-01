interface Props {
  value: string;
  label: string;
  context: string;
  limitation?: string;
}
export function ResearchMetric({ context, label, limitation, value }: Props) {
  return (
    <figure className="research-metric">
      <p className="research-metric__value">{value}</p>
      <figcaption>
        <strong>{label}</strong>
        <span>{context}</span>
        {limitation ? (
          <span className="research-metric__limitation">{limitation}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
