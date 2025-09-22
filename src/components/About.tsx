import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'フロントエンド開発',
      description: 'React, TypeScript, Next.js'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'バックエンド開発',
      description: 'Node.js, Python, PostgreSQL'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'クラウド・DevOps',
      description: 'AWS, Docker, CI/CD'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'モバイル開発',
      description: 'React Native, Flutter'
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
            スケーラブルなWebアプリケーションとモバイルソリューションの構築において5年以上の経験を持つ、情熱的なソフトウェアエンジニアです。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                フルスタック開発の強固な基盤を持ち、実世界の問題を解決するユーザー中心のアプリケーション作成を専門としています。
                スタートアップから企業レベルのプロジェクトまで幅広い経験があり、常に高品質なソリューションを提供してきました。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                特に最新のWeb技術、クリーンコードの実践、継続的な学習に情熱を注いでいます。
                コーディング以外の時間は、オープンソースプロジェクトへの貢献や新技術の探求に取り組んでいます。
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