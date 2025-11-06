import LiftControler from "../assets/images/lift-controller.jpg";
import ResidencialController from "../assets/images/residencial-lift-controller.jpg";
import HotelController from "../assets/images/hotel-lift-controller.jpg";
import HydralicController from "../assets/images/hydralic-controller.jpg";
import IotController from "../assets/images/iot-controller.jpg";
import ServiceController from "../assets/images/service-controller.jpg";

export const productMap = {
  commercial: {
    id: "commercial",
    title: "Commercial Lift Controller Panels",
    short:
      "Robust, modular panels — engineered for high-traffic installations.",
    long: "Commercial-grade elevator controller panels with modular I/O, redundant power options and advanced diagnostics. Suitable for medium to large installations and multi-lift configurations.",
    image: LiftControler,
    preview: [
      "https://placehold.co/1600x1000?text=Commercial+Panel+1",
      "https://placehold.co/1600x1000?text=Commercial+Panel+2",
    ],
    category: "Commercial",
    available: true,
    warranty: "1 year standard",
    installation: "On-site installation available",
    support: "Pan-India support & SLAs",
    features: [
      "Modular I/O with hot-swap support",
      "Advanced fault logging & diagnostics",
      "Redundant PSU option",
    ],
    specs: {
      "Power input": "220–240VAC, 50/60Hz",
      "Control logic": "32-bit embedded MCU",
      "Max floors supported": "64",
      "Operating temperature": "-10°C to 55°C",
      Enclosure: "IP54 / Powder-coated steel",
    },
    downloads: [
      {
        label: "Datasheet (PDF)",
        url: "https://example.com/datasheet-commercial.pdf",
      },
      {
        label: "Installation Guide",
        url: "https://example.com/install-commercial.pdf",
      },
    ],
    faq: [
      {
        q: "Does it support multiple lifts?",
        a: "Yes — with optional master-slave configuration.",
      },
      {
        q: "Can we integrate with BMS?",
        a: "Yes — optional Modbus / BACnet gateways are available.",
      },
    ],
    applicationAreas: [
      "High-rise office buildings",
      "Shopping malls",
      "Hotels with multiple floors",
      "Complex commercial structures",
    ],
  },

  residential: {
    id: "residential",
    title: "Residential Lift Controller Panels",
    short: "Compact, low-noise panels ideal for residential buildings.",
    long: "Space-saving controller units with enhanced noise suppression for comfortable residential ride experiences. Energy efficient modes and simple servicing.",
    image: ResidencialController,
    preview: ["https://placehold.co/1600x1000?text=Residential+1"],
    category: "Residential",
    available: true,
    warranty: "1 year standard",
    installation: "Compact mounting options",
    support: "Local support & maintenance",
    features: [
      "Low-noise motor control",
      "Compact footprint",
      "Energy-saving idle modes",
    ],
    specs: {
      "Power input": "220–240VAC, 50Hz",
      "Control logic": "16/32-bit MCU",
      "Max floors supported": "16",
      "Operating temperature": "-10°C to 50°C",
      Enclosure: "IP20 / Mild steel",
    },
    downloads: [
      {
        label: "Datasheet",
        url: "https://example.com/datasheet-residential.pdf",
      },
    ],
    faq: [
      {
        q: "Is this suitable for home lifts?",
        a: "Yes, designed for low-rise home and apartment lifts.",
      },
    ],
    applicationAreas: [
      "Apartment complexes",
      "Private residential homes",
      "Low-rise residential buildings",
      "Small multi-floor residential structures",
    ],
  },

  hotel: {
    id: "hotel",
    title: "Hotel Lift Controller Panels",
    short: "Guest-friendly interfaces and smooth ride tuning.",
    long: "Designed for hospitality environments with quiet drive profiles, stylish interfaces and guest modes. Integration with access control systems supported.",
    image: HotelController,
    preview: ["https://placehold.co/1600x1000?text=Hotel+1"],
    category: "Hotel",
    available: true,
    warranty: "1 year standard",
    installation: "Custom faceplate options",
    support: "Hotel property support packages",
    features: [
      "Smooth acceleration profiles",
      "Guest mode & access control",
      "Custom faceplates",
    ],
    specs: {
      "Power input": "220–240VAC, 50/60Hz",
      "Control logic": "32-bit MCU",
      "Max floors supported": "32",
      "Operating temperature": "-5°C to 50°C",
      Enclosure: "IP54 / Powder-coated steel",
    },
    downloads: [
      {
        label: "Hotel Datasheet",
        url: "https://example.com/datasheet-hotel.pdf",
      },
    ],
    faq: [
      {
        q: "Can we customise faceplates?",
        a: "Yes — we offer custom finishes for faceplates.",
      },
    ],
    applicationAreas: [
      "Hospitality environments",
      "Hotels and resorts",
      "Luxury buildings with high guest traffic",
      "Office buildings with hotel-like amenities",
    ],
  },

  hydraulic: {
    id: "hydraulic",
    title: "Hydraulic Lift Controller Panels",
    short: "Powerful controls optimized for hydraulic drives.",
    long: "Optimized for hydraulic elevator systems with pressure sensor integration and safety interlocks. Rugged power stages and service-friendly layout.",
    image: HydralicController,
    preview: ["https://placehold.co/1600x1000?text=Hydraulic+1"],
    category: "Hydraulic",
    available: false,
    warranty: "1 year",
    installation: "Industrial grade mounting",
    support: "Service lift specialists",
    features: [
      "Hydraulic pump control",
      "Pressure interlocks",
      "Rugged power stage",
    ],
    specs: {
      "Power input": "380–415VAC (3-phase)",
      "Control logic": "Industrial-grade PLC option",
      "Max floors supported": "12",
      "Operating temperature": "-10°C to 50°C",
      Enclosure: "IP65 / Stainless steel",
    },
    downloads: [
      { label: "Hydraulic Guide", url: "https://example.com/hydraulic.pdf" },
    ],
    faq: [
      {
        q: "Is 3-phase required?",
        a: "For large hydraulic pumps 3-phase is recommended.",
      },
    ],
    applicationAreas: [
      "Low-rise residential buildings",
      "Industrial warehouses",
      "Heavy-duty applications with hydraulic mechanisms",
      "Parking garage lifts",
      "Service lifts for freight handling",
    ],
  },

  service: {
    id: "service",
    title: "Service Lift Controller Panels",
    short: "Utility-grade panels for service/goods lifts.",
    long: "Simple, robust control units with maintenance-first design. Suitable for goods lifts, service elevators and cargo handling.",
    image: ServiceController,
    preview: ["https://placehold.co/1600x1000?text=Service+1"],
    category: "Service",
    available: true,
    warranty: "1 year",
    installation: "Utility mounting",
    support: "Field service teams",
    features: [
      "Maintenance mode",
      "Simple operator interface",
      "Durable enclosure",
    ],
    specs: {
      "Power input": "220–240VAC",
      "Control logic": "Embedded MCU",
      "Max floors supported": "8",
      "Operating temperature": "-10°C to 50°C",
      Enclosure: "IP54",
    },
    downloads: [
      { label: "Service Panel PDF", url: "https://example.com/service.pdf" },
    ],
    faq: [
      {
        q: "Can this be used for goods elevators?",
        a: "Yes, designed primarily for utility lifts.",
      },
    ],
    applicationAreas: [
      "Hospitals",
      "Hotels",
      "Industrial facilities",
      "Factories",
      "Freight and cargo handling facilities",
    ],
  },

  iot: {
    id: "iot",
    title: "IoT Elevator Control Panels",
    short: "Smart connectivity, predictive maintenance and analytics.",
    long: "Next-generation panels with telematics and cloud connectivity for asset health monitoring and predictive alerts. Ideal for large portfolios and managed buildings.",
    image: IotController,
    preview: [
      "https://placehold.co/1600x1000?text=IoT+1",
      "https://placehold.co/1600x1000?text=IoT+2",
      "https://placehold.co/1600x1000?text=IoT+3",
    ],
    category: "IoT",
    available: false,
    warranty: "1 year",
    installation: "Cloud integration available",
    support: "Analytics & support packages",
    features: [
      "Telemetry & health logs",
      "Predictive failure alerts",
      "Cloud dashboard",
    ],
    specs: {
      "Power input": "220–240VAC",
      Connectivity: "Ethernet / LTE / Wi-Fi (optional)",
      "Data export": "MQTT / REST / CSV",
      "Operating temperature": "-5°C to 50°C",
      Enclosure: "IP54",
    },
    downloads: [
      { label: "IoT Whitepaper", url: "https://example.com/iot.pdf" },
    ],
    faq: [
      {
        q: "What protocols are supported?",
        a: "MQTT, RESTful APIs and CSV export supported.",
      },
    ],
    applicationAreas: [
      " Smart buildings with IoT integration",
      "Multi-building complex management",
      "Commercial office spaces with predictive maintenance needs",
      "Industrial buildings with extensive lift usage",
      "Multi-floor complexes requiring real-time diagnostics and data analytics",
    ],
  },
};

export const relatedProducts = (currentProductId) => {
  return Object.values(productMap)
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);
};
