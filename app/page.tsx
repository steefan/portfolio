import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stefan Condurachi — Senior Product Designer",
  description:
    "Senior product designer — operator-facing tools, AI-native workflows. Case studies: Oramo, Gilead Sciences, Ownzones.",
};

export default function Home() {
  return (
    <div className="wrap">
      <h1 className="name">Stefan Condurachi</h1>
      <p className="title-line">
        Senior product designer — operator-facing tools, AI-native workflows.
      </p>

      <div className="currently">Currently</div>
      <p className="currently-body">
        Technical co-founder of <strong>Oramo</strong>, building Romania’s first
        intelligent property management platform as sole designer and sole
        developer. Oramo launched in April 2026 and now runs at a steady-state
        cadence. <strong>Open to senior IC roles at companies serious about
        operator UX.</strong>
      </p>

      <p className="intro">
        Fifteen years designing complex professional tools — internal platforms,
        operator-facing software, B2B SaaS. Enough range to have shipped an
        Autodesk structural-engineering product, a cloud admin platform used by
        Paramount, and an internal system for Gilead Sciences. Enough focus to
        still find the same shape of problem interesting every time:{" "}
        <em>
          where customer experience, operator efficiency, and organizational
          legibility share one surface.
        </em>
      </p>

      <h2>Selected work</h2>

      <Link className="case oramo" href="/case-oramo-ai-native">
        <div className="case-meta">Oramo · 2025–present</div>
        <h3 className="case-title">
          How do you put an AI in a product it has no right to see?
        </h3>
        <p className="case-deck">
          Designing an AI-native B2B product end-to-end as sole designer and
          sole developer. Two features, one permissions problem.
        </p>
        <p className="case-role">
          Technical co-founder &amp; product designer{" "}
          <span className="dot">·</span> Sole designer, sole developer
        </p>
      </Link>

      <Link className="case gilead" href="/case-gilead-discovery">
        <div className="case-meta">Gilead Sciences · 2019–2020</div>
        <h3 className="case-title">The 30-app problem</h3>
        <p className="case-deck">
          Discovery-led replacement of a decade of legacy internal tooling at a
          15,000-employee biopharmaceutical R&amp;D company. Five weeks on-site
          and remote. Phase 2 pulled forward by two months.
        </p>
        <p className="case-role">
          Discovery lead <span className="dot">·</span> Cognizant Softvision on
          behalf of Gilead Sciences
        </p>
      </Link>

      <Link className="case ownzones" href="/case-ownzones-connect">
        <div className="case-meta">Ownzones Media Network · 2015–2017</div>
        <h3 className="case-title">The dashboard that replaced a mailroom</h3>
        <p className="case-deck">
          When Paramount was still shipping feature films to distribution
          partners on hard drives via courier, Ownzones Connect replaced that
          with a browser-based dashboard. Here’s how its operator-facing side
          got designed.
        </p>
        <p className="case-role">
          Senior UX designer <span className="dot">·</span> First UX hire
        </p>
      </Link>

      <hr className="divider" />

      <div className="aside">
        <p>
          Before those, I built the design function at Ownzones from zero, led
          a parent design system for Estée Lauder with subsidiary adaptations
          for MAC and Jo Malone, designed for Autodesk Revit, shipped an
          open-source React Native framework (
          <a
            href="https://galio.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Galio
          </a>
          ), and spent a year leading UX on a Layer 1 blockchain platform
          through testnet. Certified by Nielsen Norman Group in UX Management
          (2016) and UX Research (2019).
        </p>
      </div>

      <div className="contact">
        <div>
          <strong>Email</strong>
          <a href="mailto:stefancondurachi@gmail.com">
            stefancondurachi@gmail.com
          </a>
        </div>
        <div>
          <strong>LinkedIn</strong>
          <a
            href="https://www.linkedin.com/in/stefancondurachi"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/stefancondurachi
          </a>
        </div>
        <div>
          <strong>Resume</strong>
          <a
            href="/Stefan_Condurachi_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF
          </a>
        </div>
        <div>
          <strong>Location</strong>Bucharest, Romania · remote-ready
        </div>
      </div>

      <div className="colophon">
        Set in Iowan Old Style. Built with Next.js and deployed on Vercel. ©
        2026 Stefan Condurachi.
      </div>
    </div>
  );
}
