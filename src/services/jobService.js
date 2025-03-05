// Mock API data (you can replace this with an actual API call)
const mockJobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      location: 'New York',
      type: 'Full-time',
      description: 'Develop and maintain software applications.',
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Data Solutions',
      location: 'San Francisco',
      type: 'Full-time',
      description: 'Analyze data and build machine learning models.',
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'Web Designs',
      location: 'London',
      type: 'Contract',
      description: 'Create and maintain websites.',
    },
    {
      id: 4,
      title: 'Marketing Intern',
      company: 'Marketing Group',
      location: 'Los Angeles',
      type: 'Internship',
      description: 'Assist with marketing campaigns and social media.',
    },
    {
      id: 5,
      title: 'Project Manager',
      company: 'Project Solutions',
      location: 'Chicago',
      type: 'Full-time',
      description: 'Manage projects and ensure they are completed on time.',
    },
    {
      id: 6,
      title: 'UX Designer',
      company: 'Design Co',
      location: 'Seattle',
      type: 'Full-time',
      description: 'Design user interfaces and improve user experience.',
    },
    {
      id: 7,
      title: 'Frontend Developer',
      company: 'Frontend Masters',
      location: 'Austin',
      type: 'Full-time',
      description: 'Develop and maintain the user interface of web applications.',
    },
    {
      id: 8,
      title: 'Backend Developer',
      company: 'Backend Solutions',
      location: 'Denver',
      type: 'Full-time',
      description: 'Develop and maintain the server-side logic of web applications.',
    },
    {
      id: 9,
      title: 'Mobile App Developer',
      company: 'Mobile Apps Inc.',
      location: 'Miami',
      type: 'Full-time',
      description: 'Develop and maintain mobile applications for iOS and Android.',
    },
    {
      id: 10,
      title: 'DevOps Engineer',
      company: 'DevOps Solutions',
      location: 'Atlanta',
      type: 'Full-time',
      description: 'Manage and automate the deployment of software applications.',
    },
    {
      id: 11,
      title: 'Data Analyst',
      company: 'Data Insights',
      location: 'Boston',
      type: 'Full-time',
      description: 'Analyze data and create reports to help businesses make better decisions.',
    },
    {
      id: 12,
      title: 'Cybersecurity Analyst',
      company: 'Cybersecurity Group',
      location: 'Washington, D.C.',
      type: 'Full-time',
      description: 'Protect computer systems and networks from cyber threats.',
    },
    {
      id: 13,
      title: 'Cloud Architect',
      company: 'Cloud Solutions',
      location: 'San Jose',
      type: 'Full-time',
      description: 'Design and implement cloud computing solutions.',
    },
    {
      id: 14,
      title: 'Business Analyst',
      company: 'Business Insights',
      location: 'Dallas',
      type: 'Full-time',
      description: 'Analyze business processes and identify areas for improvement.',
    },
    {
      id: 15,
      title: 'Technical Writer',
      company: 'Technical Writing Co',
      location: 'Phoenix',
      type: 'Full-time',
      description: 'Write technical documentation for software applications.',
    },
    {
      id: 16,
      title: 'Quality Assurance Engineer',
      company: 'QA Solutions',
      location: 'Houston',
      type: 'Full-time',
      description: 'Test software applications to ensure they meet quality standards.',
    },
  ];
  
  const getJobs = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockJobs);
      }, 500); // Simulate API delay
    });
  };
  
  export default getJobs;