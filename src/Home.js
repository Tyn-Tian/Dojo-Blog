import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Christian");
  const [age, setAge] = useState(21);
  
  const handleClick = () => {
    setName("Budi");
    setAge(25);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>My name is { name }, { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
