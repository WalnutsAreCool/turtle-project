function nSidesL(n,l) {
  for (i=0; i<n; i++) {
    goForward(l)
    nDegreesLeft(360/n)
  }
}

//nSidesL(90, 8)
//nSidesL(90, 7)
//nSidesL(90, 6)
//nSidesL(90, 5)
//nSidesL(90, 4)
//nSidesL(90, 3)

$("#circle-button").click(function() { 
  var numberOfCircles = $("#circle").val()
  nCircles(numberOfCircles)
})

function nCircles(f)
for (var w=0; w<f+1; w++) {
  nSidesL(90,f-w)
  nDegreesLeft(90)
  goInvisible(15)
  nDegreesRight(90)
}

$("#art-button").click(function() { 
  weirdCircle()
})

function weirdCircle() {
for (q=0; q<12; q++){
nSpiralRing(4)
nSpiralRing(3)
}}


//nSidesL(90, 2)
//nSidesL(90, 1)
//
//nDegreesLeft(90)
//goForward(30)