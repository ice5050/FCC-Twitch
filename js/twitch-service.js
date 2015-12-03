var TwitchService = (function() {
  var TWITCH_STREAMS_API_URL = "https://api.twitch.tv/kraken/streams/";
  var TWITCH_CHANNELS_API_URL = "https://api.twitch.tv/kraken/channels/";

  return {
    getStream: getStream,
    getChannel: getChannel
  };

  function getStream(channel, successCallback, errorCallback) {
    var url = TWITCH_STREAMS_API_URL + channel + "?callback=?";
    $.getJSON(url).done(successCallback).fail(errorCallback);
  }

  function getChannel(channel, successCallback, errorCallback) {
    var url = TWITCH_CHANNELS_API_URL + channel + "?callback=?";
    $.getJSON(url).done(successCallback).fail(errorCallback);
  }
})();
