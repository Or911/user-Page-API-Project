class Renderer {
  userRender = function (user) {
    $(".user-container").empty();
    const source = $("#user-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template(user);
    $(".user-container").append(newHtml);
  };

  quoteRender = function (randomQuote) {
    $(".quote-container").empty();
    const source = $("#quote-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template({ randomQuote });
    $(".quote-container").append(newHtml);
  };
  PokemonRender = function (pokemon) {
    $(".pokemon-container").empty();
    const source = $("#Pokemon-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template(pokemon);
    $(".pokemon-container").append(newHtml);
  };
  meatRender = function (meatText) {
    $(".meat-container").empty();
    const source = $("#meat-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template({ meatText });
    $(".meat-container").append(newHtml);
  };
  friendsRender = function (friends) {
    let nameFriends = Object.keys(friends);
    $(".friends-container").empty();
    const source = $("#friends-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template({ data: nameFriends });
    $(".friends-container").append(newHtml);
  };

  SelectBoxUserRender = function (friends){
    let nameFriends = Object.keys(friends);
    $(".friendsSelect-container").empty();
    const source = $("#friendsSelect-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template({ data: nameFriends });
    $(".friendsSelect-container").append(newHtml);


    // = $("option:selected" ).text()
  }
  loadUserScreen = function (name , friendsList){
    let friend = friendsList[name]
    this.userRender(friend.user)
    this.quoteRender(friend.quote)
    this.meatRender(friend.meatText)
    this.PokemonRender(friend.pokemon)
  }
}
