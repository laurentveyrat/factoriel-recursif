let chiffreSaisi = process.argv[2];

function factorielle(n) {
    if (n > 1) {
        return n * factorielle(n - 1)
    }
    return 1
}

console.log(factorielle(chiffreSaisi))