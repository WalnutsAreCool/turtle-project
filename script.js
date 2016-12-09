$("#polygon-button").click(function() { 
  var numberOfSides = $("#polygon").val()
  nSides(numberOfSides)
})

$("#star-button").click(function() { 
  var numberOfPoints = $("#star").val()
  nPoints(numberOfPoints)
})

$("#ring-button").click(function() { 
  var typeOfRing = $("#ring").val()
  drawRing(typeOfRing)
})

$("#star-ring-button").click(function() { 
  var typeOfStarRing = $("#star-ring").val()
  nStarRing(typeOfStarRing)
})

$("#spiral-button").click(function() { 
  var typeOfSpiral = $("#spiral").val()
  nSpiral(typeOfSpiral)
})

$("#spiral-ring-button").click(function() { 
  var typeOfSpiralRing = $("#spiral-ring").val()
  nSpiralRing(typeOfSpiralRing)
})

$("#Teleport-Button").click(function() { 
  var TeleportCoordinate = $("#xTeleport").val()
  Teleport(TeleportCoordinate)
})


function Teleport(n,m) {
  turtle.animate({
    left: n,
    bottom: m
  })
}

function nPoints(n) {
  for (i=0; i<n; i++) {
    goForward(360/n)
    nDegreesLeft(720/n)
    goForward(360/n)
    nDegreesRight(360/n)
  }
}

function nSides(n) {
  for (i=0; i<n; i++) {
    goForward(720/n)
    nDegreesLeft(360/n)
  }
}

function drawRing(n) {
  for (i=0; i<n; i++) {
    goForward(360/n)
    nDegreesLeft(360/n)
  }
  for (j=0; j<360/n; j++){
    goForward(360/n)
    nDegreesLeft((360/n)+1)
  }
}

function nStarRing(n) {
  for (j=0; j<360/n; j++){
    goForward(360/n)
    nDegreesLeft((720/n)+1)
    goForward(360/n)
    nDegreesRight((360/n))
  }
}

function nSpiral(n) {
  for (j=0; j<n; j++){
    goForward(180/n)
    nDegreesLeft((720/n))
    goForward(360/n)
    nDegreesRight((360/n))
  }  
}

function nSpiralRing(n) {
  for (j=0; j<360/n; j++){
    goForward(180/n)
    nDegreesLeft((720/n)+1)
    goForward(360/n)
    nDegreesRight((360/n))
  }  
}
