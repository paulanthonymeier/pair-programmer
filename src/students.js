// const users = new Array();
// // console.log(users);

// const getUserData = () => {
//   axios.get(`https://randomuser.me/api/?results=50`)
//       .then(response => {
//         const data = response.data.results;
//         data.map(userObj => {
//           console.log(userObj);
//         })
//       })
//       .catch(err =>  console.log(err));
// };
// getUserData();

// const userData = [];


const fs = require('fs');

const data = fs.readFileSync('./userData.json');

const paresdData = JSON.parse(data);
console.log(paresdData.users.name.first);

