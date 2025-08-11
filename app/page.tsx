/* app/page.tsx */
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-brand">
      {/* Header (brand only, no placeholders) */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-horizontal.png" alt="Shpree" className="logo h-1 w-auto" />
            <span className="sr-only">Shpree</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-brand">Features</a>
            <a href="#how" className="hover:text-brand">How it works</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
            <a href="https://t.me/shpree_deals" className="hover:text-brand">Telegram</a>
            <a href="/disclosure" className="hover:text-brand">Disclosure</a>
          </nav>

          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 font-medium text-white bg-brand hover:opacity-95 active:opacity-90"
          >
            Get early access
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
        <img src="/logo-full-light.png" alt="Shpree" className="logo mx-auto mb-4 h-32 w-auto" />
        <h1 className="brand-heading text-4xl md:text-5xl font-bold tracking-tight">
          Find the drop. Grab the deal.
        </h1>
        <p className="mt-3 text-lg text-slate-700 max-w-2xl mx-auto">
          Real-time price-drop alerts, price history charts, and smart tracking
          so you never overpay again.
        </p>

        {/* Waitlist form */}
        <div
          id="waitlist"
          className="mx-auto mt-8 max-w-xl rounded-3xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm"
        >
          <form action="/api/subscribe" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white bg-brand hover:opacity-95 active:opacity-90"
            >
              Notify me
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            We’ll only email you about Shpree. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="Instant price alerts" body="Get notified the moment a product drops below your target or a new coupon appears." />
          <Feature title="Price history" body="See historical price charts so you know if today’s deal is truly the lowest." />
          <Feature title="Smart tracking" body="Track products or entire categories (e.g., Monitors under $300, VPN deals in the UK)." />
          <Feature title="Multi-merchant coverage" body="We scan multiple stores automatically so you always get the best current offer." />
          <Feature title="Auto-curated top drops" body="Our ‘Spree Score’ ranks deals by discount, history, and reliability." />
          <Feature title="Telegram + Email" body="Choose instant Telegram pings or a daily email digest—set it and forget it." />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="brand-heading text-2xl font-semibold text-center">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <Step n="1" title="Pick what to track" body="Paste a product link or pick a category. Set your target price." />
          <Step n="2" title="We monitor nonstop" body="Our bots watch prices and coupons 24/7 across merchants." />
          <Step n="3" title="You get the drop" body="Instant alert with the best link. Buy it at the right time." />
        </div>
        <div className="text-center mt-10">
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-xl px-5 py-3 font-medium text-white bg-brand hover:opacity-95"
          >
            Join the waitlist
          </a>
        </div>
      </section>

      {/* Telegram CTA */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white">
          <div>
            <h3 className="brand-heading text-xl font-semibold">Daily drops on Telegram</h3>
            <p className="mt-1 text-slate-600">Get today’s biggest price cuts straight to your phone.</p>
          </div>
          <a
            href="https://t.me/shpree_deals"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-medium text-brand border-brand hover:bg-brand hover:text-white transition"
          >
            Open Telegram Channel
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="brand-heading text-2xl font-semibold text-center">FAQ</h2>
        <div className="mt-8 grid gap-4">
          <Faq q="Is Shpree free?" a="Yes, you can browse top drops and get the daily email free. Pro adds instant alerts, advanced filters, and full price history." />
          <Faq q="Which stores do you cover?" a="We start with major electronics and digital merchants, and add more weekly. The system prioritizes reputable merchants." />
          <Faq q="How do alerts work?" a="Add an item or category, set your threshold, and choose Telegram/push/email. We ping you instantly when it drops." />
          <Faq q="When is launch?" a="We’re onboarding early users now. Join the waitlist and you’ll be first in when Pro alerts open." />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-slate-500 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Shpree · An operating brand of Rayes Group</div>
          <div className="flex gap-4">
            <a href="/disclosure" className="underline">Affiliate Disclosure</a>
            <a href="/privacy" className="underline">Privacy</a>
            <a href="/terms" className="underline">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* tiny presentational components */
function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white">
      <p className="brand-heading text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 bg-white text-center">
      <div className="mx-auto mb-3 h-10 w-10 rounded-xl text-white grid place-items-center bg-brand">
        {n}
      </div>
      <p className="brand-heading text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-xl border border-slate-200 bg-white p-4">
      <summary className="cursor-pointer list-none">
        <span className="brand-heading text-sm font-semibold">{q}</span>
      </summary>
      <p className="mt-2 text-sm text-slate-600">{a}</p>
    </details>
  );
}
