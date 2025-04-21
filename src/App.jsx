import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="relative text-white text-center py-32 px-6" style={{ backgroundImage: 'url(/splash2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Lowkey Surf Pad</h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 drop-shadow">Waterproof key storage built into your traction pad — no more hiding your keys in the rocks.</p>
          <a href="#waitlist" className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">Reserve for $1</a>
        </div>
      </header>

      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Lowkey?</h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="text-center">
            <img src="/TailKeysHonda.jpg" alt="Storage" className="rounded-xl mb-4 shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Waterproof Storage</h3>
            <p className="text-gray-600">Stash your key, wax, or essentials securely inside the pad’s sealed compartment.</p>
          </div>
          <div className="text-center">
            <img src="/IMG_3283.jpg" alt="Grip" className="rounded-xl mb-4 shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Performance Grip</h3>
            <p className="text-gray-600">Textured surface with responsive traction designed for speed and stability.</p>
          </div>
          <div className="text-center">
            <img src="/boardStack2.jpg" alt="Fit" className="rounded-xl mb-4 shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Universal Fit</h3>
            <p className="text-gray-600">Modular layout fits most shortboards and hybrids without getting in the way.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-center py-20 px-6">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="mb-6 text-gray-700">1. Reserve your pad with just $1<br />2. Get updates and early access<br />3. Surf without hiding your keys again</p>
        <a href="#waitlist" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition">Join the Waitlist</a>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Engineered With Purpose</h2>
        <img src="/diagramfinal.jpg" alt="Exploded view" className="rounded-xl shadow-lg" />
        <p className="mt-4 text-gray-700">One-handed latch, waterproof silicone seal, and an impact-resistant shell — designed to disappear under your back foot.</p>
      </section>

      <footer className="bg-gray-900 text-white text-center py-8">
        <p className="text-sm">© 2025 Lowkey Surf Co. | Contact: brandon@lowkeysurf.com</p>
      </footer>
    </main>
  );
}

