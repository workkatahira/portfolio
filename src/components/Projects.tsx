import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ECサイトプラットフォーム',
      description: 'React、Node.js、PostgreSQLで構築されたフルスタックECソリューション。ユーザー認証、決済処理、管理画面などの機能を実装。',
      image: 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'タスク管理アプリ',
      description: 'リアルタイム更新、チーム協働機能、高度なプロジェクト追跡機能を備えた協働型タスク管理アプリケーション。',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: '気象分析ダッシュボード',
      description: 'データ可視化、過去の傾向分析、機械学習を用いた予測モデリングを備えた包括的な気象分析プラットフォーム。',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'Chart.js', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">制作実績</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            技術スキルと問題解決能力を示すプロジェクトの選択
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    コード
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    デモサイト
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;