var selectedRating = 0;

function rate(rating) {
  selectedRating = rating;
}

function enviar() {
  if (selectedRating === 0) {
    alert("Por favor, selecione uma classificação.");
  } else {
    window.location.href = "thanks.html?rating=" + selectedRating;
  }
}

window.onload = function () {
  var params = new URLSearchParams(window.location.search);
  var rating = params.get("rating");
  document.getElementById("rating").textContent = rating;
}  