async function editFormHandler(event) {
    event.preventDefault();

    const tname = document.querySelector('input[name="tname"]').value.trim();
    const address = document.querySelector('input[name="address"]').value.trim();
    const miles = document.querySelector('input[name="miles"]').value.trim();
    const kilometers = document.querySelector('input[name="kilometers"]').value.trim();
    const lat = document.querySelector('input[name="lat"]').value.trim();
    const lon = document.querySelector('input[name="lon"]').value.trim();
    const difficulty = document.querySelector('select[name="difficulty"]').value.trim();
    const blurb = document.querySelector('input[name="blurb"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/trails/${id}`, {
        method: 'PUT',
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
        document.location.replace('/create-trails/');
      } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-trail-form').addEventListener('submit', editFormHandler);