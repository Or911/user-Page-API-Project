class Renderer {
  userRender(user) {
    $(".user-container").empty();
    const source = $("#user-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template(user);
    $(".user-container").append(newHtml);
  }

  quoteRender(randomQuote) {
    $(".quote-container").empty();
    const source = $("#quote-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template({ randomQuote });
    $(".quote-container").append(newHtml);
  }
  PokemonRender(pokemon) {
    $(".pokemon-container").empty();
    const source = $("#Pokemon-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template(pokemon);
    $(".pokemon-container").append(newHtml);
  }
  meatRender(meatText) {
    $(".meat-container").empty();
    const source = $("#meat-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template({ meatText });
    $(".meat-container").append(newHtml);
  }
  friendsRender(friends) {
    let nameFriends = Object.keys(friends);
    $(".friends-container").empty();
    const source = $("#friends-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template({ data: nameFriends });
    $(".friends-container").append(newHtml);
  }

  SelectBoxUserRender(friends) {
    let nameFriends = Object.keys(friends);
    $(".friendsSelect-container").empty();
    const source = $("#friendsSelect-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template({ data: nameFriends });
    $(".friendsSelect-container").append(newHtml);

  }
  loadUserScreen(name, friendsList) {
    let friend = friendsList[name];
    this.userRender(friend.user);
    this.quoteRender(friend.quote);
    this.meatRender(friend.meatText);
    this.PokemonRender(friend.pokemon);
  }
}
