async function newFormHandler() {
  const tname = document.querySelector('input[name="tname"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const miles = document.querySelector('input[name="miles"]').value;
  const kilometers = document.querySelector('input[name="kilometers"]').value;
  const difficulty = document.querySelector('select[name="difficulty"]').value;
  const blurb = document.querySelector('input[name="blurb"]').value;


    const response = await fetch(`/api/trails`, {
        method: 'POST',
        body: JSON.stringify({
          tname,
          address,
          miles,
          kilometers,
          difficulty,
          blurb
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

    if (response.ok) {
        document.location.replace('/create-trails/');
      } else {
        alert(response.statusText);
      }
    }

document.getElementById('add-new-trail').addEventListener('onClick', newFormHandler);
    