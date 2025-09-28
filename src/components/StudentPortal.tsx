import React, { useState } from 'react';
import { Upload, User, BookOpen, MapPin, Building, CheckCircle, Star, TrendingUp, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ThemeToggle } from '@/components/theme-toggle';
import { ResponsiveLogo } from '@/components/ResponsiveLogo';

const StudentPortal = ({ onBack }: { onBack: () => void }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [resumeUploaded, setResumeUploaded] = useState(false);

  const steps = [
    { id: 1, title: 'Upload Resume', icon: Upload },
    { id: 2, title: 'Verify Profile', icon: User },
    { id: 3, title: 'Set Preferences', icon: MapPin },
    { id: 4, title: 'Get Matches', icon: Building }
  ];

  const mockRecommendations = [
    {
      id: 1,
      company: 'Tech Mahindra',
      role: 'Software Development Intern',
      location: 'Mumbai',
      match: 95,
      sector: 'Technology',
      duration: '3 months',
      workStyle: 'Hybrid',
      personality: ['Collaborative', 'Analytical'],
      learningGoals: ['Technical Skills', 'Industry Knowledge']
    },
    {
      id: 2,
      company: 'HDFC Bank',
      role: 'Business Analytics Intern',
      location: 'Delhi',
      match: 88,
      sector: 'Banking',
      duration: '6 months',
      workStyle: 'On-site',
      personality: ['Detail-oriented', 'Analytical'],
      learningGoals: ['Professional Networking', 'Project Management']
    },
    {
      id: 3,
      company: 'Wipro',
      role: 'Data Science Intern',
      location: 'Bangalore',
      match: 82,
      sector: 'Technology',
      duration: '4 months',
      workStyle: 'Remote',
      personality: ['Independent', 'Creative'],
      learningGoals: ['Innovation & Research', 'Technical Skills']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Button>
              <ResponsiveLogo />
              <h1 className="text-xl font-semibold text-gray-900">PM Internship Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Rahul Sharma</span>
              <ThemeToggle />
              <Button variant="outline" size="sm">Profile</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isCompleted = activeStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    isCompleted ? 'bg-green-500 text-white' :
                    isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {isCompleted ? <CheckCircle size={20} /> : <Icon size={20} />}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    isActive || isCompleted ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-20 h-1 mx-4 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeStep === 1 && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop your resume</p>
                  <p className="text-sm text-gray-500">PDF files only, max 5MB</p>
                  <Button 
                    className="mt-4" 
                    onClick={() => {
                      setResumeUploaded(true);
                      setTimeout(() => setActiveStep(2), 1000);
                    }}
                  >
                    Choose File
                  </Button>
                </div>
                {resumeUploaded && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-700">Resume_Rahul_Sharma.pdf uploaded successfully!</span>
                    </div>
                    <Progress value={75} className="mt-2" />
                    <p className="text-sm text-green-600 mt-1">AI is extracting your profile information...</p>
                  </div>
                )}
              </Card>
            )}

            {activeStep === 2 && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Verify Auto-Filled Profile</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        value="Rahul Sharma" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        value="rahul.sharma@example.com" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                    <input 
                      type="text" 
                      value="B.Tech Computer Science, IIT Delhi (2023)" 
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Extracted Skills</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Python', 'JavaScript', 'React', 'Machine Learning', 'SQL', 'Git'].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setActiveStep(1)}>Back</Button>
                    <Button onClick={() => setActiveStep(3)}>Continue</Button>
                  </div>
                </div>
              </Card>
            )}

            {activeStep === 3 && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Advanced Matching Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Locations</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad'].map((city) => (
                        <label key={city} className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked={city === 'Mumbai' || city === 'Delhi'} />
                          <span>{city}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Sectors</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Technology', 'Banking', 'Healthcare', 'Manufacturing', 'Government', 'Startup'].map((sector) => (
                        <label key={sector} className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked={sector === 'Technology' || sector === 'Banking'} />
                          <span>{sector}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Style Preference</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Remote', 'On-site', 'Hybrid'].map((style) => (
                        <label key={style} className="flex items-center">
                          <input type="radio" name="workStyle" className="mr-2" defaultChecked={style === 'Hybrid'} />
                          <span>{style}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Personality Traits</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Collaborative', 'Independent', 'Detail-oriented', 'Creative', 'Analytical', 'Leadership-focused'].map((trait) => (
                        <label key={trait} className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked={trait === 'Collaborative' || trait === 'Analytical'} />
                          <span>{trait}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Learning Goals</label>
                    <div className="grid grid-cols-1 gap-2">
                      {['Technical Skills Development', 'Industry Knowledge', 'Professional Networking', 'Project Management', 'Communication Skills', 'Innovation & Research'].map((goal) => (
                        <label key={goal} className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked={goal === 'Technical Skills Development' || goal === 'Industry Knowledge'} />
                          <span>{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setActiveStep(2)}>Back</Button>
                    <Button onClick={() => setActiveStep(4)}>Find Matches</Button>
                  </div>
                </div>
              </Card>
            )}

            {activeStep === 4 && (
              <div className="space-y-6">
                {/* AI Best Fit Recommendation */}
                <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900">🎯 AI Best Fit Recommendation</h3>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Software Development Intern</h4>
                        <p className="text-gray-600">Tech Mahindra</p>
                        <p className="text-sm text-gray-500">Mumbai • 3 months • Hybrid</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">95%</div>
                        <div className="text-sm text-gray-500">Perfect Match</div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-blue-800">
                        <strong>🤖 AI Analysis:</strong> This internship perfectly aligns with your Python & React skills, 
                        matches your collaborative personality, and offers the technical skill development you're seeking. 
                        The hybrid work style matches your preference.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="default" className="bg-blue-600">Technology</Badge>
                      <Button className="bg-blue-600 hover:bg-blue-700">Apply to Best Match</Button>
                    </div>
                  </div>
                </Card>

                <h2 className="text-xl font-semibold">All AI-Matched Internships</h2>
                {mockRecommendations.map((internship) => (
                  <Card key={internship.id} className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{internship.role}</h3>
                        <p className="text-gray-600">{internship.company}</p>
                        <p className="text-sm text-gray-500">{internship.location} • {internship.duration} • {internship.workStyle}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{internship.match}%</div>
                        <div className="text-sm text-gray-500">AI Match Score</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-700">Personality Match: </span>
                        {internship.personality.map((trait) => (
                          <Badge key={trait} variant="secondary" className="mr-1 text-xs">{trait}</Badge>
                ))}
                
                {/* Alternative Matches Section */}
                <Card className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-orange-900">🔄 Alternative Smart Suggestions</h3>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <p className="text-sm text-orange-800 mb-3">
                      <strong>💡 AI Notice:</strong> Your top choice at Google is currently full. Here are equally excellent alternatives:
                    </p>
                    
                    <div className="border-l-4 border-orange-300 pl-4">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h4 className="font-semibold">ML Engineering Intern - Microsoft</h4>
                          <p className="text-sm text-gray-600">Bangalore • Similar tech stack • 89% match</p>
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                      <p className="text-xs text-gray-500">Similar learning goals, better work-life balance</p>
                    </div>
                    
                    <div className="border-l-4 border-orange-300 pl-4">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h4 className="font-semibold">AI Research Intern - IIT Bombay</h4>
                          <p className="text-sm text-gray-600">Mumbai • Research focused • 87% match</p>
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                      <p className="text-xs text-gray-500">Perfect for your innovation & research interests</p>
                    </div>
                  </div>
                </Card>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Learning Goals: </span>
                        {internship.learningGoals.map((goal) => (
                          <Badge key={goal} variant="outline" className="mr-1 text-xs">{goal}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{internship.sector}</Badge>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Application Status</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Applied</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Under Review</span>
                  <span className="text-sm font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Interview Scheduled</span>
                  <span className="text-sm font-medium text-blue-600">1</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-3">Profile Completeness</h3>
              <Progress value={85} className="mb-2" />
              <p className="text-sm text-gray-600">85% complete</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>✓ Resume uploaded</li>
                <li>✓ Profile verified</li>
                <li>✓ Preferences set</li>
                <li className="text-orange-600">• Add portfolio link</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;