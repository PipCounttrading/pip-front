module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      strokeWidth: {
        5: "5px",
      },
      fontFamily: {
        yester: ["Yesteryear", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
