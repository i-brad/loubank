import {
  AntDesign,
  FontAwesome5,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";
import { BrandColors } from "../utils/BrandStyle";

export const financeData = [
  {
    text: "My bonuses",
    color: BrandColors.accent,
    icon: <AntDesign name="staro" size={20} color="black" />,
  },
  {
    text: "My budget",
    color: BrandColors.mint,
    icon: <Ionicons name="wallet-outline" size={20} color="black" />,
  },
  {
    text: "Finance analysis",
    color: BrandColors.purple,
    icon: <Foundation name="graph-bar" size={20} color="black" />,
  },
  {
    text: "Expenses",
    color: BrandColors.white,
    icon: <FontAwesome5 name="money-bill-wave" size={20} color="black" />,
  },
];
