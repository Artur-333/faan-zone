import { NextResponse } from "next/server";


export async function GET() {
  const data = {
    deliveryText: "deliveryText",
    signOut: "signOut",
    links: [
      {
        href: "/",
        name: "home"
      },
      {
        href: "/about",
        name: "about"
      },
      {
        href: "/partner-shops",
        name: "partnerShops"
      },
      {
        href: "/transport-yerevan",
        name: "transportYerevan"
      },
      {
        href: "/taxi",
        name: "taxi"
      },
      {
        href: "/blog",
        name: "blog"
      },
      {
        href: "/contact",
        name: "contact"
      },
    ],
    languages: [
      {
        id: "1",
        armenian: "Armenian",
      },
      {
        id: "2",
        english: "English",
      }
    ],
    walletUserCoins: {
      name: "Anna Vardazaryan ",
      joined: "Joined June 2023",
      totalCoins: "totalCoins",
      coins: "Coins"
    },
    tables: [
      {
        title: "EarningsHistory",
        firstBody: [
          {
            store: "Zara",
            date: "2024-06-11",
            action: "InviteFriends",
            coins: "20"
          },
          {
            store: "Nike",
            date: "2024-06-09",
            action: "Purchase",
            coins: "100"
          }
        ]
      },
      {
        title: "CoinsEarnedByStore",
        secondBody: [
          {
            store: "Zara",
            storeCoins: "240",
            services: "City",
            servicesCoins: "180"
          },
          {
            store: "Nike",
            storeCoins: "180",
            services: "Transport",
            servicesCoins: "120"
          },
        ],
      },
    ],
    footer: {
      totalEarnedOne: "TotalEarned",
      totalEarnedCoinsOne: "1200",
      totalEarnedTwo: "TotalEarned",
      totalEarnedCoinsTwo: "1200"
    }
  }

  return NextResponse.json(data)
}

