export const data: IData[] = [
  {
    categoryName: "Масла для холодильных установок",
    tag: "holodilnie-ustanovki",
    link: "/catalog/holodilnie-ustanovki",
    products: [
      { name: "LC Frost SE", link: "/catalog/holodilnie-ustanovki/SE" },
      { name: "LC Frost AB", link: "/catalog/holodilnie-ustanovki/AB" },
      { name: "LC Frost PAG", link: "/catalog/holodilnie-ustanovki/PAG" },
    ]
  },
  {
    categoryName: "Масла для вакуумных насосов",
    link: "/catalog/vacuum",
    tag: "vacuum",
    products: [
      { name: "LC VacuumOil VE", link: "/catalog/vacuum/VE" },
    ]
  },
  {
    categoryName: "Масла для газовых компрессоров",
    link: "/catalog/compressors",
    tag: "compressors",
    products: [
      { name: "LC CompressGas PAG", link: "/catalog/compressors/PAG" },
    ]
  },
  {
    categoryName: "Масла для перекачки воздуха и газа",
    link: "/catalog/vozduh-i-gaz",
    tag: "vozduh-i-gaz",
    products: [
      { name: "LC CompressOil SE", link: "/catalog/vozduh-i-gaz/SE" },
      { name: "LC CompressOil SE-A", link: "/catalog/vozduh-i-gaz/SE-A" },
    ]
  },
  {
    categoryName: "Цепные масла",
    link: "/catalog/cepnie-masla",
    tag: "cepnie-masla",
    products: [
      { name: "LC ChainOil SE", link: "/catalog/cepnie-masla/SE" },
    ]
  },
  {
    categoryName: "Масла для промывки компрессоров",
    link: "/catalog/promivka-compressorov",
    tag: "promivka-compressorov",
    products: [
      { name: "LC CompressClean-WG", link: "/catalog/promivka-compressorov/WG" },
      { name: "LC CompressClean-WH", link: "/catalog/promivka-compressorov/WH" },
    ]
  },
];

interface IData {
  categoryName: string,
  tag: string,
  link: string,
  products: {
    name: string,
    link: string
  }[]
}