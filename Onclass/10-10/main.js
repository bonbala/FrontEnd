axios({
  method: 'get',
  url: 'https://shop.cyberlearn.vn/api/Product',

})
  .then(function (response) {
    console.log(response.data.content)
    let data = response.data.content
    let content = ""
    data.slice(0,6).map((item,index)=>{
      content+=`
      <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-capitalize">${item.name ? item.name : ""}</h5>
          <p class="card-text">${item.shortDescription}</p>
          <a href="#" class="btn btn-primary">$${item.price}</a>
        </div>
      </div>`
    })

    document.getElementById("content").innerHTML =content
  });

