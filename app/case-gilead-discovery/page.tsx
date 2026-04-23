import type { Metadata } from "next";
import Link from "next/link";
import Counter from "../_components/Counter";

export const metadata: Metadata = {
  title: "Gilead Sciences — internal platform discovery | Stefan Condurachi",
};

export default function GileadCase() {
  return (
    <div className="case-page">
      <div className="page">
        <Link href="/" className="case-back unstyled">
          ← Back
        </Link>

        <div className="case-meta-strip">
          <span>Case study</span>
          <span className="dot">·</span>
          <span>Discovery lead</span>
          <span className="dot">·</span>
          <span>Gilead Sciences</span>
          <span className="dot">·</span>
          <span>2019–2020</span>
        </div>

        <h1>The 30-app problem</h1>
        <p className="deck">
          Gilead had built the software they needed over a decade — piece by
          piece, one micro-app at a time. By the time we arrived, there were
          more than thirty of them. Nobody was using most of them.
        </p>

        <div className="case-fact-strip">
          <div>
            <strong>Role</strong>Discovery lead · Cognizant Softvision on
            behalf of Gilead Sciences · 2019–2020
          </div>
          <div>
            <strong>Collaborators</strong>Project team of 6 · Gilead
            stakeholders across HR, Legal, Medical Affairs, Security,
            Business Strategy, Library Services
          </div>
          <div>
            <strong>Deliverables</strong>Stakeholder + user research synthesis
            · LDJ facilitation · user flows · IA · signed-off wireframes ·
            user stories
          </div>
        </div>

        <div className="outcome-block">
          <div className="outcome-label">Outcome</div>
          <ul className="outcome-bullets">
            <li>
              <span className="bullet" />
              <span>
                Unified platform replacing{" "}
                <strong>
                  <Counter to={30} suffix="+ legacy micro-apps" />
                </strong>
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                Wireframes signed off inside a{" "}
                <strong>5-week discovery window</strong>
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                Team-level activity became visible to{" "}
                <strong>
                  <Counter to={15000} />
                </strong>{" "}
                employees’ executive leadership — without anyone assembling a
                spreadsheet
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                Client <strong>pulled Phase 2 forward by two months</strong>
              </span>
            </li>
          </ul>
        </div>

        <h2>Context</h2>
        <p>
          Gilead is a biopharmaceutical R&amp;D company with roughly 15,000
          employees. Internal tooling was a layered accumulation of{" "}
          <strong>thirty-plus micro-apps on SharePoint</strong>, each solving
          a narrow problem someone had urgently needed to solve three years
          ago, or seven, or ten. Apps were slow. Security posture uneven. API
          surface missing. Employees had quietly gone back to email, pen and
          paper, and the shared drive.
        </p>
        <p>
          The mandate: a single cross-platform internal app, iOS and Android,
          mobile and tablet, that people would actually open.{" "}
          <strong>Five weeks of discovery.</strong> Two on-site in California,
          three in Bucharest with engineering. Sign-off on wireframes at the
          end.
        </p>

        <h2>My role</h2>
        <p>
          I led discovery. In practice:{" "}
          <strong>
            build rapport, reprioritize the feature set against what users
            actually did, produce the wireframes and user stories
          </strong>{" "}
          that unblocked Phase 2.
        </p>

        <h2>Three decisions that mattered</h2>

        <p>
          <strong>
            1. Reframe from “build a better app” to “find the right thing to
            build first.”
          </strong>{" "}
          The client walked in with a feature list. My first intervention was
          to slow that down. A <strong>Lightning Decision Jam</strong> with
          Senior Directors and VPs — structured so senior voices weren’t the
          only ones heard — followed by three days of user interviews across
          HR, Legal, Medical Affairs, Security, Business Strategy, and
          Library Services. The top-of-list feature was{" "}
          <em>not</em> the one driving daily friction. One headline was
          de-scoped from Phase 1; another moved up.
        </p>

        <blockquote>
          Search — can’t find anything. It’s not a Google. ‘Did you mean…’
          <cite>— user interview, Gilead Sciences, 2019</cite>
        </blockquote>

        <p>
          <strong>
            2. Design for the org that needed to see itself.
          </strong>{" "}
          The real cost of the fragmented tooling wasn’t user time — it was{" "}
          <strong>leadership blindness.</strong> Senior Directors had no way
          to see what teams were doing day-to-day without requesting a
          spreadsheet. The new IA did two jobs at once: surface the actions a
          field user needed, and produce — as a byproduct — the signal
          leadership had been missing. That reframing turned an app refresh
          into an organizational tool.
        </p>

        <p>
          <strong>
            3. Trade depth for discoverability in the first release.
          </strong>{" "}
          Phase 1 collapsed around a small cluster of high-use workflows done
          well — <strong>search, directory, news</strong> — and explicitly
          planned for the rest in later phases. The architecture was built to
          extend. The first release was built to be used.
        </p>

        <figure>
          <svg
            viewBox="0 0 700 320"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Before and after information architecture diagram"
          >
            <rect className="diagram-bg" x="0" y="0" width="300" height="320" />
            <text className="panel-title" x="20" y="26">Before</text>
            <text className="panel-head" x="20" y="46">30+ micro-apps on SharePoint</text>

            <g>
              <rect className="tile" x="30" y="70" width="40" height="22" rx="1" />
              <rect className="tile" x="78" y="70" width="36" height="22" rx="1" />
              <rect className="tile" x="122" y="70" width="42" height="22" rx="1" />
              <rect className="tile" x="172" y="70" width="34" height="22" rx="1" />
              <rect className="tile" x="214" y="70" width="38" height="22" rx="1" />
              <rect className="tile" x="260" y="70" width="28" height="22" rx="1" />

              <rect className="tile" x="30" y="100" width="32" height="22" rx="1" />
              <rect className="tile" x="70" y="100" width="44" height="22" rx="1" />
              <rect className="tile" x="122" y="100" width="38" height="22" rx="1" />
              <rect className="tile" x="168" y="100" width="34" height="22" rx="1" />
              <rect className="tile" x="210" y="100" width="42" height="22" rx="1" />
              <rect className="tile" x="260" y="100" width="28" height="22" rx="1" />

              <rect className="tile" x="30" y="130" width="40" height="22" rx="1" />
              <rect className="tile" x="78" y="130" width="34" height="22" rx="1" />
              <rect className="tile" x="120" y="130" width="38" height="22" rx="1" />
              <rect className="tile" x="166" y="130" width="44" height="22" rx="1" />
              <rect className="tile" x="218" y="130" width="30" height="22" rx="1" />
              <rect className="tile" x="256" y="130" width="32" height="22" rx="1" />

              <rect className="tile" x="30" y="160" width="36" height="22" rx="1" />
              <rect className="tile" x="74" y="160" width="40" height="22" rx="1" />
              <rect className="tile" x="122" y="160" width="34" height="22" rx="1" />
              <rect className="tile" x="164" y="160" width="38" height="22" rx="1" />
              <rect className="tile" x="210" y="160" width="42" height="22" rx="1" />
              <rect className="tile" x="260" y="160" width="28" height="22" rx="1" />

              <rect className="tile" x="30" y="190" width="44" height="22" rx="1" />
              <rect className="tile" x="82" y="190" width="36" height="22" rx="1" />
              <rect className="tile" x="126" y="190" width="30" height="22" rx="1" />
              <rect className="tile" x="164" y="190" width="40" height="22" rx="1" />
              <rect className="tile" x="212" y="190" width="34" height="22" rx="1" />
              <rect className="tile" x="254" y="190" width="34" height="22" rx="1" />
            </g>
            <text className="quote-serif" x="20" y="248">
              “Nobody is using most of them.”
            </text>
            <text className="tile-label" x="20" y="266">
              Slow. Missing API. Fragmented permissions.
            </text>

            <g transform="translate(300, 160)">
              <line className="arrow-line" x1="0" y1="0" x2="80" y2="0" />
              <polygon points="76,-4 86,0 76,4" fill="var(--ink)" />
              <text className="arrow-label" x="22" y="-14">Discovery</text>
              <text className="arrow-label" x="30" y="24">5 weeks</text>
            </g>

            <rect className="diagram-bg" x="400" y="0" width="300" height="320" />
            <text className="panel-title" x="420" y="26">After</text>
            <text className="panel-head" x="420" y="46">One cross-platform internal app</text>

            <rect className="after-zone" x="420" y="70" width="260" height="54" rx="2" />
            <text className="after-zone-label" x="432" y="92">Search &amp; Directory</text>
            <text className="after-sublabel" x="432" y="110">
              The highest-use surface. Done well first.
            </text>

            <rect className="after-zone" x="420" y="136" width="260" height="54" rx="2" />
            <text className="after-zone-label" x="432" y="158">Team workflows</text>
            <text className="after-sublabel" x="432" y="176">
              A small cluster. Extendable architecture.
            </text>

            <rect className="after-zone" x="420" y="202" width="260" height="54" rx="2" />
            <text className="after-zone-label" x="432" y="224">News &amp; Announcements</text>
            <text className="after-sublabel" x="432" y="242">Above-the-fold by design.</text>

            <text className="quote-serif" x="420" y="290">
              Leadership could see what teams were doing,
            </text>
            <text className="quote-serif" x="420" y="306">
              without anyone assembling a spreadsheet.
            </text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 1</span>
            Information architecture, before and after.
          </figcaption>
        </figure>

        <blockquote>
          When you post announcements on Gnet about events and notice, you
          have visibility for only 4 of them. If yours goes below the fold,
          nobody will ever see it.
          <cite>— user interview, Gilead Sciences, 2019</cite>
        </blockquote>

        <p>
          That quote landed the news-feed decision. Four announcements
          surfaced; a fifth invisible. The replacement had to handle the long
          tail without relying on someone posting at the right moment.
        </p>

        <h2>Five weeks, two locations</h2>
        <p>
          Two weeks in California, three in Bucharest. On-site meant
          workshops and user interviews could happen at stakeholder pace, not
          at video-call pace. Bucharest was where wireframes got
          pressure-tested against engineering reality.
        </p>

        <figure>
          <svg
            viewBox="0 0 700 280"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Five-week discovery timeline"
          >
            <text className="location-label" x="170" y="26" textAnchor="middle">on-site, California</text>
            <line x1="80" y1="30" x2="260" y2="30" stroke="var(--ink)" strokeWidth="1" />
            <text className="location-label" x="420" y="26" textAnchor="middle">remote, Bucharest</text>
            <line x1="280" y1="30" x2="560" y2="30" stroke="var(--ink)" strokeWidth="1" />

            {/* Row 1: Workshops + User flows */}
            <rect className="phase-band-onsite" x="80" y="50" width="180" height="54" rx="2" />
            <text className="phase-label" x="92" y="70">Workshops &amp; interviews</text>
            <text className="phase-sublabel" x="92" y="86">LDJ, stakeholder +</text>
            <text className="phase-sublabel" x="92" y="100">user interviews</text>

            <rect className="phase-band" x="280" y="50" width="280" height="54" rx="2" />
            <text className="phase-label" x="292" y="70">User flows &amp; IA</text>
            <text className="phase-sublabel" x="292" y="86">Flow diagrams tied to the</text>
            <text className="phase-sublabel" x="292" y="100">new priority set</text>

            {/* Row 2: Feature reprioritization + Wireframes */}
            <rect className="phase-band-onsite" x="80" y="116" width="180" height="54" rx="2" />
            <text className="phase-label" x="92" y="136">Feature reprioritization</text>
            <text className="phase-sublabel" x="92" y="152">Scope changes,</text>
            <text className="phase-sublabel" x="92" y="166">signed off</text>

            <rect className="phase-band" x="280" y="116" width="280" height="54" rx="2" />
            <text className="phase-label" x="292" y="136">Wireframes</text>
            <text className="phase-sublabel" x="292" y="152">Pressure-tested against Xamarin,</text>
            <text className="phase-sublabel" x="292" y="166">SharePoint, API, security</text>

            {/* Row 3: Sign-off */}
            <rect className="phase-band" x="480" y="184" width="80" height="30" rx="2" />
            <text className="phase-label" x="492" y="203">Sign-off</text>

            {/* Timeline axis + week ticks */}
            <line className="timeline-axis" x1="60" y1="232" x2="660" y2="232" />

            <line className="tick" x1="80" y1="227" x2="80" y2="237" />
            <text className="week-label" x="80" y="257" textAnchor="middle">Week 1</text>

            <line className="tick" x1="200" y1="227" x2="200" y2="237" />
            <text className="week-label" x="200" y="257" textAnchor="middle">Week 2</text>

            <line className="tick" x1="320" y1="227" x2="320" y2="237" />
            <text className="week-label" x="320" y="257" textAnchor="middle">Week 3</text>

            <line className="tick" x1="440" y1="227" x2="440" y2="237" />
            <text className="week-label" x="440" y="257" textAnchor="middle">Week 4</text>

            <line className="tick" x1="560" y1="227" x2="560" y2="237" />
            <text className="week-label" x="560" y="257" textAnchor="middle">Week 5</text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 2</span>
            Discovery timeline. On-site weeks in California.
          </figcaption>
        </figure>

        <h2>What I take from it</h2>
        <p>
          <strong>
            Stakeholder priorities are never locked until research shows them
            something they didn’t know.
          </strong>{" "}
          The LDJ was the moment two senior executives reprioritized a feature
          set they’d arrived defending — not as a concession, as a discovery.
          That’s the move I carry into every enterprise discovery since.
        </p>
        <p>
          And narrower:{" "}
          <strong>internal tools make the org visible to itself.</strong> A
          well-designed operator surface is also an intelligence surface.
        </p>

      </div>
    </div>
  );
}
