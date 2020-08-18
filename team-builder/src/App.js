import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './Form'
import TeamMemberCard from './TeamMemberCard'

const initialTeamMember = [
  {
    id: Math.random(),
    name: 'Michael',
    email: 'michael@michael.com',
    role: '',
  },]

const initialData = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [teamMember, setTeamMember] = useState([])
  const [formData, setFormData] = useState(initialData)

const formUpdate = (name, data) =>{
  setFormData({...initialData, [name]: data})
}

  return (
    <div>
    <Form/>
    {
      initialTeamMember.map(member =>{
        return (
          <TeamMemberCard key={member.id} details={member}/>
        )
      })
    }
    </div>
  );
}

export default App;
