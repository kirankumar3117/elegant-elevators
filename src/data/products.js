// src/data/products.js
// Single source of truth for product data (only the 6 products requested)

export const products = [
  {
    id: 1,
    title: "Commercial Lift Controller Panels",
    type: "Commercial",
    short: "Controller panels for high-rise and multi-car systems.",
    long: "Designed for high-rise buildings, offices and malls. These panels support multi-car group control, load management and advanced diagnostics.",
    img: "/assets/product-1.jpg",
    features: [
      "Multi-car group control options",
      "VVVF drive compatibility",
      "Advanced safety interlocks",
    ],
    spec: "/assets/spec-1.pdf",
    comingSoon: false,
  },
  {
    id: 2,
    title: "Residential Lift Controller Panels",
    type: "Residential",
    short: "Compact control panels built for homes and apartments.",
    long: "Compact, quiet and efficient — ideal for apartment complexes and private residences. Optimized for low power and simple maintenance.",
    img: "/assets/product-2.jpg",
    features: [
      "Simple operation and easy maintenance",
      "Smooth ride quality",
      "Energy-efficient performance",
    ],
    spec: "/assets/spec-2.pdf",
    comingSoon: false,
  },
  {
    id: 3,
    title: "Hydraulic Lift Controller Panels",
    type: "Hydraulic",
    short: "Controls for hydraulic elevator systems.",
    long: "Perfect for low-rise buildings and heavy-duty applications using hydraulic mechanisms. Integrates pressure and speed control for smooth motion.",
    img: "/assets/product-3.jpg",
    features: [
      "Pressure and speed control integration",
      "Safety valve monitoring",
      "Smooth hydraulic motion control",
    ],
    spec: "/assets/spec-3.pdf",
    comingSoon: false,
  },
  {
    id: 4,
    title: "Service Lift Controller Panels",
    type: "Service",
    short: "Robust panels for freight and service elevators.",
    long: "Engineered for service and freight lifts in hospitals, hotels and industries. Designed for heavy load handling and low maintenance cycles.",
    img: "/assets/product-4.jpg",
    features: [
      "Heavy load handling",
      "Robust mechanical and electrical design",
      "Long life cycle and low maintenance",
    ],
    spec: "/assets/spec-4.pdf",
    comingSoon: false,
  },
  {
    id: 5,
    title: "Hotel Lift Controller Panels",
    type: "Hotel",
    short: "Aesthetic and quiet controllers for hospitality use.",
    long: "Designed for comfort, efficiency and aesthetics in hospitality environments. Integrates with building management systems and custom UI options.",
    img: "/assets/product-5.jpg",
    features: [
      "Smooth and silent operation",
      "Integration with building management systems",
      "Customizable user interface",
    ],
    spec: "/assets/spec-5.pdf",
    comingSoon: false,
  },
  {
    id: 6,
    title: "IoT Elevator Control Panels",
    type: "IOT",
    short: "Smart panels for remote monitoring and diagnostics.",
    long: "Smart, connected and future-ready panels that bring predictive maintenance and real-time monitoring to elevators. Remote diagnostics via mobile/web app.",
    img: "/assets/product-6.jpg",
    features: [
      "Remote diagnostics via mobile/web app",
      "Data analytics for performance optimization",
      "Cloud-based monitoring system",
    ],
    spec: "/assets/spec-6.pdf",
    comingSoon: false,
  },
];

// If you want to add "Advanced IoT (coming soon)" later, I can add item 7 with `comingSoon: true`.
