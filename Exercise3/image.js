var img = ["https://templated.co/items/demos/snapshot/images/thumbs/03.jpg","https://templated.co/items/demos/snapshot/images/thumbs/10.jpg","https://templated.co/items/demos/snapshot/images/thumbs/05.jpg","https://templated.co/items/demos/snapshot/images/thumbs/06.jpg","https://templated.co/items/demos/snapshot/images/thumbs/07.jpg", "https://templated.co/items/demos/snapshot/images/thumbs/09.jpg","https://templated.co/items/demos/snapshot/images/thumbs/03.jpg","https://templated.co/items/demos/snapshot/images/thumbs/10.jpg"];
var h = ["Shivam Agarwal", "Jon Doe", "Ankur Mangal", "Prashant Yadav", "Priya Bajwa", "Abhay Soni", "Shivangi Goel","Ankit Mittal"];
var i = 0;
var b = document.querySelector(".card");
$.ajax({
    url: "https://jsonplaceholder.typicode.com/comments", 
    cache: false,
    success: function(response) {
        result = $(response).find("#result");
      while(i<8)
 
{

   var a = document.createElement("div");
   
a.style.marginBottom =  "1.25rem";
  a.style.backgroundColor="white";
  a.style.boxShadow= "0 4px 8px 0 rgba(0,0,0,0.5)";
  a.style.transition = "0.3s";
 a.style.width = "24%";
  // a.addEventListener("mouseenter", function( event ) {   
  //   // highlight the mouseenter target
  //   event.target.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,1)";
  //   setTimeout(function() {
  //     event.target.style.boxShadow = "";
  //   }, 3000);
  // },false);
var x = document.createElement("IMG");
 x.setAttribute("src", img[i]);
 
   var y = document.createElement("h4");
    y.textContent = "Name:"+result.prevObject[i].name;
  
   y.style.paddingLeft = "1rem";
  var z = document.createElement("p");
  z.textContent = "Email:  "+result.prevObject[i].email;
  z.style.paddingLeft = "1rem";
   
   a.appendChild(x);
   a.appendChild(y);
   a.appendChild(z);
     b.appendChild(a);
  i++;
}
        
    }  
});
   

