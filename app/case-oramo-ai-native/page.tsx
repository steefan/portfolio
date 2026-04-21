import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title:
    "Oramo — designing an AI-native B2B product end-to-end | Stefan Condurachi",
};

const accentStyle = { "--accent": "#1F4A3A" } as CSSProperties;

const svgStyles = `
  .case-page .frame { fill: #FFFFFF; stroke: #E2E0DB; stroke-width: 1; }
  .case-page .node-fill { fill: #F2EFE8; stroke: #D7D2C5; stroke-width: 0.75; }
  .case-page .node-accent { fill: #FFFFFF; stroke: #1F4A3A; stroke-width: 1.4; }
  .case-page .node-label { font: 600 12px Helvetica, Arial, sans-serif; fill: #0F0F0F; }
  .case-page .node-sub { font: 10px Helvetica, Arial, sans-serif; fill: #6B6B6B; }
  .case-page .flow { stroke: #1F4A3A; stroke-width: 1.25; fill: none; }
  .case-page .flow-dashed { stroke: #1F4A3A; stroke-width: 1.25; fill: none; stroke-dasharray: 4 3; }
  .case-page .phase-tag {
    font: 600 10px Helvetica, Arial, sans-serif; fill: #1F4A3A;
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .case-page .panel-title {
    font: 600 11px Helvetica, Arial, sans-serif;
    fill: #6B6B6B; letter-spacing: 0.18em; text-transform: uppercase;
  }
  .case-page .panel-head { font: 600 13px Helvetica, Arial, sans-serif; fill: #0F0F0F; }
  .case-page .quote-serif {
    font: italic 12px "Iowan Old Style", Georgia, serif;
    fill: #2B2B2B;
  }
  .case-page .user-bubble { fill: #F2EFE8; stroke: #D7D2C5; stroke-width: 0.5; }
  .case-page .assistant-bubble { fill: #E8EEEB; stroke: #B9CABF; stroke-width: 0.5; }
  .case-page .forbidden-bubble { fill: #FFFFFF; stroke: #B94A3A; stroke-width: 1; stroke-dasharray: 3 2; }
  .case-page .bubble-label { font: 10.5px Helvetica, Arial, sans-serif; fill: #0F0F0F; }
  .case-page .forbidden-label { font: italic 10px Helvetica, Arial, sans-serif; fill: #B94A3A; }
`;

