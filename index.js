
      // Function to fetch data using Promise
      function fetchData(url) {
        return new Promise((resolve, reject) => {
          fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
              }
              return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
      }

      // Function to display user data
      function displayUserData(user) {
        const userDataDiv = document.getElementsByClassName('userData')[0];
        userDataDiv.innerHTML = `<h2>User Data</h2>
                                 <p>Name: ${user.name}</p>
                                 <p>Email: ${user.email}</p>`;
      }

      // Function to display a random dog image
      function displayDogImage(imageUrl) {
        const dogImageDiv = document.getElementsByClassName('dogImage')[0];
        dogImageDiv.innerHTML = `<h2>Random Dog Image</h2>
                                 <img src="${imageUrl}" alt="Random Dog">`;
      }

      // Function to display Chuck Norris joke
      function displayJoke(joke) {
        const jokeDataDiv = document.getElementsByClassName('jokeData')[0];
        jokeDataDiv.innerHTML = `<h2>Chuck Norris Joke</h2>
                                  <p>${joke.value}</p>`;
      }

      // Fetch user data
      fetchData('https://jsonplaceholder.typicode.com/users/1')
        .then(user => {
          displayUserData(user);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });

      // Fetch random dog image
      fetchData('https://dog.ceo/api/breeds/image/random')
        .then(dogData => {
          displayDogImage(dogData.message);
        })
        .catch(error => {
          console.error('Error fetching dog image:', error);
        });

      // Fetch Chuck Norris joke
      fetchData('https://api.chucknorris.io/jokes/random')
        .then(jokeData => {
          displayJoke(jokeData);
        })
        .catch(error => {
          console.error('Error fetching Chuck Norris joke:', error);
        });
    