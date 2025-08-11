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
          Real-time price-drop alerts, price history charts, and smart tracking so you never overpay again.
        </p>

        {/* Waitlist form */}
        <div
          id="waitlist"
          className="mx-auto mt-8 max-w-xl rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-4 md:p-5 shadow-sm"
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
              if (!email) return;

              const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });

              const data = await res.json();
              if (res.ok && data.success) { alert("You’re on the waitlist!"); form.reset(); }
              else { alert(data.error || "Something went wrong."); }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-slate-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white"
              style={{ backgroundColor: "#112D4E" }}
            >
              Notify me
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            We’ll only email you about Shpree. Unsubscribe anytime.
          </p>

          {/* Product Tracking form */}
          <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-4 md:p-5 shadow-sm">
            <h3 className="brand-heading text-lg font-semibold mb-3">Track a product</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const f = e.currentTarget;
                const url = (f.elements.namedItem("url") as HTMLInputElement).value.trim();
                const target = (f.elements.namedItem("target") as HTMLInputElement).value.trim();
                if (!url || !target) return;

                const res = await fetch("/api/track", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ url, target }),
                });
                const data = await res.json();
                alert(res.ok ? "Product tracking started!" : (data.error || "Something went wrong."));
                if (res.ok) f.reset();
              }}
              className="flex flex-col gap-3"
            >
              <input name="url" type="url" required placeholder="Product link" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-slate-400" />
              <input name="target" type="number" step="0.01" required placeholder="Target price (e.g. 99.99)" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-slate-400" />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white"
                style={{ backgroundColor: "#112D4E" }}
              >
                Start Tracking
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 text-xs uppercase tracking-wide text-slate-500">
          Trusted by deal hunters & creators worldwide
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
