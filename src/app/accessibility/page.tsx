import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility approach and contact information for Hasan Bukhari’s portfolio.",
};
export default function AccessibilityPage() {
  return (
    <article className="utility-page">
      <header>
        <p className="eyebrow">Access note</p>
        <h1>Accessibility</h1>
        <p className="utility-page__lead">
          The site is designed for keyboard use, visible focus, readable text,
          reduced motion, semantic structure, and narrow screens.
        </p>
      </header>
      <section>
        <h2>Known limits</h2>
        <p>
          Automated checks cannot verify every experience. If you encounter a
          barrier, email{" "}
          <a href="mailto:hasan.bukhari25@gmail.com">
            hasan.bukhari25@gmail.com
          </a>{" "}
          with the page and the problem.
        </p>
      </section>
    </article>
  );
}
