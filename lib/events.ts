export interface EventItem {
  id: string;
  city: string;
  date: string;
  dayNumber: string;
  month: string;
  dayLabel: string;
  venue: string;
  address: string;
  ticketUrl: string;
  flag: "ch" | "nl";
  /** Performer image for this city (under /images) */
  image: string;
  /** Optional theater/venue image */
  venueImage?: string;
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
    dayLabel: "Sunday",
    venue: "Beatrix Theater",
    address: "JAARBEURSPLEIN 6A, 3521 AL UTRECHT",
    ticketUrl:
      "https://www.universe.com/events/suzinino-comedy-show-tickets-QTC1G7",
    flag: "nl",
    image: "/images/suzinino-utrucht.png",
    venueImage: "/images/utrecht-theater.png",
  },
];
