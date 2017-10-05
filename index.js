let irc = require('irc');

let client = new irc.Client('irc.quakenet.org', 'xiisabutt', {
    userName: 'xiisabutt',
    realName: 'xiisabutt',
    autoRejoin: true,
    floodProtection: true,
    channels: [],
});

function say_xi_is_a_butt_randomly_every_three_to_six_minutes() {
  client.say('#r/globaloffensive', 'xi is a butt');

  let rnd = (Math.floor(Math.random() * 6) + 3) * 60 * 1000;

  console.log('Next message will be in ' + rnd + ' ms');

  setTimeout(say_xi_is_a_butt_randomly_every_three_to_six_minutes, rnd);
}

client.addListener('registered', function(message) {
  console.log('registered event ', message);
  client.say('Q@CServe.quakenet.org', 'AUTH xiisabutt pwhere');

  client.join('#r/globaloffensive');

  say_xi_is_a_butt_randomly_every_three_to_six_minutes();
})

/*client.addListener('raw', function(message) {
  console.log('raw event ', message);
})*/

client.addListener('error', function(message) {
    console.log('BOT ERROR: ', message);
    client.say('#r/globaloffensive', 'zGrav, warning! BOT ERROR: ' + message);
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

client.addListener('pm', function (from, message) {
    console.log(from + ' => BOT: ' + message);
});
