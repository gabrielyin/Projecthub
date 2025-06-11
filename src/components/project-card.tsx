import { ExternalLink, Mail, Github, Twitter, Linkedin, Globe, Calendar, User } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  email: string;
  link: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  description?: string;
  status: 'active' | 'completed' | 'paused';
  createdAt: string;
  clientName?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    active: 'bg-green-100 text-green-800 border-green-200',
    completed: 'bg-blue-100 text-blue-800 border-blue-200',
    paused: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  const socialIcons = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
    website: Globe
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
              {project.name}
            </h3>
            {project.description && (
              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {project.description}
              </p>
            )}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>

        {/* Client Info */}
        {project.clientName && (
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <User className="w-4 h-4 mr-2" />
            <span>{project.clientName}</span>
          </div>
        )}

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-3 text-gray-400" />
            <a 
              href={`mailto:${project.email}`}
              className="hover:text-blue-600 transition-colors duration-200 truncate"
            >
              {project.email}
            </a>
          </div>
          
          {project.link && (
            <div className="flex items-center text-sm text-gray-600">
              <ExternalLink className="w-4 h-4 mr-3 text-gray-400" />
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-200 truncate"
              >
                {project.link.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>

        {/* Social Links */}
        {Object.keys(project.socialLinks).length > 0 && (
          <div className="flex items-center space-x-3 mb-4">
            {Object.entries(project.socialLinks).map(([platform, url]) => {
              if (!url) return null;
              const IconComponent = socialIcons[platform as keyof typeof socialIcons];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  title={`Visit ${platform}`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center text-xs text-gray-500 pt-4 border-t border-gray-100">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Created {new Date(project.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}