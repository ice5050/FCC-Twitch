var TwitchService = (function() {
  var TWITCH_STREAMS_API_URL = "https://api.twitch.tv/kraken/streams/";
  var TWITCH_CHANNELS_API_URL = "https://api.twitch.tv/kraken/channels/";

  return {
    getStream: getStream,
    getChannel: getChannel
  };

  function getStream(account) {
    var url = TWITCH_STREAMS_API_URL + account + "?callback=?";
    return $.getJSON(url);
  }

  function getChannel(account) {
    var url = TWITCH_CHANNELS_API_URL + account + "?callback=?";
    return $.getJSON(url);
  }
})();
