const posturl = 'http://localhost:3001/api/trails';

fetch(posturl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${ response.status }`);
    }
    const data = response.json()
    return data;
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
        //find the holder for the posts
        let holder = document.querySelector('#post-holder');
        //generate the internals of the post
        let { name, address, miles, kilometers, difficulty, blurb } = data[i];
        let postText = `
                <div class="col-6">
                    <div class="holder">
                    <div class="container">
                        <div class="row post-title-line">
                            <div class="col-8">
                                <h2>${name}</h2>
                            </div>
                            <div class="col-4 difficulty ${difficulty}">
                                <h2>${difficulty}</h2>
                            </div>
                        </div>
                        <div class="row">
                            <h4>${address}</h4>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p>miles: ${miles.toString()}<br>kilometers: ${kilometers.toString()}</p>
                            </div>
                            <div class="col-6">
                                <p>${cutBlurb(blurb, 120)}</p>
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="col poster">
                                <h4>Posted by: ${data[i].user.username}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        `

        holder.insertAdjacentHTML('beforeend', postText);
    }
  });

function cutBlurb(blurb, length) {
    if (blurb.length >= length) {
        let shortBlurb = blurb.substring(0, length) + '...'
        return shortBlurb
    }
    return blurb
}