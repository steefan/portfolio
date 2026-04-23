import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Counter from "./_components/Counter";

export const metadata: Metadata = {
  title: "Stefan Condurachi — Senior Product Designer",
  description:
    "Senior product designer — making complex work feel clear. Case studies: Oramo, Gilead Sciences, Ownzones.",
};

export default function Home() {
  return (
    <article className="page">
      <header className="page-header">
        <h1 className="page-h1">Stefan Condurachi</h1>
        <p className="page-sub">
          Senior product designer — making complex work feel clear.
        </p>
      </header>

      <section className="facts">
        <FactRow
          label="Resume"
          value={
            <a
              href="/Stefan_Condurachi_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>
          }
        />
        <FactRow
          label="LinkedIn"
          value={
            <a
              href="https://www.linkedin.com/in/stefancondurachi"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/stefancondurachi
            </a>
          }
        />
        <FactRow
          label="Email"
          value={
            <a href="mailto:stefancondurachi@gmail.com">
              stefancondurachi@gmail.com
            </a>
          }
        />
        <FactRow
          label="Status"
          value={
            <>
              Open to <strong>senior IC roles</strong> at companies serious
              about operator UX
            </>
          }
        />
        <FactRow label="Base" value="Bucharest, Romania · remote-ready" />
      </section>

      <section className="range">
        <div className="mono-label range-label">Fifteen years</div>
        <div className="range-body">
          <p className="range-lead">
            Designing complex professional tools —{" "}
            <strong>internal platforms</strong>,{" "}
            <strong>operator-facing software</strong>, <strong>B2B SaaS</strong>
            . Worked on an <strong>Autodesk</strong> structural-engineering
            product, a cloud admin platform used by <strong>Paramount</strong>,
            and an internal system at <strong>Gilead Sciences</strong>.
          </p>
          <p className="range-tail">
            The same shape of problem keeps surfacing: customer experience,
            operator efficiency, and organizational legibility.
          </p>
        </div>
        <div className="pill-stack">
          <MetricPill value={<Counter to={2.75} prefix="€" suffix="B" />} tag="Market" />
          <MetricPill value={<Counter to={750} suffix="+" />} tag="Zones" />
          <MetricPill value={<Counter to={15000} />} tag="Employees" />
          <MetricPill value={<Counter to={30} suffix="+" />} tag="Apps replaced" />
        </div>
      </section>

      <section>
        <div className="mono-label section-label">Selected work</div>

        <CaseInline
          href="/case-oramo-ai-native"
          meta="Oramo"
          title="How do you put an AI in a product it has no right to see?"
          wordmarks={["Oramo"]}
          lede="Designing an AI-native B2B product end-to-end in a three-founder bootstrap. AI as a tool that extends what the team can ship — not a replacement for roles. Two features, one permissions problem."
          outcomes={[
            <>
              First intelligent property platform in a{" "}
              <strong>€2.75B market</strong>
            </>,
            <>
              Shipped steady-state by a{" "}
              <strong>three-founder team</strong> using{" "}
              <strong>AI as a force-multiplier, not a replacement</strong>
            </>,
            <>
              AI surfaces only{" "}
              <strong>what the operator is allowed to see</strong>
            </>,
          ]}
          deliverables={["Co-founder", "Design lead", "AI-native implementation"]}
          diagram={<ScatterDiagram />}
        />

        <CaseInline
          href="/case-gilead-discovery"
          meta="Gilead Sciences"
          title="The 30-app problem"
          wordmarks={["Gilead Sciences", "Cognizant Softvision"]}
          lede="Discovery-led replacement of a decade of legacy internal tooling at a biopharmaceutical giant."
          outcomes={[
            <>
              Consolidated <strong>30+ apps</strong> into a single operator
              surface
            </>,
            <>
              <strong>15,000 employees</strong> on one system
            </>,
            <>
              Phase 2 <strong>pulled forward by two months</strong>
            </>,
          ]}
          deliverables={["Discovery lead", "5-week engagement"]}
          diagram={<GridDiagram />}
          note="5 weeks on-site · remote after"
        />

        <CaseInline
          href="/case-ownzones-connect"
          meta="Ownzones Media Network"
          title="The dashboard that replaced a mailroom"
          wordmarks={["Paramount", "Sony", "Warner Bros", "MGM"]}
          lede="Paramount was still shipping feature films to distribution partners on hard drives via courier. Ownzones Connect replaced that with a browser dashboard."
          outcomes={[
            <>
              Retired <strong>FedEx HDD logistics</strong> for four major
              studios
            </>,
            <>
              VOD app featured by Apple TV &amp; Roku TV for{" "}
              <strong>three months</strong>
            </>,
            <>Operator-facing from day one</>,
          ]}
          deliverables={["Senior UX designer", "First UX hire"]}
          diagram={<NodeDiagram />}
        />
      </section>

      <section className="before">
        <div className="mono-label" style={{ marginBottom: 16 }}>
          Before that
        </div>
        <ul>
          <li>
            <Check />
            <span>
              Built the design function at <strong>Ownzones</strong> from zero
            </span>
          </li>
          <li>
            <Check />
            <span>
              Led parent design system for <strong>Estée Lauder</strong>{" "}
              subsidiaries — <strong>MAC</strong>, <strong>Jo Malone</strong>
            </span>
          </li>
          <li>
            <Check />
            <span>
              Designed an <strong>Autodesk Revit</strong> extension
            </span>
          </li>
          <li>
            <Check />
            <span>
              Shipped an open-source React Native framework,{" "}
              <a
                href="https://galio.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Galio</strong>
              </a>
            </span>
          </li>
          <li>
            <Check />
            <span>Led UX on a Layer 1 blockchain platform through testnet</span>
          </li>
        </ul>
        <div className="before-certs">
          Certified · NN/g UX Management (2016) · NN/g UX Research (2019)
        </div>
      </section>

      <footer className="footer-mono">
        Set in Iowan Old Style · © 2026 Stefan Condurachi
      </footer>
    </article>
  );
}

