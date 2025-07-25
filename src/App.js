import React from "react";

export default function TailoreLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-black text-white p-6">
        <h1 className="text-3xl font-bold">TAILORE</h1>
        <p className="text-sm">Design Your Style. Wear Your Identity.</p>
      </header>

      <main className="p-8 space-y-12">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Custom Fashion at Your Fingertips
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Tailore lets you design your own clothes using our app or website.
            Choose fabric, fit, and style — we’ll deliver your creation to your
            doorstep.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-2xl shadow hover:bg-gray-800 transition">
            Join Waitlist
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Customize</h3>
            <p>Pick styles, colors, fits & more using our easy interface.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. We Tailor It</h3>
            <p>Your design is sent to our expert tailors in real-time.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Fast Delivery</h3>
            <p>We deliver your custom outfit directly to your home.</p>
          </div>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Tailore?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Perfect fit for every body</li>
            <li>Fully digital experience</li>
            <li>Affordable and fast</li>
            <li>Great for both men and women</li>
          </ul>
        </section>
      </main>

      <footer className="bg-black text-white p-6 mt-12 text-center text-sm">
        &copy; 2025 Tailore | Built by Dasari Vidyadhar | Contact:
        vijjidasari23@gmail.com
      </footer>
    </div>
  );
}
