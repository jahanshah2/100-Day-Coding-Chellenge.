const myData = {
    name: "jahan shah",
    age: 20,
    city: "karachi",
  };
  
  const formattedJsonString = JSON.stringify(myData, null, 2);
  console.log(formattedJsonString);