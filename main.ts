namespace SpriteKind {
    export const MainSystemFile = SpriteKind.create()
}
// Add Numbers for Pre-Added Setting
// Don't use them for custom settings or insert numbers into them. They will be stored as their name, which shouldn't have numbers, otherwise it will overwrite the main system settings D:
function Create_file (text: string) {
    if (text == "1") {
        blockSettings.writeString("main.setting.storage.base", "1111")
        currentsessionstoragecboy += 1
        mainstorage += 1
    } else if (text == "2") {
        blockSettings.writeString("main.folder.storage.viewer", "1111")
        currentsessionstorageapps += 1
        mainstorage += 1
    }
}
let currentsessionstorageapps = 0
let mainstorage = 0
let currentsessionstoragecboy = 0
Create_file("1")
Create_file("2")
game.onUpdate(function () {
    let currentsessionstorageuser = 0
    console.logValue("Total Settings", blockSettings.readNumber("main.setting.storage"))
    console.logValue("Total Settings (in Cboy)", blockSettings.readNumber("cboy.setting.storage"))
    console.logValue("Total Settings (in User)", blockSettings.readNumber("user.setting.storage"))
    console.logValue("Total Settings (in Apps)", blockSettings.readNumber("apps.setting.storage"))
    blockSettings.writeNumber("main.setting.storage", mainstorage)
    blockSettings.writeNumber("cboy.setting.storage", currentsessionstoragecboy)
    blockSettings.writeNumber("user.setting.storage", currentsessionstorageuser)
    blockSettings.writeNumber("apps.setting.storage", currentsessionstorageapps)
    mainstorage = blockSettings.readNumber("cboy.setting.storage") + (blockSettings.readNumber("user.setting.storage") + blockSettings.readNumber("apps.setting.storage"))
})
