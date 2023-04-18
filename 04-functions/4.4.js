function pickLearner(inputAr, n) {
   
    const shuffledAr = inputAr.sort(() => 0.5 - Math.random());
    return shuffledAr.slice(0, n);
}