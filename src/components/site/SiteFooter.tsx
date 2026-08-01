import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p>
          <strong>Hasan Bukhari</strong>
        </p>
        <p>Build · Research · Write</p>
      </div>
      <nav aria-label="Footer navigation">
        <ul>
          <li>
            <Link href="/build">Build</Link>
          </li>
          <li>
            <Link href="/research">Research</Link>
          </li>
          <li>
            <Link href="/write">Write</Link>
          </li>
          <li>
            <Link href="/resume">Résumé</Link>
          </li>
          <li>
            <Link href="/accessibility">Accessibility</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <a href="mailto:hasan.bukhari25@gmail.com">Email</a>
          </li>
        </ul>
      </nav>
      <p className="footer-meta">Direction C / working preview</p>
    </footer>
  );
}
