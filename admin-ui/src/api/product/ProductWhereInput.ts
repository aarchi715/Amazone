import { DecimalFilter } from "../../util/DecimalFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  carbonFootprint?: DecimalFilter;
  category?: CategoryWhereUniqueInput;
  colours?: JsonFilter;
  description?: StringFilter;
  discountedPrice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  order?: OrderWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
  sustainabilityScore?: DecimalFilter;
  title?: StringFilter;
  titleprice?: DecimalFilter;
  variants?: JsonFilter;
};
