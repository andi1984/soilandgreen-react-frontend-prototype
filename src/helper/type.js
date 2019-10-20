import IndoorIcon from "../assets/icons/type/indoor.png";
import GardenIcon from "../assets/icons/type/garden.png";
import GlasshouseIcon from "../assets/icons/type/glasshouse.png";

console.log(IndoorIcon);

const TYPE_GARDEN_ID = "garden";
const TYPE_GLASSHOUSE_ID = "glasshouse";
const TYPE_INDOOR_ID = "indoor";

export const GARDEN_TYPES = [
  { id: TYPE_GARDEN_ID,  },
  { id: TYPE_GLASSHOUSE_ID, label: "Glass House" },
  { id: TYPE_INDOOR_ID, label: "Indoor" }
];
export const getIconForType = type => {
  let Icon;
  switch (type.id) {
    case TYPE_GARDEN_ID:
      Icon = GardenIcon;
      break;
    case TYPE_GLASSHOUSE_ID:
      Icon = GlasshouseIcon;
      break;
    case TYPE_INDOOR_ID:
      Icon = IndoorIcon;
      break;
    default:
      break;
  }
  console.log(Icon);
  return Icon;
};
