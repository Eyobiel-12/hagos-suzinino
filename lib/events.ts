export interface EventItem {
  id: string;
  city: string;
  date?: string;
  dayNumber?: string;
  month?: string;
  dayLabel?: string;
  venue?: string;
  address?: string;
  ticketUrl?: string;
  flag: "ch" | "nl" | "gb" | "de" | "no" | "se";
  /** Performer image for this city (under /images) */
  image: string;
  /** Optional theater/venue image */
  venueImage?: string;
  /** No dates yet — show Coming Soon */
  comingSoon?: boolean;
}

export const events: EventItem[] = [
  {
    id: "zurich",
    city: "ZURICH",
    date: "06 JUNE",
    dayNumber: "06",
    month: "JUNE",
    dayLabel: "Saturday",
    venue: "Theater 11 Zürich",
    address: "THURGAUERSTRASSE 7, 8050 ZURICH",
    ticketUrl:
      "https://www.universe.com/events/suzinino-comedy-show-tickets-1N278Y",
    flag: "ch",
    image: "/images/suzinino-zuruch.png",
    venueImage: "/images/swisstheater.png",
  },
  {
    id: "utrecht",
    city: "UTRECHT",
    date: "07 JULY",
    dayNumber: "07",
    month: "JULY",
    dayLabel: "Tuesday",
    venue: "Beatrix Theater",
    address: "JAARBEURSPLEIN 6A, 3521 AL UTRECHT",
    ticketUrl:
      "https://www.universe.com/events/suzinino-comedy-show-tickets-QTC1G7",
    flag: "nl",
    image: "/images/suzinino-utrucht.png",
    venueImage: "/images/utrecht-theater.png",
  },
  // Coming soon — countries only (cities TBA)
  {
    id: "england",
    city: "ENGLAND",
    flag: "gb",
    image: "/images/suzinino-euto-tour-flyer.png",
    comingSoon: true,
  },
  {
    id: "germany",
    city: "GERMANY",
    flag: "de",
    image: "/images/suzinino-euto-tour-flyer.png",
    comingSoon: true,
  },
  {
    id: "norway",
    city: "NORWAY",
    flag: "no",
    image: "/images/suzinino-euto-tour-flyer.png",
    comingSoon: true,
  },
  {
    id: "sweden",
    city: "SWEDEN",
    flag: "se",
    image: "/images/suzinino-euto-tour-flyer.png",
    comingSoon: true,
  },
];
