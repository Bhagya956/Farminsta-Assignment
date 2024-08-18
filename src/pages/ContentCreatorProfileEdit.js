
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Correct import

// const ContentCreatorProfileEdit = () => {
//   const [profile, setProfile] = useState({
//     name: '',
//     email: '',
//     description: '',
//     languages: '',
//     education: '',
//     specialization: '',
//     socialMediaLinks: '',
//   });

//   const navigate = useNavigate(); // Correct usage of useNavigate

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   const handleNavigateToSearch = () => {
//     navigate('/product-company-search'); // Correct function usage
//   };

//   return (
//     <div>
//       <h1>Edit Content Creator Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={profile.name}
//           onChange={handleChange}
//           placeholder="Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={profile.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         <textarea
//           name="description"
//           value={profile.description}
//           onChange={handleChange}
//           placeholder="Description"
//         />
//         <input
//           type="text"
//           name="languages"
//           value={profile.languages}
//           onChange={handleChange}
//           placeholder="Languages"
//         />
//         <input
//           type="text"
//           name="education"
//           value={profile.education}
//           onChange={handleChange}
//           placeholder="Education"
//         />
//         <input
//           type="text"
//           name="specialization"
//           value={profile.specialization}
//           onChange={handleChange}
//           placeholder="Specialization"
//         />
//         <input
//           type="text"
//           name="socialMediaLinks"
//           value={profile.socialMediaLinks}
//           onChange={handleChange}
//           placeholder="Social Media Links"
//         />
//         <button type="submit">Save Changes</button>
//       </form>
//       <button onClick={handleNavigateToSearch}>Go to Product Company Search</button>
//     </div>
//   );
// };

// export default ContentCreatorProfileEdit;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContentCreatorProfileEdit.css'; // Import the CSS file

const ContentCreatorProfileEdit = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    description: '',
    languages: '',
    education: '',
    specialization: '',
    socialMediaLinks: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleNavigateToSearch = () => {
    navigate('/product-company-search');
  };

  return (
    <div className="edit-container">
      <h1>Edit Content Creator Profile</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Name"
          className="form-input"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-input"
        />
        <textarea
          name="description"
          value={profile.description}
          onChange={handleChange}
          placeholder="Description"
          className="form-textarea"
        />
        <input
          type="text"
          name="languages"
          value={profile.languages}
          onChange={handleChange}
          placeholder="Languages"
          className="form-input"
        />
        <input
          type="text"
          name="education"
          value={profile.education}
          onChange={handleChange}
          placeholder="Education"
          className="form-input"
        />
        <input
          type="text"
          name="specialization"
          value={profile.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          className="form-input"
        />
        <input
          type="text"
          name="socialMediaLinks"
          value={profile.socialMediaLinks}
          onChange={handleChange}
          placeholder="Social Media Links"
          className="form-input"
        />
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
      <button onClick={handleNavigateToSearch} className="search-button">Go to Product Company Search</button>
    </div>
  );
};

export default ContentCreatorProfileEdit;
