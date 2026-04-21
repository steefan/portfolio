import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title:
    "Ownzones Connect — the studio admin platform that replaced a mailroom | Stefan Condurachi",
};

const accentStyle = { "--accent": "#3A4A7A" } as CSSProperties;

const svgStyles = `
  .case-page .frame { fill: #FFFFFF; stroke: #E2E0DB; stroke-width: 1; }
  .case-page .before-block { fill: #F2EFE8; stroke: #D7D2C5; stroke-width: 0.75; }
  .case-page .after-block { fill: #FFFFFF; stroke: #3A4A7A; stroke-width: 1.4; }
  .case-page .node-label { font: 600 12px Helvetica, Arial, sans-serif; fill: #0F0F0F; }
  .case-page .node-sub { font: 10px Helvetica, Arial, sans-serif; fill: #6B6B6B; }
  .case-page .panel-title {
    font: 600 11px Helvetica, Arial, sans-serif;
    fill: #6B6B6B; letter-spacing: 0.18em; text-transform: uppercase;
  }
  .case-page .panel-head { font: 600 13px Helvetica, Arial, sans-serif; fill: #0F0F0F; }
  .case-page .flow { stroke: #3A4A7A; stroke-width: 1.25; fill: none; }
  .case-page .step-label {
    font: 10px Helvetica, Arial, sans-serif;
    fill: #6B6B6B; letter-spacing: 0.08em; text-transform: uppercase;
  }
  .case-page .arrow-label {
    font: 600 11px Helvetica, Arial, sans-serif;
    fill: #3A4A7A; letter-spacing: 0.1em; text-transform: uppercase;
  }
  .case-page .quote-serif {
    font: italic 12px "Iowan Old Style", Georgia, serif;
    fill: #2B2B2B;
  }
`;

