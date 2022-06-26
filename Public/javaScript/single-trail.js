const trailId = await fetch(`/api/trails/${id}`, {
    method: 'GET',
    body: JSON.stringify({
        tname,
        address,
        miles,
        kilometers,
        // lat,
        // lon,
        difficulty,
        blurb, 
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});