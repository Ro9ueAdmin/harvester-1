var myApp = angular.module('starter', ['ionic'])
    .run(function($ionicPlatform, $ionicPopup){
        $ionicPlatform.ready(function(){
            if(window.Connection){
                if(navigator.connection.type == Connection.NONE){
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "Your device is not connected to the Internet."
                    })
                    .then(function(result){
                        if(!result){
                            ionic.Platform.exitApp();
                        }else{
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
        });
    });