import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck2,
  Check,
  Headphones,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

const APPROVE_MAILTO =
  "mailto:enzo@design-prism.com?subject=Approve%20We%20Are%20Saplings%2030-day%20sprint&body=Hi%20Enzo%2C%0A%0AI%27d%20like%20to%20move%20forward%20with%20the%20We%20Are%20Saplings%2030-day%20launch%20sprint%20for%20%24999.%20Let%27s%20confirm%20the%20start%20date%20and%20access.%0A%0AClare";
const QUESTION_MAILTO =
  "mailto:enzo@design-prism.com?subject=Question%20about%20the%20We%20Are%20Saplings%20proposal";

const goals = [
  {
    number: "01",
    title: "Sell without being in every room",
    body: "Let the product, stories, and site carry more of the experience so you can stay focused on the creative work.",
  },
  {
    number: "02",
    title: "Be ready for September 26",
    body: "Give people at the event a simple way to discover the deck, pay, and keep exploring from their phone.",
  },
  {
    number: "03",
    title: "Build a base for the Q4 push",
    body: "Send October and November content to a site that can convert interest into visits, stories, and sales.",
  },
];

const outcomes = [
  {
    Icon: ShoppingBag,
    title: "Checkout that stays on your site",
    body: "Connect the existing site to Shopify so Get Yours Today leads to a real product and checkout flow, with inventory, tax, and shipping settings in one place.",
  },
  {
    Icon: Smartphone,
    title: "A tested event payment setup",
    body: "Set up and test the Shopify in-person payment path that fits your account and device before the Sept 26 event.",
  },
  {
    Icon: Headphones,
    title: "Audio stories without the detour",
    body: "Connect the Audio Stories experience to your Spotify podcast so families can move from the deck to the stories without relying on Linktree.",
  },
  {
    Icon: BarChart3,
    title: "Clearer campaign attribution",
    body: "Set up Google Analytics and campaign links so we can see which posts and events bring people in and which visits lead toward a purchase.",
  },
  {
    Icon: SearchCheck,
    title: "A stronger search foundation",
    body: "Reconnect Search Console, confirm core indexing and page metadata, and restore a working contact path. Rankings are never guaranteed, but the foundation will be sound.",
  },
  {
    Icon: CalendarCheck2,
    title: "Two focused working sessions",
    body: "We meet twice during the sprint to review what shipped, resolve decisions, and keep the launch moving.",
  },
];

const weeks = [
  {
    number: "01",
    label: "Days 1–7",
    title: "Access + foundation",
    body: "Confirm Shopify access, final content, Search Console, analytics, and the contact path. Lock the exact launch checklist.",
  },
  {
    number: "02",
    label: "Days 8–14",
    title: "Shop + checkout",
    body: "Connect the product and checkout flow, align inventory and fulfillment settings, and test the in-person payment path.",
  },
  {
    number: "03",
    label: "Days 15–21",
    title: "Story + experience",
    body: "Implement your new page flow and copy, add available photos, connect Spotify, and settle the partner-versus-testimonials decision.",
  },
  {
    number: "04",
    label: "Days 22–30",
    title: "Measure + launch",
    body: "Create trackable links, test the experience on phone and desktop, verify the key journeys, and deliver a clear handoff note.",
  },
];

const included = [
  "Updates to the existing We Are Saplings website",
  "Shopify product, checkout, and event-payment connection",
  "New copy, page flow, available photos, and Spotify link",
  "Google Analytics, Search Console, and campaign-link setup",
  "Mobile and desktop testing, two sessions, and handoff notes",
];

const fromClare = [
  "Shopify admin access and final product details",
  "Final copy and the partner-versus-testimonials decision",
  "Spotify podcast link and new photos when ready",
  "Access to the Google accounts connected to the site",
  "Prompt feedback when a launch decision is needed",
];

const notIncluded = [
  "A rebuild on Shopify or Squarespace",
  "Paid advertising or ad spend",
  "Ongoing social posting",
  "New work after day 30 unless we agree to it separately",
];

