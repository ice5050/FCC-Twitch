var TwitchService = function() {
  var TWITCH_API_URL = "https://api.twitch.tv/kraken/streams/";

  return {
    getInformation: getInformation
  };

  function getInformation(channel, callback) {
    var script = document.createElement('script');
    script.src = TWITCH_API_URL + channel + "?callback=" + callback.name;
    document.getElementsByTagName('body')[0].appendChild(script);
  }
}
