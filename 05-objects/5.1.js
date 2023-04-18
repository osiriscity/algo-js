function askTvSerie() {
    const name = prompt("What's the name of your favorite TV serie?");
    const productionYear = parseInt(prompt("What year was it produced?"));
    const castMembers = [];
  
        while (true) {
      const castMember = prompt("Enter a cast member's name (leave blank if done):");
      if (castMember === "") {
        break;
      }
      castMembers.push(castMember);
    }

    const tvSerie = {
      name: name,
      productionYear: productionYear,
      castMembers: castMembers,
    };
  
    return tvSerie;
}
  
const myFavoriteTvSerie = askTvSerie();
console.log(myFavoriteTvSerie);
  