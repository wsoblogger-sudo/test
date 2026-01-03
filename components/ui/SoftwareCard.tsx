import Button from './Button';

interface SoftwareCardProps {
  name: string;
  description: string;
  icon?: string;
  earnings?: string;
  href: string;
}

export default function SoftwareCard({ name, description, icon, earnings, href }: SoftwareCardProps) {
  return (
    <div className="glass glass-hover rounded-2xl p-6 group">
      <div className="mb-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="text-3xl">{icon || '🤖'}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      {earnings && (
        <div className="mb-4 p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Performance Indicator</span>
            <span className="text-green-400 text-sm font-semibold flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              {earnings}
            </span>
          </div>
        </div>
      )}

      <Button href={href} variant="primary" className="w-full">
        View Software
      </Button>
    </div>
  );
}
