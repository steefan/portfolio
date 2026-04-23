import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ownzones Connect — the studio admin platform that replaced a mailroom | Stefan Condurachi",
};

export default function OwnzonesCase() {
  return (
    <div className="case-page">
      <div className="page">
        <Link href="/" className="case-back unstyled">
          ← Stefan Condurachi
        </Link>

        <div className="case-meta-strip">
          <span>Case study</span>
          <span className="dot">·</span>
          <span>Senior UX designer · first UX hire</span>
          <span className="dot">·</span>
          <span>Ownzones Media Network</span>
          <span className="dot">·</span>
          <span>2015–2017</span>
        </div>

        <h1>The dashboard that replaced a mailroom</h1>
        <p className="deck">
          When I joined Ownzones in 2015, Paramount was still shipping feature
          films to distribution partners on physical hard drives via courier.
          We replaced that with a cloud dashboard.
        </p>

        <div className="case-fact-strip">
          <div>
            <strong>Role</strong>Senior UX designer · first UX hire · Ownzones
            Media Network (2015–2017)
          </div>
          <div>
            <strong>Products</strong>Ownzones Connect · consumer VOD app
            across web, iOS, Android, Apple TV, Roku TV
          </div>
          <div>
            <strong>Clients</strong>Paramount · Sony · Warner Bros · MGM · and
            additional post-production partners
          </div>
          <div>
            <strong>Also</strong>Established internal UX process · mentored
            junior UX designers
          </div>
        </div>

        <div className="outcome-block">
          <div className="outcome-label">Outcome</div>
          <ul className="outcome-bullets">
            <li>
              <span className="bullet" />
              <span>
                <strong>Ownzones Connect</strong> — cloud admin platform for{" "}
                <strong>Paramount, Sony, Warner Bros, MGM</strong> — replaced
                FedEx envelopes and HDDs with a browser dashboard
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                Consumer VOD app shipped on web, iOS, Android, Apple TV, Roku
                TV
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                <strong>Featured by Apple TV &amp; Roku TV</strong> for three
                months in 2015 for its interaction design
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span>
                Established the company’s internal UX process — used after I
                left
              </span>
            </li>
          </ul>
        </div>

        <h2>Context</h2>
        <p>
          In 2015, high-resolution video files were large enough, and internet
          infrastructure unreliable enough, that the dominant way major
          studios delivered content to partners was still physical:{" "}
          <strong>
            a hard drive, boxed, shipped by overnight courier, signed for on
            the other end.
          </strong>{" "}
          Every step of that pipeline had a human doing something software
          could do.
        </p>
        <p>
          Ownzones was building the cloud-native replacement. I joined as the
          company’s <strong>first UX hire</strong>, establishing the design
          function while designing two products in parallel: Connect (the
          operator-facing admin platform used by studios and post-houses) and
          the consumer VOD app.
        </p>

        <h2>My role</h2>
        <p>
          On Connect, the work was synthesis: translate messy, half-offline
          studio workflows into a clean interface that made those workflows
          continuous and visible.{" "}
          <strong>The backend was the UX</strong> — deep time with the
          engineering team to understand the transcoding and delivery
          architecture, and sustained stakeholder conversations to surface
          what the physical process was actually doing.
        </p>

        <h2>Two decisions that mattered</h2>

        <p>
          <strong>
            1. Design the dashboard around the job, not around the system.
          </strong>{" "}
          The engineering architecture of a cloud transcoder is a tree of
          jobs, parameters, output profiles, and delivery endpoints. The
          mental model of a studio operator is simpler:{" "}
          <em>I have a file, I need this partner to receive it in the right format by this deadline.</em>{" "}
          The interface that shipped started from the operator’s job.{" "}
          <strong>Job view was default; system view one click away</strong>{" "}
          for engineers and power users.
        </p>

        <figure>
          <svg
            viewBox="0 0 700 340"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Before and after: physical hard-drive delivery workflow replaced by a single cloud dashboard"
          >
            <rect className="frame" x="0" y="0" width="700" height="340" />

            <text className="panel-title" x="30" y="28">Before</text>
            <text className="panel-head" x="30" y="46">Films delivered on hard drives by courier</text>

            <text className="step-label" x="40" y="80" textAnchor="start">Master</text>
            <rect className="before-block" x="30" y="86" width="80" height="32" rx="2" />
            <text className="node-label" x="70" y="106" textAnchor="middle">Studio</text>

            <line x1="110" y1="102" x2="140" y2="102" stroke="var(--ink-mute)" strokeWidth="1" />

            <text className="step-label" x="150" y="80" textAnchor="start">HDD</text>
            <rect className="before-block" x="140" y="86" width="80" height="32" rx="2" />
            <text className="node-label" x="180" y="106" textAnchor="middle">Copy + QC</text>

            <line x1="220" y1="102" x2="250" y2="102" stroke="var(--ink-mute)" strokeWidth="1" />

            <text className="step-label" x="260" y="80" textAnchor="start">FedEx</text>
            <rect className="before-block" x="250" y="86" width="80" height="32" rx="2" />
            <text className="node-label" x="290" y="106" textAnchor="middle">Courier</text>

            <line x1="330" y1="102" x2="360" y2="102" stroke="var(--ink-mute)" strokeWidth="1" />

            <text className="step-label" x="370" y="80" textAnchor="start">Arrival</text>
            <rect className="before-block" x="360" y="86" width="80" height="32" rx="2" />
            <text className="node-label" x="400" y="106" textAnchor="middle">Mailroom</text>

            <line x1="440" y1="102" x2="470" y2="102" stroke="var(--ink-mute)" strokeWidth="1" />

            <text className="step-label" x="480" y="80" textAnchor="start">Verify</text>
            <rect className="before-block" x="470" y="86" width="90" height="32" rx="2" />
            <text className="node-label" x="515" y="106" textAnchor="middle">QC on receipt</text>

            <line x1="560" y1="102" x2="590" y2="102" stroke="var(--ink-mute)" strokeWidth="1" />

            <text className="step-label" x="600" y="80" textAnchor="start">Deliver</text>
            <rect className="before-block" x="590" y="86" width="80" height="32" rx="2" />
            <text className="node-label" x="630" y="106" textAnchor="middle">Partner</text>

            <text className="quote-serif" x="30" y="150">
              Days per delivery. Lost drives. No single place to see status.
            </text>

            <line x1="30" y1="178" x2="670" y2="178" stroke="var(--rule)" strokeWidth="0.5" strokeDasharray="3 3" />

            <text className="panel-title" x="30" y="200">After</text>
            <text className="panel-head" x="30" y="218">One browser-based dashboard</text>

            <rect className="after-block" x="30" y="238" width="280" height="72" rx="2" />
            <text className="node-label" x="45" y="258">Operator view</text>
            <text className="node-sub" x="45" y="276">One file · one destination · one deadline</text>
            <text className="node-sub" x="45" y="292">Status visible end-to-end</text>

            <path className="flow" d="M 310,274 L 370,274" />
            <polygon points="366,270 376,274 366,278" fill="var(--ink)" />

            <rect className="after-block" x="376" y="238" width="294" height="72" rx="2" />
            <text className="node-label" x="391" y="258">System view</text>
            <text className="node-sub" x="391" y="276">Transcoding jobs, parameters, endpoints</text>
            <text className="node-sub" x="391" y="292">One click away for engineers and power users</text>

            <text className="arrow-label" x="318" y="262">one click</text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 1</span>
            The operator’s job became the default view; the system’s
            architecture became an opt-in.
          </figcaption>
        </figure>

        <p>
          <strong>2. Earn the persuasion round trip.</strong>{" "}
          Iteration — calls, focus groups, workshops, wireframes, rework —
          was the baseline I held the team to, and it didn’t come naturally
          to waterfall-trained studios or to engineering focused on
          transcoder performance. The persuasion happened one feature at a
          time; <strong>the quality of what shipped was the argument.</strong>{" "}
          That discipline — defending iteration to senior, time-pressured
          stakeholders without losing momentum — is the single habit I carry
          into every complex B2B project since.
        </p>

        <h2>What shipped</h2>
        <ul className="outcome-bullets" style={{ marginBottom: 28 }}>
          <li>
            <span className="bullet" />
            <span>
              Connect in production for{" "}
              <strong>Paramount, Sony, Warner Bros, MGM</strong> and other
              post-production teams
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span>
              Consumer VOD app on web, iOS, Android, Apple TV, Roku TV
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span>
              Featured by <strong>Apple TV &amp; Roku TV</strong> for three
              months in 2015
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span>
              Internal UX process (milestones, documentation, handoff)
              established; used after I left
            </span>
          </li>
        </ul>

        <h2>What I take from it</h2>
        <p>
          Operator tools that replace physical processes have a specific
          honesty: you can point at the old process, count its friction, and
          design against the count.{" "}
          <strong>
            The best operator UX is frequently not in the features you add
            but in the steps you remove.
          </strong>
        </p>

      </div>
    </div>
  );
}
