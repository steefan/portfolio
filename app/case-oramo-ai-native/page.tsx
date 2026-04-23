import type { Metadata } from "next";
import Link from "next/link";
import Counter from "../_components/Counter";

export const metadata: Metadata = {
  title:
    "Oramo — designing an AI-native B2B product end-to-end | Stefan Condurachi",
};

export default function OramoCase() {
  return (
    <div className="case-page">
      <div className="page">
        <Link href="/" className="case-back unstyled">
          ← Back
        </Link>

        <div className="case-meta-strip">
          <span>Case study</span>
          <span className="dot">·</span>
          <span>Technical co-founder &amp; product designer</span>
          <span className="dot">·</span>
          <span>Oramo</span>
          <span className="dot">·</span>
          <span>2025–present</span>
        </div>

        <h1>How do you put an AI in a product it has no right to see?</h1>
        <p className="deck">
          Oramo is the property management platform I’m building for Romanian
          landlords in a three-founder bootstrap. Two features I led from
          design through implementation — with AI (Claude Code) as a
          force-multiplier, not a replacement — and the question about data,
          trust, and multi-tenancy they turned out to share.
        </p>

        <div className="case-fact-strip">
          <div>
            <strong>Role</strong>Technical co-founder &amp; product designer ·
            design and implementation lead in a three-founder team · Oramo
            (Jan 2025–present, launched April 2026)
          </div>
          <div>
            <strong>Team</strong>3 founders · real-estate, financial strategy,
            product &amp; engineering
          </div>
          <div>
            <strong>Stack</strong>Next.js · TypeScript · Supabase · Vercel ·
            Claude Code
          </div>
          <div>
            <strong>Deliverables</strong>End-to-end product design, AI
            integrations, data architecture, implementation, launch
          </div>
        </div>

        <div className="outcome-block">
          <div className="outcome-label">Outcome</div>
          <ul className="outcome-bullets">
            <li>
              <span className="bullet" />
              <span>
                Launched April 2026 into a{" "}
                <strong>
                  <Counter to={2.75} prefix="€" suffix="B" /> rental market
                </strong>{" "}
                with near-zero software adoption
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                Property onboarding <strong>under three minutes</strong>
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                Market-intelligence engine covers{" "}
                <strong>
                  <Counter to={750} suffix="+" /> Romanian neighborhood zones
                </strong>{" "}
                from day one
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                In-product AI assistant answers portfolio questions{" "}
                <strong>without learning its way to anyone else’s</strong>
              </span>
            </li>
          </ul>
        </div>

        <h2>Context</h2>
        <p>
          29 Romanian landlord interviews, a competitive review across five
          portals, and a structured survey surfaced one finding:{" "}
          <strong>
            86% of landlords operated their portfolios with zero profitability
            visibility.
          </strong>{" "}
          The tool of record was Excel paired with WhatsApp. Supply-side
          software penetration was near zero.
        </p>

        <h2>My role</h2>
        <p>
          <strong>Technical co-founder.</strong> In a three-person founding
          team — real-estate expertise, financial strategy, and me on product
          strategy, design, and implementation — I own the product surface
          end-to-end. Bootstrapping meant{" "}
          <strong>leveraging AI (Claude Code) heavily as a tool</strong> to
          extend what three founders could ship — not to replace roles on the
          team. AI as force-multiplier, not solution.
        </p>

        <h2>Three decisions that mattered</h2>

        <p>
          <strong>
            1. Build the data layer as if it were the product.
          </strong>{" "}
          The market-intelligence engine parses asking-price data from Storia,
          OLX, and Imobiliare into per-zone benchmarks. The move that matters
          is what comes next: as Oramo users sign leases inside the product,
          the platform accumulates{" "}
          <strong>the first real-rental-price dataset in Romania</strong> —
          actual closed-lease data, per zone. The listing scrape is designed
          as a bootstrap; the surface stays stable while the data behind it
          gets better.
        </p>

        <figure>
          <svg
            viewBox="0 0 700 300"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Data strategy: bootstrap from listing portals, transition to proprietary signed-lease data"
          >
            <rect className="frame" x="0" y="0" width="700" height="300" />
            <text className="panel-title" x="30" y="28">Today</text>
            <text className="panel-head" x="30" y="46">Bootstrap: listing data</text>

            <rect className="node-fill" x="30" y="66" width="90" height="28" rx="2" />
            <text className="node-label" x="75" y="84" textAnchor="middle">Storia</text>

            <rect className="node-fill" x="30" y="104" width="90" height="28" rx="2" />
            <text className="node-label" x="75" y="122" textAnchor="middle">OLX</text>

            <rect className="node-fill" x="30" y="142" width="90" height="28" rx="2" />
            <text className="node-label" x="75" y="160" textAnchor="middle">Imobiliare</text>

            <path className="flow" d="M 120,80 Q 160,80 190,118" />
            <path className="flow" d="M 120,118 L 190,118" />
            <path className="flow" d="M 120,156 Q 160,156 190,118" />

            <rect className="node-accent" x="190" y="92" width="130" height="52" rx="2" />
            <text className="node-label" x="255" y="116" textAnchor="middle">
              Parse &amp; normalize
            </text>
            <text className="node-sub" x="255" y="132" textAnchor="middle">750+ zones</text>

            <path className="flow" d="M 320,118 L 380,118" />
            <polygon points="376,114 386,118 376,122" fill="var(--ink)" />

            <rect className="node-accent" x="386" y="92" width="140" height="52" rx="2" />
            <text className="node-label" x="456" y="116" textAnchor="middle">Per-zone benchmark</text>
            <text className="node-sub" x="456" y="132" textAnchor="middle">Landlord-facing surface</text>

            <text className="quote-serif" x="30" y="208">
              Asking prices. Accurate enough to ship.
            </text>

            <line x1="30" y1="238" x2="670" y2="238" stroke="var(--rule)" strokeWidth="0.5" strokeDasharray="3 3" />

            <text className="phase-tag" x="30" y="260">Tomorrow →</text>
            <text className="panel-head" x="110" y="260">Replace the source; keep the surface.</text>

            <rect className="node-fill" x="30" y="268" width="170" height="22" rx="2" />
            <text className="node-label" x="115" y="284" textAnchor="middle">Signed leases inside Oramo</text>

            <path className="flow-dashed" d="M 200,279 L 382,279" />
            <polygon points="378,275 388,279 378,283" fill="var(--ink)" />

            <rect className="node-accent" x="386" y="268" width="140" height="22" rx="2" />
            <text className="node-label" x="456" y="284" textAnchor="middle">Per-zone benchmark</text>

            <text className="quote-serif" x="540" y="284">actual prices</text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 1</span>
            The surface stays stable; what sits behind it is designed to be
            replaced.
          </figcaption>
        </figure>

        <p>
          <strong>
            2. An AI assistant inside a multi-tenant product is a permissions
            problem in a conversation costume.
          </strong>{" "}
          The in-product assistant answers a landlord’s questions from context
          they legitimately own. The hard decision was what it must{" "}
          <em>never</em> do — reveal anything about another landlord’s
          portfolio, a neighboring property’s rent, or any global detail —{" "}
          <strong>on every turn, for every phrasing.</strong>
        </p>
        <p>
          Working principle:{" "}
          <strong>
            the assistant’s context is the user’s own data plus anonymized
            zone-level aggregates.
          </strong>{" "}
          Anything more specific than a zone is outside the boundary,
          regardless of how the question is phrased. Implementing that —
          retrieval scope, refusal behavior, confidence of refusal — is most
          of the work.
        </p>

        <figure>
          <svg
            viewBox="0 0 700 340"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Assistant epistemic boundary"
          >
            <rect className="frame" x="0" y="0" width="700" height="340" />

            <text className="panel-title" x="30" y="28">What the assistant knows</text>
            <text className="panel-head" x="30" y="46">User’s own data + anonymized aggregates</text>

            <rect className="node-accent" x="30" y="70" width="280" height="32" rx="2" />
            <text className="node-label" x="45" y="90">This landlord’s portfolio (all of it)</text>

            <rect className="node-accent" x="30" y="112" width="280" height="32" rx="2" />
            <text className="node-label" x="45" y="132">Zone-level anonymized benchmarks</text>

            <rect className="node-accent" x="30" y="154" width="280" height="32" rx="2" />
            <text className="node-label" x="45" y="174">
              Tenant &amp; lease data — their leases only
            </text>

            <text className="panel-title" x="380" y="28">Outside the boundary</text>
            <text className="panel-head" x="380" y="46">Refused, regardless of phrasing</text>

            <rect className="forbidden-bubble" x="380" y="70" width="280" height="32" rx="2" />
            <text className="forbidden-label" x="395" y="90">Another landlord’s data</text>

            <rect className="forbidden-bubble" x="380" y="112" width="280" height="32" rx="2" />
            <text className="forbidden-label" x="395" y="132">Neighboring property’s rent</text>

            <rect className="forbidden-bubble" x="380" y="154" width="280" height="32" rx="2" />
            <text className="forbidden-label" x="395" y="174">Aggregate stats about Oramo itself</text>

            <line x1="30" y1="214" x2="670" y2="214" stroke="var(--rule)" strokeWidth="0.5" strokeDasharray="3 3" />

            <text className="panel-title" x="30" y="238">Example</text>
            <text className="panel-head" x="30" y="256">Same tool, two questions, two outcomes</text>

            <rect className="user-bubble" x="30" y="272" width="300" height="24" rx="12" />
            <text className="bubble-label" x="45" y="288">“Which of my flats is underperforming?”</text>

            <rect className="assistant-bubble" x="30" y="302" width="300" height="24" rx="12" />
            <text className="bubble-label" x="45" y="318">→ Answers from the landlord’s portfolio</text>

            <rect className="user-bubble" x="370" y="272" width="300" height="24" rx="12" />
            <text className="bubble-label" x="385" y="288">“What does my neighbor’s flat rent for?”</text>

            <rect className="forbidden-bubble" x="370" y="302" width="300" height="24" rx="12" />
            <text className="forbidden-label" x="385" y="318">→ Refuses; offers the zone benchmark</text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 2</span>
            The design work is making refusal feel helpful rather than
            defensive.
          </figcaption>
        </figure>

        <p>
          <strong>
            3. Choose conversation where the alternative is a form nobody
            wants to fill in.
          </strong>{" "}
          Small-portfolio landlords aren’t power users. Dashboards reward
          people who want to look at their data; conversation rewards people
          who have a question. Nobody we spoke to said “I wish I had a
          dashboard.” They said <em>“is this one still worth it?”</em>,{" "}
          <em>“am I leaving money on the table?”</em>, <em>“did Gigi pay?”</em>{" "}
          The interface followed the question.
        </p>

        <h2>What shipped</h2>
        <ul className="outcome-bullets" style={{ marginBottom: 28 }}>
          <li>
            <span className="bullet" />
            <span>
              Public launch <strong>April 7, 2026</strong>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span>
              Automated notification architecture (rent overdue, lease expiry,
              payment confirmation, utility anomalies) replaced the manual
              tracking behind <strong>45% of surfaced frustration</strong>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span>
              Market-intelligence engine + assistant shipped in release 1
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span>
              Post-launch bugs resolved <strong>within 48 hours</strong> via
              direct customer contact
            </span>
          </li>
        </ul>

        <h2>What I take from it</h2>
        <p>
          The most consequential decisions on an AI-native product are about{" "}
          <strong>what the system should and should not be able to know</strong>
          . Those decisions live in the data layer, not the interface.
        </p>
        <p>
          And: a small team using AI as a tool, not a solution, can now ship
          what would have taken a much larger team two years ago. That’s the
          shape of work I’d bring into a larger team — someone who designs
          the surface, understands the system underneath, and makes the
          tradeoff calls in the room alongside engineering, not in isolation.
        </p>

      </div>
    </div>
  );
}
