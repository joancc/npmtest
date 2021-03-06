// We've exported the complete defaluts for Tailwind.
// Look for the "Gestionix" to identify addons
module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    colors: {
      // Gestionix
      primary: {
        default: "var(--primary-500)",
        600: "var(--primary-600)",
        550: "var(--primary-550)",
        500: "var(--primary-500)",
        400: "var(--primary-400)"
      },
      secondary: {
        default: "var(--secondary-300)",
        300: "var(--secondary-300)",
        200: "var(--secondary-200)",
        100: "var(--secondary-100)",
        50: "var(--secondary-50)"
      },
      alert: {
        default: "var(--alert)"
      },
      success: {
        default: "var(--success)"
      },
      pending: {
        default: "var(--pending)"
      },
      underlined: {
        default: "var(--underlined)"
      },
      // Tailwind defaults
      transparent: "transparent",
      black: "var(--black)",
      white: "var(--white)",
      gray: {
        700: "var(--gray-700)",
        600: "var(--gray-600)",
        500: "var(--gray-500)",
        400: "var(--gray-400)",
        300: "var(--gray-300)",
        200: "var(--gray-200)",
        100: "var(--gray-100)"
      },
      sales: {
        1: "var(--sales-1)",
        2: "var(--sales-2)",
        3: "var(--sales-3)"
      },
      expenses: {
        1: "var(--expenses-1)",
        2: "var(--expenses-2)",
        3: "var(--expenses-3)"
      },
      avatar: {
        0: "var(--avatar-0)",
        1: "var(--avatar-1)",
        2: "var(--avatar-2)",
        3: "var(--avatar-3)",
        4: "var(--avatar-4)",
        5: "var(--avatar-5)",
        6: "var(--avatar-6)",
        7: "var(--avatar-7)",
        8: "var(--avatar-8)",
        9: "var(--avatar-9)",
        10: "var(--avatar-10)",
        11: "var(--avatar-11)",
        12: "var(--avatar-12)",
        13: "var(--avatar-13)",
        14: "var(--avatar-14)",
        15: "var(--avatar-15)",
        16: "var(--avatar-16)",
        17: "var(--avatar-17)",
        18: "var(--avatar-18)",
        19: "var(--avatar-19)",
        20: "var(--avatar-20)",
        21: "var(--avatar-21)",
        22: "var(--avatar-22)",
        23: "var(--avatar-23)",
        24: "var(--avatar-24)",
        25: "var(--avatar-25)",
        26: "var(--avatar-26)",
        27: "var(--avatar-27)",
        28: "var(--avatar-28)",
        29: "var(--avatar-29)",
        30: "var(--avatar-30)",
        31: "var(--avatar-31)",
        32: "var(--avatar-32)",
        33: "var(--avatar-33)",
        34: "var(--avatar-34)",
        35: "var(--avatar-35)",
        36: "var(--avatar-36)",
        37: "var(--avatar-37)",
        38: "var(--avatar-38)",
        39: "var(--avatar-39)",
        40: "var(--avatar-40)",
        41: "var(--avatar-41)",
        42: "var(--avatar-42)",
        43: "var(--avatar-43)",
        44: "var(--avatar-44)",
        45: "var(--avatar-45)",
        46: "var(--avatar-46)",
        47: "var(--avatar-47)",
        48: "var(--avatar-48)",
        49: "var(--avatar-49)",
        50: "var(--avatar-0)"
      }
    },
    spacing: {
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "13": "3.25rem",
      "14": "3.5rem",
      "15": "3.75rem",
      "16": "4rem",
      "17": "4.25rem",
      "18": "4.5rem",
      "20": "5rem",
      "21": "5.25rem",
      "22": "5.5rem",
      "24": "6rem",
      "28": "7rem",
      "30": "7.5rem",
      "31": "7.75rem",
      "32": "8rem",
      "36": "9rem",
      "38": "9.5rem",
      "40": "10rem",
      "41": "10.25rem",
      "42": "10.5rem",
      "44": "11rem",
      "46": "11.5rem",
      "47": "11.75rem",
      "48": "12rem",
      "50": "12.5rem",
      "56": "14rem",
      "64": "16rem",
      "66": "16.5rem",
      "68": "17rem",
      "82": "20.5rem",
      "94": "23.5rem",
      "99": "24.75rem",
      "100": "25rem",
      "108": "27rem",
      "116": "29rem",
      "-px": "-1px",
      "-0": "-0",
      "-1": "-0.25rem",
      "-2": "-0.5rem",
      "-3": "-0.75rem",
      "-4": "-1rem",
      "-5": "-1.25rem",
      "-6": "-1.5rem",
      "-8": "-2rem",
      "-10": "-2.5rem",
      "-12": "-3rem",
      "-16": "-4rem",
      "-20": "-5rem",
      "-24": "-6rem",
      "-32": "-8rem"
    },
    screens: {
      // sm: '640px',
      md: "768px",
      // lg: '1024px',
      // xl: '1280px',
      de: "768px"
    },
    fontFamily: {
      gothic: ["Muli", "serif"],
      nunito: ["Muli", "serif"],
      muli: ["Muli", "serif"],
      // poppins: ['Poppins', 'serif'],
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontSize: {
      "2xs": ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      // Use custom sizes from GX design system
      // overline: '.75rem', prefer gx-overline defined in index.scss
      caption: ".75rem",
      // base: '1rem',
      icon: "1rem",
      overline: ".75rem",
      h1: "6rem",
      h2: "4rem",
      h3: "3rem",
      h4: "2.5rem",
      h5: "1.75rem",
      h6: "1.25rem" // prefer gx-h1...h5 defined in index.scss, which also define line-height, font-family and spacing
    },
    fontWeight: {
      // hairline: 100,
      // thin: 200,
      // light: 300,
      normal: 300,
      // medium: 500,
      // semibold: 600,
      bold: 600 // We only have one bold weight
      // extrabold: 800,
      // black: 900,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },
    letterSpacing: {
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em"
    },
    textColor: theme => theme("colors"),
    backgroundColor: theme => theme("colors"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    borderColor: theme => {
      return global.Object.assign(
        {
          default: theme("colors.gray.300", "currentColor")
        },
        theme("colors")
      );
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      default: ".25rem",
      lg: ".5rem",
      xl: "1rem",
      xxl: "2rem",
      full: "9999px"
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      move: "move",
      text: "text",
      "not-allowed": "not-allowed"
    },
    width: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "5/6": "83.33333%",
      "fit-content": "fit-content",
      full: "100%",
      screen: "100vw"
    }),
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh"
    }),
    minWidth: {
      "0": "0",
      "38": "9.5rem",
      "43": "10.75rem",
      "108": "27rem",
      full: "100%"
    },
    minHeight: {
      "0": "0",
      full: "100%",
      screen: "100vh"
    },
    maxWidth: {
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%"
    },
    maxHeight: {
      full: "100%",
      screen: "100vh"
    },
    padding: theme => theme("spacing"),
    margin: theme => ({
      auto: "auto",
      ...theme("spacing")
    }),
    negativeMargin: theme => theme("spacing"),
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    boxShadow: {
      // default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      // md: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      // lg:
      //   '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      // xl:
      //   '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      // '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      // inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      // outline: '0 0 0 3px rgba(66,153,225,0.5)',

      none: "none", // Define custom Gestionix shadows
      "1": "0px 0px 0px rgba(0, 0, 0, 0)",
      "2": "0px 2px 3px rgba(0, 0, 0, 0.14)",
      "3": "0px 4px 5px rgba(0, 0, 0, 0.2)",
      "4": "0px 2px 3px rgba(0, 0, 0, 0.4)",
      "5": "0px 8px 10px rgba(0, 0, 0, 0.14)",
      "6": "0px 28px 38px rgba(0, 0, 0, 0.28)",
      "7": "0px 24px 38px rgba(0, 0, 0, 0.4)",
      "8": "0px 12px 22px rgba(0, 0, 0, 0.7)",
      "9": "1px 0px 3px rgba(0, 0, 0, 0.16)",
      "mo-inset-1": "inset -1px 1px 5px 1px rgba(0,0,0,0.75)"
    },
    zIndex: {
      auto: "auto",
      "-1": "-1",
      "0": 0,
      "1": 1,
      "10": 10,
      "20": 20,
      "30": 30,
      "40": 40,
      "50": 50,
      "51": 51,
      BottomMenu: 60, // This should be the highest index for mobile, and is applied to the shortcuts popup from the bottom menu
      "100": 100,
      "101": 101
    },
    opacity: {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "80": ".80",
      "100": "1"
    },
    fill: {
      current: "currentColor"
    },
    stroke: {
      current: "currentColor"
    },
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexGrow: {
      "0": 0,
      default: 1
    },
    flexShrink: {
      "0": 0,
      default: 1
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    inset: {
      "0": 0,
      auto: "auto"
    },
    container: {}
  },
  variants: {
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: [
      "responsive",
      "hover",
      "group-hover",
      "focus",
      "focus-within",
      "active"
    ], // Gestionix adds 'focus-within'
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: [],
    borderColor: ["responsive", "hover", "focus", "focus-within"], // Gestionix adds 'focus-within'
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive", "hover"],
    cursor: ["responsive"],
    display: ["responsive", "group-hover"],
    flexDirection: ["responsive"],
    flexWrap: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    justifyContent: ["responsive"],
    alignContent: ["responsive"],
    flex: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    negativeMargin: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive"],
    outline: ["focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    inset: ["responsive"],
    resize: ["responsive"],
    boxShadow: ["responsive", "hover", "focus", "active"],
    fill: [],
    stroke: [],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "group-hover", "focus", "active"],
    fontSize: ["responsive"],
    fontStyle: ["responsive"],
    textTransform: ["responsive"],
    textDecoration: ["responsive", "hover", "focus"],
    fontSmoothing: ["responsive"],
    letterSpacing: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    wordBreak: ["responsive"],
    width: ["responsive"],
    zIndex: ["responsive"]
  },
  corePlugins: {
    fonts: false // Gestionix disable fonts since they don't really change internally. Gothic for everything and Nunito for h1, h2...
  },
  plugins: []
};
