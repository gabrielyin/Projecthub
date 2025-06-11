import Header from "@/components/header";
import ProjectCard, { Project } from "@/components/project-card";
import StatsOverview from "@/components/stats-overview";

// Sample data for demonstration
const projects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    email: 'contact@techstore.com',
    link: 'https://techstore.com',
    clientName: 'TechStore Inc.',
    description: 'Modern e-commerce platform with advanced inventory management and payment processing.',
    status: 'active',
    createdAt: '2024-01-15T10:00:00Z',
    socialLinks: {
      github: 'https://github.com/techstore/platform',
      twitter: 'https://twitter.com/techstore',
      website: 'https://techstore.com'
    }
  },
  {
    id: '2',
    name: 'Portfolio Website',
    email: 'hello@johndoe.design',
    link: 'https://johndoe.design',
    clientName: 'John Doe',
    description: 'Clean and minimal portfolio website showcasing creative work and client testimonials.',
    status: 'completed',
    createdAt: '2024-01-08T14:30:00Z',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      website: 'https://johndoe.design'
    }
  },
  {
    id: '3',
    name: 'SaaS Dashboard',
    email: 'dev@analytics.io',
    link: 'https://analytics.io/dashboard',
    clientName: 'Analytics.io',
    description: 'Real-time analytics dashboard with interactive charts and data visualization.',
    status: 'paused',
    createdAt: '2024-01-20T09:15:00Z',
    socialLinks: {
      github: 'https://github.com/analytics-io/dashboard',
      linkedin: 'https://linkedin.com/company/analytics-io'
    }
  },
  {
    id: '4',
    name: 'Restaurant Booking App',
    email: 'info@tastybites.com',
    link: 'https://app.tastybites.com',
    clientName: 'Tasty Bites Restaurant',
    description: 'Mobile-first booking application with real-time table availability and menu integration.',
    status: 'active',
    createdAt: '2024-01-25T16:45:00Z',
    socialLinks: {
      website: 'https://tastybites.com',
      twitter: 'https://twitter.com/tastybites'
    }
  },
  {
    id: '5',
    name: 'Learning Management System',
    email: 'support@eduplatform.edu',
    link: 'https://learn.eduplatform.edu',
    clientName: 'EduPlatform',
    description: 'Comprehensive LMS with course management, student tracking, and interactive assessments.',
    status: 'completed',
    createdAt: '2023-12-10T11:20:00Z',
    socialLinks: {
      github: 'https://github.com/eduplatform/lms',
      linkedin: 'https://linkedin.com/company/eduplatform',
      website: 'https://eduplatform.edu'
    }
  },
  {
    id: '6',
    name: 'Fitness Tracker App',
    email: 'hello@fittrack.app',
    link: 'https://fittrack.app',
    clientName: 'FitTrack Startup',
    description: 'Social fitness tracking app with workout plans, progress monitoring, and community features.',
    status: 'active',
    createdAt: '2024-02-01T13:10:00Z',
    socialLinks: {
      github: 'https://github.com/fittrack/mobile-app',
      twitter: 'https://twitter.com/fittrackapp',
      website: 'https://fittrack.app'
    }
  }
];

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back
              </h2>
              <p className="text-gray-600">Manage and track your web development projects in one place.</p>
            </div>

            {/* Stats Overview */}
            <StatsOverview projects={projects} />

            {/* Projects Grid */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Your Projects</h3>
                <div className="text-sm text-gray-500">
                  {projects.length} {projects.length === 1 ? 'project' : 'projects'} total
                </div>
              </div>

              {projects.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                  <p className="text-gray-500 mb-4">Get started by adding your first web development project.</p>
                  <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Add Your First Project
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="cursor-pointer">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>

          {/* Add Project Modal */}
          {/* <AddProjectModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddProject}
          /> */}
        </div>
    )
}