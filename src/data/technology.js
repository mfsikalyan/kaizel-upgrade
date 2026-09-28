export const TECH_FEATURES = [
  {
    id: "vvvf-drive",
    title: "VVVF Variable Frequency Drive",
    subtitle: "Precision Speed & Energy Optimization",
    description: "Micro-processor controlled Variable Voltage Variable Frequency drive continuously smooths acceleration and deceleration curves, reducing starting current spikes by up to 50% while delivering levelling accuracy within ±2mm.",
    category: "Drive & Control",
    icon: "Cpu",
    image: "/images/tech_vvvf_drive.jpg"
  },
  {
    id: "ard-rescue",
    title: "Automatic Rescue Device (ARD)",
    subtitle: "Instant Power Failure Protection",
    description: "In the event of a main power grid outage, the intelligent battery-powered ARD system takes control immediately, safely navigating the cabin to the nearest floor level and opening the automatic doors to allow passenger egress.",
    category: "Safety System",
    icon: "ShieldAlert",
    image: "/images/tech_ard_rescue.jpg"
  },
  {
    id: "vvvf-doors",
    title: "VVVF Synchronous Door Operator",
    subtitle: "Smooth, Quiet & Safe Door Actuation",
    description: "Featuring high-precision encoder Feedback, Kaizel door operators adjust closing force and speed automatically based on obstruction sensing, eliminating harsh door slams and maximizing mechanism longevity.",
    category: "Door System",
    icon: "Sliders",
    image: "/images/tech_vvvf_doors.jpg"
  },
  {
    id: "light-curtain",
    title: "Infrared Multi-Beam Safety Curtain",
    subtitle: "Full-Height Invisible Door Barrier",
    description: "Creates a dense array of 128 invisible infrared light beams across the full height of the elevator door frame. Any disruption instantly triggers immediate re-opening without physical impact.",
    category: "Safety System",
    icon: "Eye",
    image: "/images/tech_light_curtain.jpg"
  },
  {
    id: "overload-sensor",
    title: "Digital Load Cell Overload Alarm",
    subtitle: "Real-time Cabin Mass Measurement",
    description: "Precision strain-gauge sensors installed beneath the cabin platform measure total live weight. If capacity is exceeded, an audible alarm sounds, the floor display alerts passengers, and doors remain open until weight drops.",
    category: "Safety System",
    icon: "Scale",
    image: "/images/tech_overload_sensor.jpg"
  },
  {
    id: "floor-sound",
    title: "Voice Floor Synthesizer & Sound Annunciator",
    subtitle: "Accessible Auditory Navigation",
    description: "Clear multi-lingual voice guidance announces upcoming floor arrivals, direction of travel, emergency alerts, and door status for visually impaired passengers and enhanced accessibility.",
    category: "User Experience",
    icon: "Volume2",
    image: "/images/tech_floor_sound.jpg"
  },
  {
    id: "gearless-pmsm",
    title: "Permanent Magnet Gearless Traction Motor",
    subtitle: "Oil-Free Green Propulsion",
    description: "Compact high-torque gearless synchronous motors eliminate gearboxes and oil leaks, delivering up to 45% higher energy efficiency and virtually silent shaft operation.",
    category: "Drive & Control",
    icon: "Zap",
    image: "/images/tech_gearless_pmsm.jpg"
  },
  {
    id: "intercom-system",
    title: "Dual-Way Emergency Intercom & Alarm",
    subtitle: "Instant Communication Conduit",
    description: "Built-in battery-backed hands-free speakerphone allows trapped passengers to communicate instantly with building security or Kaizel 24x7 emergency response desk.",
    category: "Communication",
    icon: "PhoneCall",
    image: "/images/tech_intercom_system.jpg"
  }
];

export const SAFETY_PILLARS = [
  {
    title: "Progressive Over-Speed Safety Gear",
    desc: "Mechanical governor monitors speed continuously. If downward speed exceeds safety thresholds, heavy wedge brakes lock instantly onto guide rails.",
    code: "ISO 14665 SEC 4"
  },
  {
    title: "Phase Sequence & Undervoltage Relay",
    desc: "Monitors main electrical supply phase order and voltage stability, preventing reverse motor rotation or low-voltage coil overheating.",
    code: "ELEC SAFE V2"
  },
  {
    title: "Buffer Springs & Hydraulic Impact Absorbers",
    desc: "Heavy-duty oil hydraulic buffers installed at the shaft pit floor absorb terminal kinetic energy in extreme over-travel scenarios.",
    code: "EN 81-20"
  },
  {
    title: "Fireman Key Return Service Mode",
    desc: "Dedicated key switch forces the lift to return nonstop to the main evacuation floor during building fire emergencies.",
    code: "FIRE SAFE IS 14665"
  }
];
