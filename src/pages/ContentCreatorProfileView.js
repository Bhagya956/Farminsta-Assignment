

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContentCreatorProfileView.css';

const ContentCreatorProfileView = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit-profile');
  };

  // Profile images array (only 4-5 images available)
  const profileImagesList = [
    'profile1.jpeg', 'profile2.jpeg', 'profile3.jpeg', 'profile4.jpg', 'profile5.jpeg'
  ];

  const profiles = Array.from({ length: 15 }, (_, index) => ({
    id: index,
    name: `ContentCreator ${index + 1}`,
    email: `contentcreator${index + 1}@example.com`,
    description: 'Content creator specializing in tech,softskills,resume building and charity.',
    languages: 'Telugu,English,Hindi',
    education: "Bachelor's in Technology",
    specialization: 'Social Media Marketing',
    socialMediaLink: 'http://www.youtube.com/@tech.boy.deepak',
    image: profileImagesList[index % profileImagesList.length], // Cycle through the images
  }));

  return (
    <div className="profile-view-container">
      <h1 className="title">Content Creator Profile View</h1>
      <img src={require('../images/MainBanner.jpg')} alt="Main Banner" className="main-banner" />
      <div className="cards-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="card">
            <img src={require(`../images/${profile.image}`)} alt="Profile" className="profile-image" />
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Description:</strong> {profile.description}</p>
            <p><strong>Languages:</strong> {profile.languages}</p>
            <p><strong>Education:</strong> {profile.education}</p>
            <p><strong>Specialization:</strong> {profile.specialization}</p>
            <p><strong>Social Media Links:</strong> <a href={profile.socialMediaLink}>Youtube</a></p>
            <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCreatorProfileView;
