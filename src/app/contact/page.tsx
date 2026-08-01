import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Contact Hasan Bukhari by email, LinkedIn, or GitHub.",
  "/contact",
);
export default function ContactPage() {
  return (
    <div className="utility-page utility-page--contact">
      <header>
        <p className="eyebrow">Act IV / What comes next</p>
        <h1>Letâ€™s make the next thing.</h1>
        <p className="utility-page__lead">
          For software, computational biology, research engineering, creative
          technology, and community collaboration.
        </p>
      </header>
      <address className="contact-ledger">
        <a href="mailto:hasan.bukhari25@gmail.com">
          <span>01 / Email</span>
          <strong>hasan.bukhari25@gmail.com</strong>
        </a>
        <a
          href="https://www.linkedin.com/in/hasan-bukhari"
          rel="noreferrer"
          target="_blank"
        >
          <span>02 / LinkedIn</span>
          <strong>
            Hasan Bukhari <span className="sr-only">(opens in a new tab)</span>
          </strong>
        </a>
        <a
          href="https://github.com/glitchmatrix-jpg"
          rel="noreferrer"
          target="_blank"
        >
          <span>03 / Product + mobile GitHub</span>
          <strong>
            glitchmatrix-jpg{" "}
            <span className="sr-only">(opens in a new tab)</span>
          </strong>
        </a>
        <a
          href="https://github.com/PurplePoet25"
          rel="noreferrer"
          target="_blank"
        >
          <span>04 / Research + games GitHub</span>
          <strong>
            PurplePoet25 <span className="sr-only">(opens in a new tab)</span>
          </strong>
        </a>
      </address>
      <aside>
        <p>
          No contact form is enabled because the repository contains no approved
          submission service, retention policy, or environment configuration.
        </p>
        <ButtonLink href="mailto:hasan.bukhari25@gmail.com">
          Start an email
        </ButtonLink>
      </aside>
    </div>
  );
}
