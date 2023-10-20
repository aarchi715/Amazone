import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isAdmin?: BooleanFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
  username?: StringFilter;
};
