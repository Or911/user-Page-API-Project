
class APIManager {
  constructor() {
    this.mainUser = {}
    this.data = {};
    this.friends = {};
  }

  clearData () {
    this.data = {};
  };

  addFriends () {
    let name = this.data?.user?.name?.firstName;
    if (!name) {
      return;
    }
    this.friends[name] = this.data;
    this.clearData();
    return this.friends;
  };
  getFriend () {
    return this.friends;
  };

  GetUsers () {
    return $.ajax({
      method: "GET",
      url: `https://randomuser.me/api/?page=3&results=7&inc=gender,name,picture,location`,
    }).then((users) => {
      let user = users.results.shift();
      let img = user.picture.large;
      let name = { firstName: user.name.first, lastName: user.name.last };
      let state = user.location.state;
      let city = user.location.city;
      user = { img, name, state, city };
      this.data.user = user;
      return user;
    });
  };

  GetQuote () {
    return $.ajax({
      method: "GET",
      url: `https://api.kanye.rest/`,
    }).then((quote) => {
      this.data.quote = quote.quote;
      return quote;
    });
  };

  Getpokemon () {
    let number = Math.random() * 949;
    number -= number % 2;
    return $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${number}`,
    }).then((newPokemon) => {
      let pokemon = {};
      pokemon.name =
        newPokemon.name[0].toUpperCase() + newPokemon.name.slice(1);
      pokemon.img = newPokemon.sprites.front_default;
      this.data.pokemon = pokemon;
      return pokemon;
    });
  };

  GetMeatText () {
    return $.ajax({
      method: "GET",
      url: `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`,
    }).then((text) => {
      let meatTxt = text[0];
      this.data.meatText = meatTxt;
      return meatTxt;
    });
  };
}
