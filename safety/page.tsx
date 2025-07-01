import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, BookOpen, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const safetyPractices = [
  { icon: ShieldCheck, title: 'Comprehensive Safety Training', description: 'All employees receive OSHA-compliant training and regular refreshers on best practices.' },
  { icon: Award, title: 'Certified Equipment & Procedures', description: 'We use only certified machinery and follow strict procedural checklists on every job.' },
  { icon: BookOpen, title: 'Up-to-Date Safety Protocols', description: 'Protocols are reviewed quarterly to incorporate new regulations and insights.' },
  { icon: Clock, title: '24/7 Incident Response', description: 'Emergency response team available at all times to handle any on-site issues.' },
  { icon: Users, title: 'Safety Leadership', description: 'Dedicated Safety Director oversees compliance and continuous improvement across projects.' }
];

const safetyTimeline = [
  { year: '2015', milestone: 'Safety Program Launched', detail: 'Established core safety policies aligning with federal and state regulations.' },
  { year: '2017', milestone: 'OSHA 30 Certification', detail: 'All field supervisors completed OSHA 30-hour training.' },
  { year: '2019', milestone: 'Zero Lost-Time Incidents', detail: 'Achieved 12 consecutive months without a lost-time incident.' },
  { year: '2021', milestone: 'ISO 45001 Preparation', detail: 'Initiated gap analysis to pursue ISO 45001 Occupational Health & Safety certification.' },
  { year: '2023', milestone: 'Digital Safety Reporting', detail: 'Deployed mobile app for real-time hazard reporting and audit tracking.' }
];

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Safety First</h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">Our unwavering commitment to workplace safety and the health of our people</p>
        </div>
      </section>

      {/* Core Practices */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Safety Practices</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">We implement rigorous safety measures to protect our team and clients on every project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyPractices.map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-construction-500 mx-auto" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Timeline */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety Milestones</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">A history of continuous safety improvement and excellence</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-construction-500" />
            <div className="space-y-8">
              {safetyTimeline.map((event, idx) => (
                <div key={event.year} className={`relative flex items-start ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-construction-500 rounded-full border-4 border-background" />
                  <div className={`ml-12 md:ml-0 md:w-5/12 p-4 bg-white rounded-lg shadow-md ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Badge className="bg-construction-500 text-white mb-2">{event.year}</Badge>
                    <h3 className="text-lg font-semibold mb-1">{event.milestone}</h3>
                    <p className="text-sm opacity-80 leading-relaxed">{event.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with a Company That Puts Safety First</h2>
          <p className="mb-8 opacity-80">Contact us to learn more about our safety programs or schedule a safety review for your next project.</p>
          <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