// ============================================================
// Presentational components
// ============================================================

function FactRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="fact-row">
      <div className="fact-label">{label}</div>
      <div className="fact-value">{value}</div>
    </div>
  );
}

function MetricPill({ value, tag }: { value: ReactNode; tag: string }) {
  return (
    <span className="pill">
      <span className="pill-value">{value}</span>
      <span className="pill-tag">{tag}</span>
    </span>
  );
}

function Check() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      className="check"
      aria-hidden
    >
      <path
        d="M1.5 5.5L4 8L9.5 2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CaseInlineProps = {
  href: string;
  meta: string;
  title: string;
  lede: ReactNode;
  outcomes: ReactNode[];
  deliverables: string[];
  wordmarks: string[];
  diagram: ReactNode;
  note?: ReactNode;
};

function CaseInline({
  href,
  meta,
  title,
  lede,
  outcomes,
  deliverables,
  wordmarks,
  diagram,
  note,
}: CaseInlineProps) {
  return (
    <Link href={href} className="case-inline unstyled">
      <div className="mono-label case-inline-meta">{meta}</div>
      <div className="case-inline-grid">
        <div>
          <h2 className="case-inline-title">{title}</h2>
          <p className="case-inline-lede">{lede}</p>

          <div className="mono-small" style={{ marginBottom: 8 }}>
            Outcomes
          </div>
          <ul className="outcomes">
            {outcomes.map((o, i) => (
              <li key={i}>
                <span className="bullet" />
                <span>{o}</span>
              </li>
            ))}
          </ul>

          <div className="deliverables">
            {deliverables.map((d, i) => (
              <span key={i} className="deliverable">
                <Check />
                <span>{d}</span>
              </span>
            ))}
          </div>

          {note && <div className="case-inline-note">{note}</div>}
        </div>

        <div className="case-aside">
          <div className="diagram-frame">{diagram}</div>
          <div className="mono-small">Client</div>
          <div className="wordmarks">
            {wordmarks.map((w, i) => (
              <span key={i} className="wordmark">
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

// ============================================================
// Diagrams — deterministic SVG (no Math.random, safe for SSR)
// ============================================================

function GridDiagram({
  cols = 10,
  rows = 3,
  highlight = 2,
}: {
  cols?: number;
  rows?: number;
  highlight?: number;
}) {
  const cells = cols * rows;
  return (
    <svg viewBox={`0 0 ${cols * 14} ${rows * 14}`} style={{ maxWidth: 280 }} aria-hidden>
      {Array.from({ length: cells }).map((_, i) => {
        const x = (i % cols) * 14;
        const y = Math.floor(i / cols) * 14;
        const kept = i < highlight;
        return (
          <rect
            key={i}
            x={x + 1}
            y={y + 1}
            width={10}
            height={10}
            fill={kept ? "var(--ink)" : "none"}
            stroke="var(--ink)"
            strokeOpacity={kept ? 1 : 0.22}
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}

function NodeDiagram() {
  const count = 18;
  const nodes = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const r = 52 + (i % 3) * 6;
    return { x: 80 + Math.cos(angle) * r, y: 60 + Math.sin(angle) * r };
  });
  return (
    <svg viewBox="0 0 160 120" style={{ maxWidth: 280 }} aria-hidden>
      {nodes.map((n, i) => (
        <line
          key={"l" + i}
          x1="80"
          y1="60"
          x2={n.x}
          y2={n.y}
          stroke="var(--ink)"
          strokeOpacity="0.25"
          strokeWidth="0.4"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={"n" + i} cx={n.x} cy={n.y} r="1.6" fill="var(--ink)" />
      ))}
      <circle cx="80" cy="60" r="4" fill="var(--ink)" />
      <circle
        cx="80"
        cy="60"
        r="8"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="0.4"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

// Deterministic pseudo-random for scatter points so SSR matches client.
function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function ScatterDiagram() {
  const rand = seededRand(1);
  const pts = Array.from({ length: 42 }, () => ({
    x: 10 + rand() * 140,
    y: 10 + rand() * 100,
    r: 0.8 + rand() * 1.2,
    op: 0.3 + rand() * 0.7,
  }));
  return (
    <svg viewBox="0 0 160 120" style={{ maxWidth: 280 }} aria-hidden>
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill="var(--ink)"
          opacity={p.op}
        />
      ))}
      <circle
        cx="100"
        cy="55"
        r="22"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />
      <line
        x1="100"
        y1="33"
        x2="140"
        y2="14"
        stroke="var(--ink)"
        strokeWidth="0.5"
      />
      <text
        x="142"
        y="12"
        fontSize="5"
        fontFamily="var(--mono)"
        fill="var(--ink)"
        letterSpacing="0.08em"
      >
        SIGNAL
      </text>
    </svg>
  );
}
