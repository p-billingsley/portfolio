import { useState } from 'react'
import { ExternalLink, Play, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  rationale: string
  outcomes: string[]
  tags: string[]
  thumbnail: string
  videoUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Music Streaming Trending Reports',
    subtitle: 'Analytics Dashboard for Apple Music and Spotify Streaming Trends',
    description:
      'A comprehensive dashboard designed to help users visualize bulk data returned from nightly injestions through partner APIs, track investments, and manage budgets with intuitive data visualizations.',
    rationale:
      'Users struggled with existing tools that presented data in overwhelming, cluttered interfaces. I focused on progressive disclosure—showing key metrics upfront while allowing deep dives into detailed analytics.',
    outcomes: [
      'Reduced time-to-insight by 60%',
      'Increased daily active users by 45%',
      'NPS score improved from 32 to 67',
    ],
    tags: ['React', 'TypeScript', 'D3.js', 'Figma'],
    thumbnail: './projects/trending-preview.png',
    videoUrl: './projects/trending-preview.png',
    liveUrl: './projects/CCD-Baby-Trending-and-Analytics.webm',
  },
  {
    id: 'project-2',
    title: 'CollabSpace',
    subtitle: 'Real-time Collaboration Tool',
    description:
      'A multiplayer whiteboard application enabling distributed teams to brainstorm, sketch, and organize ideas together in real-time.',
    rationale:
      'Remote teams needed a tool that felt as natural as in-person whiteboarding. I prioritized low-latency interactions and a minimal UI that stays out of the way during creative sessions.',
    outcomes: [
      'Adopted by 200+ enterprise teams',
      'Average session length of 47 minutes',
      '4.8/5 user satisfaction rating',
    ],
    tags: ['Next.js', 'WebSocket', 'Canvas API', 'Tailwind'],
    thumbnail: './projects/collabspace.jpg',
    videoUrl: './projects/CD-Baby-Trending-and-Analytics.webm',
    liveUrl: '#',
  },
  {
    id: 'project-3',
    title: 'HealthHub Mobile',
    subtitle: 'Healthcare Patient Portal',
    description:
      'A patient-facing mobile app that simplifies appointment scheduling, prescription management, and secure messaging with healthcare providers.',
    rationale:
      'Healthcare apps often overwhelm patients with medical jargon and complex flows. I designed for accessibility and clarity, ensuring users of all ages and technical abilities could navigate confidently.',
    outcomes: [
      'WCAG 2.1 AA compliant',
      '89% task completion rate',
      'Reduced support calls by 35%',
    ],
    tags: ['React Native', 'TypeScript', 'Accessibility', 'User Testing'],
    thumbnail: '/projects/healthhub.jpg',
    videoUrl: '',
    liveUrl: '#',
  },
  {
    id: 'project-4',
    title: 'DevFlow',
    subtitle: 'Developer Productivity Suite',
    description:
      'An integrated development environment extension that streamlines code review workflows and automates repetitive documentation tasks.',
    rationale:
      'Developers lose significant time context-switching between tools. I designed a unified interface that keeps essential information visible while maintaining focus on the code.',
    outcomes: [
      '10,000+ marketplace installs',
      'Featured by VS Code team',
      'Saved avg 2.5 hours/week per user',
    ],
    tags: ['VS Code API', 'TypeScript', 'Node.js', 'Design Systems'],
    thumbnail: '/projects/devflow.jpg',
    videoUrl: '',
    liveUrl: '#',
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-6 mb-16">
          <div className="space-y-2">
            <p className="font-mono text-xs text-accent tracking-widest uppercase">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
              Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A collection of projects showcasing my approach to solving design challenges 
            through research, iteration, and thoughtful implementation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) {
  return (
    <article
      className="group relative bg-card border border-border hover:border-accent/50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {/* Project Number */}
      <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Thumbnail */}
      <div className="relative aspect-video bg-secondary overflow-hidden">
        <img
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        {project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-accent flex items-center justify-center">
              <Play size={20} className="text-accent-foreground ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <p className="font-mono text-xs text-accent mb-1">{project.subtitle}</p>
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-mono text-xs bg-secondary text-secondary-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-10 p-2 bg-background border border-border hover:border-accent transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Media Section */}
        <div className="relative aspect-video bg-secondary">
          {showVideo && project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <img
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
              />
              {project.videoUrl && (
                <button
                  className="absolute inset-0 flex items-center justify-center bg-background/30 hover:bg-background/50 transition-colors"
                  onClick={() => setShowVideo(true)}
                  aria-label="Play video walkthrough"
                >
                  <div className="w-16 h-16 bg-accent flex items-center justify-center">
                    <Play size={28} className="text-accent-foreground ml-1" />
                  </div>
                </button>
              )}
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <p className="font-mono text-xs text-accent tracking-widest uppercase">
              {project.subtitle}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {project.title}
            </h3>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="font-mono text-xs border-border"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-foreground tracking-widest uppercase">
              Overview
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Design Rationale */}
          <div className="space-y-4 p-6 bg-secondary/50 border-l-2 border-accent">
            <h4 className="font-mono text-xs text-foreground tracking-widest uppercase">
              Design Rationale
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.rationale}
            </p>
          </div>

          {/* Outcomes */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-foreground tracking-widest uppercase">
              Key Outcomes
            </h4>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          {project.liveUrl && (
            <div className="pt-4 border-t border-border">
              <Button asChild className="font-mono text-sm">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
