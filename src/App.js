import Header from './components/Header'
import React from 'react' // needed to use class base instead of function
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    { 
        id:1, 
        text:'Doctors Appt', 
        day:'Feb 5th at 2:30pm', 
        remind:true,
    },
    { 
        id:2, 
        text:'Meeting at School', 
        day:'Feb 6th at 2:30pm', 
        remind:true,
    },
    { 
        id:3, 
        text:'Food Shopping', 
        day:'Feb 7th at 2:30pm', 
        remind:true,
    },
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks = {tasks}/>
    </div>
    
  ) 
}

export default App;
