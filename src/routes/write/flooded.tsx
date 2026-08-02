import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import book from "@/assets/flooded-book.jpg.asset.json";
import wrap from "@/assets/flooded-wrap.jpg.asset.json";

export const Route = createFileRoute("/write/flooded")({
  head: () => ({
    meta: [
      { title: "Flooded — a poetry collection in progress | Hasan Bukhari" },
      {
        name: "description",
        content:
          "Flooded is Hasan Bukhari's poetry collection, still being shaped: sequencing, editing, cover and material decisions, with no publication date yet.",
      },
      { property: "og:title", content: "Flooded — a poetry collection in progress" },
      {
        property: "og:description",
        content:
          "A physical manuscript, a cover on its second revision, and an honest status: still becoming.",
      },
    ],
  }),
  component: Flooded,
});

function Block({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="shell grid-editorial border-t border-border py-14">
      <div className="col-span-4 lg:col-span-4">
        <p className="meta text-gold">{label}</p>
        <h2 className="display mt-4 text-3xl lg:text-[2.5rem]">{title}</h2>
      </div>
      <div className="col-span-4 mt-5 lg:col-span-7 lg:col-start-6 lg:mt-0">{children}</div>
    </section>
  );
}

function Flooded() {
  return (
    <>
      <SiteNav />
      <main className="stage-write bg-background pt-14 text-foreground">
        <header className="shell grid-editorial items-center gap-y-12 py-16 lg:py-24">
          <div className="col-span-4 lg:col-span-6">
            <img
              src={book.url}
              alt="A physical copy of Flooded held in one hand: deep blue cloth cover with cream type."
              className="w-full max-w-[26rem]"
              width={1200}
              height={1600}
              style={{ boxShadow: "0 60px 100px -50px oklch(0 0 0 / 0.9)" }}
            />
          </div>
          <div className="col-span-4 lg:col-span-5 lg:col-start-8">
            <p className="meta text-muted-foreground">Case study · Write</p>
            <h1 className="display mt-5 text-6xl lg:text-[5rem]">Flooded</h1>
            <p className="display mt-6 text-2xl lg:text-3xl">
              A poetry collection I'm still shaping, from sequence to cover.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="stamp">Status · in progress</span>
              <span className="stamp">No publication date</span>
            </div>
          </div>
        </header>

        <Block label="01" title="Status, honestly">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            The manuscript exists as a physical object and the cover is on a second revision. It is
            not published, not for sale, and not finished. There is no publisher and no date to
            announce.
          </p>
        </Block>

        <Block label="02" title="The collection">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            A single collection rather than a set of unrelated poems, which is why the order matters
            more than any individual page. What it is about is not settled enough to summarise, and
            summarising it early would be a lie.
          </p>
        </Block>

        <Block label="03" title="Writing, sequencing, editing">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            Drafting happens separately from ordering. Poems are written first, then arranged, then
            cut where the arrangement exposes repetition. Most editing passes remove pages rather
            than add them.
          </p>
        </Block>

        <Block label="04" title="Cover and material">
          <figure>
            <img
              src={wrap.url}
              alt="The full cover wrap for Flooded showing front, spine and back."
              loading="lazy"
              className="w-full"
            />
            <figcaption className="meta mt-3 text-muted-foreground">
              Fig. 03 — Full cover wrap, current revision
            </figcaption>
          </figure>
          <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
            Deep blue cloth, cream type, restrained gold. The material choices came after the print
            test, not before it.
          </p>
        </Block>

        <Block label="05" title="Excerpts">
          <div className="gate flex min-h-40 flex-col justify-center p-6">
            <p className="meta text-gold">Empty on purpose</p>
            <p className="measure mt-3 text-sm leading-relaxed text-muted-foreground">
              No poem is quoted here until Hasan approves an exact excerpt. This space stays blank
              rather than being filled with sample text.
            </p>
          </div>
        </Block>

        <Block label="06" title="Updates">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            This page changes when the sequence changes. Next update: after the current editing pass
            closes.
          </p>
        </Block>

        <Block label="07" title="Related creative work">
          <Link to="/" hash="about" className="link-rule display text-2xl">
            Student Poets Association — the rooms this work comes out of
          </Link>
        </Block>
      </main>
      <SiteFooter />
    </>
  );
}
