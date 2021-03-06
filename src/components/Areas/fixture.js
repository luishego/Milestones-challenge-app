import { string } from "../../globals";

export const areaConfig = {
  physical: {
    bgColor: "physical",
    active: "active-physical-button",
    buttonTag: string.button.next,
    isActive: true,
  },
  social: {
    bgColor: "social",
    active: "active-social-button",
    buttonTag: string.button.finished,
    isActive: false,
  },
};
