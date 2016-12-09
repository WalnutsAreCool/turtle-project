function nSidesL(n,l) {
  for (i=0; i<n; i++) {
    goForward(l)
    nDegreesLeft(360/n)
  }
}

nSidesL(90, 8)
nSidesL(90, 7)
nSidesL(90, 6)
nSidesL(90, 5)