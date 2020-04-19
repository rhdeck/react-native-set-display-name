const { ios, android, common } = require("@raydeck/react-native-utilities");
module.exports = {
  commands: [
    {
      name: "set-display-name <newName",
      description: "Set the display name of iOS and Android apps",
      func: async ([newName]) => {
        console.log("Updating app.json...");
        await common.setDisplayName(newName);
        console.log("Updating iOS Info.plist...");
        await ios.setPlistValue("CFBundleDisplayName", newName);
        console.log("Updating android strings.xml...");
        await android.setString("app_name", newName);
        console.log("All done updating display name to ", newName);
      },
    },
  ],
};
