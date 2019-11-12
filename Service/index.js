const platformClient = require('purecloud-platform-client-v2');
const WebSocket = require('ws');

// Configuration
const environment = 'mypurecloud.ie'; // Set to .de if your PureCloud organization is in Frankfurt
const clientId = '<YOUR CLIENT CREDENTIALS OAUTH CLIENT ID HERE>'; // Create one in your PureCloud org under admin/OAuth. Make sure the type is set to Client Credentials.
const clientSecret = '<YOUR CLIENT CREDENTIALS OAUTH CLIENT SECRET HERE>';
const userPresenceTopic = 'v2.users.<YOUR USER ID HERE>.presence'; // Get the list of user ids by using the Developer Tools API Explorer

// Get a reference to the PureCloud API Client
const client = platformClient.ApiClient.instance;
client.setEnvironment(environment);

// Get a reference to the Notifications API
const notificationsApi = new platformClient.NotificationsApi();

var webSocket;

// Login
client.loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => {
    // Do authenticated things
    console.log('Logged in!');

    // Get a channel
    notificationsApi.postNotificationsChannels().then((channel) => {

      // Open the channel
      webSocket = new WebSocket(channel.connectUri);

      // Log a message in the console (F12 in Google Chrome) that the web socket is opened
      webSocket.on('open', () => {
        console.log('Websocket open!');
      });

      // Reach on incoming messages from PureCloud
      webSocket.on('message', (message) => {
        console.log('Message:', JSON.parse(message));
      });

      // Subscribe to a topic
      notificationsApi.putNotificationsChannelSubscriptions(channel.id, [{
        id: userPresenceTopic
      }]);

    }).catch((error) => {
      console.error(error);
    })
  })
  .catch((err) => {
    // Handle failure response
    console.error(err);
  });
