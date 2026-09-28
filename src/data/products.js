export const PRODUCTS = [
  {
    id: "home-elevators",
    name: "Home Elevators",
    category: "Residential",
    tagline: "Luxury Vertical Mobility for Private Villas & Residences",
    description: "Designed specifically for private homes and luxury duplexes. Kaizel Home Elevators eliminate the need for deep pit excavation or overhead machine rooms while delivering whisper-quiet travel and high-end aesthetic finishes.",
    heroImage: "/images/home_elevator.jpg",
    specs: {
      capacity: "250 kg - 400 kg (2 to 5 Persons)",
      speed: "0.3 m/s - 0.5 m/s",
      driveType: "Hydraulic or Gearless Traction (MRL)",
      powerSupply: "Single Phase 220V / 3-Phase 415V",
      pitDepth: "300 mm minimum",
      overhead: "2600 mm minimum",
      doorType: "Automatic Telescopic Glass / Swing Door",
      stops: "Up to 5 Stops (G+4 Floors)"
    },
    features: [
      "No Machine Room Required (MRL Technology)",
      "Single-Phase Domestic Power Operation",
      "Automatic Rescue Device (ARD) in case of power failure",
      "Ultra-Quiet Micro-Drive Technology",
      "Customizable Cabin Interior (Wood, Glass, Brushed Steel)",
      "Infrared Safety Light Curtain Sensors"
    ],
    applications: ["Private Villas", "Duplex Homes", "Luxury Bungalows", "Penthouses"],
    finishes: ["Champagne Gold Brushed Steel", "Clear Panoramic Glass", "Teak Wood Veneer", "Italian Marble Flooring"],
    safetySystems: [
      "Automatic Rescue Device (ARD)",
      "Over-speed Governor Safety Brake",
      "Manual Emergency Lowering Valve",
      "In-cabin Intercom & Alarm Button",
      "Full Height Light Curtain Door Sensors"
    ]
  },
  {
    id: "residential-elevators",
    name: "Residential Elevators",
    category: "Residential",
    tagline: "Reliable Daily Commute Solutions for Modern Residential Complexes",
    description: "Engineered for high-frequency residential usage in multi-story apartments and housing societies. Delivers energy-efficient operation, smooth door actuation, and robust structural longevity.",
    heroImage: "/images/residential_elevator.jpg",
    specs: {
      capacity: "408 kg - 1020 kg (6 to 15 Persons)",
      speed: "1.0 m/s - 1.75 m/s",
      driveType: "VVVF Gearless Permanent Magnet Synchronous Motor",
      powerSupply: "3-Phase 415V, 50Hz",
      pitDepth: "1400 mm",
      overhead: "4200 mm",
      doorType: "Center Opening / Side Opening Automatic VVVF Doors",
      stops: "Up to 30 Stops"
    },
    features: [
      "VVVF Microprocessor Door Controller",
      "Regenerative Energy Saving Drive",
      "Vibration-damping guide shoes for smooth ride",
      "LED Energy-saving Ambient Lighting",
      "Dot Matrix & TFT Digital Position Displays",
      "Voice Floor Synthesizer (Annunciator)"
    ],
    applications: ["High-rise Apartments", "Housing Societies", "Gated Communities", "Co-operative Housing"],
    finishes: ["Stainless Steel Hairline", "Mirror Finish Stainless Steel", "Etched Gold Metal", "Granite Tile Floor"],
    safetySystems: [
      "ARD Battery Emergency Backup",
      "Infrared Sensor Safety Edge",
      "Overload Sensor with Buzzer",
      "Emergency Stop Switch & Alarm"
    ]
  },
  {
    id: "apartment-elevators",
    name: "Apartment Elevators",
    category: "Residential",
    tagline: "High-Capacity Space-Optimized Lifts for Mid-to-High Rise Buildings",
    description: "Kaizel Apartment Elevators are engineered to maximize shaft efficiency while providing quick floor-to-floor travel times during peak morning and evening traffic in apartment buildings.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    specs: {
      capacity: "544 kg - 1360 kg (8 to 20 Persons)",
      speed: "1.0 m/s - 2.0 m/s",
      driveType: "Permanent Magnet Synchronous Machine (PMSM)",
      powerSupply: "3-Phase 415V",
      pitDepth: "1500 mm",
      overhead: "4400 mm",
      doorType: "Automatic Center-Opening Doors",
      stops: "Up to 40 Floors"
    },
    features: [
      "Intelligent Traffic Group Dispatch System",
      "Robust Corrosion-Resistant Cabin Materials",
      "Fast & Quiet Door Actuation",
      "Smart Standby Sleep Mode during Off-Peak Hours",
      "Emergency Intercom System to Security Desk"
    ],
    applications: ["Mid-Rise Residential Towers", "Condominium Complexes", "Township Projects"],
    finishes: ["Pattern Etched Stainless Steel", "Gloss Polycarbonate Panels", "Anti-Skid PVC Floor"],
    safetySystems: [
      "Double Safety Gear Mechanism",
      "Auto Emergency Rescue",
      "Phase Sequence Protection Relay",
      "Door Lock Monitoring Switches"
    ]
  },
  {
    id: "passenger-elevators",
    name: "Passenger Elevators",
    category: "Commercial",
    tagline: "Architectural Precision Lifts for Commercial Complexes & IT Parks",
    description: "Combining high-speed vertical velocity with refined interior elegance. Designed for high-density passenger flow in corporate headquarters, shopping malls, and institutional campuses.",
    heroImage: "/images/hero_elevator.jpg",
    specs: {
      capacity: "680 kg - 1600 kg (10 to 24 Persons)",
      speed: "1.5 m/s - 2.5 m/s",
      driveType: "Gearless Traction PMSM with VVVF Inverter",
      powerSupply: "3-Phase 415V, 50Hz",
      pitDepth: "1600 mm",
      overhead: "4500 mm",
      doorType: "High Speed Center Opening VVVF Automatic",
      stops: "Up to 50 Stops"
    },
    features: [
      "Destination Control Dispatch Option",
      "Full Color Multimedia 7-inch TFT Displays",
      "Ultra-low Acoustic Decibel Operation",
      "Seamless Integration with Building Management Systems (BMS)",
      "Touchless Infrared Call Buttons Option"
    ],
    applications: ["Corporate IT Parks", "Commercial Skyscrapers", "Financial Towers", "Shopping Malls"],
    finishes: ["Brushed Black Titanium Stainless Steel", "Full Mirror Back Wall", "Recessed LED Array Ceiling", "Custom Engineered Stone Floor"],
    safetySystems: [
      "Progressive Safety Gear Brake",
      "Automatic Fireman Return Mode",
      "Earthquake Motion Sensor (Optional)",
      "Continuous Monitoring Microprocessor"
    ]
  },
  {
    id: "panoramic-elevators",
    name: "Panoramic Elevators",
    category: "Commercial",
    tagline: "Scenic Glass Cabins for Unmatched Architectural Visibility",
    description: "Transform vertical transit into a breathtaking visual journey. Featuring 180-degree or 360-degree curved glass cabins, Kaizel Panoramic Elevators serve as iconic architectural highlights for luxury hotels and shopping complexes.",
    heroImage: "/images/panoramic_elevator.jpg",
    specs: {
      capacity: "680 kg - 1360 kg (10 to 20 Persons)",
      speed: "1.0 m/s - 1.75 m/s",
      driveType: "Gearless Traction MRL / Hydraulic",
      powerSupply: "3-Phase 415V",
      pitDepth: "1500 mm",
      overhead: "4500 mm",
      doorType: "Frameless Glass Automatic Sliding Doors",
      stops: "Up to 25 Stops"
    },
    features: [
      "Laminated Safety Curved Glass Enclosure",
      "Architectural Exterior LED Strip Illumination",
      "Whisper-Quiet Traction Drive Operation",
      "Custom Shape Configurations (Square, Semi-Circular, Circular)",
      "High Visibility Scenic Floor Control Panel"
    ],
    applications: ["Luxury Hotels", "Shopping Malls", "Airport Terminals", "Atrium Commercial Centers"],
    finishes: ["Clear Laminated Safety Glass", "Polished Mirror Stainless Steel Frame", "Custom Ambient Downlighting"],
    safetySystems: [
      "Impact-Resistant Safety Glass Standard",
      "ARD Automatic Battery Rescue",
      "Light Curtain Edge Sensors",
      "Dual Speed Governor Safety Brakes"
    ]
  },
  {
    id: "capsule-elevators",
    name: "Capsule Elevators",
    category: "Commercial",
    tagline: "Futuristic Aerodynamic Glass Cabins for Iconic Skyline Landmarks",
    description: "Kaizel Capsule Elevators feature distinctive geometric glass capsules engineered for exterior facade or interior atrium mounting. Designed for luxury hospitality and high-end retail venues.",
    heroImage: "/images/panoramic_elevator.jpg",
    specs: {
      capacity: "544 kg - 1088 kg (8 to 16 Persons)",
      speed: "1.0 m/s - 2.0 m/s",
      driveType: "Gearless PMSM Machine",
      powerSupply: "3-Phase 415V",
      pitDepth: "1500 mm",
      overhead: "4600 mm",
      doorType: "Automatic Glass Sliding Doors",
      stops: "Up to 30 Stops"
    },
    features: [
      "Distinctive Aerodynamic Bullet / Capsule Shape",
      "Weatherproof Exterior Structural Sealing",
      "Panoramic Floor-to-Ceiling Structural Glass",
      "Programmable RGB Decorative Exterior Lighting",
      "Custom Interior Handrails and Metallic Accents"
    ],
    applications: ["Iconic Atriums", "Luxury Resorts", "Amusement Complexes", "Convention Centers"],
    finishes: ["Aerospace Grade Anodized Aluminum", "Ultra-Clear Low-Iron Glass", "Polished Gold Stainless Accents"],
    safetySystems: [
      "Emergency Glass Breaker & Rescue Hatch",
      "ARD Automatic Rescue Device",
      "Wind Load Vibration Dampener",
      "Full Redundant Safety Brakes"
    ]
  },
  {
    id: "hydraulic-elevators",
    name: "Hydraulic Elevators",
    category: "Specialized",
    tagline: "Smooth Low-Headroom Heavy Power Lifts",
    description: "Ideal for low-rise buildings with limited top clearance. Kaizel Hydraulic Elevators offer powerful lifting force with zero overhead machine room requirements.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    specs: {
      capacity: "400 kg - 2000 kg",
      speed: "0.4 m/s - 0.63 m/s",
      driveType: "Submerged Hydraulic Power Unit with Proportional Valves",
      powerSupply: "3-Phase 415V",
      pitDepth: "1000 mm",
      overhead: "2800 mm",
      doorType: "Automatic or Manual Telescopic Doors",
      stops: "Up to 6 Stops"
    },
    features: [
      "Zero Overhead Machinery Space Needed",
      "Smooth Proportional Valve Acceleration & Deceleration",
      "Low Energy Consumption on Downward Trips (Gravity Flow)",
      "High Weight Payload Capacity",
      "Compact Hydraulic Powerpack Enclosure"
    ],
    applications: ["Low-Rise Commercial Buildings", "Private Villas", "Showrooms", "Factories"],
    finishes: ["Heavy Duty Stainless Steel", "Chequered Aluminum Floor", "Industrial Steel Coating"],
    safetySystems: [
      "Rupture Valve Hydraulic Safety Lock",
      "Emergency Manual Lowering Valve",
      "Oil Temperature Sensor & Alarm",
      "Pressure Relief Valve"
    ]
  },
  {
    id: "stretcher-elevators",
    name: "Stretcher Elevators",
    category: "Specialized",
    tagline: "Critical Medical Transport Lifts for Hospitals & Healthcare Centers",
    description: "Specifically dimensioned to comfortably accommodate hospital beds, medical stretchers, life support gear, and attending healthcare professionals with gentle, bump-free acceleration.",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    specs: {
      capacity: "1020 kg - 1600 kg (15 to 24 Persons / Medical Stretcher)",
      speed: "1.0 m/s - 1.75 m/s",
      driveType: "VVVF Gearless PMSM Drive",
      powerSupply: "3-Phase 415V, 50Hz",
      pitDepth: "1500 mm",
      overhead: "4400 mm",
      doorType: "Side Opening Extra-Wide Automatic Doors (1100mm+)",
      stops: "Up to 30 Stops"
    },
    features: [
      "Extended Cabin Depth for Hospital Stretchers",
      "Smooth Floor Leveling within ±2mm Precision",
      "Priority Emergency Hospital Code Key Override Switch",
      "Antibacterial Germ-Resistant Stainless Steel Surfaces",
      "Protective Wall Bumper Rails against Gurney Impacts",
      "Uninterruptible Power Supply for Critical Transit"
    ],
    applications: ["Multi-specialty Hospitals", "Medical Clinics", "Surgical Centers", "Nursing Homes"],
    finishes: ["Medical Grade 316 Stainless Steel", "Seamless Anti-Microbial Vinyl Floor", "Heavy Duty Rubber Guard Rails"],
    safetySystems: [
      "Instant Emergency Doctor Service Mode",
      "ARD Battery Rescue",
      "Precision Leveling Laser Sensor",
      "Emergency Intercom to Nurse Station"
    ]
  },
  {
    id: "automobile-elevators",
    name: "Automobile Elevators",
    category: "Industrial",
    tagline: "Heavy-Duty Vehicle Vertical Transfer Platforms",
    description: "Engineered to lift passenger cars, SUVs, and commercial vehicles between multi-level car showrooms, parking facilities, and high-rise private garages.",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    specs: {
      capacity: "3000 kg - 5000 kg",
      speed: "0.25 m/s - 0.5 m/s",
      driveType: "Heavy-Duty Hydraulic Cylinder / Heavy Traction",
      powerSupply: "3-Phase 415V, 50Hz",
      pitDepth: "1500 mm",
      overhead: "4200 mm",
      doorType: "Center Opening 4-Panel Automatic Heavy Doors",
      stops: "Up to 10 Stops"
    },
    features: [
      "Dual In-Cabin Vehicle Operation Buttons (Operated from Driver Window)",
      "High Weight Structural Reinforcement Floor Frame",
      "Optical Infrared Car Position Alignment Sensors",
      "Heavy Anti-Skid Diamond Steel Plate Flooring",
      "Dual Side Entrance Option (Front & Rear Passage)"
    ],
    applications: ["Multi-Level Parking Complexes", "Automobile Showrooms", "Luxury Private Car Garages", "Automotive Service Hubs"],
    finishes: ["Reinforced Diamond Plate Steel Floor", "Industrial Epoxy Powder Coated Cabin Walls"],
    safetySystems: [
      "Photoelectric Wheel Alignment Safety Sensor",
      "Mechanical Hydraulic Safety Pawl Locks",
      "Heavy Load Overload Sensing Cell",
      "Emergency Stop Switch & Siren"
    ]
  },
  {
    id: "goods-freight-elevators",
    name: "Goods / Freight Elevators",
    category: "Industrial",
    tagline: "Heavy-Duty Industrial Material Moving Solutions",
    description: "Built tough to withstand harsh industrial environments, forklift loading, and heavy pallet transport in manufacturing plants, warehouses, and logistics centers.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    specs: {
      capacity: "1000 kg - 5000 kg+",
      speed: "0.35 m/s - 1.0 m/s",
      driveType: "Heavy Duty Geared / Gearless Traction or Hydraulic",
      powerSupply: "3-Phase 415V, 50Hz",
      pitDepth: "1500 mm",
      overhead: "4200 mm",
      doorType: "Vertical Bi-Parting Manual / Automatic Heavy Shutter Doors",
      stops: "Up to 20 Stops"
    },
    features: [
      "Forklift-rated Reinforced Structural Floor",
      "Impact Resistant Steel Cabin Walls",
      "Wide Clear Door Opening Dimensions",
      "Simple & Durable Industrial Push Button Controls",
      "Optional Collapsible Gate or Vertical Bi-Parting Shutters"
    ],
    applications: ["Factories & Manufacturing Plants", "Warehouses & Logistics Hubs", "Textile Mills", "Departmental Stores"],
    finishes: ["Heavy Galvanized Steel", "Chequered Steel Flooring", "Industrial Enamel Finish"],
    safetySystems: [
      "Heavy-duty Mechanical Safety Gear",
      "Overload Light & Warning Buzzer",
      "Door Interlock Safety Switches",
      "Slack Rope Safety Switch"
    ]
  },
  {
    id: "dumbwaiter-elevators",
    name: "Dumbwaiter Elevators",
    category: "Specialized",
    tagline: "Compact Goods Lifts for Food, Documents & Supplies",
    description: "Small vertical freight lifts designed to move lightweight items such as food platters, kitchenware, medical files, laundry, and tools quickly between floors.",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    specs: {
      capacity: "50 kg - 250 kg",
      speed: "0.35 m/s - 0.5 m/s",
      driveType: "Compact Top Machine Traction Drive",
      powerSupply: "Single Phase 220V or 3-Phase 415V",
      pitDepth: "400 mm (or Counter Height Loading)",
      overhead: "2400 mm",
      doorType: "Bi-Parting Vertical Sliding Stainless Doors",
      stops: "Up to 8 Stops"
    },
    features: [
      "Food-Grade Stainless Steel 304 Interior",
      "Removable Stainless Steel Shelving",
      "Counter-Height Floor Level Access Option",
      "Call & Send Arrival Indicator Chime",
      "Dust-proof Sealed Shaft Operation"
    ],
    applications: ["Restaurants & Commercial Kitchens", "Hotels & Cafes", "Libraries & Banks", "Hospitals (Pharmacy & Lab Samples)"],
    finishes: ["Brushed Stainless Steel 304", "Food Grade Clean Finish"],
    safetySystems: [
      "Door Electrical Interlock Lock",
      "Over-travel Limit Switches",
      "Emergency Stop Switch",
      "Overload Protection"
    ]
  },
  {
    id: "service-elevators",
    name: "Service Elevators",
    category: "Commercial",
    tagline: "Dual-Purpose Utility Lifts for Hotel Staff & Cargo Handling",
    description: "Versatile heavy-duty elevators tailored for housekeeping staff, room service, baggage handling, and maintenance crew in commercial hotels and office towers.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    specs: {
      capacity: "1000 kg - 2000 kg (15 to 26 Persons)",
      speed: "1.0 m/s - 1.75 m/s",
      driveType: "VVVF Gearless PMSM Drive",
      powerSupply: "3-Phase 415V",
      pitDepth: "1500 mm",
      overhead: "4400 mm",
      doorType: "Heavy Automatic Side/Center Opening VVVF Doors",
      stops: "Up to 35 Stops"
    },
    features: [
      "Dual Entrance Door Option (Through-Car)",
      "High Scratch Resistance Interior Linings",
      "Priority Key Switch for Maintenance / Attendant Mode",
      "Protective Wall Bumper Pads",
      "Extra Wide Cabin Door Clearances"
    ],
    applications: ["Hotels & Hospitality Towers", "Commercial Office Towers", "Exhibition Halls", "Convention Centers"],
    finishes: ["Reinforced Textured Stainless Steel", "Non-Slip Industrial Rubber Flooring"],
    safetySystems: [
      "ARD Emergency Rescue",
      "Infrared Full Door Curtain",
      "Attendant Service Key Switch Override",
      "Emergency Intercom System"
    ]
  },
  {
    id: "car-parking-systems",
    name: "Car Parking Systems",
    category: "Industrial",
    tagline: "Automated Mechanical Multi-Tier Vehicle Stacking Solutions",
    description: "Maximize parking capacity in minimal footprint. Kaizel Mechanical Car Parking Systems utilize vertical hydraulic lift and puzzle slide mechanisms to double or triple parking slots.",
    heroImage: "/images/hero_elevator.jpg",
    specs: {
      capacity: "2000 kg - 2700 kg per vehicle slot",
      speed: "Lifting speed 0.15 m/s, Sliding speed 0.12 m/s",
      driveType: "Hydraulic Cylinder / Chain Drive Motor",
      powerSupply: "3-Phase 415V, 50Hz",
      pitDepth: "Pit type or Pitless Surface Mounted options",
      overhead: "3600 mm (2-Level Surface Stack)",
      doorType: "Automated Safety Barrier / Roll-up Shutter",
      stops: "2 to 6 Vertical Stacking Tiers"
    },
    features: [
      "Puzzle Stacking & Hydraulic Pit Lift Configurations",
      "PLC Computerized Automatic Control System",
      "RFID Card / Keypad Touchscreen Operation",
      "High Strength Structural Steel Construction",
      "Ultra-Fast Retrieval Time (< 60 Seconds per car)",
      "Emergency Stop & Anti-Falling Mechanical Safety Locks"
    ],
    applications: ["Residential Complexes", "Commercial IT Parks", "Shopping Malls", "Urban High-Density Garages"],
    finishes: ["Hot-Dip Galvanized Anti-Corrosion Steel", "Powder-coated Safety Railings"],
    safetySystems: [
      "Mechanical Anti-Fall Safety Catch Locks",
      "Photoelectric Vehicle Detection Sensors",
      "Emergency Manual Lowering Device",
      "Overload & Over-height Sensor Switches"
    ]
  }
];

export const PRODUCT_CATEGORIES = ["All", "Residential", "Commercial", "Industrial", "Specialized"];
