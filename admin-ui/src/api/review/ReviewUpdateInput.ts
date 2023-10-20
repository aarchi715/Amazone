import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  product?: ProductWhereUniqueInput;
  rating?: Decimal | null;
  user?: UserWhereUniqueInput;
};
