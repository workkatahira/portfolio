import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'PHP開発',
      description: 'PHP, Laravel, MySQL'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'WEBアプリ開発',
      description: '企業向けシステム開発'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'インフラ・DevOps',
      description: 'Docker, AWS, Git'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'テスト・保守',
      description: '品質管理、運用保守'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-emerald-50/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">自己紹介</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            新卒未経験からスタートし、テスト業務を通じてPHPを習得。現在は企業向けWEBアプリケーションの開発に従事しているエンジニアです。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                株式会社システナでテスト業務を経験し、自己学習でPHPを習得。現在の企業では、Docker、Git、AWSを活用した企業向けWEBアプリケーションの設計から保守まで幅広く担当しています。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                メインで扱っている言語はPHP、Laravelで、実用的で保守性の高いコードを書くことを心がけています。
                継続的な学習を通じて、より良いソリューションの提供を目指しています。
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">問題解決力</span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium shadow-sm">チームワーク</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium shadow-sm">学習意欲</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium shadow-sm">コミュニケーション</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{highlight.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;