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
      <header className="border-b border-border/50 glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl shadow-glow animate-glow"></div>
              <div>
                <h1 className="text-xl font-bold text-foreground tracking-tight">InternMatch AI</h1>
                <p className="text-sm text-muted-foreground font-medium">AI-Powered Internship Matching</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium">
                How It Works
              </a>
              <a href="#analytics" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium">
                Analytics
              </a>
              <Button variant="glass" onClick={() => setCurrentView('company')}>
                Company Login
              </Button>
              <Button variant="premium" onClick={() => setCurrentView('student')}>
                Student Portal
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-8 glass-effect text-white border-white/30 hover:bg-white/20 shadow-large">
            Powered by Advanced AI & Machine Learning
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Smart Internship<br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Matching System</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionizing the PM Internship Scheme with AI-powered candidate matching, 
            automated resume processing, and inclusive selection algorithms.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              variant="premium"
              className="bg-white text-primary hover:bg-white/95 shadow-premium text-lg font-semibold"
              onClick={() => setCurrentView('student')}
            >
              Get Started as Student
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="text-white border-white/30 hover:bg-white/20 text-lg font-semibold"
              onClick={() => setCurrentView('company')}
            >
              Company Portal
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 md:gap-16">
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
      <section id="features" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Intelligent Features for Modern Internship Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Our AI-powered platform streamlines the entire internship lifecycle, 
              from application to selection, ensuring fairness and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-premium transition-all duration-500 border-0 premium-card hover:scale-105 group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:animate-glow">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              How The System Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              A streamlined process that takes students from application to internship placement in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
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
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow text-lg group-hover:animate-glow">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-10 premium-card shadow-premium hover:shadow-glow transition-all duration-500">
              <h3 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Key Benefits</h3>
              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-foreground font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to Transform Internship Matching?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Join thousands of students and companies already using our AI-powered platform 
            for smarter, fairer internship matching.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="premium"
              className="bg-white text-primary hover:bg-white/95 shadow-premium text-lg font-semibold"
              onClick={() => setCurrentView('student')}
            >
              Start as Student
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="text-white border-white/30 hover:bg-white/20 text-lg font-semibold"
              onClick={() => setCurrentView('company')}
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl shadow-glow"></div>
                <div>
                  <h3 className="font-bold text-foreground text-lg tracking-tight">InternMatch AI</h3>
                  <p className="text-sm text-muted-foreground font-medium">AI-Powered Internship Matching</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed font-light">
                Empowering students with AI-driven internship matching while ensuring 
                diversity and inclusion in government schemes.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-6 tracking-tight">Quick Links</h4>
              <div className="space-y-3 text-sm">
                <div className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors font-medium">Student Portal</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors font-medium">Company Dashboard</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors font-medium">Help & Support</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-6 tracking-tight">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="font-medium">support@internmatch.ai</div>
                <div className="font-medium">1800-123-4567</div>
                <div className="font-medium">Ministry of Skill Development</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground font-medium">
            © 2024 Government of India. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;