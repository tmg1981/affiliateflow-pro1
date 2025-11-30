import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-cyan-400 mb-6">Welcome to AffiliateFlow</h1>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Supercharge your affiliate marketing with AI. Generate high-converting, SEO-optimized promotional pages in minutes.
      </p>
      <Link
        href="/create"
        className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl px-12 py-6 rounded-xl shadow-xl transform hover:scale-105 transition"
      >
        Create Your First Post Now
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
        <div className="bg-gray-800 p-8 rounded-xl">
          <div className="text-4xl mb-4">Fast Generation</div>
          <p className="text-gray-400">From idea to complete page in under a minute</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl">
          <div className="text-4xl mb-4">High-Converting Copy</div>
          <p className="text-gray-400">Persuasive, American-style marketing copy that sells</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl">
          <div className="text-4xl mb-4">Stunning AI Images</div>
          <p className="text-gray-400">Royalty-free images for hero, features & CTAs</p>
        </div>
      </div>
    </div>
  )
}
