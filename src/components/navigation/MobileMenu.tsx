"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { Route } from "next";
import Link from "next/link";

const items = [
  ["/build", "Build"],
  ["/research", "Research"],
  ["/write", "Write"],
  ["/about", "About"],
  ["/resume", "RÃƒÂ©sumÃƒÂ©s"],
  ["/contact", "Contact"],
] as const;

export function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="mobile-menu__trigger">Menu</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu__overlay" />
        <Dialog.Content
          aria-describedby="mobile-menu-description"
          className="mobile-menu__content"
        >
          <div className="mobile-menu__header">
            <Dialog.Title className="mobile-menu__title">
              Issue index
            </Dialog.Title>
            <Dialog.Close className="mobile-menu__close">Close</Dialog.Close>
          </div>
          <p id="mobile-menu-description">
            Navigate Build, Research, and Write.
          </p>
          <nav aria-label="Mobile navigation">
            <ol className="mobile-menu__list">
              {items.map(([href, label], index) => (
                <li key={href}>
                  <Dialog.Close asChild>
                    <Link className="mobile-menu__link" href={href as Route}>
                      <span aria-hidden="true">0{index + 1}</span>
                      <span>{label}</span>
                    </Link>
                  </Dialog.Close>
                </li>
              ))}
            </ol>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
