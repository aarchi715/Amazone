import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  product: ProductWhereUniqueInput;
  rating?: Decimal | null;
  user: UserWhereUniqueInput;
};
