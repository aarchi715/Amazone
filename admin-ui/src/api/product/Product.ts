import { Decimal } from "decimal.js";
import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  carbonFootprint: Decimal;
  category?: Category | null;
  colours: JsonValue;
  createdAt: Date;
  description: string;
  discountedPrice: number;
  id: string;
  images: JsonValue;
  order?: Order | null;
  reviews?: Array<Review>;
  sustainabilityScore: Decimal;
  title: string;
  titleprice: Decimal;
  updatedAt: Date;
  variants: JsonValue;
};
