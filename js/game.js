const numDivs = 36;
const maxHits = 10;

let hits = 0;
let miss = 0;
let firstHitTime = 0;

function round() {
  if (hits !== maxHits) {
  $(".target").removeClass("target");
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  let n = divSelector.substring(6);
  $(".target").text(n);
}
  // FIXME: тут надо определять при первом клике firstHitTime

  else {
    endGame();
  }
}

function handleClick(event) {
  
  if ($(event.target).hasClass("target")) {
    $(".target").text("");
    $(".miss").removeClass("miss");
    hits++;
    round();
  }
  else {
    $(event.target).addClass("miss");
    miss++;
  }
}


function endGame() {
  $(".target").removeClass("target");
  $(".target").text("");
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#misses").text(miss);
  $(".grid-wrapper").addClass("d-none");
  $("#win-message").removeClass("d-none");
}

  $("#button-start").click(function(){
    $(".grid-item").click(handleClick);
    round();
    $(".start").addClass("d-none");
    $(".reload").removeClass("d-none");
    firstHitTime = getTimestamp();
  });

  

  $("#button-reload").click(function() {
    location.reload();
  })


$(document).ready();