export default function OramoCase() {
  return (
    <div className="case-page" style={accentStyle}>
      <style dangerouslySetInnerHTML={{ __html: svgStyles }} />
      <div className="wrap">
        <div className="meta">
          <span>Case study</span>
          <span>·</span>
          <span>Technical co-founder &amp; product designer</span>
          <span>·</span>
          <span>Oramo</span>
          <span>·</span>
          <span>2025–present</span>
        </div>

        <h1>How do you put an AI in a product it has no right to see?</h1>
        <p className="deck">
          Oramo is the property management platform I’m building for Romanian
          landlords. This is the case study of two features I shipped as sole
          designer and sole developer — and the question about data, trust, and
          multi-tenancy that they turned out to share.
        </p>

        <div className="outcome">
          <div className="label">Outcome</div>
          <p>
            Launched in April 2026 into a €2.75B/year rental market with
            near-zero existing software adoption. Property onboarding sits
            under three minutes. The market-intelligence engine covers 750+
            Romanian neighborhood zones from day one. The in-product AI
            assistant answers questions about a landlord’s portfolio without
            learning its way to anyone else’s.
          </p>
        </div>

        <h2>Context</h2>
        <p>
          Before any code, we spent the first stretch of the project
          validating the wedge. 29 Romanian landlord conversations, a
          competitive review across five listing and management portals, and
          a structured survey produced one finding that shaped everything
          after:{" "}
          <strong>
            86% of landlords we spoke with operated their rental portfolios
            with zero profitability visibility.
          </strong>{" "}
          They knew what rent came in. They did not know, at any given moment,
          what any given property was actually earning them.
        </p>
        <p>
          The tool of record was Excel, often paired with WhatsApp threads
          with tenants. The landlords who used listing portals used them to
          post vacancies, not to run their business. The market they were
          operating inside — roughly €2.75B/year in Romanian residential
          rentals — had near-zero software penetration on the supply side.
          That was the opening.
        </p>

        <h2>My role</h2>
        <p>
          Technical co-founder. Sole designer. Sole developer. In a
          three-person founding team covering real-estate expertise, financial
          strategy, and execution, I own product strategy, design, and the
          full stack (Next.js, Supabase, Vercel). Every feature described here
          I scoped, designed, and shipped. The AI-native workflow — Claude
          Code as the primary development copilot — is what makes a
          sole-developer product of this scope possible in 2026, and it shapes
          how I think about the rest of my career.
        </p>

        <h2>Three decisions that mattered</h2>

        <p>
          <strong>
            1. Build the data layer as if it were the product, because
            eventually it will be.
          </strong>{" "}
          Oramo ships with a market-intelligence engine that parses 750+
          neighborhood-level zones across Bucharest and other Romanian cities.
          Today the engine aggregates asking-price data from the three
          dominant Romanian listing platforms — Storia, OLX, and Imobiliare —
          and normalizes it into per-zone benchmarks. That is what a landlord
          sees when they check what their flat “should” be renting for.
        </p>
        <p>
          The design decision that matters is what happens next. Listings are{" "}
          <em>asking</em> prices — what landlords hope to get. They are not{" "}
          <em>actual</em> prices — what rentals close at. Over time, as Oramo
          users sign leases inside the product, the platform accumulates the
          first real-rental-price dataset in Romania: actual closed-lease
          data, per zone, with transaction-level specificity no listing site
          can produce. The listing scrape is explicitly designed as a
          bootstrap — accurate enough to ship with, structured to be replaced.
          The long-term surface for the landlord is the same UI; the data
          behind it gets better as the userbase grows.
        </p>
        <p>
          This is not a plumbing detail. It is the product thesis. A property
          management tool that happens to own real-rental-price ground truth
          is a different kind of company than one that resells listing data. I
          designed the engine’s output surface — the per-zone benchmark, the
          trend line, the “your property vs. your zone” comparison — to work
          whichever dataset is underneath it, so that the transition, when it
          happens, is invisible to the user and quiet in the codebase.
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
            <polygon points="376,114 386,118 376,122" fill="#1F4A3A" />

            <rect className="node-accent" x="386" y="92" width="140" height="52" rx="2" />
            <text className="node-label" x="456" y="116" textAnchor="middle">Per-zone benchmark</text>
            <text className="node-sub" x="456" y="132" textAnchor="middle">Landlord-facing surface</text>

            <text className="quote-serif" x="30" y="208">
              Asking prices. Accurate enough to ship.
            </text>

            <line x1="30" y1="238" x2="670" y2="238" stroke="#D7D2C5" strokeWidth="0.5" strokeDasharray="3 3" />

            <text className="phase-tag" x="30" y="260">Tomorrow →</text>
            <text className="panel-head" x="110" y="260">Replace the source; keep the surface.</text>

            <rect className="node-fill" x="30" y="268" width="170" height="22" rx="2" />
            <text className="node-label" x="115" y="284" textAnchor="middle">Signed leases inside Oramo</text>

            <path className="flow-dashed" d="M 200,279 L 382,279" />
            <polygon points="378,275 388,279 378,283" fill="#1F4A3A" />

            <rect className="node-accent" x="386" y="268" width="140" height="22" rx="2" />
            <text className="node-label" x="456" y="284" textAnchor="middle">Per-zone benchmark</text>

            <text className="quote-serif" x="540" y="284">actual prices</text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 1</span>
            Data strategy for the market-intelligence engine. The surface is
            stable; what sits behind it is designed to be replaced.
          </figcaption>
        </figure>

        <p>
          <strong>
            2. An AI assistant inside a multi-tenant product is a permissions
            problem wearing a conversation costume.
          </strong>{" "}
          Oramo’s in-product assistant is a natural-language chat. A landlord
          can ask it things like “which of my properties is underperforming
          its zone?” or “who’s late on rent this month?” and the assistant
          answers from context it legitimately has access to.
        </p>
        <p>
          The design decision — and the part that took real thought — was what
          the assistant must <em>never</em> do. A landlord should not be able
          to ask the assistant, and should not be able to phrase a question in
          a way that lets the assistant quietly reveal, anything about another
          landlord’s portfolio, a neighboring property’s specific rent, or any
          global detail of the product it wasn’t meant to expose. Not because
          the data isn’t in the system — of course it is; the engine is
          sitting right next to the assistant — but because the assistant’s
          epistemic boundary has to match the user’s permission boundary
          exactly, on every turn, for every phrasing.
        </p>
        <p>
          The working principle I arrived at: the assistant’s context is the
          user’s own data plus anonymized zone-level aggregates. Anything more
          specific than a zone is outside the boundary, regardless of how the
          question is phrased. That sentence is one line of prose;
          implementing it correctly — context assembly, retrieval scope,
          refusal behavior, and the confidence with which the assistant
          refuses — is most of the work. It is also, structurally, the same
          work that any AI assistant inside a B2B product will need to do, in
          any industry where data isolation matters.
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
              Tenant &amp; lease data{" "}
              <tspan fill="#6B6B6B">— for their leases only</tspan>
            </text>

            <text className="panel-title" x="380" y="28">Outside the boundary</text>
            <text className="panel-head" x="380" y="46">Refused, regardless of phrasing</text>

            <rect className="forbidden-bubble" x="380" y="70" width="280" height="32" rx="2" />
            <text className="forbidden-label" x="395" y="90">Another landlord’s data</text>

            <rect className="forbidden-bubble" x="380" y="112" width="280" height="32" rx="2" />
            <text className="forbidden-label" x="395" y="132">Any specific neighboring property’s rent</text>

            <rect className="forbidden-bubble" x="380" y="154" width="280" height="32" rx="2" />
            <text className="forbidden-label" x="395" y="174">Aggregate statistics about Oramo itself</text>

            <line x1="30" y1="214" x2="670" y2="214" stroke="#D7D2C5" strokeWidth="0.5" strokeDasharray="3 3" />

            <text className="panel-title" x="30" y="238">Example</text>
            <text className="panel-head" x="30" y="256">The same tool, two questions, two outcomes</text>

            <rect className="user-bubble" x="30" y="272" width="300" height="24" rx="12" />
            <text className="bubble-label" x="45" y="288">“Which of my flats is underperforming its zone?”</text>

            <rect className="assistant-bubble" x="30" y="302" width="300" height="24" rx="12" />
            <text className="bubble-label" x="45" y="318">→ Answers from the landlord’s own portfolio</text>

            <rect className="user-bubble" x="370" y="272" width="300" height="24" rx="12" />
            <text className="bubble-label" x="385" y="288">“What does my neighbor’s flat rent for?”</text>

            <rect className="forbidden-bubble" x="370" y="302" width="300" height="24" rx="12" />
            <text className="forbidden-label" x="385" y="318">→ Refuses; offers the zone benchmark instead</text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 2</span>
            The assistant’s epistemic boundary. The design work is making
            refusal feel helpful rather than defensive.
          </figcaption>
        </figure>

        <p>
          <strong>
            3. Choose conversation where the alternative is a form nobody
            wants to fill in.
          </strong>{" "}
          The reason the assistant is a chat and not a dashboard panel is
          worth naming. Small-portfolio landlords — the people Oramo is built
          for — are not power users of software. They are busy people managing
          a few flats alongside a real job. Dashboards reward people who want
          to look at their data. Conversation rewards people who have a
          question and want the answer. When we ran the wedge research,
          nobody we spoke to described their landlord problems as “I wish I
          had a dashboard.” They described them as questions — “is this one
          still worth it?”, “am I leaving money on the table?”, “did Gigi
          pay?” The interface followed the question.
        </p>

        <h2>What shipped and what it changed</h2>
        <p>
          Oramo launched publicly on April 7, 2026. Property onboarding runs
          under three minutes end-to-end; the automated notification
          architecture (rent overdue, lease expiry, payment confirmation,
          utility anomalies) replaces the manual tracking responsible for the
          single largest source of landlord frustration surfaced in research —
          45% of it. Post-launch bug reports inbound through LinkedIn were
          resolved within 48 hours of public launch via direct customer
          contact. The market-intelligence engine and the assistant shipped in
          the first release and are in use today.
        </p>
        <p>
          The harder thing to measure, and the thing I pay most attention to,
          is whether the assistant is answering honestly inside its boundary.
          That is not a feature you ship once; it is a posture you maintain in
          the data layer, the retrieval logic, and the prompt — and you
          re-verify every time any of those three change. That discipline is,
          in my view, the actual senior design work on any AI-in-product
          surface in 2026.
        </p>

        <h2>What I take from it</h2>
        <p>
          Two things carry forward into whatever I work on next. First: the
          right shape for a senior designer’s role on an AI-native product is
          somewhere between product design and information architecture — the
          most consequential decisions are about what the system should and
          should not be able to know, and those decisions live in the data
          layer, not the interface. The UI is downstream.
        </p>
        <p>
          Second: AI-native development is real. One person designed, built,
          and shipped this product in the time it would have taken a small
          team two years ago. That is not a cost-saving story; it is a story
          about what a senior designer who can hold the full stack in mind
          can now produce. It is also, not coincidentally, the same shape of
          work I’d want to bring to a larger team — someone who designs the
          surface, understands the system underneath, and can make the
          tradeoff calls in the room rather than over a handoff.
        </p>

        <hr />
        <div className="footer">
          Role: Technical co-founder &amp; product designer · sole designer
          and sole developer · Oramo (Jan 2025–present, launched April 2026)
          <br />
          Team: 3 founders · real-estate expertise, financial strategy,
          product &amp; engineering
          <br />
          Stack: Next.js, TypeScript, Supabase, Vercel · Claude Code as
          primary development copilot
          <br />
          Deliverables: end-to-end product design, AI integrations, data
          architecture, implementation, launch
        </div>
      </div>
    </div>
  );
}
