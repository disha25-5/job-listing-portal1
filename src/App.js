// import React, { useState, useEffect } from 'react';
// import JobList from './components/JobList';
// import SearchFilter from './components/SearchFilter';
// import JobForm from './components/JobForm';
// import { JobProvider } from './context/JobContext';
// import './App.css';

// function App() {
//   return (
//     <JobProvider>
//       <div className="App">
//         <header className="app-header">
//           <h1>Job Listing Portal</h1>
//         </header>
//         <main className="app-main">
//           <SearchFilter />
//           <JobForm />
//           <JobList />
//         </main>
//         <footer className="app-footer">
//           <p>© 2024 Job Portal</p>
//         </footer>
//       </div>
//     </JobProvider>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import JobList from './components/JobList';
import SearchFilter from './components/SearchFilter';
import JobForm from './components/JobForm';
import { JobProvider } from './context/JobContext';
import './App.css';

function App() {
  return (
    <JobProvider>
      <div className="App">
        <header className="app-header">
          <h1>Job Listing Portal</h1>
        </header>
        <main className="app-main">
          <SearchFilter />
          <JobList />  {/* Job List (Vacancies) Section */}
          <JobForm />  {/* Job Form will appear after the Job List */}
        </main>
        <footer className="app-footer">
          <p>© 2024 Job Portal</p>
        </footer>
      </div>
    </JobProvider>
  );
}

export default App;