import React, { useState } from 'react';
import { ArrowRight, Users, Brain, FileText, BarChart3, Shield, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StudentPortal from '@/components/StudentPortal';
import CompanyPortal from '@/components/CompanyPortal';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'student' | 'company'>('landing');

  if (currentView === 'student') {
    return <StudentPortal />;
  }

  if (currentView === 'company') {
    return <CompanyPortal />;
  }

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms match candidates with internships based on skills, qualifications, and preferences.',
    },
    {
      icon: FileText,
      title: 'Resume Parsing',
      description: 'Automatically extract skills, education, and experience from uploaded PDF resumes.',
    },
    {
      icon: Shield,
      title: 'Affirmative Action',
      description: 'Ensures representation from rural areas, aspirational districts, and diverse social categories.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights on matching performance, diversity metrics, and application trends.',
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Process thousands of applications and generate matches within minutes.',
    },
    {
      icon: Users,
      title: 'Multi-Ministry Scale',
      description: 'Designed to handle multiple government schemes and ministries seamlessly.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Students Registered' },
    { number: '500+', label: 'Partner Companies' },
    { number: '95%', label: 'Match Accuracy' },
    { number: '2.3min', label: 'Average Match Time' },
  ];

  const benefits = [
    'Automated profile creation from resume upload',
    'Smart matching based on skills and preferences',
    'Ensures diversity and inclusion compliance',
    'Real-time application tracking',
    'Comprehensive analytics and reporting',
    'Scalable for government-wide deployment'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl shadow-medium"></div>
              <div>
                <h1 className="text-xl font-bold text-foreground">PM Internship Portal</h1>
                <p className="text-sm text-muted-foreground">Government of India</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#analytics" className="text-muted-foreground hover:text-foreground transition-colors">
                Analytics
              </a>
              <Button variant="outline" onClick={() => setCurrentView('company')}>
                Company Login
              </Button>
              <Button onClick={() => setCurrentView('student')}>
                Student Portal
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/20 hover:bg-white/30">
            Powered by Advanced AI & Machine Learning
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Internship<br />
            <span className="text-primary-glow">Matching System</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing the PM Internship Scheme with AI-powered candidate matching, 
            automated resume processing, and inclusive selection algorithms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
              onClick={() => setCurrentView('student')}
            >
              Get Started as Student
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/20 hover:bg-white/10"
              onClick={() => setCurrentView('company')}
            >
              Company Portal
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Intelligent Features for Modern Internship Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform streamlines the entire internship lifecycle, 
              from application to selection, ensuring fairness and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-large transition-all duration-300 border-0 shadow-medium">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-glow">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How The System Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined process that takes students from application to internship placement in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Upload Resume',
                  description: 'Students upload their PDF resume. Our AI instantly extracts skills, education, and experience.'
                },
                {
                  step: '02',
                  title: 'AI Analysis',
                  description: 'Advanced algorithms analyze candidate profiles and match them with suitable internship opportunities.'
                },
                {
                  step: '03',
                  title: 'Smart Matching',
                  description: 'The system considers skills, location preferences, diversity quotas, and company requirements.'
                },
                {
                  step: '04',
                  title: 'Instant Results',
                  description: 'Students receive ranked internship recommendations with match scores and application options.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-8 bg-white shadow-large">
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Internship Matching?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students and companies already using our AI-powered platform 
            for smarter, fairer internship matching.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
              onClick={() => setCurrentView('student')}
            >
              Start as Student
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/20 hover:bg-white/10"
              onClick={() => setCurrentView('company')}
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl"></div>
                <div>
                  <h3 className="font-bold text-foreground">PM Internship Portal</h3>
                  <p className="text-sm text-muted-foreground">Government of India</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering students with AI-driven internship matching while ensuring 
                diversity and inclusion in government schemes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div className="text-muted-foreground hover:text-foreground cursor-pointer">Student Portal</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer">Company Dashboard</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer">Help & Support</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>help@pminternship.gov.in</div>
                <div>1800-123-4567</div>
                <div>Ministry of Skill Development</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Government of India. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;