export default function OwnzonesCase() {
  return (
    <div className="case-page" style={accentStyle}>
      <style dangerouslySetInnerHTML={{ __html: svgStyles }} />
      <div className="wrap">
        <div className="meta">
          <span>Case study</span>
          <span>·</span>
          <span>Senior UX designer, first UX hire</span>
          <span>·</span>
          <span>Ownzones Media Network</span>
          <span>·</span>
          <span>2015–2017</span>
        </div>

        <h1>The dashboard that replaced a mailroom</h1>
        <p className="deck">
          When I joined Ownzones in 2015, Paramount was still shipping feature
          films to its distribution partners on physical hard drives via
          courier. We replaced that with a cloud dashboard. This is the short
          version of how the operator-facing side of that platform got
          designed.
        </p>

        <div className="outcome">
          <div className="label">Outcome</div>
          <p>
            Ownzones Connect — a cloud admin platform for film and TV studios
            (Paramount, Sony, Warner Bros, MGM) to manage and deliver video
            content — replaced a workflow built around FedEx envelopes and
            HDDs with one browser-based dashboard. Separately, the consumer
            VOD app I designed in the same period was featured by Apple TV
            and Roku TV for three months in 2015 for its interaction design.
          </p>
        </div>

        <h2>Context</h2>
        <p>
          In 2015, high-resolution video files were large enough, and
          internet infrastructure was unreliable enough, that the dominant
          way major film studios delivered content to distribution partners
          was still physical: a hard drive, boxed, shipped by overnight
          courier, signed for on the other end. Post-production houses did
          the same in reverse. Every step of this pipeline had a human doing
          something that software could do — tracking which drive was where,
          which version of a film was on it, whether encoding parameters
          matched the destination’s specs.
        </p>
        <p>
          Ownzones was building the cloud-native replacement. I joined as the
          company’s first UX hire, which meant establishing the design
          function from zero alongside designing two products in parallel:{" "}
          <strong>Connect</strong>, the operator-facing admin platform used
          by studios and post-houses, and the consumer VOD app running on
          iOS, Android, Apple TV, and Roku TV.
        </p>

        <h2>My role</h2>
        <p>
          First UX designer on a cross-functional team working with
          high-profile studio clients. On Connect, the work was synthesis:
          translate the messy, half-offline workflows that studio operators
          actually ran into a clean interface that made those workflows
          continuous and visible. That meant deep time with the engineering
          team to understand the transcoding and delivery architecture — the
          backend was the UX — and sustained stakeholder conversations to
          surface what the current physical process was actually doing.
        </p>
        <p>
          In the same period I also built the company’s internal UX process
          (milestones, documentation, handoff), mentored junior designers,
          and designed the consumer VOD app across web, mobile, and the two
          major TV platforms.
        </p>

        <h2>Two decisions that mattered</h2>

        <p>
          <strong>
            1. Design the dashboard around the job, not around the system.
          </strong>{" "}
          The engineering architecture of a cloud transcoder is a tree of
          jobs, parameters, output profiles, and delivery endpoints. The
          mental model of a studio operator is simpler: I have a file, I
          need this partner to receive it in the right format by this
          deadline. Early explorations of Connect started from the system
          side — because the system was the source of truth and the
          engineering team thought in those shapes. The interface that
          shipped started from the operator’s job: one file, one destination,
          one deadline, surfaced in sequence. The job view was the default;
          the system view was one click away for the engineers and power
          users who wanted it.
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

            <line x1="110" y1="102" x2="140" y2="102" stroke="#9A9588" strokeWidth="1" />

            <text className="step-label" x="150" y="80" textAnchor="start">HDD</text>
            <rect className="before-block" x="140" y="86" width="80" height="32" rx="2" />
            <text className="node-label" x="180" y="106" textAnchor="middle">Copy + QC</text>

            <line x1="220" y1="102" x2="250" y2="102" stroke="#9A9588" strokeWidth="1" />

            <text className="step-label" x="260" y="80" textAnchor="start">FedEx</text>
            <rect className="before-block" x="250" y="86" width="80" height="32" rx="2" />
            <text className="node-label" x="290" y="106" textAnchor="middle">Courier</text>

            <line x1="330" y1="102" x2="360" y2="102" stroke="#9A9588" strokeWidth="1" />

            <text className="step-label" x="370" y="80" textAnchor="start">Arrival</text>
            <rect className="before-block" x="360" y="86" width="80" height="32" rx="2" />
            <text className="node-label" x="400" y="106" textAnchor="middle">Mailroom</text>

            <line x1="440" y1="102" x2="470" y2="102" stroke="#9A9588" strokeWidth="1" />

            <text className="step-label" x="480" y="80" textAnchor="start">Verify</text>
            <rect className="before-block" x="470" y="86" width="90" height="32" rx="2" />
            <text className="node-label" x="515" y="106" textAnchor="middle">QC on receipt</text>

            <line x1="560" y1="102" x2="590" y2="102" stroke="#9A9588" strokeWidth="1" />

            <text className="step-label" x="600" y="80" textAnchor="start">Deliver</text>
            <rect className="before-block" x="590" y="86" width="80" height="32" rx="2" />
            <text className="node-label" x="630" y="106" textAnchor="middle">Partner</text>

            <text className="quote-serif" x="30" y="150">
              Days per delivery. Lost drives. No single place to see status.
            </text>

            <line x1="30" y1="178" x2="670" y2="178" stroke="#D7D2C5" strokeWidth="0.5" strokeDasharray="3 3" />

            <text className="panel-title" x="30" y="200">After</text>
            <text className="panel-head" x="30" y="218">One browser-based dashboard</text>

            <rect className="after-block" x="30" y="238" width="280" height="72" rx="2" />
            <text className="node-label" x="45" y="258">Operator view</text>
            <text className="node-sub" x="45" y="276">One file · one destination · one deadline</text>
            <text className="node-sub" x="45" y="292">Status visible end-to-end</text>

            <path className="flow" d="M 310,274 L 370,274" />
            <polygon points="366,270 376,274 366,278" fill="#3A4A7A" />

            <rect className="after-block" x="376" y="238" width="294" height="72" rx="2" />
            <text className="node-label" x="391" y="258">System view</text>
            <text className="node-sub" x="391" y="276">Transcoding jobs, parameters, endpoints</text>
            <text className="node-sub" x="391" y="292">One click away for engineers and power users</text>

            <text className="arrow-label" x="318" y="262">one click</text>
          </svg>
          <figcaption>
            <span className="fig-label">Fig. 1</span>
            The operator’s job became the default view; the system’s
            architecture became an opt-in. Editorial illustration of the
            workflow change.
          </figcaption>
        </figure>

        <p>
          <strong>2. Earn the persuasion round trip.</strong> Iteration —
          calls, focus groups, workshops, wireframes, rework — was the
          baseline I held the team to, and it did not come naturally to the
          client or to parts of our own team. The studios we worked with were
          used to waterfall deliveries. Design reviews felt slow to an
          engineering team shipping transcoder performance. The persuasion
          happened one feature at a time, and the quality of what shipped
          was the argument. That discipline — defending iteration to senior,
          time-pressured stakeholders without losing momentum — is the single
          habit I carry from Ownzones into every complex B2B project since.
        </p>

        <h2>What shipped</h2>
        <p>
          Connect went to production used by Paramount, Sony, Warner Bros,
          MGM, and other post-production teams to manage and deliver video
          content through the cloud. The Ownzones consumer VOD app shipped on
          web, iOS, Android, Apple TV, and Roku TV — and was featured by
          Apple TV and Roku TV for three months in 2015 for its interaction
          design. I built the internal UX process (documented milestones,
          transparency with business and stakeholders) that the design team
          used after I left.
        </p>

        <h2>What I take from it</h2>
        <p>
          Operator tools that replace physical processes have a specific
          honesty to them: you can point at the old process, count its
          friction, and design against the count. The lesson I keep is that
          the best operator UX is frequently not in the features you add but
          in the <em>steps you remove</em> — every step that used to require
          a human signature, a phone call, or a signed-for box is a step
          whose disappearance is its own kind of delight for the person who
          used to have to do it.
        </p>

        <hr />
        <div className="footer">
          Role: Senior UX designer · first UX hire · Ownzones Media Network
          (2015–2017)
          <br />
          Products: Ownzones Connect (operator-facing admin platform),
          consumer VOD app across web, iOS, Android, Apple TV, Roku TV
          <br />
          Clients on Connect: Paramount, Sony, Warner Bros, MGM, and
          additional post-production partners
          <br />
          Other: established the company’s internal UX process; mentored
          junior UX designers
        </div>
      </div>
    </div>
  );
}
