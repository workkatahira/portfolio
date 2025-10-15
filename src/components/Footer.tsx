import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">ポートフォリオ</h3>
            <p className="text-gray-400">一行のコードから未来を築く。</p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">自己紹介</a>
            <a href="#skills" className="hover:text-white transition-colors">スキル</a>
            <a href="#projects" className="hover:text-white transition-colors">制作実績</a>
            <a href="#experience" className="hover:text-white transition-colors">職歴</a>
            <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 片平遼介. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;