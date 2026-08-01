import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Privacy",
  "Privacy information for Hasan Bukhari’s portfolio website.",
  "/privacy",
);
export default function PrivacyPage() {
  return (
    <article className="utility-page">
      <header>
        <p className="eyebrow">Publication note</p>
        <h1>Privacy</h1>
        <p className="utility-page__lead">
          This implementation sets no contact form, analytics service,
          advertising tracker, or third-party media embed.
        </p>
      </header>
      <section>
        <h2>External links</h2>
        <p>
          Links to GitHub, LinkedIn, and email leave this site and are governed
          by those services. No visitor message is collected by this repository.
        </p>
      </section>
    </article>
  );
}
