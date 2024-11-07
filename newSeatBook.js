// Movie List Array (Sample)
// const movieList = [
//     { name: "Flash", price: 7 },
//     { name: "Avengers", price: 10 },
//     { name: "Spider-Man", price: 8 },
//     { name: "Batman", price: 9 }
//   ];
  // //Create you project here from scratch
// const moviesList = [
//     { movieName: "Flash", price: 7 },
//     { movieName: "Spiderman", price: 5 },
//     { movieName: "Batman", price: 4 },
//   ];

//   // DOM Elements
//   const selectMovie = document.getElementById("selectMovie");
//   const movieName = document.getElementById("movieName");
//   const moviePrice = document.getElementById("moviePrice");
//   const totalPrice = document.getElementById("totalPrice");
//   const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
//   const proceedBtn = document.getElementById("proceedBtn");
//   const cancelBtn = document.getElementById("cancelBtn");
//   const seatCont = document.querySelectorAll("#seatCont .seat");
  
//   // Default movie info
//   let selectedMovie = movieList[0]; // default movie is "Flash"
//   let selectedSeats = [];
//   let currentTotalPrice = 0;
  
//   // Populate movie options in dropdown
//   movieList.forEach((movie, index) => {
//     const option = document.createElement("option");
//     option.value = index;
//     option.textContent = movie.name;
//     selectMovie.appendChild(option);
//   });
  
//   // Initial movie details
//   movieName.textContent = selectedMovie.name;
//   moviePrice.textContent = `$ ${selectedMovie.price}`;
//   totalPrice.textContent = `$ 0`;
  
//   // Handle Movie Selection
//   selectMovie.addEventListener("change", (e) => {
//     const selectedIndex = e.target.value;
//     selectedMovie = movieList[selectedIndex];
    
//     // Update the movie name and price
//     movieName.textContent = selectedMovie.name;
//     moviePrice.textContent = `$ ${selectedMovie.price}`;
    
//     // Update the price calculation
//     updatePrice();
//   });
  
//   // Update the total price based on selected seats
//   function updatePrice() {
//     currentTotalPrice = selectedSeats.length * selectedMovie.price;
//     totalPrice.textContent = `$ ${currentTotalPrice}`;
//   }
  
//   // Handle Seat Selection
//   seatCont.forEach((seat) => {
//     if (!seat.classList.contains("occupied")) {
//       seat.addEventListener("click", () => {
//         const seatIndex = Array.from(seatCont).indexOf(seat);
        
//         if (seat.classList.contains("selected")) {
//           // Deselect seat
//           seat.classList.remove("selected");
//           selectedSeats = selectedSeats.filter((index) => index !== seatIndex);
//         } else {
//           // Select seat
//           seat.classList.add("selected");
//           selectedSeats.push(seatIndex);
//         }
  
//         // Update the selected seats display
//         updateSelectedSeats();
//         updatePrice();
//       });
//     }
//   });
  
//   // Update the selected seats section
//   function updateSelectedSeats() {
//     selectedSeatsHolder.innerHTML = selectedSeats.length
//       ? selectedSeats.map((index) => `${index + 1}`).join(" ")
//       : "<span>No Seat Selected</span>";
//   }
  
//   // Handle the "Continue" button
//   proceedBtn.addEventListener("click", () => {
//     if (selectedSeats.length === 0) {
//       alert("Oops no seat selected.");
//     } else {
//       alert("Yayy! Your Seats have been booked.");
  
//       // Mark selected seats as occupied
//       selectedSeats.forEach((seatIndex) => {
//         seatCont[seatIndex].classList.remove("selected");
//         seatCont[seatIndex].classList.add("occupied");
//       });
  
//       // Reset everything
//       selectedSeats = [];
//       currentTotalPrice = 0;
//       totalPrice.textContent = "$ 0";
//       selectedSeatsHolder.innerHTML = "<span>No Seat Selected</span>";
//     }
//   });
  
//   // Handle the "Cancel" button
//   cancelBtn.addEventListener("click", () => {
//     // Deselect all selected seats
//     selectedSeats.forEach((seatIndex) => {
//       seatCont[seatIndex].classList.remove("selected");
//     });
  
