import { getCookie } from "@/utils/cookieManager";

const getClientCookie = () => {
  const theme = getCookie("selectedTheme");
  return theme as "minimal" | "techy" | null;
};

export default getClientCookie;