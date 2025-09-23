import React, { useState } from 'react';
import { Plus, Users, TrendingUp, Calendar, MapPin, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CompanyPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const mockInternships = [
    {
      id: 1,
      title: 'Software Development Intern',
      department: 'Engineering',
      location: 'Mumbai',
      capacity: 5,
      applied: 23,
      matched: 12,
      selected: 3,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Business Analytics Intern',
      department: 'Analytics',
      location: 'Delhi',
      capacity: 3,
      applied: 18,
      matched: 8,
      selected: 2,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Marketing Intern',
      department: 'Marketing',
      location: 'Bangalore',
      capacity: 4,
      applied: 31,
      matched: 15,
      selected: 0,
      status: 'Review'
    }
  ];

  const mockCandidates = [
    {
      id: 1,
      name: 'Rahul Sharma',
      education: 'B.Tech CSE, IIT Delhi',
      skills: ['Python', 'React', 'ML'],
      location: 'Delhi',
      matchScore: 95,
      category: 'General',
      district: 'Urban',
      experience: '2 previous internships',
      workStyle: 'Hybrid',
      personality: ['Collaborative', 'Analytical'],
      learningGoals: ['Technical Skills', 'Industry Knowledge']
    },
    {
      id: 2,
      name: 'Priya Patel',
      education: 'B.Tech IT, NIT Surat',
      skills: ['Java', 'Angular', 'SQL'],
      location: 'Gujarat',
      matchScore: 88,
      category: 'OBC',
      district: 'Aspirational',
      experience: '1 previous internship',
      workStyle: 'On-site',
      personality: ['Detail-oriented', 'Leadership-focused'],
      learningGoals: ['Professional Networking', 'Project Management']
    },
    {
      id: 3,
      name: 'Arjun Kumar',
      education: 'B.Sc CS, Delhi University',
      skills: ['JavaScript', 'Node.js', 'MongoDB'],
      location: 'Delhi',
      matchScore: 82,
      category: 'SC',
      district: 'Rural',
      experience: 'Fresher',
      workStyle: 'Remote',
      personality: ['Independent', 'Creative'],
      learningGoals: ['Innovation & Research', 'Communication Skills']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></div>
              <h1 className="text-xl font-semibold text-gray-900">Company Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Tech Mahindra Ltd.</span>
              <Button variant="outline" size="sm">Settings</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Internships</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Applications</p>
                    <p className="text-2xl font-bold text-gray-900">456</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">AI Matches</p>
                    <p className="text-2xl font-bold text-gray-900">89</p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Selections Made</p>
                    <p className="text-2xl font-bold text-gray-900">23</p>
                  </div>
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Internship Posts</h3>
                <div className="space-y-4">
                  {mockInternships.slice(0, 3).map((internship) => (
                    <div key={internship.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{internship.title}</p>
                        <p className="text-sm text-gray-600">{internship.location} • {internship.applied} applications</p>
                      </div>
                      <Badge variant={internship.status === 'Active' ? 'default' : 'secondary'}>
                        {internship.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Top AI Matches</h3>
                <div className="space-y-4">
                  {mockCandidates.slice(0, 3).map((candidate) => (
                    <div key={candidate.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{candidate.name}</p>
                        <p className="text-sm text-gray-600">{candidate.education}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">{candidate.matchScore}%</p>
                        <p className="text-xs text-gray-500">Match Score</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="internships">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Manage Internships</h2>
              <Button className="flex items-center gap-2">
                <Plus size={16} />
                Post New Internship
              </Button>
            </div>

            <div className="space-y-4">
              {mockInternships.map((internship) => (
                <Card key={internship.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{internship.title}</h3>
                      <p className="text-gray-600">{internship.department}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {internship.location}
                        </div>
                        <div>Capacity: {internship.capacity}</div>
                      </div>
                    </div>
                    <Badge variant={internship.status === 'Active' ? 'default' : 'secondary'}>
                      {internship.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{internship.applied}</p>
                      <p className="text-sm text-gray-600">Applications</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{internship.matched}</p>
                      <p className="text-sm text-gray-600">AI Matches</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{internship.selected}</p>
                      <p className="text-sm text-gray-600">Selected</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Applications</Button>
                    <Button variant="outline" size="sm">AI Recommendations</Button>
                    <Button variant="outline" size="sm">Edit Post</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="candidates">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">AI-Matched Candidates</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter size={16} className="mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>

            {/* AI Best Fit Recommendations */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
                <h3 className="text-lg font-semibold text-green-900">🎯 AI Best Fit Candidates</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
                      <p className="text-sm text-gray-600">B.Tech CSE, IIT Delhi</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">95%</div>
                  </div>
                  <div className="bg-green-50 rounded p-2 mb-2">
                    <p className="text-xs text-green-800">
                      <strong>🤖 Perfect Match:</strong> Skills align 100% with requirements. Collaborative personality 
                      fits team culture. Hybrid work preference matches offering.
                    </p>
                  </div>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">Priority Interview</Button>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Priya Patel</h4>
                      <p className="text-sm text-gray-600">B.Tech IT, NIT Surat</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">88%</div>
                  </div>
                  <div className="bg-green-50 rounded p-2 mb-2">
                    <p className="text-xs text-green-800">
                      <strong>🤖 Great Fit:</strong> Strong leadership traits complement team dynamics. 
                      From aspirational district - supports diversity goals.
                    </p>
                  </div>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">Priority Interview</Button>
                </div>
              </div>
            </Card>

            {/* Alternative Suggestions */}
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900">🔄 Smart Alternative Suggestions</h3>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-blue-800 mb-3">
                  <strong>💡 AI Recommendation:</strong> Your Business Analytics role received 3x more applications than capacity. 
                  Consider these high-potential candidates for other suitable positions:
                </p>
                
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-300 pl-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="font-medium">Arjun Kumar → Data Science Intern</h5>
                        <p className="text-sm text-gray-600">Strong MongoDB skills, creative personality - excellent fit</p>
                      </div>
                      <Button variant="outline" size="sm">Review Match</Button>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-blue-300 pl-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="font-medium">Ravi Singh → Marketing Analytics Intern</h5>
                        <p className="text-sm text-gray-600">Communication skills + data background - hybrid role potential</p>
                      </div>
                      <Button variant="outline" size="sm">Review Match</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <h3 className="text-lg font-semibold mb-4">All Candidate Applications</h3>
            <div className="space-y-4">
              {mockCandidates.map((candidate) => (
                <Card key={candidate.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{candidate.name}</h3>
                        <div className="text-2xl font-bold text-green-600">{candidate.matchScore}%</div>
                      </div>
                      
                      <p className="text-gray-600 mb-2">{candidate.education}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-medium">Location:</span> {candidate.location}
                        </div>
                        <div>
                          <span className="font-medium">Category:</span> {candidate.category}
                        </div>
                        <div>
                          <span className="font-medium">District Type:</span> {candidate.district}
                        </div>
                        <div>
                          <span className="font-medium">Experience:</span> {candidate.experience}
                        </div>
                        <div>
                          <span className="font-medium">Work Style:</span> {candidate.workStyle}
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="mb-2">
                          <span className="text-sm font-medium text-gray-700">Personality: </span>
                          {candidate.personality.map((trait) => (
                            <Badge key={trait} variant="secondary" className="mr-1 text-xs">{trait}</Badge>
                          ))}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Learning Goals: </span>
                          {candidate.learningGoals.map((goal) => (
                            <Badge key={goal} variant="outline" className="mr-1 text-xs">{goal}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 ml-4">
                      <Button size="sm">View Full Profile</Button>
                      <Button variant="outline" size="sm">Schedule Interview</Button>
                      <Button variant="outline" size="sm">Download Resume</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Application Trends</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Chart: Applications over time</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Diversity Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Rural Representation</span>
                      <span>32%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '32%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>SC/ST Candidates</span>
                      <span>28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '28%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Aspirational Districts</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">AI Matching Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Average Match Score</span>
                    <span className="font-semibold">87.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Selection Rate</span>
                    <span className="font-semibold">23.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Time to Match</span>
                    <span className="font-semibold">2.3 mins</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Skills Distribution</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Chart: Top skills in applications</p>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyPortal;