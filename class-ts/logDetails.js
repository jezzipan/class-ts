"use strict";
//type alias serve p/ evitar repeticao de codigos
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user + ".");
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('ios');
logDetails(123, "frutas");
logDetails("123", "frutas");
logInfo(123, "Jessica");
logInfo("123", "Jessica");
