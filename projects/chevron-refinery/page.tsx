import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Calendar, DollarSign, Users, CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projectDetails = {
  title: 'Chevron Refinery Expansion',
  location: 'Geismar, Louisiana',
  completedDate: 'December 2023',
  duration: '8 months',
  projectValue: '$2.5 Million',
  client: 'Chevron Corporation',
  category: 'Industrial',
  services: ['Directional Boring', 'Utility Installation', 'Civil Construction']
};

const challenges = [
  {
    title: 'Active Facility Operations',
    description: 'Working within an operational refinery required strict safety protocols and minimal disruption to ongoing operations.',
    solution: 'Implemented phased construction approach with 24/7 safety monitoring and coordination with facility operations.'
  },
  {
    title: 'Complex Utility Networks',
    description: 'Existing underground utilities created a complex maze requiring precise navigation and protection.',
    solution: 'Used advanced utility locating technology and 3D mapping to safely navigate around existing infrastructure.'
  },
  {
    title: 'Environmental Compliance',
    description: 'Strict environmental regulations required specialized handling and containment procedures.',
    solution: 'Deployed certified environmental specialists and implemented comprehensive containment systems.'
  }
];

const timeline = [
  {
    phase: 'Phase 1',
    duration: '2 months',
    title: 'Planning & Preparation',
    description: 'Site surveys, permit acquisition, and safety protocol development.'
  },
  {
    phase: 'Phase 2',
    duration: '3 months',
    title: 'Directional Boring',
    description: 'Installation of new utility lines using precision directional boring techniques.'
  },
  {
    phase: 'Phase 3',
    duration: '2 months',
    title: 'Utility Connections',
    description: 'Connection of new utilities to existing systems and testing.'
  },
  {
    phase: 'Phase 4',
    duration: '1 month',
    title: 'Final Testing & Commissioning',
    description: 'Comprehensive testing and system commissioning with client approval.'
  }
];

const results = [
  {
    metric: '100%',
    label: 'Safety Record',
    description: 'Zero incidents throughout the project'
  },
  {
    metric: '15%',
    label: 'Under Budget',
    description: 'Delivered significant cost savings'
  },
  {
    metric: '2 weeks',
    label: 'Ahead of Schedule',
    description: 'Early completion despite complexity'
  },
  {
    metric: '99.9%',
    label: 'System Reliability',
    description: 'Exceptional performance standards'
  }
];

const relatedProjects = [
  {
    title: 'Industrial Water Treatment Facility',
    location: 'Baton Rouge, LA',
    category: 'Industrial',
    href: '/projects/water-treatment-facility'
  },
  {
    title: 'Downtown Zachary Revitalization',
    location: 'Zachary, LA',
    category: 'Municipal',
    href: '/projects/zachary-downtown'
  },
  {
    title: 'National Utility Upgrade',
    location: 'Multi-State',
    category: 'Telecommunications',
    href: '/projects/national-utility'
  }
];

export default function ChevronRefineryProject() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-muted/50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-construction-500">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/projects" className="text-muted-foreground hover:text-construction-500">Projects</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Chevron Refinery Expansion</span>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <section className="py-4 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="text-construction-500 hover:text-construction-600">
            <Link href="/projects" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Project Hero */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="bg-construction-500 text-white mb-4">{projectDetails.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {projectDetails.title}
              </h1>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-construction-400" />
                  <span>{projectDetails.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-construction-400" />
                  <span>{projectDetails.completedDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-construction-400" />
                  <span>{projectDetails.projectValue}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-construction-400" />
                  <span>{projectDetails.client}</span>
                </div>
              </div>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Major infrastructure upgrade including utility installation and civil construction for refinery expansion project. 
                This complex project required advanced directional boring techniques and precise coordination with ongoing operations.
              </p>
            </div>
            <div className="animate-fade-in">
              <img
                src="/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg"
                alt="Chevron Refinery Project"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Chevron Refinery Expansion project represented one of our most complex and significant industrial 
                  infrastructure undertakings. Working within an active petroleum refinery, our team successfully 
                  installed critical utility infrastructure to support a major facility expansion while maintaining 
                  the highest safety standards and operational continuity.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The project scope included the installation of new water, electrical, and process utility lines 
                  using advanced directional boring techniques. This approach minimized surface disruption and 
                  allowed the refinery to continue operations throughout the construction period.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team coordinated closely with Chevron's engineering and operations staff to ensure all work 
                  met the stringent safety and quality requirements of the petroleum industry. The successful 
                  completion of this project has enabled Chevron to increase their refining capacity while 
                  maintaining their commitment to environmental stewardship.
                </p>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Project Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{projectDetails.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Value:</span>
                    <span className="font-medium">{projectDetails.projectValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-medium">{projectDetails.client}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Services:</span>
                    <div className="mt-2 space-y-1">
                      {projectDetails.services.map((service) => (
                        <Badge key={service} variant="secondary" className="mr-2">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we overcame complex obstacles to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={challenge.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-construction-500 mb-2">Our Solution:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Systematic execution across four distinct phases
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-construction-500"></div>
            
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={phase.phase} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-construction-500 rounded-full border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-construction-500 text-white">{phase.phase}</Badge>
                          <span className="text-sm text-muted-foreground">{phase.duration}</span>
                        </div>
                        <CardTitle className="text-lg">{phase.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed">
                          {phase.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-construction-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Results
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Measurable outcomes demonstrating project success and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={result.metric} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {result.metric}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {result.label}
                </div>
                <div className="text-sm text-white/80">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardContent className="pt-8">
              <Award className="h-12 w-12 text-construction-500 mx-auto mb-6" />
              <blockquote className="text-xl text-muted-foreground mb-6 leading-relaxed">
                "Southern Underground delivered our refinery expansion project flawlessly. Their directional boring 
                expertise and project management were exceptional. The team maintained the highest safety standards 
                while working in our active facility, and completed the project ahead of schedule and under budget."
              </blockquote>
              <div className="border-t pt-6">
                <div className="font-semibold text-foreground">Sarah Williams</div>
                <div className="text-sm text-muted-foreground">Project Manager</div>
                <div className="text-sm text-construction-500">Chevron Corporation</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore other successful infrastructure projects we've completed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <Card key={project.title} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <Badge className="bg-construction-500 text-white w-fit">{project.category}</Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.href} className="flex items-center justify-center space-x-2">
                      <span>View Project</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Industrial Project?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your industrial infrastructure needs and get a detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white px-8 py-4">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}