var GenerateSeed = function () {
    var window;
    var length       = 81;                            
    var chars        = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9"; 
    var randomValues = new Uint32Array(length);       
    var result       = new Array(length);             
    
    window.crypto.getRandomValues(randomValues);      
    
    var cursor = 0;                                   
    for (var i = 0; i < randomValues.length; i++) {   
        cursor += randomValues[i];                    
        result[i] = chars[cursor % chars.length];     
    }
    
    return result.join('');                           
    };
    
    GenerateSeed()