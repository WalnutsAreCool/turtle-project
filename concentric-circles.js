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

for (i=1; i<10; i++) {
  nSidesL(90,10-i)
  nDegreesLeft(90)
  goInvisible(15)
  nDegreesRight(90)
}
//nSidesL(90, 2)
//nSidesL(90, 1)
//
//nDegreesLeft(90)
//goForward(30)