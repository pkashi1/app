import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Wrench, Zap, Droplets, Wifi, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const benefits = [
  {
    icon: Shield,
    title: 'Code Compliance',
    description: 'All installations meet or exceed local and national building codes and safety standards.'
  },
  {
    icon: Clock,
    title: 'Efficient Installation',
    description: 'Streamlined processes minimize disruption and reduce project timelines.'
  },
  {
    icon: Zap,
    title: 'Future-Ready Infrastructure',
    description: 'Designed with expansion capabilities and modern technology integration in mind.'
  },
  {
    icon: Wrench,
    title: 'Expert Craftsmanship',
    description: 'Skilled technicians with specialized training in utility installation best practices.'
  }
];

const services = [
  {
    icon: Droplets,
    title: 'Water & Sewer Systems',
    description: 'Complete water distribution and wastewater collection system installation.',
    features: ['Main line installation', 'Service connections', 'Pump stations', 'Manholes and access points']
  },
  {
    icon: Zap,
    title: 'Electrical Infrastructure',
    description: 'Underground electrical systems for residential, commercial, and industrial applications.',
    features: ['Primary distribution', 'Secondary networks', 'Street lighting', 'Traffic signal systems']
  },
  {
    icon: Wifi,
    title: 'Telecommunications',
    description: 'Fiber optic and communication infrastructure for modern connectivity needs.',
    features: ['Fiber optic networks', 'Cable TV systems', 'Internet infrastructure', 'Emergency communication']
  }
];

const process = [
  {
    step: '01',
    title: 'Site Assessment & Planning',
    description: 'Comprehensive evaluation of site conditions, existing utilities, and project requirements.'
  },
  {
    step: '02',
    title: 'Permit & Design',
    description: 'Obtain necessary permits and finalize detailed installation plans and specifications.'
  },
  {
    step: '03',
    title: 'Excavation & Preparation',
    description: 'Precise excavation using advanced equipment while protecting existing infrastructure.'
  },
  {
    step: '04',
    title: 'Installation & Connection',
    description: 'Professional installation of utilities with proper connections and testing protocols.'
  },
  {
    step: '05',
    title: 'Testing & Commissioning',
    description: 'Comprehensive testing to ensure all systems function properly and meet specifications.'
  },
  {
    step: '06',
    title: 'Restoration & Cleanup',
    description: 'Complete site restoration including landscaping and surface repairs.'
  }
];

const caseStudies = [
  {
    title: 'Downtown Zachary Water Main Upgrade',
    description: 'Replaced aging water infrastructure serving 200+ businesses while maintaining service.',
    results: ['Zero service interruptions', '40% improved water pressure', 'Completed 2 weeks ahead of schedule']
  },
  {
    title: 'Industrial Park Electrical Installation',
    description: 'Complete electrical infrastructure for new 50-acre industrial development.',
    results: ['15 MW capacity installation', '99.9% system reliability', 'LEED certification support']
  },
  {
    title: 'Fiber Network Expansion',
    description: 'Installed 25 miles of fiber optic cable connecting rural communities to high-speed internet.',
    results: ['1 Gbps service capability', 'Minimal surface disruption', '500+ homes connected']
  }
];

export default function UtilityInstallationPage() {
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
            <span className="text-foreground">Utility Installation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="bg-construction-500 text-white mb-4">Essential Infrastructure</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Utility Installation
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Complete utility infrastructure installation including water, sewer, electrical, and telecommunications systems. 
                We deliver reliable, code-compliant installations that support community growth and development.
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
                alt="Utility installation equipment and workers"
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
              Comprehensive Utility Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From water and sewer systems to electrical and telecommunications infrastructure
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

      {/* Installation Process */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring quality, safety, and minimal disruption
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Utility Installation Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with utility installation specialists
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

      {/* Case Studies */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects demonstrating our utility installation expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-foreground mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-construction-500 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
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
                Advanced Equipment & Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our modern fleet of specialized equipment ensures efficient, precise utility installations 
                while minimizing disruption to existing infrastructure and surrounding areas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Precision Excavation Equipment</h4>
                    <p className="text-sm text-muted-foreground">GPS-guided excavators for accurate trenching</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Utility Locating Technology</h4>
                    <p className="text-sm text-muted-foreground">Advanced detection systems to avoid existing utilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Quality Testing Equipment</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive testing tools for system verification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Safety Monitoring Systems</h4>
                    <p className="text-sm text-muted-foreground">Real-time safety monitoring and communication</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg"
                alt="Construction planning and equipment"
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
            Ready to Install Your Utility Infrastructure?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our utility installation specialists for a comprehensive consultation and detailed project quote.
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