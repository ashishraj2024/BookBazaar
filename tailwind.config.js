const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Include the flowbite content function
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
}


