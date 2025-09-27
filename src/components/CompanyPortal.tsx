import React, { useState } from 'react';
import { Plus, Users, TrendingUp, Calendar, MapPin, Star, Filter, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, RadialBarChart, RadialBar } from 'recharts';
import { ThemeToggle } from '@/components/theme-toggle';

const CompanyPortal = ({ onBack }: { onBack: () => void }) => {
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
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></div>
              <h1 className="text-xl font-semibold text-gray-900">Company Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Tech Mahindra Ltd.</span>
              <ThemeToggle />
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
              {/* Application Trends Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Application Trends</h3>
                <ChartContainer
                  config={{
                    applications: {
                      label: "Applications",
                      color: "hsl(var(--chart-1))",
                    },
                    matches: {
                      label: "AI Matches",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-64"
                >
                  <LineChart data={[
                    { month: 'Jan', applications: 45, matches: 23 },
                    { month: 'Feb', applications: 52, matches: 28 },
                    { month: 'Mar', applications: 78, matches: 42 },
                    { month: 'Apr', applications: 93, matches: 51 },
                    { month: 'May', applications: 89, matches: 48 },
                    { month: 'Jun', applications: 125, matches: 67 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="applications" 
                      stroke="hsl(var(--chart-1))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="matches" 
                      stroke="hsl(var(--chart-2))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
                    />
                  </LineChart>
                </ChartContainer>
              </Card>

              {/* Diversity Metrics Pie Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Diversity Distribution</h3>
                <ChartContainer
                  config={{
                    general: {
                      label: "General",
                      color: "hsl(var(--chart-1))",
                    },
                    obc: {
                      label: "OBC",
                      color: "hsl(var(--chart-2))",
                    },
                    scst: {
                      label: "SC/ST",
                      color: "hsl(var(--chart-3))",
                    },
                    other: {
                      label: "Others",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="h-64"
                >
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'General', value: 42, fill: 'hsl(var(--chart-1))' },
                        { name: 'OBC', value: 35, fill: 'hsl(var(--chart-2))' },
                        { name: 'SC/ST', value: 18, fill: 'hsl(var(--chart-3))' },
                        { name: 'Others', value: 5, fill: 'hsl(var(--chart-4))' },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </Card>

              {/* AI Matching Performance Radial Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">AI Performance Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <ChartContainer
                      config={{
                        score: {
                          label: "Match Score",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-32"
                    >
                      <RadialBarChart data={[{ score: 87.3, fill: 'hsl(var(--chart-1))' }]} innerRadius="60%" outerRadius="90%">
                        <RadialBar dataKey="score" cornerRadius={10} />
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold fill-current">87.3%</text>
                      </RadialBarChart>
                    </ChartContainer>
                    <p className="text-sm text-gray-600 mt-2">Avg Match Score</p>
                  </div>
                  <div className="text-center">
                    <ChartContainer
                      config={{
                        rate: {
                          label: "Selection Rate",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                      className="h-32"
                    >
                      <RadialBarChart data={[{ rate: 23.4, fill: 'hsl(var(--chart-2))' }]} innerRadius="60%" outerRadius="90%">
                        <RadialBar dataKey="rate" cornerRadius={10} />
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold fill-current">23.4%</text>
                      </RadialBarChart>
                    </ChartContainer>
                    <p className="text-sm text-gray-600 mt-2">Selection Rate</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-800">Average Time to Match</span>
                    <span className="font-bold text-green-900">2.3 minutes</span>
                  </div>
                </div>
              </Card>

              {/* Skills Distribution Bar Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Top Skills in Applications</h3>
                <ChartContainer
                  config={{
                    count: {
                      label: "Applications",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-64"
                >
                  <BarChart data={[
                    { skill: 'Python', count: 156 },
                    { skill: 'React', count: 142 },
                    { skill: 'Java', count: 128 },
                    { skill: 'JavaScript', count: 118 },
                    { skill: 'SQL', count: 95 },
                    { skill: 'Node.js', count: 87 },
                    { skill: 'Angular', count: 73 },
                    { skill: 'MongoDB', count: 65 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="skill" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </Card>

              {/* Monthly Performance Overview */}
              <Card className="p-6 lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Monthly Performance Overview</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">456</p>
                    <p className="text-sm text-gray-600">Total Applications</p>
                    <p className="text-xs text-green-600">↑ 12% vs last month</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">267</p>
                    <p className="text-sm text-gray-600">AI Matches</p>
                    <p className="text-xs text-green-600">↑ 8% vs last month</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">89</p>
                    <p className="text-sm text-gray-600">Interviews Scheduled</p>
                    <p className="text-xs text-green-600">↑ 15% vs last month</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">23</p>
                    <p className="text-sm text-gray-600">Final Selections</p>
                    <p className="text-xs text-green-600">↑ 5% vs last month</p>
                  </div>
                </div>

                {/* Conversion Funnel */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Application to Selection Funnel</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Applications Received</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <span className="text-sm font-medium w-12">456</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">AI Matched</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '58.5%'}}></div>
                        </div>
                        <span className="text-sm font-medium w-12">267</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Interviews</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '19.5%'}}></div>
                        </div>
                        <span className="text-sm font-medium w-12">89</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Final Selections</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '5%'}}></div>
                        </div>
                        <span className="text-sm font-medium w-12">23</span>
                      </div>
                    </div>
                  </div>
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