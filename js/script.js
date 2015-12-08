$(document).ready(function() {
  updateTwitchAccounts();

  $("#search-box").on("input", function(e) {
    var text = $(e.currentTarget).val();
    $(".account").removeClass("hide");
    $(".account").filter(function() {
      return $(this).data("account").toLowerCase().indexOf(text.toLowerCase()) === -1;
    }).addClass("hide");
  });
});

function updateTwitchAccounts() {
  var TWITCH_ACCOUNTS = [
    "freecodecamp",
    "storbeck",
    "terakilobyte",
    "habathcx",
    "RobotCaleb",
    "thomasballinger",
    "noobs2ninjas",
    "beohoff"
  ];

  for (var i = 0; i < TWITCH_ACCOUNTS.length; i += 1) {
    var account = TWITCH_ACCOUNTS[i];
    updateTwitchAccount(account);
  }
}

function updateTwitchAccount(account) {
  var $account = $(".twitch-accounts [data-account='" + account + "']"),
      $accountAvatar = $account.children(".avatar"),
      $accountLink = $account.children(".account-link");
  TwitchService.getChannel(account).done(function(data) {
    var displayName = data.display_name,
        logo = data.logo,
        url = data.url;
    $accountAvatar.attr("src", logo || "http://api.adorable.io/avatars/150/");
    $accountLink
      .text(displayName)
      .attr("href", url);
  });
  TwitchService.getStream(account).done(function(data) {
    var isStreaming = !!data.stream;
    $accountLink.removeClass("online offline deleted");
    if (isStreaming) {
      $accountLink.addClass("online");
    }else {
      $accountLink.addClass("offline");
    }
  }).fail(function() {
    $accountLink.removeClass("online offline");
    $accountLink.addClass("deleted");
  });
}
