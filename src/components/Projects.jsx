import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
    const projects = [
        {
            title: 'Portfolio Website with GitHub Actions',
            technologies: 'Git, GitHub, GitHub Actions',
            duration: 'JUNE-JULY 2025',
            overview: 'Developed a personal portfolio website hosted on GitHub Pages with automated CI/CD using GitHub Actions. The workflow includes linting, building, and deploying the site.',
            challenges: 'Automated deployment and ensured consistent styling across browsers.',
            github: 'https://github.com/yourusername/portfolio',
        },
        {
            title: 'Dockerized Web Sites',
            technologies: 'Docker',
            duration: 'JULY 2025',
            overview: 'Built and deployed a web application using Docker containers to ensure consistent environments across development and production.',
            challenges: 'Optimized Docker images for faster builds and deployments.',
            github: 'https://github.com/yourusername/docker-project',
        },
        {
            title: 'Kubernetes Cluster Management',
            technologies: 'Kubernetes, Docker',
            duration: 'AUGUST-SEP 2025',
            overview: 'Set up a Kubernetes cluster to manage containerized applications, implementing scaling and load balancing.',
            challenges: 'Ensured high availability and efficient resource utilization.',
            github: 'https://github.com/yourusername/kubernetes-project',
        },
        {
            title: 'AWS Infrastructure Setup',
            technologies: 'AWS (EC2, S3, IAM)',
            duration: 'SEP 2025',
            overview: 'Configured AWS infrastructure for a web application, including EC2 instances, S3 storage, and IAM roles.',
            challenges: 'Secured infrastructure with proper IAM policies and networking.',
            github: 'https://github.com/yourusername/aws-project',
        },
        {
            title: 'Terraform Infrastructure as Code',
            technologies: 'Terraform, AWS',
            duration: 'SEP-OCT 2025',
            overview: 'Used Terraform to define and provision cloud infrastructure on AWS, enabling reproducible and scalable deployments.',
            challenges: 'Managed state files and modularized Terraform code for reusability.',
            github: 'https://github.com/yourusername/terraform-project',
        },
    ];

    return (
        <section ref={ref} id="projects" className="max-w-4xl mx-auto p-8 bg-opacity-20 bg-purple-800 rounded-xl mb-8 shadow-md opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-4xl font-bold text-center mb-6 text-pink-300">Projects</h2>
            {projects.map((project) => (
                <article key={project.title} className="bg-opacity-50 bg-indigo-900 p-6 rounded-xl mb-6 hover:bg-opacity-70 hover:-translate-y-2 transition-all duration-500 shadow-lg">
                    <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
                    <p><strong className="text-pink-300">Technologies:</strong> {project.technologies}</p>
                    <p><strong className="text-pink-300">Duration:</strong> {project.duration}</p>
                    <p><strong className="text-pink-300">Overview:</strong> {project.overview}</p>
                    <p><strong className="text-pink-300">Challenges Solved:</strong> {project.challenges}</p>
                    <p><a href={project.github} className="text-blue-300 hover:text-blue-100 transition-colors duration-300">View on GitHub</a></p>
                </article>
            ))}
        </section>
    );
});

export default Projects;