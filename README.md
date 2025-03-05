# Job Listing Portal

## Overview

This project is a simple job listing portal built with React.  It allows users to view available job listings, search and filter them, and post new job listings.

## Features

*   **Display Job Listings:** Fetches and displays job listings from a mock API (can be easily replaced with a real API).
*   **Search and Filter:** Allows users to search jobs by title and filter by job type (Full-time, Part-time, Contract, Internship).
*   **Job Posting:**  Enables users to post new job listings through a form.  New jobs are added to the local state.
*   **Pagination:** Implements pagination to handle a large number of job listings.
*   **Responsive UI:** Designed to be responsive and work well on different screen sizes.
*   **Loading State:**  Displays a loading indicator while fetching jobs.
*   **Well-structured state management:** Uses React Context for managing application state.
*   **Component-based architecture:** Modular and reusable code.

## Setup & Installation

1.  **Clone the repository:**

    ```bash
    git clone [repository-url]
    cd job-portal
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    ```

    This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Approach

*   **React Context:** Used for managing global state, such as the job listings, search term, filter type, and pagination.
*   **Component-Based Architecture:**  The application is broken down into reusable components for maintainability and scalability.
*   **Mock API:** A `jobService.js` file simulates an API call to fetch job data.  This can be replaced with a real API endpoint.
*   **Responsive Design:** CSS media queries are used to make the application responsive.

## Contributing

Contributions are welcome!  Please fork the repository and submit a pull request with your changes.

## License

[MIT License]