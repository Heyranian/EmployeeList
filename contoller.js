function addcart({firstname,lastname,email,avatar}) {
    let x =`
    <div class="col-3 box d-flex flex-row ">
        <div class=" p-2">
        <img src="${avatar}" alt="" />
        </div>
        <div class="py-2 d-flex flex-column justify-content-center">
        <div>${firstname}</div>
        <div>${lastname}</div>
        <div>${email}</div>
        </div>
  </div>
    `
    $('#row').append(x);

    
}