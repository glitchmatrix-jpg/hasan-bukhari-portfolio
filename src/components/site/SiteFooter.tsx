import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Hasan Bukhari — Build · Research · Write</p>
      <nav aria-label="Footer navigation">
        <ul>
          <li><Link href="/accessibility">Accessibility</Link></li>
          <li><Link href="/privacy">Privacy</Link></li>
          <li><a href="mailto:hasan.bukhari25@gmail.com">Email</a></li>
        </ul>
      </nav>
      <p className="footer-meta">ISSUE 01 · SCAFFOLD 0.1.0</p>
    </footer>
  );
}
