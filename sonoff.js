exports.action = function(data){   

  //var cmdson = "cmnd=Power%20On"; var cmdsoff = "cmnd=Power%20off";
    var cmdsonoff=data.cmdsonoff
    var ipsonoff = data.ipsonoff
        
    var passwordsonoff = "xxxxxxxxxxxxxxxxxxx"
    var useronoff = "admin" 

    var http = require('http');
    
      var options = {
        hostname: ipsonoff,
        port: 80,
        path: '/cm?&user=' + useronoff + '&password=' + passwordsonoff + '&' + cmdsonoff
      };

      http.get(options, function(res) {
       
        
            res.on('data', function(chunk) {
         
            });

            
            res.on('end', function() {
             ClaraIASpeech('ok')
            });
      
      }).on('error', function(e) {
        ClaraIASpeech("erreur dans la commande")
        });

return
}