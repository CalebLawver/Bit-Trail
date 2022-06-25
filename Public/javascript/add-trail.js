async function newFormHandler(event) {
    event.preventDefault();

  const tname = document.querySelector('input[name="tname"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const miles = document.querySelector('input[name="miles"]').value;
  const kilometers = document.querySelector('input[name="kilometers"]').value;
  const lat = document.querySelector('input[name="lat"]').value;
  const lon = document.querySelector('input[name="lon"]').value;
  const difficulty = document.querySelector('select[name="difficulty"]').value;
  const blurb = document.querySelector('input[name="blurb"]').value;


    const response = await fetch(`/api/trails`, {
        method: 'POST',
        body: JSON.stringify({
          tname,
          address,
          miles,
          kilometers,
          lat,
          lon,
          difficulty,
          blurb

        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

    if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
    
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
    