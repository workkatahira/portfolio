
const Skills = () => {
  const skillCategories = [
    {
      title: 'プログラミング言語',
      skills: [
        { name: 'PHP 8.0', level: 90 },
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'フレームワーク・DB',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Linux', level: 80 }
      ]
    },
    {
      title: 'インフラ・ツール',
      skills: [
        { name: 'AWS EC2', level: 80 },
        { name: 'AWS S3', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'BackLog', level: 85 },
        { name: 'Git', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">スキル・専門知識</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            技術スキルと習熟度の包括的な概要
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;