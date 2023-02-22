// To fetch the data from the API
async function getRandomUser(){
const response = await fetch("https://randomuser.me/api/");
//To convert resposne to json 
const data = await response.json();
const user = data.results[0];
console.log(data);
displayUser(user); 
}

//Function to display all this data in our app  
function displayUser(user){
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const location = document.getElementById('location');
    const image = document.getElementById('image');

   name.innerText = `${user.name.title}. ${user.name.first} ${user.name.last}`;
   gender.innerText = `${user.gender}`;
   email.innerText = `${user.email}`;
   phone.innerText = `${user.phone}`;
   location.innerText = `${user.location.country}`;
   image.setAttribute("src", `${user.picture.large}`);
}
getRandomUser();  