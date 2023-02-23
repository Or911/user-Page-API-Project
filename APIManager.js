//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
    this.friends = {};
  }

  clearData = function () {
    this.data = {};
  };

  addFriends = function () {
    let name = this.data?.user?.name?.firstName;
    if (!name) {
      return;
    }
    this.friends[name] = this.data;
    this.clearData();
    return this.friends;
  };
  getFriend = function () {
    return this.friends;
  };

  GetUsers = function () {
    return $.ajax({
      method: "GET",
      url: `https://randomuser.me/api/?page=3&results=7&inc=gender,name,nat,picture,location`,
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

  GetQuote = function () {
    return $.ajax({
      method: "GET",
      url: `https://api.kanye.rest/`,
    }).then((quote) => {
      this.data.quote = quote.quote;
      return quote;
    });
  };

  Getpokemon = function () {
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

  GetMeatText = function () {
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
