import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'シニアフルスタック開発者',
      company: '株式会社テックソリューションズ',
      location: '東京都',
      period: '2022年 - 現在',
      description: '10万人以上のユーザーにサービスを提供するスケーラブルなWebアプリケーションの開発をリード。マイクロサービスアーキテクチャを実装し、システムパフォーマンスを40%向上。',
      achievements: [
        'AWSを使用したクラウドネイティブソリューションの設計・デプロイ',
        'ジュニア開発者のメンタリングとコードレビュープロセスの確立',
        '最適化によりアプリケーションの読み込み時間を60%短縮'
      ]
    },
    {
      title: 'フルスタック開発者',
      company: '株式会社デジタルエージェンシー',
      location: '大阪府',
      period: '2020年 - 2022年',
      description: 'React、Node.js、クラウド技術を使用して企業クライアント向けのカスタムWebアプリケーションを開発。',
      achievements: [
        'コンセプトからデプロイまで15以上のクライアントプロジェクトを構築',
        '自動テストの実装によりバグを50%削減',
        'デザインチームと協力してUX/UIの改善を実施'
      ]
    },
    {
      title: 'フロントエンド開発者',
      company: 'スタートアップXYZ',
      location: 'リモート',
      period: '2019年 - 2020年',
      description: '成長中のフィンテックスタートアップにおいて、レスポンシブなユーザーインターフェースの作成とユーザーエクスペリエンスの向上に注力。',
      achievements: [
        'モバイルファーストのレスポンシブデザインを開発',
        '決済システムとセキュリティ機能の統合',
        'アジャイル開発プロセスに参加'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">職歴</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ソフトウェア開発・エンジニアリングにおける私の職業的な歩み
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-12">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">主な成果:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-600">
                            <span className="text-blue-600 mr-2 mt-1.5">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;