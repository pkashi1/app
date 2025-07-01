"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    primary: '(225) 555-0123',
    secondary: 'Emergency: (225) 555-0124',
    description: 'Call us for immediate assistance'
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'info@southernunderground.com',
    secondary: 'projects@southernunderground.com',
    description: 'Send us your project details'
  },
  {
    icon: MapPin,
    title: 'Office Location',
    primary: '4922 Rankin Street',
    secondary: 'Zachary, Louisiana 70791',
    description: 'Visit our headquarters'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    primary: 'Monday - Friday: 7:00 AM - 5:00 PM',
    secondary: 'Saturday: 8:00 AM - 12:00 PM',
    description: 'Emergency services available 24/7'
  }
];

const services = [
  'Directional Boring',
  'Utility Installation',
  'Civil Construction',
  'Pile Installation',
  'Water & Sewer Treatment',
  'General Consultation'
];

const projectTypes = [
  'Residential',
  'Commercial',
  'Industrial',
  'Municipal',
  'Emergency/Repair'
];

const budgetRanges = [
  'Under $50,000',
  '$50,000 - $100,000',
  '$100,000 - $500,000',
  '$500,000 - $1,000,000',
  'Over $1,000,000',
  'Prefer not to specify'
];

const timelines = [
  'Immediate (Emergency)',
  '1-3 months',
  '3-6 months',
  '6-12 months',
  'More than 12 months',
  'Planning phase'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    projectType: '',
    timeline: '',
    budgetRange: '',
    location: '',
    message: '',
    contactMethod: 'both',
    hearAboutUs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          serviceInterest: '',
          projectType: '',
          timeline: '',
          budgetRange: '',
          location: '',
          message: '',
          contactMethod: 'both',
          hearAboutUs: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-muted/50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-construction-500">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Contact</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ready to start your construction project? Get in touch with our team for a free consultation and detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-construction-500" />
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-foreground">{method.primary}</p>
                    <p className="text-sm text-muted-foreground">{method.secondary}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request a Project Quote
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete the form below and we'll get back to you within 24 hours
            </p>
          </div>
          
          <Card>
            <CardContent className="p-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll contact you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(225) 555-0123"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="serviceInterest">Service Interest *</Label>
                    <Select value={formData.serviceInterest} onValueChange={(value) => handleInputChange('serviceInterest', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline *</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((timeline) => (
                          <SelectItem key={timeline} value={timeline}>
                            {timeline}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budgetRange">Budget Range</Label>
                    <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Project Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City, State"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details & Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                    required
                  />
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                    <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange('contactMethod', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="both">Both Phone & Email</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                    <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange('hearAboutUs', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="website">Company Website</SelectItem>
                        <SelectItem value="advertisement">Advertisement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-construction-500 hover:bg-construction-600 text-white py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Service Area
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Based in Zachary, Louisiana, we provide construction and infrastructure services 
                across 15 states nationwide. Our experienced team travels to project sites to 
                deliver the same quality service regardless of location.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Primary Service States</h3>
                  <p className="text-muted-foreground text-sm">
                    Louisiana, Mississippi, Alabama, Texas, Arkansas, Tennessee, Florida, 
                    Georgia, South Carolina, North Carolina, Virginia, Kentucky, Missouri, Oklahoma, Kansas
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Emergency Services</h3>
                  <p className="text-muted-foreground text-sm">
                    24/7 emergency response available for critical infrastructure repairs and urgent construction needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-muted rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Visit Our Office</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Southern Underground of Louisiana</p>
                    <p className="text-muted-foreground">4922 Rankin Street</p>
                    <p className="text-muted-foreground">Zachary, Louisiana 70791</p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Monday - Friday:</strong> 7:00 AM - 5:00 PM</p>
                    <p><strong>Saturday:</strong> 8:00 AM - 12:00 PM</p>
                    <p><strong>Sunday:</strong> Emergency calls only</p>
                  </div>
                  <div className="pt-4">
                    <Button asChild className="bg-construction-500 hover:bg-construction-600">
                      <Link href="tel:(225) 555-0123">
                        Call Now: (225) 555-0123
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-construction-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Services Available 24/7
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            For urgent construction needs, infrastructure failures, or emergency repairs, 
            our team is available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-construction-500 hover:bg-gray-100 px-8 py-4">
              <Link href="tel:(225) 555-0124" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency: (225) 555-0124</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-construction-500 px-8 py-4">
              <Link href="mailto:emergency@southernunderground.com">
                Emergency Email
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}