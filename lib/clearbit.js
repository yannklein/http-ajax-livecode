const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

const email = document.querySelector("#userEmail");
const name = document.querySelector("#userName");
const bio = document.querySelector("#userBio");
const location = document.querySelector("#userLocation");

const displayStalkingData = (personData) => {
  email.innerText = personData.email;
  name.innerText = personData.name.fullName;
  bio.innerText = personData.bio;
  location.innerText = personData.location;
}
const fetchClearbit = (email) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  // console.log(event);
  // Step 2.5: Fetch an API: and get stalking data
  fetch(url, {
    headers: {
      Authorization: authorization
    }
  })
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      // Step 3: Change the DOM: display the stalking data in the tds
      displayStalkingData(data.person);
    });
}

export { fetchClearbit };
