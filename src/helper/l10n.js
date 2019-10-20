import merge from "mout/object/merge";
const WORKFLOW_LABELS = {
  de_de: {
    sow: "Saat",
    harvest: "Ernte",
    cultivate: "Kultivieren"
  }
};

const TYPE_LABELS = {
  de_de: {
    garden: "Garten",
    indoor: "Drinnen",
    glasshouse: "Glashaus"
  }
};

export const TRANSLATIONS = merge(WORKFLOW_LABELS, TYPE_LABELS); //?

export const getTranslationsForLanguage = language => {
  return TRANSLATIONS[language];
};

export const getGermanTranslations = getTranslationsForLanguage("de_de"); //?