//     // Reset price and seat selection
//     selectedSeats = [];
//     currentTotalPrice = 0;
//     totalPrice.textContent = "$ 0";
//     selectedSeatsHolder.innerHTML = "<span>No Seat Selected</span>";
//   });
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
  const selectMovieEl = document.getElementById("selectMovie");
  
  const allSeatCont = document.querySelectorAll("#seatCont .seat");
  console.log(allSeatCont)
  
  const selectedSeatsHolderEl = document.getElementById("selectedSeatsHolder");
  
  const moviePriceEl = document.getElementById("moviePrice");
  
  const cancelBtnEL = document.getElementById("cancelBtn");
  
  const proceedBtnEl = document.getElementById("proceedBtn");
  
  moviesList.forEach((movie) => {
    const optionEl = document.createElement("option");
    optionEl.innerHTML = `${movie.movieName} $${movie.price}`;
    selectMovieEl.appendChild(optionEl);
  });
  
  let moviePrice = 7;
  let currentMovieName = `Tom and Jerry 2021`;
  
  selectMovieEl.addEventListener("input", (e) => {
    let movieName = e.target.value.split("");
    let dollarIndex = movieName.indexOf("$");
    let movie = movieName.splice(0, dollarIndex - 1).join("");
    currentMovieName = movie;
    moviePrice = JSON.parse(movieName.splice(2, dollarIndex).join(""));
  
    updatMovieName(movie, moviePrice);
    updatePrice(moviePrice, takenSeats.length);
  });
  //
  let initialSeatValue = 0;
  allSeatCont.forEach((seat) => {
    const attr = document.createAttribute("data-seatid");
    attr.value = ++initialSeatValue;
    seat.setAttributeNode(attr);
  });
  
  let seatContEl = document.querySelectorAll("#seatCont .seat:not(.occupied)");
  // console.log(seatContEl);
  let takenSeats = [];
  
  seatContEl.forEach((seat) => {
    seat.addEventListener("click", (e) => {
      let isSelected = seat.classList.contains("selected");
  
      let seatId = JSON.parse(seat.dataset.seatid);
  
      if (!isSelected) {
        seat.classList.add("selected");
        takenSeats.push(seatId);
        takenSeats = [...new Set(takenSeats)];
      } else if (isSelected) {
        seat.classList.remove("selected");
  
        takenSeats = takenSeats.filter((seat) => {
          // console.log(seat,seatId)
          if (seat !== seatId) {
            return seat;
          }
        });
      }
      updateSeats();
      updatePrice(moviePrice, takenSeats.length);
    },{ once: true });
  });
  
  function updateSeats() {
    selectedSeatsHolderEl.innerHTML = ``;
  
    takenSeats.forEach((seat) => {
      const seatHolder = document.createElement("div");
      seatHolder.classList.add("selectedSeat");
      selectedSeatsHolderEl.appendChild(seatHolder);
  
      seatHolder.innerHTML = seat;
    });
  
    if (!takenSeats.length) {
      const spanEl = document.createElement("span");
      spanEl.classList.add("noSelected");
      spanEl.innerHTML = `NO SEAT SELECTED`;
      selectedSeatsHolderEl.appendChild(spanEl);
    }
  
    seatCount();
  }
  
  function seatCount() {
    const numberOfSeatEl = document.getElementById("numberOfSeat");
    numberOfSeatEl.innerHTML = takenSeats.length;
  }
  
  function updatMovieName(movieName, price) {
    const movieNameEl = document.getElementById("movieName");
    const moviePriceEl = document.getElementById("moviePrice");
    movieNameEl.innerHTML = movieName;
    moviePriceEl.innerHTML = `$ ${price}`;
    
  }
  
  function updatePrice(price, seats) {
    const totalPriceEl = document.getElementById("totalPrice");
    let total = seats * price;
    totalPriceEl.innerHTML = `$ ${total}`;
  }
  
  cancelBtn.addEventListener("click", (e) => {
    cancelSeats();
  });
  
  function cancelSeats() {
    takenSeats = [];
    seatContEl.forEach((seat) => {
      seat.classList.remove("selected");
    });
    updatePrice(0, 0);
    updateSeats();
  }
  
  proceedBtnEl.addEventListener("click", (e) => {
    if (takenSeats.length) {
      alert("Yayy! Your Seats has been booked");
      uncancelSeats();
    } else {
      alert("Oops no seat Selected");
    }
  });
  
  function uncancelSeats() {
    takenSeats = [];
    console.log(seatContEl);
    seatContEl.forEach((seat) => {
      if(seat.classList.contains("selected")){
        console.log(seat);
      seat.classList.remove("selected");
        seat.classList.add("seat")
      seat.classList.add("occupied");
      }
    });
    updatePrice(0, 0);
    updateSeats();
  }
  