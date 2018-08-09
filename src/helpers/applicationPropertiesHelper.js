const apiRoot = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : "/api";
const reCaptchaSiteKey = process.env.REACT_APP_RE_CAPTCHA_SITE_KEY
  ? process.env.REACT_APP_RE_CAPTCHA_SITE_KEY
  : "default";

const applicationProperties = () => {
  return { apiRoot, reCaptchaSiteKey };
};

export default applicationProperties;
