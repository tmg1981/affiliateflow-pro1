export default function CreatePost() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Create New Affiliate Post</h1>
      <div className="bg-gray-800 rounded-xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input type="text" defaultValue="YouTube Traffic Blaster" className="w-full px-4 py-3 bg-gray-700 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Product Description</label>
          <textarea rows={6} defaultValue="100% automated cloud-based software that sends real targeted YouTube traffic..." className="w-full px-4 py-3 bg-gray-700 rounded-lg"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Your Affiliate Link (HopLink)</label>
          <input type="url" defaultValue="https://hop.clickbank.net/?affiliate=yourid&vendor=ytblaster" className="w-full px-4 py-3 bg-gray-700 rounded-lg" />
        </div>
        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 py-4 rounded-lg font-bold text-xl">
          Generate Post with AI
        </button>
      </div>
    </div>
  )
}
