import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import TeamMemberCard from "./TeamMemberCard";

const initialTeamMember = [
  {
    id: Math.random(),
    name: "Josh",
    email: "Josh@Josh.com",
    role: "Backend Engineer ",
  },
];

const initialData = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMember] = useState(initialTeamMember);
  const [formData, setFormData] = useState(initialData);

  const formUpdate = (name, data) => {
    setFormData({ ...formData, [name]: data });
  };

  const formSubmit = () => {
    const newteamMember = {
      id: Math.random(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      role: formData.role,
    };
    setTeamMember([...teamMembers, newteamMember]);
    setFormData(initialData)
  };

  return (
    <div className='all'>
      <Form values={formData} update={formUpdate} submit={formSubmit} />
      {teamMembers.map((member) => {
        return <TeamMemberCard key={member.id} details={member} />;
      })}
    </div>
  );
}

export default App;
