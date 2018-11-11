(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(e,t,i){"use strict";i.r(t);var s=i(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("There are also two .env variables you'll need to set depending on if you use notifications:")]),e._v(" "),i("ul",[e._m(2),e._v(" "),i("li",[i("strong",[e._v("LARAMETRICS_NOTIFICATION_SLACK_WEBHOOK")]),e._v(", a Slack webhook configured for receiving requests and adding messages to a specified channel. More info "),i("a",{attrs:{href:"https://get.slack.help/hc/en-us/articles/115005265063-Incoming-WebHooks-for-Slack",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),i("p",[e._v("By default, when requestsWatched is enabled, all requests are watched. If you would like Larametrics to skip a particular path and not record that route, add it to this array. Wildcard matching is enabled as well, using asterisks (*) in a route name.")]),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),i("p",[e._v("If this is set to true (and you're also watching for requests in your application) Larametrics will ignore all requests that come from its dashboard or any of its associated endpoints.")]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"config-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Config Reference")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Configuring Larametrics for use within your Laravel app takes place mainly in the "),t("code",[this._v("config/larametrics.php")]),this._v(" file. Each item is broken down in the comment lines above it, describing what that item does and what value(s) it's anticipating.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("LARAMETRICS_NOTIFICATION_EMAIL")]),this._v(", the address that all email notifications will be routed to")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#models","aria-hidden":"true"}},[this._v("#")]),this._v(" Models")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"modelswatched"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modelswatched","aria-hidden":"true"}},[this._v("#")]),this._v(" modelsWatched")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("array")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("['App\\User']")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The array of models that you want Larametrics to monitor changes to. Full namespaces are required. Any model placed in this array will be watched for create, update, and delete events, with all information related to an event added as a record in the "),t("code",[this._v("larametrics_models")]),this._v(" database table.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"modelswatchedexpiredays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modelswatchedexpiredays","aria-hidden":"true"}},[this._v("#")]),this._v(" modelsWatchedExpireDays")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("integer")])]),this._v(" "),t("li",[this._v("Default "),t("code",[this._v("30")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The amount of time, in days, that models are stored in the database for. The expiration time is only checked during a model's entry or update in the application. Setting this value to "),t("code",[this._v("0")]),this._v(" will prevent any model records from expiring.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"modelswatchedexpireamount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modelswatchedexpireamount","aria-hidden":"true"}},[this._v("#")]),this._v(" modelsWatchedExpireAmount")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("integer")])]),this._v(" "),t("li",[this._v("Default "),t("code",[this._v("1200")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The max amount of models that should be stored in the database at any given time. This is only checked during a model's entry or update in the application. Setting this value to "),t("code",[this._v("0")]),this._v(" allows for an unlimited amount of model records to be stored.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logs","aria-hidden":"true"}},[this._v("#")]),this._v(" Logs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"logswatched"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logswatched","aria-hidden":"true"}},[this._v("#")]),this._v(" logsWatched")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("boolean")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("true")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Setting this to true allows Larametrics to watch for entries to the main application log and record them in the "),t("code",[this._v("larametrics_logs")]),this._v(" table. As of right now there's no filter for specific log levels (e.g. info, error, notice), all are either watched or not watched depending on this value.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"logswatchedexpiredays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logswatchedexpiredays","aria-hidden":"true"}},[this._v("#")]),this._v(" logsWatchedExpireDays")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("integer")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("0")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The amount of time, in days, that log entries are stored in the database for. The expiration time is only checked during a log entry's creation or update in the application. Setting this value to "),t("code",[this._v("0")]),this._v(" will prevent any log entries from expiring.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"logswatchedexpireamount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logswatchedexpireamount","aria-hidden":"true"}},[this._v("#")]),this._v(" logsWatchedExpireAmount")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("integer")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("0")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The max amount of log entries that should be stored in the database at any given time. This is only checked during a log entry's creation or update in the application. Setting this value to "),t("code",[this._v("0")]),this._v(" allows for an unlimited amount of log entries to be stored.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requests","aria-hidden":"true"}},[this._v("#")]),this._v(" Requests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"requestswatched"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestswatched","aria-hidden":"true"}},[this._v("#")]),this._v(" requestsWatched")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("boolean")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("false")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Setting this to true allows Larametrics to watch for requests sent from and received to your application, recording them in the "),t("code",[this._v("larametrics_requests")]),this._v(" table. As of right now there's no filter for specific request types (e.g. GET, POST, DELETE), all are either watched or not watched depending on this value.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"requeststoskip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requeststoskip","aria-hidden":"true"}},[this._v("#")]),this._v(" requestsToSkip")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("array")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("['login']")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"requestswatchedexpiredays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestswatchedexpiredays","aria-hidden":"true"}},[this._v("#")]),this._v(" requestsWatchedExpireDays")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("integer")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("10")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The amount of time, in days, that request records are stored in the database for. The expiration time is only checked during a request record's creation or update in the application. Setting this value to "),t("code",[this._v("0")]),this._v(" will prevent any log entries from expiring. This isn't recommend if you have a moderately active application as the table will fill up fast.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"requestswatchedexpireamount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestswatchedexpireamount","aria-hidden":"true"}},[this._v("#")]),this._v(" requestsWatchedExpireAmount")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("integer")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("10000")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The max amount of request records that should be stored in the database at any given time. This is only checked during a request record's creation or update in the application. Setting this value to "),t("code",[this._v("0")]),this._v(" allows for an unlimited amount of request records to be stored.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ignorelarametricsrequests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ignorelarametricsrequests","aria-hidden":"true"}},[this._v("#")]),this._v(" ignoreLarametricsRequests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("boolean")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("true")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"notifications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notifications","aria-hidden":"true"}},[this._v("#")]),this._v(" Notifications")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"notificationmethods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notificationmethods","aria-hidden":"true"}},[this._v("#")]),this._v(" notificationMethods")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("array")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("['email' => env('LARAMETRICS_NOTIFICATION_EMAIL', 'admin@localhost'), 'slack' => env('LARAMETRICS_NOTIFICATION_SLACK_WEBHOOK', '')]")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If for some reason you want to hard-code in your notification email or Slack webhook URL, you can do so here. By default, these values are tied to "),t("code",[this._v(".env")]),this._v(" variables which you can set on a per-environment basis.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"misc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#misc","aria-hidden":"true"}},[this._v("#")]),this._v(" Misc")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"hideunwatchedmenuitems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hideunwatchedmenuitems","aria-hidden":"true"}},[this._v("#")]),this._v(" hideUnwatchedMenuItems")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Type: "),t("code",[this._v("boolean")])]),this._v(" "),t("li",[this._v("Default: "),t("code",[this._v("true")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Setting this to true hides any items that aren't being watched from the navigation bar and main landing page of the dashboard. For instance, if you have this set to "),t("code",[this._v("true")]),this._v(" and "),t("a",{attrs:{href:"#logswatched"}},[this._v("logsWatched")]),this._v(" set to "),t("code",[this._v("false")]),this._v(", Logs would be removed from the main nav and the overview card for logs would be hidden from the dashboard landing page.")])}],!1,null,null,null);a.options.__file="config-reference.md";t.default=a.exports}}]);