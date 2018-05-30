Java.perform(function() {
    var messageDigest = Java.use("java.security.MessageDigest");
    if (messageDigest) {
        messageDigest.getInstance.overloads[0].implementation = function(algorithm) {
            console.log("call MessageDigest.getInstance for " + algorithm);
            return this.getInstance.overloads[0].apply(this, arguments);
        };
        messageDigest.getInstance.overloads[1].implementation = function(algorithm) {
            console.log("call MessageDigest.getInstance for " + algorithm);
            return this.getInstance.overloads[1].apply(this, arguments);
        };
        messageDigest.getInstance.overloads[2].implementation = function(algorithm) {
            console.log("call MessageDigest.getInstance for " + algorithm);
            return this.getInstance.overloads[2].apply(this, arguments);
        };
    }
});