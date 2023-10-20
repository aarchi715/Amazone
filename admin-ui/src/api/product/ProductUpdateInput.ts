import { Decimal } from "decimal.js";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  carbonFootprint?: Decimal;
  category?: CategoryWhereUniqueInput | null;
  colours?: InputJsonValue;
  description?: string;
  discountedPrice?: number;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  sustainabilityScore?: Decimal;
  title?: string;
  titleprice?: Decimal;
  variants?: InputJsonValue;
};
