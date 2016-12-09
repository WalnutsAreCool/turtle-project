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
function nCircles(n)
for (var j=1; j<n+1; j++) {
  nSidesL(90,n+1-j)
  nDegreesLeft(90)
  goInvisible(15)
  nDegreesRight(90)
}

nCircles(2)


//nSidesL(90, 2)
//nSidesL(90, 1)
//
//nDegreesLeft(90)
//goForward(30)