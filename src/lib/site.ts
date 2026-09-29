/**
 * Central, easily editable configuration for OPTILINE MADA.
 *
 * IMPORTANT: values marked TO BE PROVIDED are placeholders. Replace them with
 * the official company data — nothing here should be invented.
 */

export const site = {
  name: "Optiline Mada",
  tagline: "Your Team in Madagascar. Fully Managed.",
  description:
    "Optiline Mada provides skilled professionals, modern workspaces, reliable technology and complete local management for international companies outsourcing to Madagascar.",
  contact: {
    email: "contact@optiline-mada.com",
    phoneFrance: "+33 6 15 83 75 61",
    phoneMadagascar: "+261 32 03 682 18",
    whatsapp: "", // TO BE PROVIDED — full international number, e.g. 261340000000
    address: "Tomboarivo, 09 B 193, MAHAFALY, TOMBOARIVO , Antsirabe, Madagascar",
    hours: "Monday – Friday, working hours to be confirmed", // TO BE PROVIDED
    mapsEmbedUrl: "", // TO BE PROVIDED — Google Maps embed URL
    nif: "101 921 24 09",
    stat: "78200 12 2025 0 01330",
    rcs: "RCS Antsirabe 2026 A 00038",
  },
  social: {
    linkedin: "", // TO BE PROVIDED
    facebook: "", // TO BE PROVIDED
    instagram: "", // TO BE PROVIDED
  },
  /** Analytics / marketing tags — set to true and add the IDs to activate. */
  analytics: {
    googleAnalyticsId: "", // e.g. "G-XXXXXXX"
    googleTagManagerId: "", // e.g. "GTM-XXXXXXX"
    metaPixelId: "",
    linkedInPartnerId: "",
  },
  /**
   * Lead delivery endpoint. Leave empty to keep local-only submissions.
   * Point it at a CRM webhook or a future Laravel API to forward leads.
   */
  leadEndpoint: "",
};

/** Statistics — placeholders until official figures are confirmed. */
export const stats: { label: string; value: string }[] = [
  { label: "International Experience", value: "[to be provided]" },
  { label: "Professionals", value: "[to be provided]" },
  { label: "Workstations", value: "[to be provided]" },
  { label: "Languages", value: "[to be provided]" },
  { label: "Industries Served", value: "[to be provided]" },
];

/** Infrastructure figures — placeholders until confirmed. */
export const infrastructureStats: { label: string; value: string }[] = [
  { label: "Dual-Fiber Internet Speed", value: "Up to 10 Gbps" },
  { label: "Scalable Workstations", value: "3,000" },
  { label: "Operations Coverage", value: "24/7" },
  { label: "Agents Capacity (2 shifts)", value: "6,000+" },
];
