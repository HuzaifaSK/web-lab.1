import React from "react";
import ProfileCard from "./component/ProfileCard";


const App = () => {
  return (
    <div className="App">
      <h1>Profile Cards</h1>
      {/* Passing props to the ProfileCard component */}
      <ProfileCard 
        name="Fahad" 
        age={30} 
        occupation="Engineer" 
        location="New York" 
      />
      <ProfileCard 
        name="Sarah" 
        age={25} 
        occupation="Designer" 
        location="London" 
      />
      <ProfileCard 
        name="John" 
        age={35} 
        occupation="Doctor" 
        location="Sydney" 
      />
    </div>
  );
};

export default App;