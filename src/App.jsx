import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminJobForm from './components/admin/AdminJobForm';
import Login from './components/auth/Login';
import UserDashboard from './components/user/UserDashboard';
import JobDetails from './components/user/JobDetails';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Import CSS directly
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: 'TechCorp',
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for a skilled Frontend Developer proficient in React.js to join our team. You will be responsible for building user interfaces and implementing features according to design specifications.',
      requirements: 'Experience with React, JavaScript, HTML, CSS. Familiarity with state management like Redux or Context API.',
      stipend: '$4000-$5000/month',
      applicationLink: 'https://apply.techcorp.com/frontend-dev',
      postedDate: '2025-02-15',
      deadline: '2025-03-15',
    },
    {
      id: 2,
      company: 'DataDynamics',
      title: 'Data Scientist',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Join our data science team to analyze complex datasets and develop machine learning models to solve business problems.',
      requirements: 'MS/PhD in Computer Science, Statistics or related field. Experience with Python, R, and machine learning frameworks.',
      stipend: '$6000-$8000/month',
      applicationLink: 'https://careers.datadynamics.com/data-scientist',
      postedDate: '2025-02-10',
      deadline: '2025-03-10',
    },
    {
      id: 3,
      company: 'WebSolutions',
      title: 'UX/UI Design Intern',
      location: 'Chicago, IL',
      type: 'Internship',
      description: 'Learn and contribute to the design process for web and mobile applications working with our experienced design team.',
      requirements: 'Currently pursuing a degree in Design, HCI, or related field. Portfolio demonstrating UX/UI skills.',
      stipend: '$2000/month',
      applicationLink: 'https://websolutions.com/careers/design-intern',
      postedDate: '2025-02-20',
      deadline: '2025-03-20',
    }
  ]);
  
  // State to track job being edited
  const [jobToEdit, setJobToEdit] = useState(null);

  const handleLogin = (credentials) => {
    if (credentials.email === 'admin@jobportal.com' && credentials.password === 'admin123') {
      setIsLoggedIn(true);
      setUserRole('admin');
      return true;
    } else if (credentials.email === 'user@example.com' && credentials.password === 'user123') {
      setIsLoggedIn(true);
      setUserRole('user');
      return true;
    }
    return false;
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
  };

  const addJob = (newJob) => {
    setJobs([...jobs, { id: jobs.length + 1, ...newJob, postedDate: new Date().toISOString().slice(0, 10) }]);
  };
  
  const editJob = (jobId) => {
    const job = jobs.find(job => job.id === jobId);
    if (job) {
      setJobToEdit(job);
    }
  };
  
  const updateJob = (updatedJob) => {
    setJobs(jobs.map(job => job.id === updatedJob.id ? updatedJob : job));
    setJobToEdit(null);
  };
  
  const deleteJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} userRole={userRole} onLogout={handleLogout} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              isLoggedIn ? 
                (userRole === 'admin' ? <Navigate to="/admin" /> : <Navigate to="/jobs" />) : 
                <Login onLogin={handleLogin} />
            } />
            <Route path="/admin" element={
              isLoggedIn && userRole === 'admin' ? 
                <AdminDashboard jobs={jobs} onEditJob={editJob} onDeleteJob={deleteJob} /> : 
                <Navigate to="/" />
            } />
            <Route path="/admin/add-job" element={
              isLoggedIn && userRole === 'admin' ? 
                <AdminJobForm onAddJob={addJob} /> : 
                <Navigate to="/" />
            } />
            <Route path="/admin/edit-job/:id" element={
              isLoggedIn && userRole === 'admin' ? 
                <AdminJobForm jobToEdit={jobToEdit} onUpdateJob={updateJob} /> : 
                <Navigate to="/" />
            } />
            <Route path="/jobs" element={
              isLoggedIn ? 
                <UserDashboard jobs={jobs} /> : 
                <Navigate to="/" />
            } />
            <Route path="/jobs/:id" element={
              isLoggedIn ? 
                <JobDetails jobs={jobs} /> : 
                <Navigate to="/" />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;