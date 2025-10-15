import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'WEB開発エンジニア',
      company: '現在の企業（2社目）',
      location: '未公開',
      period: '2024年4月 - 現在',
      description: '企業向け年金関連Webシステムにおいて、老朽化した独自フレームワークからLaravelへの基盤更改を担当。既存機能の移行と改善を図りながら、アンケート機能・お知らせ機能といった付随機能の追加を通じてサービスの拡張性と利便性を向上させた。',
      achievements: [
        '独自フレームワークからLaravelへの移行対応',
        '企業情報・利用者の「登録／変更／削除／承認」機能の実装',
        'メール送信処理の作成・DBデータのCSV出力・取込機能の実装',
        '従業員向けアンケート機能の新規開発',
        'お知らせ配信・回答収集・集計表示機能の実装',
        'バッチ処理の新規追加・運用設計',
        '結合テストの実施・バグ修正・本番環境リリース後の運用・障害対応'
      ]
    },
    {
      title: 'テストエンジニア',
      company: '株式会社システナ（1社目）',
      location: '未公開',
      period: '新卒入社 - 2024年3月',
      description: 'ChatGPTを搭載したロボットの新機能に関する動作検証およびチャット機能のテストを担当。会話内容の正確性や自然さ、ジェスチャー・音声認識の精度など、ユーザー視点での品質確認を行った。',
      achievements: [
        'テスト項目の設計・実機による音声認識・会話内容の検証',
        '特定の質問に対する応答精度の確認',
        'ロボットのジェスチャーや動作反応のチェック',
        '不具合の報告・再現性確認（RedmineおよびExcelで管理）',
        '修正後の再テスト実施・開発チームとの連携・フィードバック共有',
        '自己学習によるPHP習得・開発スキル向上'
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