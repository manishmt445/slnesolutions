import { IndustryItem } from '../types';

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "oil-gas",
    name: "Oil & Gas",
    slug: "oil-gas",
    iconName: "Fuel",
    image: "/oil.jpg",
    description: "Reliable calibration, valve refurbishment, and pipeline freezing for upstream, midstream, and downstream petrochemical infrastructure.",
    applications: [
      "Wellhead and manifold pressure instrumentation calibration",
      "API valve overhaul and hydrostatic testing",
      "Pipeline freeze isolation for maintenance without depressurizing lines",
      "Custody transfer flow meter verification"
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    iconName: "Factory",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Precision calibration of production lines, mechanical maintenance, and technical manpower for heavy and precision manufacturing plants.",
    applications: [
      "Assembly line torque and pressure calibration",
      "Preventive maintenance and annual turnaround support",
      "Dimensional tooling calibration and inspection",
      "Skilled instrumentation crew deployment"
    ]
  },
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    slug: "pharmaceuticals",
    iconName: "FlaskConical",
    image: "/pharma.jpg",
    description: "GMP-compliant thermal mapping, cleanroom environmental validation, and sanitary instrument calibration for pharma facilities.",
    applications: [
      "Thermal and humidity mapping of stability chambers and cold rooms",
      "Autoclave and sterilization equipment validation",
      "Sanitary pressure transmitter and RTD sensor calibration",
      "21 CFR Part 11 compliant audit documentation"
    ]
  },
  {
    id: "power-energy",
    name: "Power & Energy",
    slug: "power-energy",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    description: "Critical instrumentation testing, boiler valve servicing, and thermal energy verification for thermal, hydro, and renewable plants.",
    applications: [
      "Steam loop control valve repair and safety relief pop testing",
      "Turbine temperature and vibration sensor calibration",
      "BTU and thermal energy meter calibration",
      "Planned plant outage and shutdown engineering execution"
    ]
  },
  {
    id: "chemical-industries",
    name: "Chemical Industries",
    slug: "chemical-industries",
    iconName: "Beaker",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    description: "Corrosion-resistant valve maintenance, toxic gas detector calibration, and safe pipe freezing for hazardous chemical processes.",
    applications: [
      "Corrosive process valve lapping and seal renewal",
      "Gas detection and toxic hazard sensor calibration",
      "Cryogenic pipe freezing for non-drain valve servicing",
      "Flow transmitter calibration on aggressive chemical lines"
    ]
  },
  {
    id: "food-processing",
    name: "Food Processing",
    slug: "food-processing",
    iconName: "Utensils",
    image: "/food.jpg",
    description: "Hygienic temperature validation, steam valve servicing, and precision weighing scale calibration for food & beverage plants.",
    applications: [
      "Pasteurizer and retorts thermal validation",
      "Weighing scale and batching instrument calibration",
      "Sanitary valve maintenance and seat inspection",
      "Cold storage continuous temperature mapping"
    ]
  },
  {
    id: "water-treatment",
    name: "Water Treatment",
    slug: "water-treatment",
    iconName: "Droplets",
    image: "/water.jpg",
    description: "Bulk flow meter testing, effluent monitoring calibration, and pump valve repair for municipal and industrial water treatment plants.",
    applications: [
      "Ultrasonic clamp-on flow meter verification",
      "Water meter calibration for regulatory compliance",
      "Pumping station gate and butterfly valve overhaul",
      "Pressure transmitter testing on filter manifolds"
    ]
  },
  {
    id: "industrial-facilities",
    name: "Industrial Facilities",
    slug: "industrial-facilities",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    description: "Central utility plant maintenance, chiller BTU verification, and pipe freezing for large industrial complexes and infrastructure.",
    applications: [
      "HVAC chiller plant BTU meter calibration",
      "Pipe freezing for chilled water valve replacement without draining loops",
      "Annual facility maintenance and equipment hire",
      "Facility environmental validation and air velocity checks"
    ]
  }
];
