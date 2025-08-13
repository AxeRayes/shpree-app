import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-full-light.png"
              alt="Shpree"
              className="h-10 w-auto"
              style={{ height: "40px" }}
            />
            <span className="sr-only">Shpree</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="https://t.me/shpree_deals" className="hover:text-slate-900">Telegram</a>
            <a href="/disclosure" className="hover:text-slate-900">Disclosure</a>
          </nav>
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 font-medium text-white"
            style={{ backgroundColor: "#112D4E" }}
          >
            Get early access
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
        <img
          src="/logo-full-light.png"
          alt="Shpree"
          className="mx-auto mb-4 w-auto"
          style={{ height: "180px" }}
        />
        <h1 className="brand-heading text-4xl md:text-5xl font-bold tracking-tight">
          Find the drop. Grab the deal.
        </h1>
        <p className="mt-3 text-lg text-slate-700 max-w-2xl mx-auto">
          Real-time price-drop alerts, price history charts, and smart tracking
          so you never overpay again.
        </p>

        {/* Waitlist / Product Tracking form (Formspree) */}
        <div
          id="waitlist"
          className="mx-auto mt-8 max-w-xl rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-4 md:p-5 shadow-sm"
        >
          <form
            action="https://formspree.io/f/mgvzdgez"
            method="POST"
            className="flex flex-col gap-3"
          >
            {/* Your email so we can reply */}
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-slate-400"
            />
            {/* Tracking fields */}
            <input
              name="url"
              type="url"
              required
              placeholder="Product link"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-slate-400"
            />
            <input
              name="target"
              type="number"
              step="0.01"
              required
              placeholder="Target price (e.g. 99.99)"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-slate-400"
            />
            {/* Optional helpers */}
            <input type="hidden" name="_subject" value="New Shpree product tracking request" />
            <input type="hidden" name="_captcha" value="false" />
            {/* If you add app/thanks/page.tsx, keep the next line; otherwise remove it */}
            <input type="hidden" name="_next" value="https://shpree.com/thanks" />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white"
              style={{ backgroundColor: "#112D4E" }}
            >
              Start Tracking
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            We’ll only email you about Shpree. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Simple filler sections so nav links work */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <p className="text-slate-600">Real-time alerts · Price history · Smart tracking.</p>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold mb-2">How it works</h2>
        <p className="text-slate-600">Paste a product link, set your target price, and we notify you.</p>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
        <p className="text-slate-600">We’ll add common questions here soon.</p>
      </section>

      {/* Contact Form (Formspree) */}
      <section
        id="contact"
        className="mx-auto max-w-xl mt-4 mb-12 p-6 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm"
      >
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form
          action="https://formspree.io/f/mgvzdgez"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-slate-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-slate-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-slate-400"
            rows={4}
            required
          />
          {/* If you add app/thanks/page.tsx, keep the next line; otherwise remove it */}
          <input type="hidden" name="_next" value="https://shpree.com/thanks" />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white"
            style={{ backgroundColor: "#112D4E" }}
          >
            Send
          </button>
        </form>
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
