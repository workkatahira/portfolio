import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            {/* Avatar */}
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl ring-4 ring-white/20">
              片平
            </div>
            
            {/* Name and title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-gray-900 mb-6 leading-tight">
              片平 遼介
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-600 mb-8 font-medium font-sans">
              PHP/Laravel エンジニア
            </p>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
              企業向けWEBアプリケーションの設計から保守まで幅広く対応しています。
              <br className="hidden sm:block" />
              PHP、Laravel、Docker、AWSを活用した開発を専門としています。
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#contact"
              className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              お問い合わせ
            </a>
            <a
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              履歴書ダウンロード
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-gray-600 transition-colors">
              <ArrowDown size={32} className="mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;