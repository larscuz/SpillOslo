export interface Game {
  title: string;
  year?: string;
  platform?: string[];
}

export interface Studio {
  id: string;
  name: string;
  description: string;
  website: string;
  contact: {
    email?: string;
    phone?: string;
    address: string;
    city: string;
  };
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    discord?: string;
  };
  games: Game[];
  logo: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const OSLO_STUDIOS: Studio[] = [
  {
    id: "funcom",
    name: "Funcom",
    description: "En av Norges eldste og største spillutviklere, kjent for store MMO-er og overlevelsesspill.",
    website: "https://www.funcom.com",
    contact: {
      email: "contact@funcom.com",
      address: "Kirkegata 15",
      city: "Oslo"
    },
    socials: {
      twitter: "https://twitter.com/funcom",
      linkedin: "https://www.linkedin.com/company/funcom",
      facebook: "https://www.facebook.com/funcom"
    },
    games: [
      { title: "Conan Exiles", year: "2018" },
      { title: "The Secret World", year: "2012" },
      { title: "Age of Conan", year: "2008" },
      { title: "Anarchy Online", year: "2001" },
      { title: "Dune: Awakening", year: "TBA" }
    ],
    logo: "https://picsum.photos/seed/funcom/200/200",
    coordinates: { lat: 59.9111, lng: 10.7441 }
  },
  {
    id: "red-thread-games",
    name: "Red Thread Games",
    description: "Uavhengig studio grunnlagt av Ragnar Tørnquist, fokusert på historiedrevne spill.",
    website: "https://www.redthreadgames.com",
    contact: {
      address: "Møllergata 12",
      city: "Oslo"
    },
    socials: {
      twitter: "https://twitter.com/redthreadgames",
      facebook: "https://www.facebook.com/redthreadgames"
    },
    games: [
      { title: "Dreamfall Chapters", year: "2014" },
      { title: "Draugen", year: "2019" },
      { title: "Dustborn", year: "2024" }
    ],
    logo: "https://picsum.photos/seed/redthread/200/200",
    coordinates: { lat: 59.9145, lng: 10.7465 }
  },
  {
    id: "krillbite-studio",
    name: "Krillbite Studio",
    description: "Kjent for det atmosfæriske skrekkspillet Among the Sleep.",
    website: "https://www.krillbite.com",
    contact: {
      email: "contact@krillbite.com",
      address: "Storgata 32",
      city: "Oslo"
    },
    socials: {
      twitter: "https://twitter.com/krillbite",
      instagram: "https://www.instagram.com/krillbitestudio"
    },
    games: [
      { title: "Among the Sleep", year: "2014" },
      { title: "Mosaic", year: "2019" },
      { title: "Sunlight", year: "2021" }
    ],
    logo: "https://picsum.photos/seed/krillbite/200/200",
    coordinates: { lat: 59.9158, lng: 10.7512 }
  },
  {
    id: "snowcastle-games",
    name: "Snowcastle Games",
    description: "Uavhengig studio som står bak Earthlock-serien.",
    website: "https://www.snowcastlegames.com",
    contact: {
      address: "Nedre Slottsgate 15",
      city: "Oslo"
    },
    socials: {
      twitter: "https://twitter.com/snowcastlegames"
    },
    games: [
      { title: "Earthlock", year: "2016" },
      { title: "Earthlock 2", year: "TBA" },
      { title: "Ikonei Island", year: "2023" }
    ],
    logo: "https://picsum.photos/seed/snowcastle/200/200",
    coordinates: { lat: 59.9105, lng: 10.7412 }
  },
  {
    id: "dirtybit",
    name: "Dirtybit",
    description: "Spesialister på flerspiller-mobilspill, mest kjent for Fun Run-serien.",
    website: "https://www.dirtybit.com",
    contact: {
      address: "Tordenskiolds gate 2",
      city: "Oslo"
    },
    socials: {
      linkedin: "https://www.linkedin.com/company/dirtybit"
    },
    games: [
      { title: "Fun Run", year: "2012" },
      { title: "Fun Run 2", year: "2014" },
      { title: "Fun Run 3", year: "2017" },
      { title: "Fun Run 4", year: "2023" }
    ],
    logo: "https://picsum.photos/seed/dirtybit/200/200",
    coordinates: { lat: 59.9118, lng: 10.7355 }
  },
  {
    id: "hyper-games",
    name: "Hyper Games",
    description: "Prisvinnende studio kjent for Snufkin: Melody of Moominvalley.",
    website: "https://www.hypergames.no",
    contact: {
      address: "Thorvald Meyers gate 7",
      city: "Oslo"
    },
    socials: {
      twitter: "https://twitter.com/hypergames"
    },
    games: [
      { title: "Snufkin: Melody of Moominvalley", year: "2024" },
      { title: "Mørkredd", year: "2020" }
    ],
    logo: "https://picsum.photos/seed/hypergames/200/200",
    coordinates: { lat: 59.9245, lng: 10.7605 }
  },
  {
    id: "megapop",
    name: "Megapop",
    description: "Et studio grunnlagt av veteraner fra Funcom, fokusert på både egne spill og oppdrag for andre.",
    website: "https://www.megapopgames.com",
    contact: {
      email: "contact@megapopgames.com",
      address: "Øvre Slottsgate 7",
      city: "Oslo"
    },
    socials: {
      twitter: "https://twitter.com/megapopgames",
      linkedin: "https://www.linkedin.com/company/megapop-as"
    },
    games: [
      { title: "Trolls vs Vikings", year: "2014" },
      { title: "Meganumbers", year: "2015" },
      { title: "RoboRevenge", year: "2022" }
    ],
    logo: "https://picsum.photos/seed/megapop/200/200",
    coordinates: { lat: 59.9115, lng: 10.7425 }
  }
];
