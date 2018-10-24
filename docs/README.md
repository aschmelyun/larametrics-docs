# Get Started

Larametrics is a self-hosted metrics and notifications platform for Laravel apps. What exactly does that mean? Think of it like a simple version of sentry.io or rollbar.com. **Consisting of a series of watchers keeping an eye on model changes, log entries, and route requests, Larametrics alerts you through email or Slack when one of your notification triggers is met.**

Some example notifications might be:
- Email me when a `notice` or `info` message is logged
- Alert me through Slack **and** email when an `error` is logged
- Let me know when an `Admin` model is created or deleted
- Tell me when someone visits the `/auth/login` route

In addition to notifications, a clean and responsive dashboard is provided thanks to [Tabler](https://tabler.github.io) that displays all of the model changes, log entries, and route requests stored since you installed Larametrics.

![Screenshot of the Larametrics Dashboard](/screenshot-larametrics-dashboard.png)

## Requirements
- PHP 5.6.4 or higher
- Laravel 5.2 or higher
- guzzlehttp/guzzle (if notifications enabled) 

## Installation
Larametrics is installed as a standalone package through Composer:

```bash
composer require aschmelyun/larametrics
```

After Composer finishes up, you'll have to add the following line to your `config/app.php` file if you're not on Laravel 5.5 or higher:

```php
Aschmelyun\Larametrics\LarametricsServiceProvider::class
```

Additionally, you'll want to get the config file copied over and add in the necessary database structure with:

```php
php artisan vendor:publish --provider="Aschmelyun\Larametrics\LarametricsServiceProvider"
php artisan migrate
```

**Note:** Notifications use queued jobs when available to prevent delays in app response time. If you don't have this database table set up already for queues, run `php artisan queue:table && php artisan migrate`. 

## Adding the Dashboard
Once you have the package tied in to your Laravel app, it starts collecting data based off of the default config file and storing it in your database. In order to view the dashboard associated with Larametrics and analyse your metrics and notifications, you'll need to add in a helper method to your routes file of choice.

```php
\Aschmelyun\Larametrics\Larametrics::routes();
```

Include that where (and how) you want the dashboard to appear. For reference, all Larametrics routes are wrapped under a `/metrics` prefix, but you can adjust where you want the routes to appear. All that the above method is doing is referencing the internal routes file for Larametrics, and returning the contents within. 

If you want to make sure that the dashboard can only be viewed by a particular user, or a group of users with specific credentials, I'd recommend that you [create a custom middleware](https://laravel.com/docs/5.7/middleware#registering-middleware) and place the routes helper method in a group controlled by it.

In the following simple example, the Larametrics dashboard and all routes associated with it will only be viewable to users who are signed in (authenticated) to the application. When one of those users visits `/admin/metrics`, they'll have the main dashboard view presented to them.

```php
// routes/web.php
Route::group(['middleware' => 'auth', 'prefix' => 'admin'], function() {
    \Aschmelyun\Larametrics\Larametrics::routes();
});
```