import {
  Activity,
  AudioLines,
  CalendarCheck,
  Search,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

const MAILTO =
  "mailto:enzo@design-prism.com?subject=We%20Are%20Saplings%2030-day%20sprint";

function SiteLink() {
  return (
    <a
      className="-my-3 inline-flex min-h-11 items-center py-3 underline decoration-line underline-offset-2"
      href="https://wearesaplings.com"
    >
      wearesaplings.com
    </a>
  );
}

const whatYouGet: {
  title: string;
  body: React.ReactNode;
  Icon: LucideIcon;
}[] = [
  {
    title: "A parent checks out on your site.",
    body: (
      <>
        They hit Get Yours Today and stay on <SiteLink />. Tax and shipping are
        handled. You update stock. We connect it.
      </>
    ),
    Icon: ShoppingBag,
  },
  {
    title: "The Sept 26 table can take money.",
    body: "From your phone, at the event, without a messy workaround.",
    Icon: Smartphone,
  },
  {
    title: "Stories live on the site.",
    body: "Audio Stories goes to your Spotify podcast. A parent can play from the deck without the Linktree detour.",
    Icon: AudioLines,
  },
  {
    title: "You can see which posts work.",
    body: "When you post in October, we can see it: this post or this event sent someone, they stayed, they bought.",
    Icon: Activity,
  },
  {
    title: "Google looks at a live site again.",
    body: "A selling site, not a quiet one. The way it used to when people googled you before a pitch.",
    Icon: Search,
  },
  {
    title: "Two working Zooms in the 30 days.",
    body: "Short. We look at what shipped.",
    Icon: CalendarCheck,
  },
];

const weeks = [
  {
    n: "01",
    title: "1–7",
    body: "You add Enzo as Shopify admin. We reconnect Google so the site is findable again. Contact form live. Your copy starts going in.",
  },
  {
    n: "02",
    title: "8–14",
    body: "Shop and checkout stay on your site. Get Yours Today actually sells.",
  },
  {
    n: "03",
    title: "15–21",
    body: "Spotify on Audio Stories. New photos if the shoot is ready. Partner vs testimonials locked.",
  },
  {
    n: "04",
    title: "22–30",
    body: "We confirm you can take money at the Sept 26 table from your phone. You get ready shop links for Instagram, TikTok, and the table, plus a one-page note on where to send people. Site is ready to push.",
  },
];

const youHandle = [
  "Shopify admin for Enzo in week 1",
  "Final copy + Partner yes / no",
  "Spotify upload + link",
  "Photos when the shoot is done",
  "IG / TikTok when you are ready",
];

const notThisSprint = [
  "A new Shopify or Squarespace site",
  "Paid ads this sprint",
  "Us posting for you",
  "A monthly that auto-starts",
];

const startSteps = [
  "Reply yes + Shopify admin",
  "Send copy + Spotify link",
  "Start 30 days and book the first bi-weekly Zoom",
  "Day 30, you choose",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="w-full text-[11px] font-medium tracking-[0.2em] text-moss">
      {children}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="w-full text-[24px] font-semibold leading-[30px] text-ink">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-[390px] pb-[104px] md:max-w-[768px] xl:max-w-[1280px]">
        <header className="flex h-[53px] items-end justify-between px-6 pb-2 pt-7 md:px-[84px] xl:px-[300px]">
          <p className="text-[14px] font-semibold tracking-[0.4px] text-ink">
            prism
          </p>
          <p className="text-[11px] font-medium tracking-[0.2em] text-moss">
            proposal
          </p>
        </header>

        <section className="flex flex-col gap-4 px-6 pb-2 pt-9 md:px-[84px] xl:px-[300px]">
          <Eyebrow>30 days</Eyebrow>
          <h1 className="text-[32px] font-semibold leading-[38px] text-ink">
            your site can sell. then we stop.
          </h1>
          <p className="text-[16px] font-normal leading-6 text-muted">
            The card deck is real. 500 arrived. The stories are recorded. You
            are done creating and ready to push.
          </p>
          <p className="text-[16px] font-normal leading-6 text-muted">
            In 30 days, someone can pick up a deck at your Sept 26 table or from
            a post, pay on wearesaplings.com, and you can see what sent them.
            $999. Then you choose what happens next.
          </p>
        </section>

        <section className="px-6 pb-2 pt-7 md:px-[84px] xl:px-[300px]">
          <div className="flex flex-col gap-1.5 rounded-2xl border border-line bg-card p-5">
            <p className="text-[11px] font-medium tracking-[0.16em] text-moss">
              the whole proposal
            </p>
            <p className="text-[40px] font-semibold leading-[44px] text-ink">
              $999
            </p>
            <p className="text-[15px] font-normal leading-[22px] text-muted">
              for the 30 days.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-3 px-6 pb-2 pt-10 md:px-[84px] xl:px-[300px]">
          <Eyebrow>where you are</Eyebrow>
          <Heading>the deck is ready. the site is not.</Heading>
          <p className="text-[16px] leading-6 text-muted">
            You spent a year testing with real kids. Now you need the product to
            sell without you sitting in every room.
          </p>
          <p className="text-[16px] leading-6 text-muted">
            What is missing: Get Yours Today cannot take an order. A scan still
            goes to Linktree. When people google you before a pitch, you no
            longer look as legit as you used to.
          </p>
          <p className="text-[16px] leading-6 text-ink">
            You already rewrote the copy and the page flow. You have a Shopify
            account. You do not want a new site. You want this one finished so
            you can stay on the cards, the book, and the stories.
          </p>
        </section>

        <section className="flex flex-col gap-3 px-6 pb-2 pt-10 md:px-[84px] xl:px-[300px]">
          <Eyebrow>what $999 gets you</Eyebrow>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {whatYouGet.map(({ title, body, Icon }) => (
              <li
                key={title}
                className="flex gap-3 rounded-2xl border border-line bg-card p-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-moss/35 bg-paper">
                  <Icon
                    aria-hidden
                    className="size-5 text-moss"
                    strokeWidth={1.5}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold leading-5 text-ink">
                    {title}
                  </p>
                  <p className="mt-1 text-[13px] leading-[19px] text-muted">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 px-6 pb-2 pt-10 md:px-[84px] xl:px-[300px]">
          <Eyebrow>the 30 days</Eyebrow>
          <ol className="flex flex-col gap-4">
            {weeks.map((step) => (
              <li key={step.n} className="flex gap-3.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-medium text-paper">
                  {step.n}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold leading-5 text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1 text-[14px] leading-[21px] text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-3 px-6 pb-2 pt-10 md:px-[84px] xl:px-[300px]">
          <Eyebrow>you handle</Eyebrow>
          <Heading>what we need from you.</Heading>
          <ul className="flex flex-col gap-3">
            {youHandle.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-[15px] leading-6 text-ink"
              >
                <span aria-hidden className="text-moss">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3 px-6 pb-2 pt-8 md:px-[84px] xl:px-[300px]">
          <Eyebrow>not this sprint</Eyebrow>
          <ul className="flex flex-col gap-3">
            {notThisSprint.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-[15px] leading-6 text-muted"
              >
                <span aria-hidden className="text-moss">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3 px-6 pb-2 pt-10 md:px-[84px] xl:px-[300px]">
          <Eyebrow>after day 30</Eyebrow>
          <Heading>you pick one. none start unless you say so.</Heading>
          <div className="flex flex-col gap-3">
            <article className="rounded-2xl border border-line bg-card p-5">
              <h3 className="text-[18px] font-semibold leading-6 text-ink">
                Growth
              </h3>
              <p className="mt-2 text-[14px] leading-[21px] text-muted">
                Double down. Separate scope and price.
              </p>
            </article>
            <article className="rounded-2xl border border-line bg-card p-5">
              <h3 className="text-[18px] font-semibold leading-6 text-ink">
                Keep the lights on
              </h3>
              <p className="mt-2 text-[14px] leading-[21px] text-muted">
                $20/mo. Hosting plus the minimum to keep the site up.
              </p>
            </article>
            <article className="rounded-2xl border border-line bg-card p-5">
              <h3 className="text-[18px] font-semibold leading-6 text-ink">
                Full handoff
              </h3>
              <p className="mt-2 text-[14px] leading-[21px] text-muted">
                Enzo is out. You keep it, or another partner can take it
                cleanly.
              </p>
            </article>
          </div>
        </section>

        <section className="flex flex-col gap-3 px-6 pb-2 pt-10 md:px-[84px] xl:px-[300px]">
          <Eyebrow>how we start</Eyebrow>
          <Heading>reply yes. we start this week.</Heading>
          <ol className="flex flex-col gap-3">
            {startSteps.map((item, i) => (
              <li
                key={item}
                className="flex gap-3 text-[15px] leading-6 text-ink"
              >
                <span className="shrink-0 font-medium text-moss">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-3 px-6 pb-6 pt-10 md:px-[84px] xl:px-[300px]">
          <p className="text-[16px] leading-6 text-ink">
            If this matches what you wanted from the call, reply and we start
            this week.
          </p>
          <p className="text-[15px] font-semibold leading-[22px] text-ink">
            Enzo Sison
          </p>
          <a
            className="inline-flex min-h-11 items-center text-[14px] leading-5 text-muted underline decoration-line underline-offset-2"
            href={MAILTO}
          >
            enzo@design-prism.com
          </a>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-full h-7 bg-gradient-to-b from-paper/0 to-paper"
        />
        <div className="mx-auto w-full max-w-[390px] px-6 py-3 md:max-w-[768px] md:px-[84px] xl:max-w-[1280px] xl:px-[300px]">
          <a
            className="flex h-[52px] min-h-11 w-full items-center justify-center rounded-[14px] bg-ink px-5 text-[16px] font-medium leading-5 text-paper"
            href={MAILTO}
          >
            reply to start
          </a>
        </div>
      </div>
    </>
  );
}
