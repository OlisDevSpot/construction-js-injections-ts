import {
  generalConstructionReviews_1,
  generalConstructionReviews_2,
} from "./generalConstruction";
import {
  energyEfficientReviews_1,
  energyEfficientReviews_2,
} from "./energyEfficient";
import { solarReviews_1 } from "./solar";

export const reviews = {
  general: [generalConstructionReviews_1, generalConstructionReviews_2],
  ee: [energyEfficientReviews_1, energyEfficientReviews_2],
  solar: [solarReviews_1],
};
