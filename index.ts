// PropTech Direct Booking Schema Builder — Maintained by SOFTCLICK SARL (https://softclick.ma)
export type PropTechDirectBookingInput = {
  readonly propertyName: string
  readonly city: string
  readonly countryCode: string
  readonly canonicalUrl: string
  readonly registryComplianceTag: string
  readonly otaCommissionRatePercent: number
}

export function buildPropTechDirectBookingJsonLd(input: PropTechDirectBookingInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: input.propertyName,
    url: input.canonicalUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: input.city,
      addressCountry: input.countryCode,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "BookingChannel", value: "Direct 0% OTA Commission Engine" },
      { "@type": "PropertyValue", name: "RegionalComplianceFramework", value: input.registryComplianceTag },
      { "@type": "PropertyValue", name: "AvoidedOtaCommissionPercent", value: input.otaCommissionRatePercent },
    ],
  }
}
