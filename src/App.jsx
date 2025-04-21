import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-cover bg-center text-white text-center py-24 px-6" style={{ backgroundImage: 'url(/splash2.jpg)' }}>
        <h1 className="text-5xl font-bold mb-4">Lowkey Surf Pad</h1>
        <p className="text-xl mb-6">Waterproof key storage built into your traction pad — surf free, no hiding spots required.</p>
        <a href="#waitlist" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg">Reserve for $1</a>
      </header>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Lowkey?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img src="/TailKeysHonda.jpg" alt="Storage" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Waterproof Storage</h3>
            <p>Safely stashes keys, cards, wax, or essentials right in the pad.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img src="/IMG_3283.jpg" alt="Grip" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Performance Grip</h3>
            <p>High-traction surface crafted to industry dimensions and board flow.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img src="/boardStack2.jpg" alt="Fit" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Universal Fit</h3>
            <p>Modular layout designed to work across shortboards and hybrids alike.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 text-center py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="mb-6">1. Reserve for $1<br />2. Get updates and early access<br />3. Surf with peace of mind</p>
        <a href="#waitlist" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow">Join the Waitlist</a>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Engineered With Purpose</h2>
        <img src="/diagramfinal.jpg" alt="Exploded view" className="rounded-xl shadow-lg" />
        <p className="mt-4 text-center">One-handed latch, waterproof sleeve, impact-resistant shell — built for the ocean and beyond.</p>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2025 Lowkey Surf Co. | Contact: brandon@lowkeysurf.com</p>
      </footer>
    </main>
  );
}
