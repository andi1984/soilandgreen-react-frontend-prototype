import merge from "mout/object/merge";
const WORKFLOW_LABELS = {
  de_de: {
    sow: "Saat",
    harvest: "Ernte"
  }
};

export const TRANSLATIONS = merge(WORKFLOW_LABELS);

export const getTranslationsForLanguage = language => {
  return TRANSLATIONS[language];
};

export const getGermanTranslations = getTranslationsForLanguage("de_de");
