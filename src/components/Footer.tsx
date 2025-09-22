import React from 'react';
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
          
          <div className="flex items-center text-gray-400">
            <span>作成者 </span>
            <Heart size={16} className="mx-1 text-red-500" fill="currentColor" />
            <span> 田中太郎</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 田中太郎. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;