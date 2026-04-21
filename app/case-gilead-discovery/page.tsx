import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title:
    "Gilead Sciences — internal platform discovery | Stefan Condurachi",
};

const accentStyle = { "--accent": "#A83A2A" } as CSSProperties;

const svgStyles = `
  .case-page .diagram-bg { fill: #FFFFFF; stroke: var(--rule); stroke-width: 1; }
  .case-page .tile { fill: #F2EFE8; stroke: #D7D2C5; stroke-width: 0.75; }
  .case-page .tile-label { fill: #9A9588; font: 9px Helvetica, Arial, sans-serif; }
  .case-page .after-zone { fill: #FFFFFF; stroke: #0F0F0F; stroke-width: 1.2; }
  .case-page .after-zone-label { font: 600 12px Helvetica, Arial, sans-serif; fill: #0F0F0F; }
  .case-page .after-sublabel { font: 10px Helvetica, Arial, sans-serif; fill: #6B6B6B; }
  .case-page .arrow-line { stroke: var(--accent); stroke-width: 1.5; fill: none; }
  .case-page .arrow-label {
    font: 600 11px Helvetica, Arial, sans-serif;
    fill: var(--accent);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .case-page .timeline-axis { stroke: #0F0F0F; stroke-width: 1; }
  .case-page .tick { stroke: #0F0F0F; stroke-width: 1; }
  .case-page .week-label {
    font: 600 11px Helvetica, Arial, sans-serif;
    fill: #0F0F0F;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .case-page .phase-band { fill: #F2EFE8; stroke: #D7D2C5; stroke-width: 0.75; }
  .case-page .phase-band-onsite { fill: #E8E2D2; stroke: #C9C2B0; stroke-width: 0.75; }
  .case-page .phase-label { font: 600 10px Helvetica, Arial, sans-serif; fill: #0F0F0F; }
  .case-page .phase-sublabel { font: 10px Helvetica, Arial, sans-serif; fill: #6B6B6B; }
  .case-page .location-label { font: italic 11px "Iowan Old Style", Georgia, serif; fill: #A83A2A; }
`;

const panelTitleStyle: CSSProperties = {
  font: "600 11px Helvetica, Arial, sans-serif",
  fill: "#6B6B6B",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};
const panelHeadStyle: CSSProperties = {
  font: "600 13px Helvetica, Arial, sans-serif",
  fill: "#0F0F0F",
};
const quoteStyle: CSSProperties = {
  font: 'italic 12px "Iowan Old Style", Georgia, serif',
  fill: "#6B6B6B",
};
const subQuoteStyle: CSSProperties = {
  font: "10.5px Helvetica, Arial, sans-serif",
  fill: "#9A9588",
};
const quoteInkStyle: CSSProperties = {
  font: 'italic 12px "Iowan Old Style", Georgia, serif',
  fill: "#0F0F0F",
};

