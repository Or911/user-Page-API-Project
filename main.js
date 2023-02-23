const render = new Renderer();
const APImanger = new APIManager();

$("#displayUser").on("click", function () {
  APImanger.clearData();
  APImanger.GetUsers().then((user) => render.userRender(user));
  APImanger.GetQuote().then((text) => render.quoteRender(text.quote));
  APImanger.GetMeatText().then((MeatText) => render.meatRender(MeatText));
  APImanger.Getpokemon().then((Pokemon) => render.PokemonRender(Pokemon));
});

$("#SaveUser").on("click", function () {
  let friendsList = APImanger.addFriends();
  if (!friendsList) {
    return;
  }
  render.friendsRender(friendsList);
  render.SelectBoxUserRender(friendsList)
});

$("#louadUser").on("click", function (){
  let userSelected = $("option:selected" ).text()
  let friendsList = APImanger.getFriend();
  if (!userSelected){
    return
  }
  render.loadUserScreen(userSelected , friendsList)
})


