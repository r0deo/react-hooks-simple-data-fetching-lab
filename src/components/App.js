import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch a random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the dog image URL
        setDogImage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
