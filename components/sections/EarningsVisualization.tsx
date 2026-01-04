import StatCard from '../ui/StatCard';

export default function EarningsVisualization() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Platform Performance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time metrics from our automated systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            title="Active Automations" 
            value="15,847" 
            trend="up"
            animated 
          />
          <StatCard 
            title="Total Transactions" 
            value="2.4M" 
            suffix="+"
            trend="up"
            animated 
          />
          <StatCard 
            title="Average Efficiency" 
            value="94.2" 
            suffix="%"
            trend="up"
            animated 
          />
          <StatCard 
            title="Uptime" 
            value="99.99" 
            suffix="%"
            trend="neutral"
            animated 
          />
        </div>

        <div className="glass rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">System Activity</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-gray-400">Live</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Arbitrage Detection', value: 87, color: 'purple' },
              { label: 'Trade Execution', value: 92, color: 'cyan' },
              { label: 'Risk Management', value: 95, color: 'green' },
              { label: 'Portfolio Optimization', value: 88, color: 'blue' },
            ].map((metric) => (
              <div key={metric.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">{metric.label}</span>
                  <span className="text-sm text-white font-semibold">{metric.value}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-600 rounded-full transition-all duration-1000`}
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Metrics displayed are system performance indicators and do not represent individual user results. 
            Trading performance varies based on market conditions, strategy selection, and risk parameters.
          </p>
        </div>
      </div>
    </section>
  );
}
