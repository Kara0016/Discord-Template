module.exports = {
    name: "commandName",
    description: "commandDescription",
    botPerms: ["Permissions_required_by_the_bot"],
    userPerms: ["Permissions_required_by_the_user"],
    ownerOnly: false, // True if the command can be used by owner only,
    options: null, // If options are required, add accordingly else keep it null
    run: async(client, interaction, args) => {
    // Command here
    }
}
