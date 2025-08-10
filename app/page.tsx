export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Shpree</h1>
          <p className="mt-2 text-lg">Find the drop. Grab the deal.</p>
          <p className="mt-1 text-sm text-gray-600">
            Real-time price-drop tracker with instant alerts & price history.
          </p>
        </header>

        <section className="mb-8 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">Get early access</h2>
          <p className="mt-1 text-sm text-gray-600">
            Join the waitlist — we’ll notify you when alerts launch.
          </p>
          <form className="mt-4 flex gap-3" action="/api/subscribe" method="POST">
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none"
            />
            <button type="submit" className="rounded-xl bg-black px-5 py-3 font-medium text-white">
              Notify me
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">
            We’ll only email you about Shpree. Unsubscribe anytime.
          </p>
        </section>

        <section className="mb-10 rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">Join our Telegram</h3>
          <p className="mt-1 text-sm text-gray-600">
            Get today’s biggest price drops straight to your phone.
          </p>
          <a
            href="https://t.me/shpree_deals"
            className="mt-3 inline-block rounded-xl border border-gray-900 px-5 py-3 font-medium"
          >
            Open Telegram Channel
          </a>
        </section>

        <footer className="pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Shpree · An operating brand of Rayes Group ·
          <a className="ml-1 underline" href="/disclosure">Affiliate Disclosure</a> ·
          <a className="ml-1 underline" href="/privacy">Privacy</a> ·
          <a className="ml-1 underline" href="/terms">Terms</a>
        </footer>
      </div>
    </main>
  );
}

