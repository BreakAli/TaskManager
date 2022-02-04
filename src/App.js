import Header from './components/Header'
import React from 'react' // needed to use class base instead of function
import Tasks from './components/Tasks'

const App = () => {
 
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
    
  ) 
}

export default App;
