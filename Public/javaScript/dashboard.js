function getusername(user_id) {
    const url = ``;
    const userId = document.getElementById("welcome").textContent
    console.log(userId)
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${ response.status }`);
      }
      const data = response.json()
      return data;
    })
    .then((data) => {
        console.log(user_id)
    }
)}

