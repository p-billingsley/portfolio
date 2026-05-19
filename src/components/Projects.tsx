import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Play, ArrowLeft, ChevronLeft, ChevronRight, Pause } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  rationale: string
  outcomes: string[]
  tags: string[]
  thumbnail: string
  videoUrl?: string
  carouselImages?: string[]
  liveUrl?: string
  liveAnnotation?: string
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Music Streaming Trending Reports',
    subtitle: 'Self Service Analytics Dashboard for Artists and Labels',
    description:
      'A comprehensive frontend focused dashboard designed to help users visualize bulk data returned from nightly injestions through partner APIs. The dashboard features interactive animated charts and deeply customizable filters, to enable data-driven decision making for music industry professionals.',
    rationale:
    'Users were only able to gain access to this data through multiple logins at third party vendors, Apple Music, iTunes, Spotify, and Amazon Music. Users struggled with existing tools that presented data in overwhelming, inconsistent ways. I focused on progressive disclosure, showing key metrics upfront while allowing deep dives.  This was achieved through a combination of clean, modular design and interactive elements that let users explore the data at their own desired level and display as much or little as they wanted. The dashboard would remember user preferences from the last session to create a more efficient, personalized experience.  The mapping visualizations proved to be one of the most popular features receiving high praise from customers in feedback surveys, and I worked closely with the data team to optimize the underlying data structures and API endpoints to ensure fast load times and smooth interactions even with large datasets.  I optimized the charts rendering to use different fidelity levels based on screen size and zoom level while always supporting screen readers with hidden tabular data and accessible labels and controls.', 
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
    title: 'Social Media Monetization Funnel',
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
    thumbnail: './projects/title-overview-full.png',
    videoUrl: './projects/title-overview-w-mobile.mp4',
    liveUrl: 'https://cdbaby.com/',
    liveAnnotation: 'NOTE:The live version of this project is only visible with signup of a music title, but you can view a video walkthrough by clicking the thumbnail or play button.',
  },
  {
    id: 'project-4',
    title: 'Video Creator Promotion Funnel',
    subtitle: 'First stage interface for signing up for video creation and promotion services',
    description:
      'This sequence was designed as a teaser to attract users to new video creation and promotion services provided through a third party partner as a soft launch.  The design is optimized for engagement, using compelling visuals and clear calls to action.  This was initially promoted via email campaign and direct links. After launch the "Make One Now" function was activated and it was linked directly from the main dashboard to drive conversions.',
    rationale:
      'The opening animation shows an example of the product in action under both Spotify Canvas and Apple Music Motion Art platforms.  The call to action points to clear pricing structure and explanation of the service offerings, and the final screen provides a direct link to begin.  The subsequent screens which are not shown provide access to the artists\' current released music catalog to select a title or track to create a video for, and then an embed with creation tools to submit the necessary information and assets to complete the video creation process, checkout, and access the product.',
    outcomes: [
      '800% increase in user engagement with the video creation and promotion services within the first quarter of soft launch, as measured by click through rates.',
      'Achieved a 200% conversion rate uptick from the promotional funnel to actual service sign-ups within the first quarter after final launch , demonstrating the effectiveness of the teaser design in driving user interest and action.',
      '',
    ],
    tags: ['SCSS','Javascript', 'CSS Animation', 'ASP.NET MVC', 'Storybook Components', 'Design Systems'],
    thumbnail: './projects/video-creator.png',
    videoUrl: './projects/video-creator-2.mp4',
    liveUrl: 'https://cdbaby.com/',
    liveAnnotation: 'NOTE:The live version of this project is only visible with signup of a music title, but you can view a video walkthrough by clicking the thumbnail or play button.',
  },
    {
    id: 'project-5',
    title: 'Sign Up Onboarding Flow',
    subtitle: 'Initial customer experience creating an account',
    description:
      'This was a massive overhaul of the sign upflow for new customers to reduce friction in the account creation process as well as encourage product selection and checkout.  The previous process presented the prospective customer with a lenthy form and required the entry of personal bank account payment information before they could even start. This was an opportunity to clean up our 2fa system which had been built in the shadows wihout design UX considerations and user agreements which were sprinkled throughout the app and needed to be centralized.  In addition this area was modernized and added to our design system and component library to create a more cohesive experience and set the stage for future improvements to the onboarding process and welcome funnel.',
    rationale:
      'This design focuses on simplification, collecting only essentials needed to activate.  It presents a clear path to completion and deposits new users into a welcome funnel to choose their first release type along with explanation of add on features.  The happy path is optimized to place items in the cart for initial purchase, but the customer can opt out and self explore from the dashboard if they choose. The new design offers simplified agreements for acceptance to create an account and log in, and 2fa screens maintain a consistent look and feel with improved UX. There is an underlying tone of encoragement towards selecting items for purchase while always offering access to support resources via chat or help center.',
    outcomes: [
      '50% reduction in abandoned sign up flows within the first three months of launch, as users were able to complete the account creation process with less friction and confusion.',
      '15% increase in conversion from sign up to first purchase within the first quarter, as the new onboarding flow effectively guided users towards exploring and purchasing products after creating their account.',
      '23% increase in customer satisfaction scores related to the onboarding process within the first six months of launch, as users reported a more positive initial experience with the product and appreciated the clearer guidance and reduced friction.',
    ],
    tags: ['SCSS', 'Accessibility', 'Javascript', 'Storybook Components','ASP.NET MVC', 'Figma', 'Design Systems'],
    thumbnail: './projects/signup-1.png',
    carouselImages: [
      './projects/signup-1.png',
      './projects/signup-2.png',
      './projects/signup-3.png',
      './projects/signup-4.png',
      './projects/signup-5.png',
      './projects/signup-6.png',
      './projects/signup-7.png',
      './projects/signup-8.png',
      './projects/signup-9.png',
      './projects/signup-10.png',
    ],
    liveUrl: 'https://auth.cdbaby.com/Account/SignUp',
    liveAnnotation: 'This flow is visible by signing up for a new account on the live site.',
  },
]