const nextPaths = [
  {
    title: "Keep growing",
    body: "Build on the strongest content and sales signals. We define a separate scope and price together.",
  },
  {
    title: "Hosting care · $20/month",
    body: "Only if you choose it. Covers managed hosting and basic keep-the-site-running care. New content or design work is separate.",
  },
  {
    title: "Full handoff",
    body: "You keep full ownership. I hand over the files, accounts, and notes so you or another partner can take it forward cleanly.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">
            <Check size={16} strokeWidth={2.2} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <header className="site-header page-shell">
          <a className="prism-mark" href="https://design-prism.com">
            prism
          </a>
          <div className="proposal-meta">
            <span>Proposal for Clare Frattarola</span>
            <span aria-hidden="true">·</span>
            <span>August 23, 2026</span>
          </div>
        </header>

        <section className="hero page-shell">
          <div className="hero-copy">
            <p className="eyebrow">30-day website launch sprint</p>
            <h1>Let&apos;s make We Are Saplings ready to sell.</h1>
            <p className="hero-lede">
              The deck is here. The stories are recorded. You&apos;ve shaped the
              copy. This sprint connects the site, Shopify, audio, and analytics
              before your Sept 26 event, so the Q4 push has a clear place to
              land.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={APPROVE_MAILTO}>
                Approve the sprint
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-secondary" href={QUESTION_MAILTO}>
                Ask a question
              </a>
            </div>
            <p className="reassurance">
              <ShieldCheck aria-hidden="true" size={17} />
              One fixed project. No automatic renewal. You own the work.
            </p>
          </div>

          <aside className="summary-card" aria-label="Proposal summary">
            <div className="summary-art" aria-hidden="true">
              <Image
                src="/saplings-logo.png"
                alt=""
                width={390}
                height={360}
                priority
              />
            </div>
            <div className="summary-price">
              <p>Fixed project fee</p>
              <strong>$999</strong>
              <span>30 days · target launch before Sept 26</span>
            </div>
          </aside>
        </section>

        <section className="conversation-section page-shell section-space">
          <SectionIntro
            eyebrow="Built from our conversation"
            title="The goal is not a new website. It is a working launch system."
            body="Clare, you have already done the hard part: a year of real-world testing, 500 finished decks, recorded stories, and a clearer vision for what comes next. This sprint brings the pieces together."
          />
          <div className="goal-grid">
            {goals.map((goal) => (
              <article className="goal-card" key={goal.number}>
                <span>{goal.number}</span>
                <h3>{goal.title}</h3>
                <p>{goal.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="outcomes-section section-space">
          <div className="page-shell">
            <SectionIntro
              eyebrow="What is ready by day 30"
              title="Six concrete outcomes"
              body="The work is defined around things we can review, test, and hand over—not vague promises."
            />
            <div className="outcomes-grid">
              {outcomes.map(({ Icon, title, body }) => (
                <article className="outcome-card" key={title}>
                  <span className="icon-wrap" aria-hidden="true">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="timeline-section page-shell section-space">
          <SectionIntro
            eyebrow="The 30-day plan"
            title="One clear sequence, from access to launch"
          />
          <ol className="timeline">
            {weeks.map((week) => (
              <li key={week.number}>
                <div className="timeline-marker">
                  <span>{week.number}</span>
                </div>
                <p className="timeline-label">{week.label}</p>
                <h3>{week.title}</h3>
                <p>{week.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="scope-section section-space">
          <div className="page-shell">
            <SectionIntro
              eyebrow="Clear scope, clear responsibilities"
              title="No surprise work. No surprise monthly commitment."
              body="The fastest way to protect the launch is to make the boundaries visible before we begin."
            />
            <div className="scope-grid">
              <article className="scope-card scope-card-dark">
                <p className="scope-label">Included in $999</p>
                <h3>What I will deliver</h3>
                <CheckList items={included} />
              </article>
              <article className="scope-card">
                <p className="scope-label">From Clare</p>
                <h3>What keeps the sprint moving</h3>
                <CheckList items={fromClare} />
              </article>
            </div>
            <div className="not-included">
              <p>Not included in these 30 days</p>
              <ul>
                {notIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="clarity-section page-shell section-space">
          <div className="clarity-copy">
            <p className="eyebrow">Investment + ownership</p>
            <h2>$999. One time. Then you choose.</h2>
            <p>
              The $999 covers the 30-day sprint described above. Shopify plan,
              transaction, shipping, and any other third-party platform fees
              remain separate and are paid directly through your accounts.
            </p>
          </div>
          <div className="clarity-points">
            <div>
              <strong>No automatic renewal</strong>
              <span>Nothing begins on day 31 unless you approve it.</span>
            </div>
            <div>
              <strong>Your accounts stay yours</strong>
              <span>You retain the site, store, analytics, data, and access.</span>
            </div>
            <div>
              <strong>Launch target: before Sept 26</strong>
              <span>Assuming access and final source materials arrive on time.</span>
            </div>
          </div>
        </section>

        <section className="next-section page-shell section-space">
          <SectionIntro
            eyebrow="After day 30"
            title="Three options. None are automatic."
            body="We review what launched and choose the next step together."
          />
          <div className="next-grid">
            {nextPaths.map((path, index) => (
              <article key={path.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{path.title}</h3>
                <p>{path.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta page-shell section-space">
          <div className="final-cta-art" aria-hidden="true">
            <Image src="/bramble.png" alt="" width={284} height={284} />
          </div>
          <div className="final-cta-copy">
            <p className="eyebrow">Ready when you are</p>
            <h2>Let&apos;s give the deck a site that can carry it.</h2>
            <p>
              Approve the sprint by email, then we will confirm the start date,
              access, and first working session.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={APPROVE_MAILTO}>
                Approve the 30-day sprint
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-secondary" href={QUESTION_MAILTO}>
                Ask a question
              </a>
            </div>
            <div className="signature">
              <strong>Enzo Sison</strong>
              <span>Prism · enzo@design-prism.com</span>
            </div>
          </div>
        </section>
      </main>

      <div className="sticky-cta">
        <div className="page-shell sticky-inner">
          <div>
            <strong>$999 fixed</strong>
            <span>30 days · no auto-renewal</span>
          </div>
          <a className="button button-primary" href={APPROVE_MAILTO}>
            Approve the sprint
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
