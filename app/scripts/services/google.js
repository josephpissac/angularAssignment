angular.module('sbAdminApp').service('googleService', ['$http', '$q', function ($http, $q) {

    var deferred = $q.defer();
    this.googleApiClientReady = function () {
        gapi.client.setApiKey('AIzaSyB22HBm0NV3U_jGmjs2_lU6c4wl4R8WJwI');
        gapi.client.load('youtube', 'v3', function() {
            var request = gapi.client.youtube.channels.list({
                part: 'snippet',
                channelId: 'UCMDV6J2hWXet7ZCfgrXGgeg',
                channelType:"any",
                maxResults:"8",
                location:"(37.42307,-122.08427)",
                locationRadius:"1000km"
            });
            request.execute(function(response) {
                deferred.resolve(response.result);
            });
        });
        return deferred.promise;
    };
}]);