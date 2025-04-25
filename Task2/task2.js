const userNameInput = document.getElementById('userNameInput');
const getUserButton = document.getElementById('getUserButton');
const userCity = document.getElementById('userCity');
const apiUrl = "https://jsonplaceholder.typicode.com/users";
getUserButton.addEventListener('click', () => {
  const userName = userNameInput.value.trim(); 

  if (userName === "") {
    userCity.textContent = "Please enter a user name.";  
    return;
  }
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const user = data.find(user => user.name.toLowerCase() === userName.toLowerCase());

      if (user) {
        userCity.textContent = `User's city: ${user.address.city}`;
      } else {
        userCity.textContent = "User not found.";
      }
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
      userCity.textContent = "Error retrieving data.";
    });
});
