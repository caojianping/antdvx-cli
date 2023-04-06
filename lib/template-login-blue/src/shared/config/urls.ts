const baseUrl = process.env.VUE_APP_BASE_URL;

export const Urls = {
  common: {},
  account: {
    login: `${baseUrl}/account/login`,
    logout: `${baseUrl}/account/logout`,
  },
};
