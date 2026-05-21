'use client';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold text-emerald-500">InsightStream AI</h1>
            <p className="text-gray-400 mt-2">Executive Command Center</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Sarah Jenkins • BloomBox Coffee</p>
            <p className="text-emerald-500">$1.2M ARR</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400">Active Subscribers</p>
            <p className="text-5xl font-bold mt-3">87</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400">Churn Rate</p>
            <p className="text-5xl font-bold mt-3 text-orange-400">12.4%</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400">Revenue Saved</p>
            <p className="text-5xl font-bold mt-3 text-emerald-500">$8,450</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400">Sentiment Score</p>
            <p className="text-5xl font-bold mt-3">68/100</p>
          </div>
        </div>

        {/* Hazard Warning */}
        <div className="bg-red-950 border border-red-900 rounded-2xl p-6 mb-10">
          <p className="text-red-400 font-medium">⚠️ HAZARD WARNING</p>
          <p className="text-xl mt-2">Retention models detected major attrition spike in Month 3 cohort</p>
        </div>

        {/* AI Solution Feed */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-6">AI-Driven Solution Feed</h2>
          <div className="space-y-6">
            <div className="border border-zinc-700 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Month 3 Delivery Delays in South India</h3>
              <p className="text-emerald-400 mt-1">Potential Revenue Save: $4,200</p>
              <p className="text-gray-400 mt-4">Recommendation: Switch to Express shipping for Tier 2+ customers + offer free upgrade for Month 3 renewals.</p>
              <button className="mt-6 bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-xl font-medium">
                Deploy Tactical Fix
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
