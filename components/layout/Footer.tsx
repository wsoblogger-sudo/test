import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/20 bg-black/50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center">
                <span className="text-xl font-bold text-white">AI</span>
              </div>
              <span className="text-lg font-bold text-white">AIPROFITGEN</span>
            </div>
            <p className="text-gray-400 text-sm">
              Automated Money Making Software. Professional AI-powered income systems.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Software</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/software/cashflow-tools" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Cashflow Tools
                </Link>
              </li>
              <li>
                <Link href="/software/usdtrex-pro" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  USDTRex Pro
                </Link>
              </li>
              <li>
                <Link href="/software/ethercraft-pro" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Ethercraft Pro
                </Link>
              </li>
              <li>
                <Link href="/software/banking-botnet" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Banking BotNet
                </Link>
              </li>
              <li>
                <Link href="/software/arbitrage-trading-robot" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Arbitrage Trading Robot
                </Link>
              </li>
              <li>
                <Link href="/software/aiprofitgen-x" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  AiProfitgen X
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/risk-notice" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Risk Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} AIPROFITGEN. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right max-w-2xl">
              Software-based automation tools. No guarantees of profit. Trading and cryptocurrency involve risk. 
              Users are responsible for their own decisions and results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
