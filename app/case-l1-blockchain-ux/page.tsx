import type { Metadata } from "next";
import Link from "next/link";
import Counter from "../_components/Counter";

export const metadata: Metadata = {
  title:
    "An L1 blockchain platform — making crypto UX legible to non-crypto users | Stefan Condurachi",
};

export default function BlockchainCase() {
  return (
    <div className="case-page">
      <div className="page">
        <Link href="/" className="case-back unstyled">
          ← Back
        </Link>

        <div className="case-meta-strip">
          <span>Case study</span>
          <span className="dot">·</span>
          <span>Founder &amp; Product Design Lead</span>
          <span className="dot">·</span>
          <span>an L1 blockchain platform (anonymized)</span>
          <span className="dot">·</span>
          <span>2023</span>
        </div>

        <h1>How do you design crypto UX for people who’ve never read a smart contract?</h1>
        <p className="deck">
          Led UX on a Layer 1 blockchain from MVP through a 7-week incentivized
          testnet. This case is about the translation layer — the design work
          that makes cryptographic correctness feel legible instead of
          intimidating.
        </p>

        <div className="case-fact-strip">
          <div>
            <strong>Role</strong>Founder &amp; Product Design Lead · sole
            UX · Technical Product Liaison between engineering and product ·
            Mar–Nov 2023
          </div>
          <div>
            <strong>Scope</strong>MVP → 7-week incentivized testnet → inputs
            into mainnet roadmap
          </div>
          <div>
            <strong>Deliverables</strong>End-to-end UX for smart-contract
            interactions · testnet program design · translation of
            cryptographic goals into product requirements · telemetry
            synthesis
          </div>
        </div>

        <div className="outcome-block">
          <div className="outcome-label">Outcome</div>
          <ul className="outcome-bullets">
            <li>
              <span className="bullet" />
              <span>
                Incentivized testnet ran{" "}
                <strong>
                  <Counter to={7} suffix=" weeks" />
                </strong>{" "}
                with{" "}
                <strong>
                  ~<Counter to={60} suffix=" participants" />
                </strong>{" "}
                — behavioural telemetry fed directly into the mainnet roadmap
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                Cryptographic goals translated into{" "}
                <strong>
                  product requirements PM and engineering could build from
                </strong>{" "}
                — without losing technical accuracy
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                Design decisions graded by one question:{" "}
                <strong>
                  could a non-crypto user trust the product without reading
                  the code?
                </strong>
              </span>
            </li>
          </ul>
        </div>

        <h2>Context</h2>
        <p>
          Crypto UX is notoriously hostile to anyone outside of crypto.
          Mistakes are typically <strong>irreversible</strong>, the language
          is borrowed from cryptography and finance, and the system asks the
          user to trust math they will never read. A Layer 1 platform
          building for a wider audience has to solve for all three at once —
          or it ships a developer tool dressed as a product.
        </p>

        <h2>My role</h2>
        <p>
          Founder and sole UX lead. In practice that meant two jobs on one
          title:{" "}
          <strong>
            designing the full surface across smart-contract interactions
          </strong>
          , and acting as{" "}
          <strong>Technical Product Liaison</strong> between the cryptography
          research side and the product-engineering side — translating
          protocol goals into requirements PM could prioritize and engineers
          could estimate.
        </p>

        <h2>Three decisions that mattered</h2>

        <p>
          <strong>
            1. Treat the signature as the question, not the confirmation.
          </strong>{" "}
          In most crypto flows the cryptographic prompt is the last step — a
          modal that appears after the user has clicked through. We moved the
          explanation forward, so the user understood what they were agreeing
          to <em>before</em> the wallet asked. By the time the signature
          prompt appeared, it was confirming a decision the user had already
          made, not introducing a new one.
        </p>

        <p>
          <strong>
            2. Translate scary primitives into ordinary language — without
            lying.
          </strong>{" "}
          Gas, nonces, finality, zero-knowledge proofs: each had to land in
          the UI as a plain-English surface that was still technically
          accurate. The trap is choosing between clarity and correctness —
          most teams pick one. The design work is finding the phrasing that
          is both. Every copy string on a user-facing action got reviewed
          against the protocol semantics so we weren’t paying for legibility
          with truth.
        </p>

        <p>
          <strong>
            3. Design for the testnet cohort’s confusion, not their skill.
          </strong>{" "}
          Our ~60 testnet participants were crypto-adjacent — curious, early,
          comfortable with wallets. The product was for an audience further
          from the space. Their confusion was the signal, not their
          competence: if <em>they</em> tripped over a detail, non-crypto
          users wouldn’t get past it. We iterated on the second-order
          friction they pushed through rather than only the first-order
          friction they flagged.
        </p>

        <figure>
          <svg
            viewBox="0 0 700 320"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Translation layer between protocol mechanics and user-visible UI"
          >
            <rect className="frame" x="0" y="0" width="700" height="320" />

            {/* Left panel — protocol */}
            <text className="panel-title" x="30" y="28">What the protocol does</text>
            <text className="panel-head" x="30" y="46">Cryptographic mechanics</text>

            <rect className="node-fill" x="30" y="72" width="240" height="36" rx="2" />
            <text className="node-label" x="42" y="95">Sign transaction payload</text>

            <rect className="node-fill" x="30" y="118" width="240" height="36" rx="2" />
            <text className="node-label" x="42" y="141">Verify merkle proof inclusion</text>

            <rect className="node-fill" x="30" y="164" width="240" height="36" rx="2" />
            <text className="node-label" x="42" y="187">Wait for finality assertion</text>

            <rect className="node-fill" x="30" y="210" width="240" height="36" rx="2" />
            <text className="node-label" x="42" y="233">Emit event, update state</text>

            {/* Arrows with translation label */}
            <path className="flow" d="M 270,90 L 360,90" />
            <polygon points="356,86 366,90 356,94" fill="var(--ink)" />
            <path className="flow" d="M 270,136 L 360,136" />
            <polygon points="356,132 366,136 356,140" fill="var(--ink)" />
            <path className="flow" d="M 270,182 L 360,182" />
            <polygon points="356,178 366,182 356,186" fill="var(--ink)" />
            <path className="flow" d="M 270,228 L 360,228" />
            <polygon points="356,224 366,228 356,232" fill="var(--ink)" />

            <text className="arrow-label" x="288" y="74">translate</text>

            {/* Right panel — user surface */}
            <text className="panel-title" x="380" y="28">What the user sees</text>
            <text className="panel-head" x="380" y="46">Plain-English surface</text>

            <rect className="node-accent" x="380" y="72" width="290" height="36" rx="2" />
            <text className="node-label" x="392" y="95">“Confirm — send this amount to …”</text>

            <rect className="node-accent" x="380" y="118" width="290" height="36" rx="2" />
            <text className="node-label" x="392" y="141">“Verified on the network”</text>

            <rect className="node-accent" x="380" y="164" width="290" height="36" rx="2" />
            <text className="node-label" x="392" y="187">“Settled — can’t be reversed”</text>

            <rect className="node-accent" x="380" y="210" width="290" height="36" rx="2" />
            <text className="node-label" x="392" y="233">“Done. Here’s the receipt.”</text>

            <line x1="30" y1="268" x2="670" y2="268" stroke="var(--rule)" strokeWidth="0.5" strokeDasharray="3 3" />

            <text className="quote-serif" x="30" y="293">
              Technically accurate. User-believable. Neither half is optional.
            </text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 1</span>
            The translation layer. Every protocol primitive gets a
            user-visible surface that preserves truth and discards jargon.
          </figcaption>
        </figure>

        <h2>The testnet, as a design tool</h2>
        <p>
          Seven weeks, ~60 participants, behavioural incentives. We didn’t
          run the testnet as a load test — we ran it as a{" "}
          <strong>design instrument</strong>. Each week had a hypothesis, a
          set of observable behaviours, and a planned design change if the
          behaviour matched. Telemetry plus session observation plus
          structured interviews at the end of each week produced a funnel of
          friction we could prioritize against the mainnet roadmap.
        </p>

        <figure>
          <svg
            viewBox="0 0 700 280"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Testnet participant funnel: cohort → observation → design change → mainnet iteration"
          >
            <rect className="frame" x="0" y="0" width="700" height="280" />

            <text className="panel-title" x="30" y="28">Testnet funnel</text>
            <text className="panel-head" x="30" y="46">
              7 weeks · ~60 participants · weekly iteration
            </text>

            {/* Stage 1 */}
            <rect className="node-accent" x="30" y="80" width="140" height="60" rx="2" />
            <text className="node-label" x="45" y="108">Cohort</text>
            <text className="node-sub" x="45" y="124">~60 participants</text>

            <path className="flow" d="M 170,110 L 220,110" />
            <polygon points="216,106 226,110 216,114" fill="var(--ink)" />

            {/* Stage 2 */}
            <rect className="node-accent" x="226" y="80" width="150" height="60" rx="2" />
            <text className="node-label" x="240" y="108">Observation</text>
            <text className="node-sub" x="240" y="124">telemetry + sessions</text>

            <path className="flow" d="M 376,110 L 426,110" />
            <polygon points="422,106 432,110 422,114" fill="var(--ink)" />

            {/* Stage 3 */}
            <rect className="node-accent" x="432" y="80" width="150" height="60" rx="2" />
            <text className="node-label" x="446" y="108">Design change</text>
            <text className="node-sub" x="446" y="124">one per week</text>

            <path className="flow" d="M 582,110 L 640,110" />
            <polygon points="636,106 646,110 636,114" fill="var(--ink)" />

            {/* Stage 4 — smaller end node */}
            <rect className="node-fill" x="640" y="94" width="30" height="32" rx="2" />

            {/* Week markers timeline */}
            <line className="timeline-axis" x1="40" y1="186" x2="660" y2="186" />
            {[
              { x: 60, label: "W1" },
              { x: 160, label: "W2" },
              { x: 260, label: "W3" },
              { x: 360, label: "W4" },
              { x: 460, label: "W5" },
              { x: 560, label: "W6" },
              { x: 640, label: "W7" },
            ].map((t) => (
              <g key={t.label}>
                <line className="tick" x1={t.x} y1="181" x2={t.x} y2="191" />
                <text className="week-label" x={t.x} y="210" textAnchor="middle">
                  {t.label}
                </text>
              </g>
            ))}

            <text className="quote-serif" x="40" y="250">
              Each week: hypothesis → observe → change. The testnet wasn’t a
              load test — it was a design instrument.
            </text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 2</span>
            The testnet as a weekly design loop. Friction that surfaced in
            the cohort became input for the mainnet roadmap.
          </figcaption>
        </figure>

        <h2>What shipped</h2>
        <ul className="outcome-bullets" style={{ marginBottom: 28 }}>
          <li>
            <span className="bullet" />
            <span>
              Full UX for smart-contract interactions (wallet flows,
              confirmations, state transitions, recovery paths)
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span>
              A testnet program designed as a research instrument —
              hypothesis per week, observable behaviour, committed design
              change
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span>
              A translation document mapping cryptographic primitives to
              user-visible language — used by PM and engineering beyond my
              tenure
            </span>
          </li>
        </ul>

        <h2>What I take from it</h2>
        <p>
          The translation layer <em>is</em> the product.{" "}
          <strong>
            Cryptographic correctness without UX legibility is a dev tool,
            not a product.
          </strong>{" "}
          The senior-designer move on any complex technical surface is
          refusing to pick between clarity and truth — and doing the work to
          ship both.
        </p>
        <p>
          And more broadly: I carry the Technical Product Liaison posture
          into every engagement since.{" "}
          <strong>
            When the engineering and product sides speak different languages,
            the designer is often the best-positioned translator.
          </strong>{" "}
          Not because the designer is the smartest person in the room — but
          because the designer is the one whose job requires standing on
          both sides at once.
        </p>

        <hr />
      </div>
    </div>
  );
}
