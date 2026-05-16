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
  liveAnnotation?: string
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Music Streaming Trending Reports',
    subtitle: 'Self Service Analytics Dashboard for Artists and Labels',
    description:
      'A comprehensive dashboard designed to help users visualize bulk data returned from nightly injestions through partner APIs. The dashboard features interactive animated charts and deeply customizable filters, to enable data-driven decision making for music industry professionals.',
    rationale:
      'Users were only able to gain access to this data through multiple logins at third party vendors, Apple Music, iTunes, Spotify, and Amazon Music. Users struggled with existing tools that presented data in overwhelming, inconsistent ways. I focused on progressive disclosure, showing key metrics upfront while allowing deep dives.  This was achieved through a combination of clean, modular design and interactive elements that let users explore the data at their own desired level and display as much or little as they wanted.',
    outcomes: [
      'Provided access to millions of data points updated nightly across 4 major streaming platforms in a single dashboard',
      'Customer satisfaction rating of 4.9/5 based on user feedback surveys with many users citing the easy to use interface and mapping visualizations as key benefits',
      'This project mainatined WCAG 2.1 AA accessibility compliance, ensuring that users with disabilities could also access and benefit from the insights provided by the dashboard.  This was achieved through careful attention to color contrast, keyboard navigation, and screen reader compatibility throughout the design and development process.',
    ],
    tags: ['JavaScript','SCSS','JQuery','ASP.NET MVC', 'AJAX','Chart.js','Leaflet', 'OpenStreetMap', 'Figma'],
    thumbnail: './projects/trending-preview.png',
    videoUrl: './projects/CD-Baby-Trending-and-Analytics.webm',
    liveUrl: 'https://cdbaby.com/',
    liveAnnotation: 'NOTE:The live version of this project is only visible with a paid release of a music title, but you can view a video walkthrough of the dashboard in action by clicking the thumbnail or play button.',
  },
  {
    id: 'project-2',
    title: 'CDB Social Media Monetization Funnel',
    subtitle: 'Interface for signing up for monetization service options',
    description:
      'A service selection interface that adapts to the user\'s experience level, surfacing help desk links and instructional videos for newcomers while keeping the path clear for veterans. Each offering is distinctly presented with its characteristics and relevant legal disclaimers, and the system is architected to accommodate new services as the catalog grows.',
    rationale:
      'Customer support was fielding a high volume of questions about monetization rejections and delays, often caused by partner discrepancy issues users had no visibility into. A more robust selection interface was needed: one that educated users at the point of decision, satisfied legal requirements by surfacing service-specific disclaimers, and was flexible enough to scale as new monetization offerings came online.',
    outcomes: [
      'Reduced customer support inquiries related to monetization service selection by 40% within the first three months of launch, as users were able to make informed decisions without needing to contact support for clarification.',
      'Achieved a 25% increase in successful monetization sign-ups within the first quarter, as users were better educated about the different service options and their unique characteristics.',
    ],
    tags: ['JavaScript','SCSS','JQuery','ASP.NET MVC', 'AJAX', 'Accessibility','Figma'],
    thumbnail: './projects/social-media-monetization.png',
    videoUrl: './projects/social-media-monetization.mp4',
    liveUrl: 'https://cdbaby.com/',
    liveAnnotation: 'NOTE:The live version of this project is only visible with signup of a music title, but you can view a video walkthrough by clicking the thumbnail or play button.',
  
  },
  {
    id: 'project-3',
    title: 'Title Overview',
    subtitle: 'Dashboard Modernization for album or single submission',
    description:
      'Control center for managing the submission process of a music release, providing real-time status updates, actionable insights, and direct access to support resources. The dashboard is designed to streamline the submission workflow, reduce user anxiety by providing clear next steps, and improve overall satisfaction with the release process.',
    rationale:
      'The design of the overall product purposely allows users to complete data entry in non-linear manner, skipping steps as needed, therefore  mechanism for easily identifying outstanding tasks was necessary. In addition, users were often confused about the status of their music release submissions, leading to a high volume of support inquiries and frustration. The dashboard was designed to provide transparency into the submission process, and offer clear guidance on next steps in a heriarchical manner using collapsing panels with alert icons to indicate sections and subsections with remaining tasks and links to the specific forms. ',

    outcomes: [
      'Reduced customer support inquiries related to submission status by 35% within the first two months of launch, as users were able to easily track their release progress and identify outstanding tasks without needing to contact support.',
      'Achieved a 20% increase in on-time release submissions within the first quarter, as users were better able to manage their submission timelines and stay informed about any issues that needed to be addressed.',
      'Improved user satisfaction scores by 25% within the first six months of launch, as the dashboard provided a more transparent and intuitive way to manage music release submissions.',
    ],
    tags: ['JavaScript','SCSS','JQuery','ASP.NET MVC','Accessibility','Component Library','Figma'],
    thumbnail: '/projects/title-overview-full.png',
    videoUrl: '/projects/title-overview-w-mobile.mp4',
    liveUrl: 'https://cdbaby.com/',
    liveAnnotation: 'NOTE:The live version of this project is only visible with signup of a music title, but you can view a video walkthrough by clicking the thumbnail or play button.',  },
  {
    id: 'project-4',
    title: 'Video Creator Promotion Funnel',
    subtitle: 'First stage interface for signing up for video creation and promotion services',
    description:
      'This is a placeholder description for the Video Creator Promotion Funnel project.',
    rationale:
      '',
    outcomes: [
      '',
      '',
      '',
    ],
    tags: ['VS Code API', 'TypeScript', 'Node.js', 'Design Systems'],
    thumbnail: '/projects/video-creator.png',
    videoUrl: '/projects/video-creator-2.mp4',
    liveUrl: 'https://cdbaby.com/',
    liveAnnotation: 'NOTE:The live version of this project is only visible with signup of a music title, but you can view a video walkthrough by clicking the thumbnail or play button.',
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
      <div className="relative aspect-auto bg-secondary overflow-hidden">
        <img
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors pointer-events-none" />
        {project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
        <div className="relative aspect-auto bg-secondary">
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
                  className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors"
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
              {project.liveAnnotation && (
                 <h4 className="font-mono text-xs text-foreground mt-4">
              {project.liveAnnotation}
            </h4> 
          )}
             
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
