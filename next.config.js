const path = require("path");
const withImages = withImages();

module.exports = withImages({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/*")],
  },
});
