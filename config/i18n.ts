import { createI18n } from "vue-i18n";
import messages from "~/i18n";

// set locals to local storage

let locale: any = "en";
if (typeof window !== "undefined") {
  locale = localStorage.getItem("locale");
  localStorage.setItem("locale", locale ? locale : "en");
}

// Create I18n instance
const i18n = createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
});

export { i18n };
