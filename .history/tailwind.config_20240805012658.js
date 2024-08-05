module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
            extend: {
                  colors: {
                        primary: "#E6C068",
                        secondary: "#CFBDEC",
                        my_black: "#000000",
                        my_white: "#E8E0D5",
                        warning: "#AA5E46",
                        my_green: "#237263",
                        my_red: "#C83349",
                        my_blue: "#1A759F",
                  },
                  fontFamily: {
                    montserrat: ['Montserrat', 'sans-serif'],
                    buffalo: ['Buffalo', 'sans-serif'],
                  },
                  boxShadow: {
                    'yellow': '0 4px 6px rgba(230, 192, 104, 0.5), 0 10px 15px rgba(230, 192, 104, 0.5)',
                  },
            }
      },
      plugins: []
};
