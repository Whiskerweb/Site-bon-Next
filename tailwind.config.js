module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "theme": {
          "secondary1": "#F3E8E2",
          "neutral-dark": "#191818",
          "neutral-light": "#FBFAF9",
          "accent1": "#F3E8E2",
          "accent2": "#D8BFAF",
          "primary1": "#D1510A",
          "secondary2": "#E0D1CB",
          "primary2": "#923A06"
        },
        "gray": {
          "white": "#FFFFFF"
        },
        "foreground": "#191818",
        "background": "#FBFAF9"
      },
      "spacing": {
        "Unit": "16px",
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "TwoUnits": "32px",
        "FourUnits": "64px",
        "FiveUnits": "80px",
        "SixUnits": "96px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "inputradius": "24px",
        "Round": "50%",
        "imageradius": "8px",
        "cardradius": "8px",
        "Radius8": "8px",
        "Radius2": "2px",
        "buttonradius": "24px"
      },
      "scale": {
        "XLarge": "192px",
        "XXLarge": "288px",
        "XSmall": "1000",
        "Large": "144px",
        "MaxWidth": "1400px",
        "Medium": "96px",
        "Small": "48px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}