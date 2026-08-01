import Link from "next/link";
interface AlbumTrack { href: string; number: string; title: string; description: string; }
interface Props { heading?: string; tracks: readonly AlbumTrack[]; }
export function AlbumTracklist({ heading = "Contents / Tracklist", tracks }: Props) { return <nav aria-label={heading} className="tracklist"><h2 className="tracklist__heading">{heading}</h2><ol className="tracklist__list">{tracks.map((track) => <li key={`${track.number}-${track.href}`}><Link className="tracklist__entry" href={track.href}><span className="tracklist__number" aria-hidden="true">{track.number}</span><span className="tracklist__copy"><span className="tracklist__title">{track.title}</span><span className="tracklist__description">{track.description}</span></span></Link></li>)}</ol></nav>; }
