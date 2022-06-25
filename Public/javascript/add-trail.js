async function newFormHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/trails`, {
        method: 'POST',
        body: JSON.stringify({
          name,
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
    