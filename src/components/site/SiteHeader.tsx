import { MobileMenu } from "@/components/navigation/MobileMenu";
import { SiteNavigation } from "@/components/navigation/SiteNavigation";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          className="site-header__brand"
          href="/"
          aria-label="Hasan Bukhari home"
        >
          <span aria-hidden="true" className="site-header__issue">
            ISSUE 01
          </span>
          <span>Hasan Bukhari</span>
        </Link>
        <div className="site-header__desktop-nav">
          <SiteNavigation />
        </div>
        <div className="site-header__mobile-nav">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