export function Projects({ onProjectOpen }: { onProjectOpen: (id: string) => void }) {
  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => onProjectOpen(project.id)}
            />
          ))}
        </div>
      </div>
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
      <div className="absolute top-3 right-3 font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative bg-secondary overflow-hidden">
        <img
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover aspect-square"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors pointer-events-none" />
      </div>

      <div className="p-4 space-y-1.5">
        <p className="font-mono text-xs text-accent">{project.subtitle}</p>
        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1 leading-relaxed">
          {project.description}
        </p>
      </div>
    </article>
  )
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const shouldAdvance = isPlaying && !isHovered

  useEffect(() => {
    if (!shouldAdvance) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [shouldAdvance, images.length])

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  return (
    <div
      className="relative bg-secondary border border-border hover:border-accent/50 transition-colors group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={images[index]}
        alt={`${alt} – slide ${index + 1} of ${images.length}`}
        className="w-full object-contain"
      />

      {/* Prev arrow */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/70 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-accent/50 transition-all"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Next arrow */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/70 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-accent/50 transition-all"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight size={16} />
      </button>

      {/* Controls bar: play/pause + dots */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-3 bg-background/70 backdrop-blur-sm">
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="text-foreground hover:text-accent transition-colors flex-shrink-0"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying && !isHovered ? <Pause size={13} /> : <Play size={13} />}
        </button>
        <div className="flex gap-2 flex-wrap">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'w-1.5 h-1.5 transition-colors',
                i === index ? 'bg-accent' : 'bg-foreground/30 hover:bg-foreground/60'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectDetail({
  projectId,
  onBack,
}: {
  projectId: string
  onBack: () => void
}) {
  const [showVideo, setShowVideo] = useState(false)
  const project = projects.find((p) => p.id === projectId)
  if (!project) return null

  return (
    <section id={project.id} className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-10 font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </button>
        <div className="space-y-8">
        <div className="space-y-2 ">
            <p className="font-mono text-xs text-accent tracking-widest uppercase">
              {project.subtitle}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
              {project.title}
            </h3>
          </div>

        </div>


        <div className="mb-10 max-w-[600px] ml-[10px] float-right">
          {project.carouselImages?.length ? (
            <ImageCarousel images={project.carouselImages} alt={project.title} />
          ) : (
            <div className="relative bg-secondary border border-border hover:border-accent/50 transition-colors">
              {showVideo && project.videoUrl ? (
                <video src={project.videoUrl} controls autoPlay className="w-full aspect-square">
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    className="w-full object-cover aspect-square"
                  />
                  {project.videoUrl && (
                    <button
                      className="group absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors"
                      onClick={() => setShowVideo(true)}
                      aria-label="Play video walkthrough"
                    >
                      <div className="w-16 h-16 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play size={28} className="text-accent-foreground ml-1" />
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-foreground tracking-widest uppercase">
              Overview
            </h4>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {project.rationale && (
            <div className="space-y-4 p-6 bg-secondary/50 border-l-2 border-accent">
              <h4 className="font-mono text-xs text-foreground tracking-widest uppercase">
                Design Rationale
              </h4>
              <p className="text-muted-foreground leading-relaxed">{project.rationale}</p>
            </div>
          )}

          {project.outcomes.some((o) => o) && (
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-foreground tracking-widest uppercase">
                Key Outcomes
              </h4>
              <ul className="space-y-3">
                {project.outcomes.filter((o) => o).map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="font-mono text-xs border-border">
                {tag}
              </Badge>
            ))}
          </div>
          {project.liveUrl && (
            <div className="pt-4 border-t border-border">
              <Button asChild className="font-mono text-sm">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </Button>
              {project.liveAnnotation && (
                <p className="font-mono text-xs text-foreground mt-4">
                  {project.liveAnnotation}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
