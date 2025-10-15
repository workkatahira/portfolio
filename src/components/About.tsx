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
      title: 'Laravel移行・新規開発',
      description: '独自フレームワークからLaravel移行'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'インフラ・DevOps',
      description: 'Docker, AWS, Git'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'テスト・バッチ処理',
      description: '品質管理、バッチ処理設計'
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
            新卒未経験からスタートし、ChatGPT搭載ロボットのテスト業務を通じてPHPを習得。現在は企業向け年金関連WebシステムのLaravel移行と新規サービス開発に従事しているエンジニアです。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                企業向け年金関連Webシステムの基盤更改および新規サービス開発において、独自フレームワークからLaravelへの移行を中心に担当し、安定稼働と機能拡張を実現してきました。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                利用企業の登録・変更・承認機能の実装や通知メールの送信、DBからのCSV出力・取込機能の開発を行い、加えて従業員向けのアンケート・お知らせ配信機能やバッチ処理の設計・実装にも携わりました。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                開発にあたっては、コードの可読性と保守性を重視し、将来的な拡張やメンテナンスを考慮した実装を心掛けています。結合テストを通じて業務フロー全体の品質向上に貢献し、本番リリース後の運用・障害対応も経験しました。
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">Laravel移行</span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium shadow-sm">保守性重視</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium shadow-sm">品質向上</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium shadow-sm">課題解決力</span>
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