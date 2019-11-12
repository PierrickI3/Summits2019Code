# Genesys ECCC Advanced Partner Summits code

These 2 applications (service & web) were created during the Genesys Advanced Partner Summits organized by the Genesys EMEA Cloud Competence Center group in October 2019.

>This code is provided as-is. Do not contact Genesys Customer Care if you have issues.

### Global Requirements

* Access to a PureCloud organization

## Service

> If you are interested in the web page instead, scroll down to the `Web` section below

Contains code to get real-time notifications about user presence (status) changes.

#### Requirements

* Install [node.js](https://nodejs.org/).
* A PureCloud Client Credentials OAuth client id. You can create one in your own org in the `Admin/OAuth` section.
* A PureCloud user id to monitor. You can get the list of user ids using the [API Explorer](https://developer.mypurecloud.ie/developer-tools/#/api-explorer) (after clicking on this link, you may want to change the region if your org is not in .ie).

#### Getting started
* Open the index.js file
* Configure the variables on top appropriately
  * `environment`: your PureCloud environment (e.g. `mypurecloud.ie`) based on where your PureCloud organization is located
  * `clientId`: Your Client Credentials OAuth client id. This can be created in your PureCloud organization under `Admin/Integrations/OAuth`.
  * `clientSecret`: Your Client Credentials OAuth client secret.
  * `userPresenceTopic`: Set this to `v2.users.<YOUR USER ID>.presence` with `<YOUR USER ID>` being the PureCloud user id you wish to monitor status changes from.
* Run `npm start` and change the status for the user you are monitoring to receive real-time notifications.

## Web

Contains code to get real-time notifications about queue member changes. It also contains a 2nd page (index2.html) which shows how the same data can be displayed in a chart.

#### Requirements

* A PureCloud Implicit Grant OAuth client id. You can create one in your own org in the `Admin/OAuth` section.
* A PureCloud queue id to monitor. You can get the list of queue ids using the [API Explorer](https://developer.mypurecloud.ie/developer-tools/#/api-explorer) (after clicking on this link, you may want to change the region if your org is not in .ie).
* A web server. You can use [Visual Studio Code](https://code.visualstudio.com/) with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) which exposes the page on `https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer` by default.

#### Getting started

* Open the index.html file
* Locate the `<script type="text/javascript>` section at the end of the file
* Update the clientId variable with your own OAuth client id (implicit grant)
* Update the queueUsersPresenceTopic variable with your own queue id.
* Browse to http://<DOMAIN>/index.html in your web browser (only tested with Google Chrome)

#### Same page with Chart

* Open the index2.html file
* Locate the `<script type="text/javascript>` section at the end of the file
* Update the clientId variable with your own OAuth client id (implicit grant)
* Update the queueUsersPresenceTopic variable with your own queue id.
* Browse to http://<DOMAIN>/index2.html in your web browser (only tested with Google Chrome)
