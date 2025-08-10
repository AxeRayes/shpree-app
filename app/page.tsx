export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* Brand / Hero */}
        <header className="text-center">
          {/* Logo mark */}
          <div className="mx-auto mb-6 h-14 w-14 rounded-2xl bg-slate-900 text-white grid place-items-center shadow">
            {/* Spark icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2l2.1 5.7L20 10l-5.9 2.3L12 18l-2.1-5.7L4 10l5.9-2.3L12 2z" fill="currentColor"/>
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Shpree</h1>
          <p className="mt-3 text-lg text-slate-700">Find the drop. Grab the deal.</p>
          <p className="mt-1 text-sm text-slate-500">
            Real-time price-drop tracker with instant alerts & price history.
          </p>
        </header>

        {/* Card */}
        <section className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Get early access</h2>
          <p className="mt-1 text-sm text-slate-600">
            Join the waitlist — we’ll notify you when alerts launch.
          </p>

          {/* Form */}
          <form action="/api/subscribe" method="POST" className="mt-5 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none ring-0 focus:border-slate-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white bg-slate-900 hover:opacity-95 active:opacity-90 transition"
            >
              Notify me
            </button>
          </form>

          <p className="mt-3 text-xs text-slate-500">
            We’ll only email you about Shpree. Unsubscribe anytime.
          </p>

          {/* Telegram CTA */}
          <div className="mt-6">
            <a
              href="https://t.me/shpree_deals"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-900 px-5 py-3 text-slate-900 hover:bg-slate-50 transition"
            >
              {/* Telegram icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                <path d="M9.94 15.54l-.4 5.64c.57 0 .81-.25 1.1-.55l2.64-2.52 5.47 4c1 .56 1.71.27 1.98-.93l3.59-16.84C24.56 2.4 23.84 1.9 22.9 2.3L1.12 10.69c-1.45.57-1.43 1.38-.25 1.75l5.58 1.74L19.38 6.5c.7-.43 1.34-.2.82.28L9.94 15.54z"/>
              </svg>
              Open Telegram Channel
            </a>
          </div>
        </section>

        {/* Mini “How it works” */}
        <section className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm font-semibold">1) Track items</p>
            <p className="mt-1 text-sm text-slate-600">Add a product or category to your watchlist.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm font-semibold">2) Get instant alerts</p>
            <p className="mt-1 text-sm text-slate-600">We ping you the moment the price drops or a coupon appears.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm font-semibold">3) Check price history</p>
            <p className="mt-1 text-sm text-slate-600">See past prices so you know you’re getting a real deal.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Shpree · An operating brand of Rayes Group ·
          <a className="ml-1 underline" href="/disclosure">Affiliate Disclosure</a> ·
          <a className="ml-1 underline" href="/privacy">Privacy</a> ·
          <a className="ml-1 underline" href="/terms">Terms</a>
        </footer>
      </div>
    </main>
  );
}
