import React, { useState, useEffect } from 'react';
import { Edit2, User, Phone, Mail, Calendar, MapPin, Save, X } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  
  const API_BASE_URL = 'http://localhost/medimeet/api';
  const USER_ID = 1;

  
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/profile.php?id=${USER_ID}`);
      const result = await response.json();
      
      if (result.success) {
        setProfileData(result.data);
        setEditData(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to fetch user data');
      console.error('Error fetching user data:', err);
    } finally {
      setLoading(false);
    }
  };

 
  const updateProfile = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile.php`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: USER_ID,
          data: {
            name: editData.name,
            email: editData.email,
            phone: editData.phone,
            date_of_birth: editData.date_of_birth,
            title: editData.title,
            bio: editData.bio,
            location: editData.location
          }
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setProfileData(editData);
        setEditMode(false);
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile: ' + result.message);
      }
    } catch (err) {
      alert('Error updating profile');
      console.error('Error updating profile:', err);
    }
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditData(profileData);
    setEditMode(false);
  };

  const tabs = [
    { id: 'General', label: 'General', icon: User },
    { id: 'Consultation History', label: 'Consultation History', icon: Calendar },
    { id: 'Patient Documents', label: 'Patient Documents', icon: Mail }
  ];

  if (loading) {
    return (
      <div className="profile-container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div>Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="header">
        <div className="header-left">
          <h1>Profile</h1>
          <p>Hi, {profileData?.name || 'User'}</p>
        </div>
        <div className="header-right">
          <select className="language-selector">
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
          </select>
          <img 
            src={profileData?.avatar || '/api/placeholder/40/40'} 
            alt="User Avatar" 
            className="user-avatar"
          />
          <span style={{ fontSize: '0.875rem', color: '#1a202c' }}>
            {profileData?.name || 'User'}
          </span>
        </div>
      </div>

      <div className="main-content">
        <div className="sidebar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <div
                key={tab.id}
                className={`sidebar-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </div>
            );
          })}
        </div>

        <div className="content-area">
          <div className="content-header">
            <h2 className="content-title">My Profile</h2>
            {!editMode ? (
              <button 
                className="edit-button"
                onClick={() => setEditMode(true)}
              >
                <Edit2 size={14} />
                Edit
              </button>
            ) : (
              <div className="button-group">
                <button 
                  className="edit-button save-button"
                  onClick={updateProfile}
                >
                  <Save size={14} />
                  Save
                </button>
                <button 
                  className="edit-button cancel-button"
                  onClick={cancelEdit}
                >
                  <X size={14} />
                  Cancel
                </button>
              </div>
            )}
          </div>

          {activeTab === 'General' && profileData ? (
            <>
              <div className="profile-header">
                <img 
                  src={profileData.avatar || '/api/placeholder/80/80'} 
                  alt="Profile Avatar" 
                  className="profile-avatar"
                />
                <div className="profile-info">
                  <h2>{profileData.name}</h2>
                  <p>{profileData.title}</p>
                  <p className="profile-location">{profileData.location}</p>
                </div>
              </div>

              <div className="personal-info">
                <div className="section-header">
                  <h3 className="section-title">Personal Information</h3>
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Name</span>
                    {editMode ? (
                      <input
                        type="text"
                        className="info-input"
                        value={editData.name || ''}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    ) : (
                      <span className="info-value">{profileData.name}</span>
                    )}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Date Of Birth</span>
                    {editMode ? (
                      <input
                        type="date"
                        className="info-input"
                        value={editData.date_of_birth || ''}
                        onChange={(e) => handleInputChange('date_of_birth', e.target.value)}
                      />
                    ) : (
                      <span className="info-value">{profileData.date_of_birth}</span>
                    )}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Age</span>
                    <span className="info-value">{profileData.age}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone Number</span>
                    {editMode ? (
                      <input
                        type="tel"
                        className="info-input"
                        value={editData.phone || ''}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    ) : (
                      <span className="info-value">{profileData.phone}</span>
                    )}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email Address</span>
                    {editMode ? (
                      <input
                        type="email"
                        className="info-input"
                        value={editData.email || ''}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    ) : (
                      <span className="info-value">{profileData.email}</span>
                    )}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Bio</span>
                    {editMode ? (
                      <input
                        type="text"
                        className="info-input"
                        value={editData.bio || ''}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                      />
                    ) : (
                      <span className="info-value">{profileData.bio}</span>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="tab-content">
              <p>Content for {activeTab} will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;