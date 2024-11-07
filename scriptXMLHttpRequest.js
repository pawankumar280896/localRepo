const divEle = document.querySelector('.card-container');



  function getDetails(id){
    //------------------------------------------------
    const req3 = new XMLHttpRequest();

    req3.open('GET', `https://dummyjson.com/users/${id+1}`);
    req3.send();
  
    req3.addEventListener('load', function () {
     // console.log(req.responseText);
     const data=JSON.parse(this.responseText);  //string to js object
     console.log(data);
     displayUser(data,"beforeend");
    });
    //----------------------------------------------------
    const req = new XMLHttpRequest();

  req.open('GET', `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener('load', function () {
   // console.log(req.responseText);
   const data=JSON.parse(this.responseText);  //string to js object
   console.log(data);
   displayUser(data,"beforeend","other");
  });
   //-----------------------------------
   const req2 = new XMLHttpRequest();

   req2.open('GET', `https://dummyjson.com/users/${id-1}`);
   req2.send();
 
   req2.addEventListener('load', function () {
    if(req2.status===404) return;
    // console.log(req.responseText);
    const data=JSON.parse(this.responseText);  //string to js object
    console.log(data);
    displayUser(data,"afterbegin");
   
  
  });
  //------------------------------------------------
  }
  function displayUser(data,pos,className=''){
    const card= '<div class="user-card '+className+'"><img src='+data.image+' alt="Profile Image" /><h3>'+data.firstName+'</h3><h3>'+data.lastName+'</h3><p class="email">'+data.email+'</p><button class="btn">View Profile</button></div>';
   divEle.insertAdjacentHTML(pos,card);
  }
  getDetails(1);
  


