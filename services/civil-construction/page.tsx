import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Building, Loader as Road, Grid as Bridge, MapPin, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const benefits = [
  {
    icon: Shield,
    title: 'Safety Excellence',
    description: 'Comprehensive safety protocols and OSHA compliance on every project site.'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensuring long-lasting, durable construction.'
  },
  {
    icon: Building,
    title: 'Expert Project Management',
    description: 'Experienced project managers coordinating all aspects of construction delivery.'
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Deep understanding of Louisiana regulations, soil conditions, and climate factors.'
  }
];

const services = [
  {
    icon: Road,
    title: 'Roadway Construction',
    description: 'Complete road construction from site preparation to final paving and striping.',
    features: ['Highway construction', 'Municipal streets', 'Parking lots', 'Access roads']
  },
  {
    icon: Bridge,
    title: 'Bridge & Infrastructure',
    description: 'Structural construction including bridges, overpasses, and major infrastructure.',
    features: ['Bridge construction', 'Culvert installation', 'Retaining walls', 'Drainage systems']
  },
  {
    icon: Building,
    title: 'Public Facilities',
    description: 'Construction of public buildings and community infrastructure projects.',
    features: ['Municipal buildings', 'Recreation facilities', 'Educational facilities', 'Emergency services']
  }
];

const process = [
  {
    step: '01',
    title: 'Project Planning & Design',
    description: 'Comprehensive planning phase including site analysis, engineering design, and permit acquisition.'
  },
  {
    step: '02',
    title: 'Site Preparation',
    description: 'Clearing, grading, and preparing the construction site according to specifications.'
  },
  {
    step: '03',
    title: 'Foundation & Infrastructure',
    description: 'Installing foundations, utilities, and core infrastructure systems.'
  },
  {
    step: '04',
    title: 'Structural Construction',
    description: 'Building the main structure using quality materials and proven construction methods.'
  },
  {
    step: '05',
    title: 'Finishing & Systems',
    description: 'Completing all finishing work, systems installation, and final inspections.'
  },
  {
    step: '06',
    title: 'Project Closeout',
    description: 'Final walkthrough, documentation delivery, and warranty activation.'
  }
];

const projectTypes = [
  {
    title: 'Highway & Transportation',
    description: 'Major highway construction and transportation infrastructure projects.',
    image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg',
    features: ['Interstate highways', 'State routes', 'Transportation hubs', 'Traffic management']
  },
  {
    title: 'Municipal Infrastructure',
    description: 'City and town infrastructure including streets, utilities, and public facilities.',
    image: '/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
    features: ['City streets', 'Public buildings', 'Parks & recreation', 'Emergency facilities']
  },
  {
    title: 'Industrial Construction',
    description: 'Heavy industrial construction for manufacturing and processing facilities.',
    image: '/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg',
    features: ['Manufacturing plants', 'Processing facilities', 'Industrial infrastructure', 'Heavy foundations']
  }
];

export default function CivilConstructionPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-muted/50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-construction-500">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/services" className="text-muted-foreground hover:text-construction-500">Services</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Civil Construction</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="bg-construction-500 text-white mb-4">Infrastructure Excellence</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Civil Construction
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Comprehensive civil construction services for roads, bridges, and public infrastructure. 
                We build the foundations that communities depend on with quality craftsmanship and proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white">
                  <Link href="/contact" className="flex items-center space-x-2">
                    <span>Request Quote</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="/fleur-dQf7RZhMOJU-unsplash.jpg"
                alt="Civil construction planning and blueprints"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Civil Construction Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building critical infrastructure that supports community growth and development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-construction-500" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-construction-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Types We Handle
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From highways to municipal facilities, we deliver comprehensive civil construction solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={project.title} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-construction-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Construction Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology ensuring quality delivery from concept to completion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card key={item.step} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-construction-500 text-white rounded-lg flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Civil Construction Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of working with Louisiana's premier civil construction specialists
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-construction-500" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced Construction Capabilities
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive capabilities and modern equipment fleet enable us to handle civil construction 
                projects of any size and complexity, from small municipal improvements to major infrastructure developments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Heavy Equipment Fleet</h4>
                    <p className="text-sm text-muted-foreground">Modern excavators, dozers, and specialized construction equipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Quality Materials</h4>
                    <p className="text-sm text-muted-foreground">Partnerships with trusted suppliers for premium construction materials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Skilled Workforce</h4>
                    <p className="text-sm text-muted-foreground">Experienced craftsmen and certified construction professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Project Management</h4>
                    <p className="text-sm text-muted-foreground">Advanced project management systems and real-time progress tracking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Project Capabilities</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Size Range:</span>
                    <span className="font-medium">$50K - $50M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Concurrent Projects:</span>
                    <span className="font-medium">Up to 15 active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service Area:</span>
                    <span className="font-medium">15 states nationwide</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certifications:</span>
                    <span className="font-medium">OSHA, DOT, EPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Safety Record:</span>
                    <span className="font-medium">99.9% incident-free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Infrastructure Project?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our civil construction experts for a comprehensive consultation and detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white px-8 py-4">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4">
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}