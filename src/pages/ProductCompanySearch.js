// // import React, { useState } from 'react';

// // const ProductCompanySearch = () => {
// //   const [filters, setFilters] = useState({
// //     language: '',
// //     education: '',
// //     specialization: '',
// //   });

// //   const handleFilterChange = (e) => {
// //     const { name, value } = e.target;
// //     setFilters({ ...filters, [name]: value });
// //   };

// //   const handleSearch = () => {
// //     // Implement search functionality
// //   };

// //   return (
// //     <div>
// //       <h1>Search for Content Creators</h1>
// //       <input
// //         type="text"
// //         name="language"
// //         value={filters.language}
// //         onChange={handleFilterChange}
// //         placeholder="Language"
// //       />
// //       <input
// //         type="text"
// //         name="education"
// //         value={filters.education}
// //         onChange={handleFilterChange}
// //         placeholder="Education"
// //       />
// //       <input
// //         type="text"
// //         name="specialization"
// //         value={filters.specialization}
// //         onChange={handleFilterChange}
// //         placeholder="Specialization"
// //       />
// //       <button onClick={handleSearch}>Search</button>
// //       <div>
// //         {/* Display search results here */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCompanySearch;



// import React, { useState } from 'react';
// import './ProductCompanySearch.css'; // Import the CSS file

// const ProductCompanySearch = () => {
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: '',
//   });

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleSearch = () => {
//     // Implement search functionality
//   };

//   return (
//     <div className="search-container">
//       <h1 className="title">Search for Content Creators</h1>
//       <div className="filter-form">
//         <input
//           type="text"
//           name="language"
//           value={filters.language}
//           onChange={handleFilterChange}
//           placeholder="Language"
//           className="form-input"
//         />
//         <input
//           type="text"
//           name="education"
//           value={filters.education}
//           onChange={handleFilterChange}
//           placeholder="Education"
//           className="form-input"
//         />
//         <input
//           type="text"
//           name="specialization"
//           value={filters.specialization}
//           onChange={handleFilterChange}
//           placeholder="Specialization"
//           className="form-input"
//         />
//         <button onClick={handleSearch} className="search-button">Search</button>
//       </div>
//       <div className="results-container">
//         {/* Display search results here */}
//       </div>
//     </div>
//   );
// };

// export default ProductCompanySearch;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCompanySearch.css'; // Import the CSS file

const ProductCompanySearch = () => {
  const [filters, setFilters] = useState({
    language: '',
    education: '',
    specialization: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    // Implement search functionality
  };

  const handleGoToDashboard = () => {
    navigate('/'); // Navigate to ContentCreatorProfileView page
  };

  return (
    <div className="search-container">
      <h1 className="title2">Search Product Company</h1>
      <div className="filter-form">
        <input
          type="text"
          name="language"
          value={filters.language}
          onChange={handleFilterChange}
          placeholder="Language"
          className="form-input"
        />
        <input
          type="text"
          name="education"
          value={filters.education}
          onChange={handleFilterChange}
          placeholder="Education"
          className="form-input"
        />
        <input
          type="text"
          name="specialization"
          value={filters.specialization}
          onChange={handleFilterChange}
          placeholder="Specialization"
          className="form-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
        <button onClick={handleGoToDashboard} className="dashboard-button">Go to Dashboard</button>
      </div>
      <div className="results-container">
        {/* Display search results here */}
      </div>
    </div>
  );
};

export default ProductCompanySearch;
