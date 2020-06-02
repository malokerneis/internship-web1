import {
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  grayColor
} from "assets/jss/material-dashboard-react.js";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "15px"
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid " + grayColor[10]
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: grayColor[1]
  },
  mutedText: {
    color: grayColor[1]
  },
  primaryText: {
    color: primaryColor[0],
    align: 'justify'
  },
  infoText: {
    color: infoColor[0],
    align: 'right'
  },
  successText: {
    color: successColor[0]
  },
  warningText: {
    color: warningColor[0]
  },
  dangerText: {
    color: dangerColor[0]
  },
  successTitleText:{
    color: successColor[0],
    fontSize: "22px",

  },
  mutedTitleText: {
      color: grayColor[1],
      fontSize: "22px",
    },
    primaryTitleText: {
      color: primaryColor[0],
      fontSize: "22px",
      align:  'left',
    },
    infoTitleText: {
      color: infoColor[0],
      fontSize: "22px",
      align:  'justify',
    },
    warningTitleText: {
      color: warningColor[0],
      fontSize: "22px",
    },
    dangerTitleText: {
      color: dangerColor[0],
      fontSize: "22px",
    }
};

export default typographyStyle;
