import React, { useState } from "react";
import { setProfile } from "../Services/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Services/firebase";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [profileData, setProfileData] = useState({
    name: "",
    surname: "",
    username: "",
    bio: "",
    country: "",
    season: "",
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileSize = file.size / 1024 / 1024;
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (!allowedTypes.includes(file.type)) {
      setError("Only jpeg, png, and gif are allowed");
      return;
    }

    if (fileSize > 5) {
      setError("File size should be less than 5MB");
      return;
    }

    setProfileData((prevState) => ({ ...prevState, profileImage: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setProfile(user.uid, profileData, profileData.profileImage);
      navigate("/gardenform");
    } catch (error) {
      // Handle the error appropriately, e.g. display an error message to the user
      console.error("Failed to set profile:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="bio"
        placeholder="Bio"
        onChange={handleInputChange}
      />
      <select name="country" onChange={handleInputChange}>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
      <input
        type="text"
        name="season"
        placeholder="Current Season"
        onChange={handleInputChange}
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateProfile;
