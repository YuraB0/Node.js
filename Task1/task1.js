const apiUrl = "https://jsonplaceholder.typicode.com/users";
fetch(apiUrl)
  .then(response => response.json()) 
  .then(data => {
    const usersList = document.querySelector('.usersList'); 
    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name; 
      usersList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error("Error fetching user data:", error);  
  });
