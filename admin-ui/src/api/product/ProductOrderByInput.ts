import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  carbonFootprint?: SortOrder;
  categoryId?: SortOrder;
  colours?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountedPrice?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  orderId?: SortOrder;
  sustainabilityScore?: SortOrder;
  title?: SortOrder;
  titleprice?: SortOrder;
  updatedAt?: SortOrder;
  variants?: SortOrder;
};
