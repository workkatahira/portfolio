import React, { useState } from 'react';
import { Mail, MapPin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // メール送信のためのURLを作成
    const subject = encodeURIComponent(`【ポートフォリオからのお問い合わせ】${formData.subject}`);
    const body = encodeURIComponent(
      `お名前: ${formData.name}\nメールアドレス: ${formData.email}\n件名: ${formData.subject}\n\nメッセージ:\n${formData.message}\n\n---\nこのメールはポートフォリオサイト（https://workkatahira.github.io/portfolio/）から送信されました。`
    );
    
    // メールアプリを開く
    window.open(`mailto:katahira.work217@gmail.com?subject=${subject}&body=${body}`, '_blank');
    
    // 成功メッセージを表示
    alert('メールアプリが開きました。内容を確認して送信してください。');
    
    // フォームをリセット
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'メール',
      value: 'katahira.work217@gmail.com',
      link: 'mailto:katahira.work217@gmail.com'
    },
    {
      icon: <MapPin size={20} />,
      title: '所在地',
      value: '日本',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/workkatahira',
      color: 'hover:text-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">お問い合わせ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            次のプロジェクトについて話し合いませんか？一緒に機会を探求しましょう。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">お気軽にご連絡ください</h3>
            <p className="text-gray-600 mb-8 text-lg">
              PHP/Laravelを活用したWEBアプリケーション開発、システム設計、保守・運用など、
              新しいプロジェクトについてお聞かせいただくことに常に興味があります。お気軽にお声がけください！
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{info.title}</p>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">直接メール</h4>
              <a 
                href="mailto:katahira.work217@gmail.com?subject=【ポートフォリオからのお問い合わせ】"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Mail size={20} className="mr-2" />
                直接メールを送信
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">SNS</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors p-2 rounded-lg hover:bg-gray-100`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="yamada@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="プロジェクトについて"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="プロジェクトについて詳しく教えてください..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                メッセージを送信
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;