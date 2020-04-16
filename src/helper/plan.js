import moment from "moment";

import { readType } from "./localStorage";
import { getGermanTranslations } from "./l10n";
const groupId = (crop, period) => `${crop.id} - ${period.id}`;

export const generate = (crops) => {
  let allGroups = [];
  let allItems = [];
  crops.forEach((crop) => {
    if ("periods" in crop) {
      const selectedGardenType = readType();

      const periodsForSelectedGardenType = crop.periods.filter(
        (period) => period.location === selectedGardenType.id
      );

      const groupsForCropPeriod = periodsForSelectedGardenType.map(
        (period) => ({
          id: groupId(crop, period),
          title: `${crop.name} - ${getGermanTranslations[period.workflow]}`,
          image: "image" in crop ? crop.image : undefined,
        })
      );

      const itemsForCropPeriod = periodsForSelectedGardenType.map((period) => {
        const start_time = moment(period.begin);
        const end_time = moment(period.end);
        
        return {
          group: groupId(crop, period),
          title: getGermanTranslations[period.workflow],
          id: Math.random(),
          // Change year to current year
          start_time: start_time.year(moment().year()),
          // Change year to current year
          end_time: end_time.year(moment().year()),
        };
      });
      allGroups = allGroups.concat(groupsForCropPeriod);
      allItems = allItems.concat(itemsForCropPeriod);
    }
  });

  return { groups: allGroups, items: allItems };
};
