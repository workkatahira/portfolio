import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'WEB開発エンジニア',
      company: '現在の企業',
      location: '未公開',
      period: '転職後 - 現在',
      description: 'Docker、Git、AWSを使用した企業向けWEBアプリケーションの設計から保守作業まで幅広く担当。PHP、Laravelをメインとした開発業務に従事。',
      achievements: [
        '企業向けWEBアプリケーションの設計・開発・保守',
        'Docker、AWSを活用したインフラ構築',
        'Gitを使用したチーム開発の推進',
        'システムの品質向上と運用効率化'
      ]
    },
    {
      title: 'テストエンジニア',
      company: '株式会社システナ',
      location: '未公開',
      period: '新卒入社 - 転職前',
      description: '新卒未経験で入社後、テスト業務をメインで担当。業務の傍ら自己学習でPHPを習得し、開発スキルを身につける。',
      achievements: [
        'テスト業務を通じた品質管理の経験',
        '自己学習によるPHP習得',
        '開発プロセス全体の理解',
        'チームワークとコミュニケーションスキルの向上'
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