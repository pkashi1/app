import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Hammer, Radiation as Foundation, Shield, Gauge, Target, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const benefits = [
  {
    icon: Foundation,
    title: 'Deep Foundation Expertise',
    description: 'Specialized knowledge in deep foundation systems and soil stabilization techniques.'
  },
  {
    icon: Shield,
    title: 'Structural Integrity',
    description: 'Ensuring maximum load-bearing capacity and long-term structural stability.'
  },
  {
    icon: Target,
    title: 'Precision Installation',
    description: 'GPS-guided equipment for accurate pile placement and alignment.'
  },
  {
    icon: Gauge,
    title: 'Load Testing',
    description: 'Comprehensive load testing to verify pile capacity and performance.'
  }
];

const pileTypes = [
  {
    icon: Hammer,
    title: 'Driven Piles',
    description: 'Steel, concrete, and timber piles driven to required depth and capacity.',
    features: ['Steel H-piles', 'Precast concrete piles', 'Timber piles', 'Pipe piles']
  },
  {
    icon: Foundation,
    title: 'Drilled Shafts',
    description: 'Large diameter drilled piers for heavy load applications.',
    features: ['Caisson installation', 'Rock socketing', 'Reinforcement placement', 'Concrete placement']
  },
  {
    icon: Wrench,
    title: 'Specialty Piles',
    description: 'Custom pile solutions for unique soil conditions and load requirements.',
    features: ['Helical piles', 'Micropiles', 'Composite piles', 'Tension piles']
  }
];

const applications = [
  'Bridge foundations',
  'Building foundations',
  'Marine structures',
  'Industrial facilities',
  'Transmission towers',
  'Retaining walls',
  'Slope stabilization',
  'Underpinning projects'
];

const process = [
  {
    step: '01',
    title: 'Geotechnical Analysis',
    description: 'Comprehensive soil analysis and foundation design recommendations.'
  },
  {
    step: '02',
    title: 'Pile Design & Engineering',
    description: 'Custom pile design based on load requirements and soil conditions.'
  },
  {
    step: '03',
    title: 'Site Preparation',
    description: 'Site access, equipment mobilization, and safety setup.'
  },
  {
    step: '04',
    title: 'Pile Installation',
    description: 'Precision pile installation using appropriate methods and equipment.'
  },
  {
    step: '05',
    title: 'Quality Control Testing',
    description: 'Load testing and integrity testing to verify pile performance.'
  },
  {
    step: '06',
    title: 'Documentation & Certification',
    description: 'Complete installation records and engineering certification.'
  }
];

export default function PileInstallationPage() {
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
            <span className="text-foreground">Pile Installation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="bg-construction-500 text-white mb-4">Foundation Solutions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pile Installation
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Deep foundation solutions and pile installation for structural support and stability. 
                Our expertise ensures reliable foundations that stand the test of time and environmental conditions.
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
                src="/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg"
                alt="Pile installation equipment and foundation work"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pile Types */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pile Installation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive pile installation solutions for all foundation requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pileTypes.map((type, index) => (
              <Card key={type.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-construction-500" />
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
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

      {/* Installation Process */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring optimal foundation performance and structural integrity
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

      {/* Applications */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pile Installation Applications
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our pile installation services support a wide range of construction projects, from residential 
                foundations to major infrastructure developments. We provide custom solutions for challenging 
                soil conditions and heavy load requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div key={application} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CheckCircle className="h-4 w-4 text-construction-500 flex-shrink-0" />
                    <span className="text-sm">{application}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pile Diameter Range:</span>
                    <span className="font-medium">8" - 120"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Maximum Depth:</span>
                    <span className="font-medium">200+ feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Load Capacity:</span>
                    <span className="font-medium">Up to 5,000 tons</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Soil Types:</span>
                    <span className="font-medium">All conditions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Testing Methods:</span>
                    <span className="font-medium">Static & dynamic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Pile Installation Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of working with deep foundation specialists
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

      {/* Equipment & Technology */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced Pile Installation Equipment
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our modern fleet of pile installation equipment ensures efficient, precise installations 
                while maintaining the highest safety standards and quality control measures.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Hydraulic Pile Drivers</h4>
                    <p className="text-sm text-muted-foreground">High-capacity hydraulic hammers for efficient pile driving</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Drilling Rigs</h4>
                    <p className="text-sm text-muted-foreground">Large diameter drilling equipment for drilled shafts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Load Testing Equipment</h4>
                    <p className="text-sm text-muted-foreground">Static and dynamic load testing systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Quality Control Systems</h4>
                    <p className="text-sm text-muted-foreground">Real-time monitoring and documentation systems</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg"
                alt="Pile installation equipment and machinery"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Deep Foundation Solutions?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our pile installation specialists for expert foundation design and installation services.
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