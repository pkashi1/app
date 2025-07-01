import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Droplets, Filter, Recycle, Gauge, Shield, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const benefits = [
  {
    icon: Shield,
    title: 'Environmental Compliance',
    description: 'All systems designed to meet or exceed EPA and state environmental regulations.'
  },
  {
    icon: Gauge,
    title: 'Efficient Operations',
    description: 'Optimized treatment processes for maximum efficiency and cost-effectiveness.'
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'Tailored treatment systems designed for specific community and industrial needs.'
  },
  {
    icon: Recycle,
    title: 'Sustainable Design',
    description: 'Environmentally responsible solutions with resource recovery capabilities.'
  }
];

const services = [
  {
    icon: Droplets,
    title: 'Water Treatment Plants',
    description: 'Complete water treatment facility design and construction for municipal and industrial use.',
    features: ['Filtration systems', 'Chemical treatment', 'Distribution systems', 'Quality monitoring']
  },
  {
    icon: Filter,
    title: 'Wastewater Treatment',
    description: 'Advanced wastewater treatment systems for communities and industrial facilities.',
    features: ['Primary treatment', 'Secondary treatment', 'Tertiary treatment', 'Sludge management']
  },
  {
    icon: Recycle,
    title: 'System Upgrades',
    description: 'Modernization and expansion of existing water and wastewater treatment facilities.',
    features: ['Capacity expansion', 'Technology upgrades', 'Efficiency improvements', 'Compliance updates']
  }
];

const process = [
  {
    step: '01',
    title: 'Needs Assessment',
    description: 'Comprehensive evaluation of water quality, flow rates, and treatment requirements.'
  },
  {
    step: '02',
    title: 'System Design',
    description: 'Custom treatment system design based on specific requirements and regulations.'
  },
  {
    step: '03',
    title: 'Permitting & Approval',
    description: 'Obtaining all necessary environmental permits and regulatory approvals.'
  },
  {
    step: '04',
    title: 'Construction & Installation',
    description: 'Professional construction and installation of treatment systems and equipment.'
  },
  {
    step: '05',
    title: 'Testing & Commissioning',
    description: 'Comprehensive testing and system commissioning to ensure optimal performance.'
  },
  {
    step: '06',
    title: 'Training & Support',
    description: 'Operator training and ongoing technical support for system operations.'
  }
];

const applications = [
  'Municipal water treatment',
  'Industrial wastewater treatment',
  'Groundwater remediation',
  'Stormwater management',
  'Agricultural water systems',
  'Recreational water facilities',
  'Emergency water treatment',
  'Water reuse systems'
];

export default function WaterSewerTreatmentPage() {
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
            <span className="text-foreground">Water & Sewer Treatment</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="bg-construction-500 text-white mb-4">Environmental Solutions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Water & Sewer Treatment
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Design and construction of water and wastewater treatment facilities. 
                We deliver environmentally responsible solutions that protect public health and natural resources.
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
                alt="Water treatment facility construction"
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
              Water & Sewer Treatment Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive treatment solutions for clean water supply and environmental protection
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

      {/* Treatment Process */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Treatment Facility Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach from initial assessment to operational facility
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
                Treatment Applications
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our water and sewer treatment expertise serves diverse applications, from municipal water 
                systems to specialized industrial treatment requirements. We design solutions that meet 
                specific quality standards and regulatory requirements.
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
                <h3 className="text-xl font-semibold text-foreground mb-4">Treatment Capabilities</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Flow Capacity:</span>
                    <span className="font-medium">0.1 - 50 MGD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Treatment Types:</span>
                    <span className="font-medium">Physical, Chemical, Biological</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Compliance:</span>
                    <span className="font-medium">EPA, State regulations</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Automation Level:</span>
                    <span className="font-medium">Full SCADA integration</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Efficiency:</span>
                    <span className="font-medium">99%+ removal rates</span>
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
              Why Choose Our Treatment Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of working with water treatment specialists
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

      {/* Technology & Innovation */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced Treatment Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We incorporate the latest treatment technologies and automation systems to deliver 
                efficient, reliable, and cost-effective water and wastewater treatment solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Membrane Bioreactors (MBR)</h4>
                    <p className="text-sm text-muted-foreground">Advanced biological treatment with membrane filtration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">SCADA Control Systems</h4>
                    <p className="text-sm text-muted-foreground">Automated monitoring and control for optimal performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Energy Recovery Systems</h4>
                    <p className="text-sm text-muted-foreground">Sustainable design with energy recovery capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Remote Monitoring</h4>
                    <p className="text-sm text-muted-foreground">24/7 remote monitoring and diagnostic capabilities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg"
                alt="Water treatment technology and equipment"
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
            Ready to Develop Your Treatment Facility?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our water treatment specialists for comprehensive facility design and construction services.
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