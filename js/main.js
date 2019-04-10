var houseNumberButton = document.getElementById("house-number-lookup");
var onePersonLookup = [30, 40, 102, 103, 165, 215, 313, 412, 419, 524, 712, 720, 828, 841, 910, 1062, 1506, 2766, 3544, 3900, 4637, 4719, 8501, 12214];
var familyLookup = [209, 374, 401, 977, 1005, 1062, 1144, 1321, 2267, 2503, 3160, 3400, 3439, 3753, 3838, 5183, 7027, 7483, 23437];
houseNumberButton.addEventListener("click", lookup);
document.getElementById('house-number').addEventListener('keypress', function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    console.log("ENTER");
    lookup();
  }
});

function lookup() {
  var houseNumber = Number(document.getElementById("house-number").value);
  console.log(houseNumber);
  if (onePersonLookup.includes(houseNumber)) {
    location.href = "/rsvp1";
  } else if (familyLookup.includes(houseNumber)) {
    location.href = "/rsvp-family";
  } else {
    location.href = "/rsvp2";
  }
}

document.getElementById("mainNav").addEventListener("click", hideMenu);
function hideMenu() {
  document.getElementById("menu-btn").checked = false;
}

