# Config Reference
Configuring Larametrics for use within your Laravel app takes place mainly in the `config/larametrics.php` file. Each item is broken down in the comment lines above it, describing what that item does and what value(s) it's anticipating. 

There are also two .env variables you'll need to set depending on if you use notifications:

- **LARAMETRICS_NOTIFICATION_EMAIL**, the address that all email notifications will be routed to
- **LARAMETRICS_NOTIFICATION_SLACK_WEBHOOK**, a Slack webhook configured for receiving requests and adding messages to a specified channel. More info [here](https://get.slack.help/hc/en-us/articles/115005265063-Incoming-WebHooks-for-Slack).

## Models
### modelsWatched
- Type: `array`
- Default: `['App\User']`

The array of models that you want Larametrics to monitor changes to. Full namespaces are required. Any model placed in this array will be watched for create, update, and delete events, with all information related to an event added as a record in the `larametrics_models` database table.

### modelsWatchedExpireDays
- Type: `integer`
- Default `30`

The amount of time, in days, that models are stored in the database for. The expiration time is only checked during a model's entry or update in the application. Setting this value to `0` will prevent any model records from expiring.

### modelsWatchedExpireAmount
- Type: `integer`
- Default `1200`

The max amount of models that should be stored in the database at any given time. This is only checked during a model's entry or update in the application. Setting this value to `0` allows for an unlimited amount of model records to be stored.

## Logs
### logsWatched
- Type: `boolean`
- Default: `true`

Setting this to true allows Larametrics to watch for entries to the main application log and record them in the `larametrics_logs` table. As of right now there's no filter for specific log levels (e.g. info, error, notice), all are either watched or not watched depending on this value.

### logsWatchedExpireDays
- Type: `integer`
- Default: `0`

The amount of time, in days, that log entries are stored in the database for. The expiration time is only checked during a log entry's creation or update in the application. Setting this value to `0` will prevent any log entries from expiring.

### logsWatchedExpireAmount
- Type: `integer`
- Default: `0`

The max amount of log entries that should be stored in the database at any given time. This is only checked during a log entry's creation or update in the application. Setting this value to `0` allows for an unlimited amount of log entries to be stored.

## Requests
### requestsWatched
- Type: `boolean`
- Default: `false`

Setting this to true allows Larametrics to watch for requests sent from and received to your application, recording them in the `larametrics_requests` table. As of right now there's no filter for specific request types (e.g. GET, POST, DELETE), all are either watched or not watched depending on this value.

### requestsToSkip
- Type: `array`
- Default: `['login']`

By default, when requestsWatched is enabled, all requests are watched. If you would like Larametrics to skip a particular path and not record that route, add it to this array. Wildcard matching is enabled as well, using asterisks (*) in a route name.

### requestsWatchedExpireDays
- Type: `integer`
- Default: `10`

The amount of time, in days, that request records are stored in the database for. The expiration time is only checked during a request record's creation or update in the application. Setting this value to `0` will prevent any log entries from expiring. This isn't recommend if you have a moderately active application as the table will fill up fast.

### requestsWatchedExpireAmount
- Type: `integer`
- Default: `10000`

The max amount of request records that should be stored in the database at any given time. This is only checked during a request record's creation or update in the application. Setting this value to `0` allows for an unlimited amount of request records to be stored.

### ignoreLarametricsRequests
- Type: `boolean`
- Default: `true`

If this is set to true (and you're also watching for requests in your application) Larametrics will ignore all requests that come from its dashboard or any of its associated endpoints.

## Notifications
### notificationMethods
- Type: `array`
- Default: `['email' => env('LARAMETRICS_NOTIFICATION_EMAIL', 'admin@localhost'), 'slack' => env('LARAMETRICS_NOTIFICATION_SLACK_WEBHOOK', '')]`

If for some reason you want to hard-code in your notification email or Slack webhook URL, you can do so here. By default, these values are tied to `.env` variables which you can set on a per-environment basis.

## Misc
### hideUnwatchedMenuItems
- Type: `boolean`
- Default: `true`

Setting this to true hides any items that aren't being watched from the navigation bar and main landing page of the dashboard. For instance, if you have this set to `true` and [logsWatched](#logswatched) set to `false`, Logs would be removed from the main nav and the overview card for logs would be hidden from the dashboard landing page.