import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: '日程調整サービス開発',
      company: '業務委託（情報通信業）',
      location: 'リモート',
      period: '2025年8月 - 2025年12月',
      description: '日程調整サービス開発において、Next.js、React、TypeScriptを使用したフルスタック開発を担当。イベント作成から集計まで一貫した機能実装。',
      achievements: [
        'Next.js/React/TypeScriptを使用したフロントエンド開発',
        'UUID生成によるイベントURL管理機能の設計・実装',
        'リアルタイム集計機能の設計・実装',
        'レスポンシブ対応、UI/UX改善、アクセシビリティ対応',
        'Docker上での開発・テスト環境整備',
        'イベント作成・回答・集計機能の単独設計・実装'
      ]
    },
    {
      title: 'WEB開発エンジニア',
      company: '現在の企業',
      location: '未公開',
      period: '2023年6月 - 現在',
      description: '企業向け年金関連Webシステムにおいて、システム設計からプログラミング、単体・結合テストまで一貫して担当。独自フレームワークからLaravelへの基盤更改を主導し、新規サービス開発にも従事。',
      achievements: [
        '独自フレームワークからLaravelへの移行対応を単独で担当',
        '企業・ユーザー登録、変更、承認、削除機能の再設計・実装',
        'ログイン機能、通知メール送信、CSV出力などの業務基盤機能開発',
        '従業員向けアンケート機能の新規開発',
        'お知らせ配信、回答収集、集計表示機能の設計・実装',
        '新規バッチ処理の追加・運用設計',
        'パフォーマンス改善や負荷対策の設計・実装',
        '結合テスト・運用テストを通じた安定稼働の品質向上'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">職歴</h2>
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