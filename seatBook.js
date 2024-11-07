//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
let movieNames=document.getElementById("movieName");
let moviePrices=document.getElementById("moviePrice");
let dates=document.querySelector(".date");
let selectMovies=document.getElementById("selectMovie");
let totalPrices=document.getElementById("totalPrice");

let currentMovie = moviesList[0];
let selectedSeats = [];
//selectMovies.appendChild(dates);
moviesList.forEach((value,index)=>{
let createOption=document.createElement("option");
createOption.textContent=(value.movieName+" "+value.price);
 createOption.value=(value.movieName+" "+value.price);
 createOption.value = value.movieName;
 createOption.dataset.price = value.price;
selectMovies.appendChild(createOption);

});

// movieNames.value = moviesList[0].movieName;
// moviePrices.value = `$${moviesList[0].price}`;
totalPrices.textContent=`$${moviesList[0].price}`;

selectMovies.addEventListener("change", (event) => {
  const selectedOption = event.target.selectedOptions[0];
  const selectedMovieName = selectedOption.value;
  const selectedMoviePrice = selectedOption.dataset.price;

  // Update movie name and price display
  movieNames.textContent = selectedMovieName;
  moviePrices.textContent = `$${selectedMoviePrice}`;
  //totalPrices.textContent=`$${selectedMoviePrice}`;
  //console.log(`You selected: ${selectedMovieName} - Price: $${selectedMoviePrice}`);
  updateTotalPrice();
});
function updateTotalPrice() {
  const totalPrice = selectedSeats.length * currentMovie.price;
  totalPriceElement.textContent = `$${totalPrice}`;
}
/*------------------Seats-------------------------------------*/


let seatoccupied=document.querySelectorAll(".seat .occupied");
let seat=document.querySelectorAll(".seat");
const seatContainer = document.querySelector("#seatCont");
const seatCont = document.querySelectorAll("#seatCont .seat");

seatCont.forEach((seat) => {
  if (!seat.classList.contains("occupied")) {
    seat.addEventListener("click", () => {
      const seatIndex = Array.from(seatCont).indexOf(seat);
      
      //console.log(seatIndex);
      if (seat.classList.contains("selected")) {
        // Deselect seat
        seat.classList.remove("selected");
        selectedSeats = selectedSeats.filter((index) => index !== seatIndex);
        //console.log(selectedSeats);
      } else {
        // Select seat
        seat.classList.add("selected");
        selectedSeats.push(seatIndex);
      }

      // Update the selected seats display
      updateSelectedSeats();
      updatePrice();
    });
  }
});







