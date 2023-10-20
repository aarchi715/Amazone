import { Decimal } from "decimal.js";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  carbonFootprint: Decimal;
  category?: CategoryWhereUniqueInput | null;
  colours: InputJsonValue;
  description: string;
  discountedPrice: number;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  sustainabilityScore: Decimal;
  title: string;
  titleprice: Decimal;
  variants: InputJsonValue;
};
