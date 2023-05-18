import {
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export const CurrenciesData = [
  {
    id: 1,
    currency: "USD",
    buy: "$ 78.24",
    sell: "$ 80.93",
    Icon: <Fontisto name="dollar" size={12} color="black" />,
  },
  {
    id: 2,
    currency: "EUR",
    buy: "$ 52.30",
    sell: "$ 65.12",
    Icon: <MaterialIcons name="euro" size={12} color="black" />,
  },
];

export const MetalsData = [
  {
    id: 1,
    metal: "Gold",
    buy: "$ 78.24",
    sell: "$ 80.93",
    Icon: <MaterialCommunityIcons name="gold" size={12} color="black" />,
  },
  {
    id: 2,
    metal: "Silver",
    buy: "$ 52.30",
    sell: "$ 65.12",
    Icon: (
      <MaterialCommunityIcons name="podium-silver" size={12} color="black" />
    ),
  },
];
