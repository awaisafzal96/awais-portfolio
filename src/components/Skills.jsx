import React, { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
    const skillCategories = [
        {
            title: 'DevOps & Tools',
            skills: ['Git', 'GitHub', 'GitHub Actions', 'Docker & Kubernetes', 'Linux (basic commands, shell scripting)', 'CI/CD pipelines'],
        },
        {
            title: 'Cloud & Infrastructure',
            skills: ['AWS', 'Terraform (infrastructure setup) & Ansible'],
        },
        {
            title: 'Programming & Scripting',
            skills: ['Bash scripting', 'C++', 'Java', 'Python'],
        },
        {
            title: 'Other',
            skills: ['Problem-solving', 'Teamwork', 'Adaptability'],
        },
    ];

    return (
        <section ref={ref} id="skills" className="max-w-4xl mx-auto p-8 bg-opacity-20 bg-purple-800 rounded-xl mb-8 shadow-md opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-4xl font-bold text-center mb-6 text-pink-300">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category) => (
                    <div key={category.title} className="bg-opacity-50 bg-indigo-900 p-6 rounded-xl hover:bg-opacity-70 hover:-translate-y-2 transition-all duration-500 shadow-lg flex flex-col">
                        <h3 className="text-xl font-semibold mb-4 text-purple-300">{category.title}</h3>
                        <ul className="list-disc pl-5 flex-1 text-lg">
                            {category.skills.map((skill) => (
                                <li key={skill} className="hover:text-pink-300 transition-colors duration-300">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default Skills;