export default function GileadCase() {
  return (
    <div className="case-page" style={accentStyle}>
      <style dangerouslySetInnerHTML={{ __html: svgStyles }} />
      <div className="wrap">
        <div className="meta">
          <span>Case study</span>
          <span>·</span>
          <span>Discovery lead</span>
          <span>·</span>
          <span>Gilead Sciences</span>
          <span>·</span>
          <span>2019–2020</span>
        </div>

        <h1>The 30-app problem</h1>
        <p className="deck">
          Gilead Sciences had built the software they needed over a decade —
          piece by piece, one micro-app at a time. By the time we arrived,
          there were more than thirty of them. Nobody was using most of them.
          This is how the discovery happened.
        </p>

        <div className="outcome">
          <div className="label">Outcome</div>
          <p>
            A unified platform replacing 30+ legacy internal micro-apps,
            signed off on wireframes inside a 5-week discovery window. For the
            first time, team-level activity became visible to executive
            leadership without anyone assembling a spreadsheet. The client
            pulled Phase 2 forward by two months.
          </p>
        </div>

        <h2>Context</h2>
        <p>
          Gilead Sciences is a biopharmaceutical R&amp;D company with roughly
          15,000 employees worldwide. Like most enterprises that grew through
          the mobile era, their internal tooling was a layered accumulation:
          thirty-plus micro-apps built on top of SharePoint, each solving a
          narrow problem someone had urgently needed to solve — three years
          ago, or seven, or ten. The apps were slow. Security posture was
          uneven. The API surface was missing in places it needed to exist.
          And employees had quietly, individually, gone back to the tools
          they trusted: email, pen and paper, and the shared drive.
        </p>
        <p>
          The mandate was to propose a replacement: a single cross-platform
          internal app, iOS and Android, mobile and tablet, that people would
          actually open. Five weeks of discovery. Two weeks on-site in
          California, three weeks in Bucharest with the development and
          management teams. Sign-off on wireframes at the end, with user
          stories locked.
        </p>

        <h2>My role</h2>
        <p>
          I led discovery. In practice that meant three things: build rapport
          between Gilead’s stakeholders and the engineering team so real
          decisions could happen in the room; translate business goals into a
          prioritized feature set anchored to what users actually did; and
          produce the wireframes and user stories that would unblock
          engineering for Phase 2. I was not the only designer on the
          project, but I was the one in the workshops with Senior Directors
          and VPs, and the one whose name was on the sign-off.
        </p>

        <h2>Three decisions that mattered</h2>

        <p>
          <strong>
            1. Reframe the ask from “build a better app” to “find the right
            thing to build first.”
          </strong>{" "}
          The client walked in with a feature list. It included search (which
          their existing tooling did badly), an employee directory, a
          company-news feed, and several workflow-specific tools. My first
          intervention was to slow that down. Before the timeline allowed any
          wireframing, I ran a Lightning Decision Jam with Senior Directors
          and VPs — deliberately structured so the most senior voices in the
          room were not the only ones heard. Three days of user interviews
          followed, six participants across HR, Legal, Medical Affairs,
          Physical Security, Business Strategy, and Library Services. What
          emerged was that the feature at the top of the list was not the
          feature driving the most daily friction. Priorities shifted. One
          headline feature was de-scoped for Phase 1; another moved up. The
          workshop wasn’t theatre — it changed what got built.
        </p>

        <blockquote>
          Search — can’t find anything. It’s not a Google. ‘Did you mean…’
          <cite>— user interview, Gilead Sciences, 2019</cite>
        </blockquote>

        <p>
          <strong>
            2. Design for the org that needed to see itself, not just for the
            person holding the phone.
          </strong>{" "}
          The research surfaced a second, quieter finding: the real cost of
          the fragmented tooling was not user time. It was leadership
          blindness. Senior Directors and VPs had no way to see what teams
          were actually doing day-to-day without requesting a spreadsheet
          from someone down the chain. The app’s information architecture
          ended up doing two jobs: surface the actions a field user needed in
          the moment, and produce — as a byproduct of those actions — the
          signal that leadership had been missing. That reframing is what
          turned the project from an app refresh into an organizational tool.
        </p>

        <p>
          <strong>3. Trade depth for discoverability in the first release.</strong>{" "}
          Thirty-plus micro-apps is a lot to replace. The compression move was
          to design Phase 1 around a small number of high-use workflows done
          well — search, directory, news, and a tight cluster of team-specific
          actions — and explicitly plan for the rest to be absorbed in later
          phases. The architecture was built to extend. The first release was
          built to be used.
        </p>

        <figure>
          <svg
            viewBox="0 0 700 320"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Before and after information architecture diagram"
          >
            <rect className="diagram-bg" x="0" y="0" width="300" height="320" />
            <text x="20" y="26" style={panelTitleStyle}>Before</text>
            <text x="20" y="46" style={panelHeadStyle}>30+ micro-apps on SharePoint</text>

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
            <text x="20" y="248" style={quoteStyle}>
              “Nobody is using most of them.”
            </text>
            <text x="20" y="266" style={subQuoteStyle}>
              Slow. Missing API. Fragmented permissions.
            </text>

            <g transform="translate(300, 160)">
              <line className="arrow-line" x1="0" y1="0" x2="80" y2="0" />
              <polygon points="76,-4 86,0 76,4" style={{ fill: "#A83A2A" }} />
              <text className="arrow-label" x="22" y="-14">Discovery</text>
              <text className="arrow-label" x="30" y="24">5 weeks</text>
            </g>

            <rect className="diagram-bg" x="400" y="0" width="300" height="320" />
            <text x="420" y="26" style={panelTitleStyle}>After</text>
            <text x="420" y="46" style={panelHeadStyle}>One cross-platform internal app</text>

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

            <text x="420" y="290" style={quoteInkStyle}>
              Leadership could see what teams were doing,
            </text>
            <text x="420" y="306" style={quoteInkStyle}>
              without anyone assembling a spreadsheet.
            </text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 1</span>
            Information architecture, before and after. Editorial
            illustration; not the delivered UI.
          </figcaption>
        </figure>

        <blockquote>
          When you post announcements on Gnet about events and notice, you
          have visibility for only 4 of them. If yours goes below the fold,
          nobody will ever see it.
          <cite>— user interview, Gilead Sciences, 2019</cite>
        </blockquote>

        <p>
          That quote landed the news-feed decision. The previous solution
          surfaced four announcements; a fifth was invisible. The replacement
          had to handle the long tail of internal communications without
          relying on someone posting at the right moment of the day.
        </p>

        <h2>Five weeks, two locations</h2>
        <p>
          The compression was unusual for a discovery phase at this scale.
          Two weeks in California, three weeks back in Bucharest working
          tightly with engineering and management. The two-location split was
          not accidental — being on-site meant the stakeholder workshops and
          user interviews could happen at the pace stakeholders could offer,
          not at the pace of scheduled video calls. The Bucharest weeks were
          where the wireframes got pressure-tested against engineering
          reality.
        </p>

        <figure>
          <svg
            viewBox="0 0 700 240"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Five-week discovery timeline"
          >
            <line className="timeline-axis" x1="60" y1="180" x2="660" y2="180" />

            <line className="tick" x1="80" y1="175" x2="80" y2="185" />
            <text className="week-label" x="80" y="205" textAnchor="middle">Week 1</text>

            <line className="tick" x1="200" y1="175" x2="200" y2="185" />
            <text className="week-label" x="200" y="205" textAnchor="middle">Week 2</text>

            <line className="tick" x1="320" y1="175" x2="320" y2="185" />
            <text className="week-label" x="320" y="205" textAnchor="middle">Week 3</text>

            <line className="tick" x1="440" y1="175" x2="440" y2="185" />
            <text className="week-label" x="440" y="205" textAnchor="middle">Week 4</text>

            <line className="tick" x1="560" y1="175" x2="560" y2="185" />
            <text className="week-label" x="560" y="205" textAnchor="middle">Week 5</text>

            <text className="location-label" x="140" y="26" textAnchor="middle">on-site, California</text>
            <line x1="80" y1="30" x2="200" y2="30" style={{ stroke: "#A83A2A", strokeWidth: 1 }} />
            <text className="location-label" x="440" y="26" textAnchor="middle">remote, Bucharest</text>
            <line x1="320" y1="30" x2="560" y2="30" style={{ stroke: "#A83A2A", strokeWidth: 1 }} />

            <rect className="phase-band-onsite" x="80" y="50" width="120" height="36" rx="2" />
            <text className="phase-label" x="90" y="67">Workshops &amp; interviews</text>
            <text className="phase-sublabel" x="90" y="81">LDJ, stakeholder + user</text>

            <rect className="phase-band-onsite" x="80" y="96" width="120" height="36" rx="2" />
            <text className="phase-label" x="90" y="113">Feature reprioritization</text>
            <text className="phase-sublabel" x="90" y="127">Scope changes, signed off</text>

            <rect className="phase-band" x="200" y="50" width="360" height="36" rx="2" />
            <text className="phase-label" x="210" y="67">User flows &amp; IA</text>
            <text className="phase-sublabel" x="210" y="81">Flow diagrams tied to the new priority set</text>

            <rect className="phase-band" x="240" y="96" width="320" height="36" rx="2" />
            <text className="phase-label" x="250" y="113">Wireframes</text>
            <text className="phase-sublabel" x="250" y="127">
              Pressure-tested against Xamarin, SharePoint, API, security
            </text>

            <rect className="phase-band" x="480" y="142" width="80" height="26" rx="2" />
            <text className="phase-label" x="490" y="159">Sign-off</text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 2</span>
            Discovery timeline. Red indicates on-site weeks in California.
          </figcaption>
        </figure>

        <h2>What shipped and what it changed</h2>
        <p>
          At the end of the five weeks, wireframes and user stories were
          signed off and engineering had a clear Phase-1 scope. The client’s
          reaction was the useful signal: Phase 2 was pulled forward by two
          months, and a separate team at Gilead was briefed to run a similar
          discovery on an adjacent project with — explicitly — UX discovery
          as a mandatory first phase.
        </p>
        <p>
          The piece I’ve thought about most in the years since is the
          leadership-visibility outcome. It was not in the brief. It emerged
          from research. And it ended up being the thing that made the new
          platform indispensable — because once leadership could see the
          organization in real time, the cost of any team staying on the old
          tools became visible too. That’s the shape of internal-tooling work
          I find most interesting: where customer experience, operator
          efficiency, and organizational legibility share one surface.
        </p>

        <h2>What I take from it</h2>
        <p>
          Stakeholder priorities are never locked until research shows them
          something they didn’t know. The LDJ was the moment two senior
          executives reprioritized a feature set they had arrived defending.
          Nothing about the meeting was confrontational; the exercise made
          the reprioritization feel like a discovery rather than a concession.
          That is the move I carry into every enterprise discovery since.
        </p>
        <p>
          The second thing is narrower: internal tools make the org visible
          to itself. A well-designed operator surface is also an intelligence
          surface. That idea is what I brought to every complex B2B project
          after Gilead, and it is the lens I use when I look at internal
          platforms today.
        </p>

        <hr />
        <div className="footer">
          Role: Discovery lead · Cognizant Softvision on behalf of Gilead
          Sciences · 2019–2020
          <br />
          Collaborators: project team of 6; Gilead stakeholder group of
          Senior Directors and VPs across HR, Legal, Medical Affairs,
          Security, Business Strategy, and Library Services
          <br />
          Deliverables: stakeholder + user research synthesis, LDJ
          facilitation, user flows, information architecture, signed-off
          wireframes, user stories
        </div>
      </div>
    </div>
  );
}
