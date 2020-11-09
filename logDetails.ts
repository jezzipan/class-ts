//type alias serve p/ evitar repeticao de codigos

type Uid = number | string | undefined

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}

type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'ios' // definir o que usar

function renderPlatform(platform: Platform) {
    return platform
}

renderPlatform('ios')

logDetails(123, "frutas");
logDetails("123", "frutas");

logInfo(123, "Jessica");
logInfo("123", "Jessica");

