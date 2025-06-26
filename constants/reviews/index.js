import {
  generalConstructionReviews_1,
  generalConstructionReviews_2,
} from "./generalConstruction.js";
import {
  energyEfficientReviews_1,
  energyEfficientReviews_2,
} from "./energyEfficient.js";
import { solarReviews_1 } from "./solar.js";

export const reviews = {
  general: [generalConstructionReviews_1, generalConstructionReviews_2],
  ee: [energyEfficientReviews_1, energyEfficientReviews_2],
  solar: [solarReviews_1],
};
