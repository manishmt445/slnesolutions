import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "calibration-certification",
    slug: "calibration-certification",
    number: "01",
    title: "Calibration & Certification of Process Instruments",
    shortTitle: "Calibration & Certification",
    tagline: "High-precision testing, traceability, and certified documentation for industrial process instruments.",
    description: "Calibration, testing and certification support for industrial measuring and process instruments to maintain measurement integrity and regulatory compliance.",
    longDescription: "Sri Lakshmi Narasimha Engineering Solutions provides comprehensive calibration and certification services for critical process instruments across diverse manufacturing and process environments. Our calibration protocols adhere to stringent technical standards, ensuring your instruments operate with maximum accuracy, repeatability, and compliance with statutory and quality management systems.",
    heroImage: "/1.png",
    detailImage: "/1.png",
    scope: [
      "Laboratory and on-site testing for pressure, temperature, and electrical measuring devices.",
      "Inspection and calibration of dimensional gauging tools and weighing apparatus.",
      "Testing of process flow meters, gas transmitters, and analytical sensors.",
      "Verification of torque wrenches, force gauges, and load cells.",
      "Issuance of traceable calibration certificates with uncertainty calculations.",
      "Periodic calibration schedule management and recalibration reminders."
    ],
    examples: [
      "Pressure instruments (gauges, transmitters, switches)",
      "Temperature instruments (RTDs, thermocouples, gauges, indicators)",
      "Electrical instruments (multimeters, clamp meters, calibrators)",
      "Dimensional instruments (calipers, micrometers, height gauges)",
      "Weighing instruments (balances, platform scales, hopper scales)",
      "Flow measuring instruments (vortex, electromagnetic, ultrasonic)",
      "Gas detection instruments (combustible, toxic, oxygen sensors)",
      "Force and torque instruments (torque wrenches, dynamometers)"
    ],
    benefits: [
      "Guarantees operational accuracy and process repeatability.",
      "Minimizes downtime caused by measurement drift and faulty telemetry.",
      "Maintains audit readiness and regulatory compliance with ISO / technical bodies.",
      "Protects downstream equipment and finished product quality.",
      "Traceable documentation suitable for stringent customer and safety audits."
    ],
    industries: [
      "Oil & Gas",
      "Pharmaceuticals",
      "Power & Energy",
      "Chemical Industries",
      "Food Processing",
      "Water Treatment"
    ],
    equipment: [
      "High-precision digital pressure calibrators & deadweight testers",
      "Dry block temperature calibrators & stirred liquid baths",
      "Multi-product electrical calibrators & precision standard resistors",
      "Traceable gauge block sets & optical measurement stages",
      "Certified reference test weights (Class F1/M1)"
    ],
    faqs: [
      {
        question: "Can SLN provide on-site calibration at our manufacturing plant?",
        answer: "Yes. Sri Lakshmi Narasimha Engineering Solutions provides both on-site calibration using portable master standards and controlled facility calibration depending on instrument specifications and client plant requirements."
      },
      {
        question: "What documentation is provided after calibration?",
        answer: "Every calibrated instrument receives an inspection report and calibration certificate indicating 'as-found' and 'as-left' data, reference master standard traceability details, ambient environmental conditions, and measurement uncertainty."
      },
      {
        question: "How frequently should process instruments be calibrated?",
        answer: "Recalibration frequency depends on instrument criticality, process environment, manufacturer recommendations, and relevant quality assurance guidelines, typically ranging from 6 to 12 months."
      }
    ]
  },
  {
    id: "pipe-freezing",
    slug: "pipe-freezing",
    number: "02",
    title: "Pipe Freezing Services",
    shortTitle: "Pipe Freezing Services",
    tagline: "Specialized non-intrusive cryogenic ice plug isolation for pipeline maintenance without full draining.",
    description: "Specialized temporary pipe isolation and freezing support for industrial maintenance and pipeline modification activities.",
    longDescription: "Our specialized pipe freezing services provide safe, non-intrusive isolation of operating fluid pipelines using cryogenic cooling agents (such as liquid nitrogen or controlled CO2 jackets). By creating a secure, freeze-resistant solid ice plug inside the pipe, plant maintenance teams can execute valve replacements, header modifications, or line repairs without draining entire systems or halting entire production facilities.",
    heroImage: "/2.png",
    detailImage: "/2.png",
    scope: [
      "Controlled cryogenic freeze jacket installation on carbon steel, stainless steel, and alloy lines.",
      "Continuous freeze plug temperature monitoring and pressure integrity tracking.",
      "Dual or single pipe freeze isolation for targeted section replacement.",
      "Safe isolation for valve replacements, spool insertions, and pump maintenance.",
      "Controlled thawing protocols after maintenance completion."
    ],
    examples: [
      "Industrial pipe freezing",
      "Temporary pipeline isolation",
      "Valve replacement support",
      "Pipeline maintenance",
      "Pipework modification support",
      "Emergency line containment support"
    ],
    benefits: [
      "Eliminates the cost and delay of draining thousands of liters of process water or glycol.",
      "Significantly reduces plant downtime during emergency or planned valve swaps.",
      "Prevents environmental hazards associated with venting or disposing treated fluids.",
      "Ensures zero residual contamination or structural metallurgical damage to piping.",
      "Enables continuous operation of unaffected sections of the plant network."
    ],
    industries: [
      "Industrial Facilities",
      "Power & Energy",
      "Chemical Industries",
      "Pharmaceuticals",
      "Commercial HVAC & Facilities",
      "Water Treatment"
    ],
    equipment: [
      "Engineered cryogenic freeze jackets and specialized thermal insulation collars",
      "Liquid nitrogen delivery manifolds & automated dosing valves",
      "Multi-channel thermocouple dataloggers for real-time ice plug verification",
      "Certified pipeline pressure gauges & ultrasonic thickness verification meters"
    ],
    faqs: [
      {
        question: "What pipe sizes and materials can be safely frozen?",
        answer: "Pipe freezing can be performed on pipe diameters ranging from 1/2 inch up to 24 inches and across carbon steel, stainless steel, copper, ductile iron, and certain alloy lines containing static water or suitable process fluids."
      },
      {
        question: "Does pipe freezing damage the pipe structure or weld joints?",
        answer: "No. Controlled cryogenic freezing forms an internal plug that freezes inward from the wall toward the center. Under engineered parameters, radial forces are controlled and do not degrade metallurgical properties."
      },
      {
        question: "How long can a freeze plug be maintained?",
        answer: "A freeze plug can be held safely for several hours or multiple work shifts while technicians perform valve repairs, welding, or spool modifications, supported by continuous cryogenic monitoring."
      }
    ]
  },
  {
    id: "valve-repair",
    slug: "valve-repair",
    number: "03",
    title: "Valve Repair & Refurbishment",
    shortTitle: "Valve Repair & Refurbishment",
    tagline: "Comprehensive inspection, machining, overhaul, and pressure testing for critical industrial valves.",
    description: "Inspection, maintenance, repair and refurbishment support for industrial valves to maintain operational reliability.",
    longDescription: "Sri Lakshmi Narasimha Engineering Solutions delivers end-to-end valve repair, seat lapping, stem repacking, actuator calibration, and certified hydro-testing for industrial valves. From high-pressure safety relief valves to modulating control valves, our technical team restores critical flow control equipment to OEM operational tolerances, extending service life and preventing plant leakage.",
    heroImage: "/3.png",
    detailImage: "/3.png",
    scope: [
      "Visual and non-destructive examination (NDE) of valve bodies, discs, and stems.",
      "Precision seat grinding, lapping, and dimensional restoration.",
      "Gland packing renewal, gasket replacement, and trim refurbishment.",
      "Control valve actuator inspection, pneumatic positioner calibration, and bench testing.",
      "Hydrostatic shell and seat leakage testing in accordance with API / ANSI standards.",
      "Pressure safety valve (PSV) pop test verification and set-point certification."
    ],
    examples: [
      "Control valves (pneumatic, electric, hydraulic)",
      "Gate valves (wedge, knife gate, parallel slide)",
      "Globe valves (throttling and isolation)",
      "Butterfly valves (resilient seated, high performance, triple offset)",
      "Pressure safety valves (PSV / PRV)",
      "Valve testing and inspection (seat leakage, shell hydro test)"
    ],
    benefits: [
      "Substantially lowers capital expenditure compared to procuring brand new valves.",
      "Eliminates fugitive emissions and costly process media leaks.",
      "Restores tight shut-off integrity and control loop responsiveness.",
      "Extends life cycles of obsolete or hard-to-source specialized valves.",
      "Delivers complete test certificates confirming set points and seat tightness."
    ],
    industries: [
      "Oil & Gas",
      "Power & Energy",
      "Chemical Industries",
      "Manufacturing",
      "Water Treatment",
      "Pharmaceuticals"
    ],
    equipment: [
      "Hydrostatic and pneumatic valve test benches with digital datalogging",
      "Portable valve seat lapping and grinding machines",
      "Precision dial test indicators, micrometers, and surface roughness testers",
      "Calibrated PSV test bench with burst/pop pressure sensors",
      "Torque multipliers and heavy-duty flange disassembly tools"
    ],
    faqs: [
      {
        question: "Which valve standards do your testing procedures adhere to?",
        answer: "We perform hydrostatic shell and seat leak testing in accordance with accepted industrial standards including API 598, ASME B16.34, API 527, and ISO 5208."
      },
      {
        question: "Can you overhaul valves during active plant shutdown windows?",
        answer: "Yes. We regularly mobilize dedicated valve maintenance crews with portable lapping equipment and mobile test rigs to execute quick-turnaround valve refurbishments during planned shutdowns."
      },
      {
        question: "Do you supply replacement packing, gaskets, and internal trims?",
        answer: "Yes, we support sourcing OEM and high-grade compatible gland packings, spiral wound gaskets, and precision trims suited to your process media and temperature ratings."
      }
    ]
  },
  {
    id: "annual-maintenance",
    slug: "annual-maintenance",
    number: "04",
    title: "Annual Maintenance & Shutdown Jobs",
    shortTitle: "Annual Maintenance & Shutdown",
    tagline: "Planned turnaround execution, preventive plant upkeep, and mission-critical shutdown support.",
    description: "Industrial maintenance and shutdown support to help maintain equipment performance and operational efficiency.",
    longDescription: "Industrial plant reliability demands structured preventive upkeep and flawless execution during planned shutdowns. Sri Lakshmi Narasimha Engineering Solutions assists plants with annual maintenance contracts (AMC), scheduled turnaround operations, emergency troubleshooting, and technical manpower mobilization. We help minimize outage windows while ensuring all rotating equipment, instruments, and piping headers meet operational criteria.",
    heroImage: "/4.png",
    detailImage: "/4.png",
    scope: [
      "Detailed shutdown planning, task sequencing, and technical resource allocation.",
      "Comprehensive instrumentation inspection, loop checking, and re-commissioning.",
      "Mechanical overhaul of pumps, valves, heat exchangers, and pipe manifolds.",
      "Preventive maintenance schedules for continuous running process loops.",
      "Flange management, gasket replacement, bolt torqueing, and line leak testing.",
      "Post-shutdown startup assistance and engineering sign-off documentation."
    ],
    examples: [
      "Preventive maintenance",
      "Annual maintenance support",
      "Shutdown maintenance",
      "Equipment inspection",
      "Technical manpower support",
      "Maintenance activities"
    ],
    benefits: [
      "Strict adherence to shutdown schedules prevents costly startup delays.",
      "Improves overall equipment effectiveness (OEE) and plant uptime.",
      "Identifies hidden component fatigue before catastrophic in-service failures occur.",
      "Optimizes maintenance costs through structured preventive service programs.",
      "Ensures full compliance with occupational health and safety regulations."
    ],
    industries: [
      "Manufacturing",
      "Power & Energy",
      "Oil & Gas",
      "Chemical Industries",
      "Pharmaceuticals",
      "Food Processing"
    ],
    equipment: [
      "Hydraulic torque wrenches and bolt tensioning units",
      "Digital vibration analyzers and thermal imaging cameras",
      "Instrumentation signal simulators & multi-loop calibrators",
      "Industrial borescope inspection systems",
      "Portable mobile workshop tooling containers"
    ],
    faqs: [
      {
        question: "How do you coordinate with our internal engineering team during a shutdown?",
        answer: "We designate an on-site project lead who coordinates daily work permits, safety briefings, shift handovers, and milestone tracking directly with your plant maintenance managers."
      },
      {
        question: "Can you handle emergency unscheduled maintenance calls?",
        answer: "Yes, our engineering response team supports rapid mobilization for unexpected breakdowns and critical line isolations."
      },
      {
        question: "What safety protocols are followed by your field personnel?",
        answer: "All personnel strictly comply with Lockout/Tagout (LOTO), personal protective equipment (PPE) requirements, hot work / confined space permits, and site-specific plant safety guidelines."
      }
    ]
  },
  {
    id: "flow-btu-meter-calibration",
    slug: "flow-btu-meter-calibration",
    number: "05",
    title: "Flow & BTU/Energy Meter Calibration",
    shortTitle: "Flow & BTU/Energy Meter Calibration",
    tagline: "Certified accuracy verification for industrial flow transmitters, thermal energy meters, and custody transfer.",
    description: "Calibration and testing support for flow measurement and thermal energy measurement instruments.",
    longDescription: "Accurate fluid flow and thermal energy metering are critical for billing verification, energy conservation, chilled water efficiency, and process balancing. Sri Lakshmi Narasimha Engineering Solutions provides specialized calibration, field verification, and clamp-on ultrasonic testing for electromagnetic, vortex, turbine, ultrasonic, and thermal BTU meters. We verify both volumetric flow and differential temperature sensors to validate calculated energy totals.",
    heroImage: "/5.png",
    detailImage: "/5.png",
    scope: [
      "In-situ non-invasive flow verification using calibrated transit-time ultrasonic flow meters.",
      "Bench calibration and flow loop testing for inline water, oil, and gas flow meters.",
      "BTU meter energy calculator testing using calibrated RTD resistance simulators.",
      "Paired matched temperature sensor calibration for delta-T accuracy in HVAC systems.",
      "Signal loop verification from flow transmitter to SCADA / PLC / BMS systems.",
      "Preparation of comprehensive calibration test sheets with uncertainty analysis."
    ],
    examples: [
      "Flow meters (electromagnetic, vortex, ultrasonic, turbine, Coriolis)",
      "BTU meters (district cooling, central chilling plant, heating circuits)",
      "Energy meters (thermal energy calculators and submetering systems)",
      "Flow transmitters (differential pressure orifice, venturi)",
      "Water meters (bulk industrial water, effluent treatment flow)",
      "Measurement system testing and field verification"
    ],
    benefits: [
      "Eliminates billing disputes in tenant utility sharing and commercial facilities.",
      "Maintains thermodynamic accuracy in chilled water and boiler steam loops.",
      "Non-intrusive testing avoids pipe cuts and process fluid interruption.",
      "Verifies compliance with green building, BEE, and energy management standards.",
      "Delivers confidence in custody transfer and raw material consumption monitoring."
    ],
    industries: [
      "Industrial Facilities",
      "Power & Energy",
      "Water Treatment",
      "Pharmaceuticals",
      "Chemical Industries",
      "Manufacturing"
    ],
    equipment: [
      "Portable high-accuracy transit-time clamp-on ultrasonic flow meters",
      "Precision decade resistance boxes & PT100/PT1000 temperature simulators",
      "Fluke multi-function process calibrators with HART communication",
      "Reference gravimetric test stands and master meter flow comparison loops"
    ],
    faqs: [
      {
        question: "Can you calibrate flow meters without cutting the pipe or draining lines?",
        answer: "Yes. By using advanced clamp-on ultrasonic flow meters as secondary reference standards, we can measure and verify flow rates non-invasively through the pipe wall without interrupting operations."
      },
      {
        question: "What is tested during a BTU meter calibration?",
        answer: "BTU meter calibration covers the flow sensor verification, the delta-temperature measurement circuit (paired temperature sensors), and the integrator unit calculation of enthalpy and total energy."
      },
      {
        question: "Do you calibrate water meters for environmental reporting?",
        answer: "Yes, we calibrate and certify intake water meters, borehole meters, and effluent discharge flow meters as required for state pollution control board and environmental audit filings."
      }
    ]
  },
  {
    id: "equipment-hire-manpower",
    slug: "equipment-hire-manpower",
    number: "06",
    title: "Equipment on Hire & Skilled Manpower Supply",
    shortTitle: "Equipment Hire & Manpower",
    tagline: "Industrial test equipment rental and certified instrumentation technicians on flexible deployment.",
    description: "Industrial equipment rental and skilled technical manpower support for engineering and maintenance requirements.",
    longDescription: "Project deadlines, emergency turnarounds, and specialized instrumentation audits often require instant access to certified testing instruments and qualified technical hands. Sri Lakshmi Narasimha Engineering Solutions bridges resource gaps by supplying calibrated rental equipment and deputing experienced instrumentation engineers, calibration technicians, pipe fitters, and maintenance supervisors to your site on short or long-term assignments.",
    heroImage: "/6.png",
    detailImage: "/6.png",
    scope: [
      "Short-term and long-term rental of calibrated industrial test and calibration equipment.",
      "Deployment of verified instrumentation technicians for commissioning and maintenance.",
      "On-site calibration technicians with portable standard rigs.",
      "Pipe freezing technicians with cryogenic gear and safety monitoring devices.",
      "Maintenance technicians for turnaround operations and mechanical overhaul.",
      "Pre-mobilization equipment inspection and safety induction compliance."
    ],
    examples: [
      "Testing equipment (multi-function calibrators, hydrostatic test pumps)",
      "Calibration equipment (dry block baths, deadweight testers, Hart communicators)",
      "Industrial instruments (clamp-on flow meters, data loggers, borescopes)",
      "Technical personnel (site engineers, calibration specialists)",
      "Instrumentation technicians (loop checking, terminal wiring, sensor setup)",
      "Maintenance manpower (valve fitters, mechanical technicians)"
    ],
    benefits: [
      "Avoids heavy capital expenditure on infrequently used high-precision test apparatus.",
      "All rental equipment arrives with valid, current calibration certificates.",
      "Rapid deployment of trained, safety-certified personnel reduces hiring delays.",
      "Flexible hiring models: day-rate, project-based, or turnaround contract.",
      "Eliminates downtime caused by internal staffing shortages during peak outages."
    ],
    industries: [
      "Manufacturing",
      "Oil & Gas",
      "Power & Energy",
      "Pharmaceuticals",
      "Chemical Industries",
      "Industrial Facilities"
    ],
    equipment: [
      "Fluke process calibrators, HART 475 / Trex communicators",
      "Ametek / Jofra dry block temperature calibrators",
      "High-pressure pneumatic & hydraulic comparator hand pumps",
      "Fuji / GE Panametrics portable ultrasonic flow meters",
      "Yokogawa / Hioki multi-channel digital data acquisition units"
    ],
    faqs: [
      {
        question: "Are your rental instruments provided with valid calibration certificates?",
        answer: "Yes. Every instrument hired from SLN is delivered with a valid traceable calibration certificate, operating manual, and standard probe accessories ready for immediate field use."
      },
      {
        question: "What qualifications do your instrumentation technicians possess?",
        answer: "Our technicians hold formal diplomas or engineering degrees in instrumentation and electrical engineering, with hands-on industrial plant experience and comprehensive safety training."
      },
      {
        question: "How quickly can equipment or manpower be deployed to site?",
        answer: "In Hyderabad and surrounding industrial belts, standard equipment and technical crew can often be mobilized within 24 to 48 hours following scope confirmation."
      }
    ]
  },
  {
    id: "mapping-validation",
    slug: "mapping-validation",
    number: "07",
    title: "Mapping & Validation Services",
    shortTitle: "Mapping & Validation Services",
    tagline: "Rigorous thermal mapping, facility qualification, and sensor validation for regulated environments.",
    description: "Technical mapping, monitoring and validation services for industrial facilities and equipment.",
    longDescription: "Regulatory standards in pharmaceuticals, cold storage, cleanrooms, and food manufacturing demand empirical proof that storage and process spaces maintain uniform temperature and humidity profiles. Sri Lakshmi Narasimha Engineering Solutions conducts thermal mapping, environmental data logging, equipment qualification (DQ, IQ, OQ, PQ), and HVAC validation using multi-point wireless and wired dataloggers, providing detailed statistical reports that satisfy stringent audit authorities.",
    heroImage: "/7.png",
    detailImage: "/7.png",
    scope: [
      "Thermal and relative humidity mapping of warehouses, cold rooms, and stability chambers.",
      "Autoclave, depyrogenation tunnel, and hot air oven temperature validation.",
      "Multi-point continuous data logging under loaded, unloaded, and door-opening stress conditions.",
      "Hot and cold spot identification, kinetic mean temperature (MKT) calculations.",
      "Equipment qualification protocol execution (IQ, OQ, PQ) with audit-ready documentation.",
      "Cleanroom HEPA filter integrity, velocity, and air pressure differential verification."
    ],
    examples: [
      "Temperature mapping (stability chambers, cold storage, refrigerated vans)",
      "Environmental mapping (pharma warehouses, cleanrooms, production bays)",
      "Equipment validation (autoclaves, incubators, ovens, freeze dryers)",
      "Facility validation (HVAC qualification, differential pressure tracking)",
      "Data logging (multi-channel temperature, humidity, pressure telemetry)",
      "Technical reporting (traceable reports with statistical analysis and charts)"
    ],
    benefits: [
      "Assures compliance with WHO, USFDA, GMP, and ISO environmental standards.",
      "Identifies dead zones and temperature excursions before costly product loss occurs.",
      "Delivers comprehensive audit-ready binders with graphs, tables, and sensor certificates.",
      "Optimizes HVAC airflow and thermal insulation performance.",
      "Reduces risks during regulatory audits and third-party quality inspections."
    ],
    industries: [
      "Pharmaceuticals",
      "Food Processing",
      "Chemical Industries",
      "Industrial Facilities",
      "Healthcare & Cold Chain"
    ],
    equipment: [
      "Multi-channel calibrated wireless temperature & relative humidity data loggers",
      "High-temperature thermal mapping loggers (-80°C to +400°C) with NIST traceability",
      "Hot wire anemometers and calibrated differential pressure micromanometers",
      "Aerosol photometers and particle counters for cleanroom integrity testing",
      "Validated analytical reporting software compliant with 21 CFR Part 11"
    ],
    faqs: [
      {
        question: "Do your mapping reports comply with 21 CFR Part 11 and GMP guidelines?",
        answer: "Yes. Our data logging systems and validation reporting adhere to 21 CFR Part 11 standards, ensuring data integrity, tamper-proof electronic audit trails, and traceable calibration certificates."
      },
      {
        question: "What is included in a mapping validation report?",
        answer: "A complete report includes the study protocol, logger positioning layout diagrams, raw statistical data (min, max, mean, standard deviation), MKT values, hot/cold spot analysis, and formal engineer conclusions."
      },
      {
        question: "Can mapping studies be conducted during seasonal variations?",
        answer: "Yes, we support both winter and summer extreme season mapping studies as typically required by regulatory bodies to demonstrate year-round thermal stability."
      }
    ]
  }
];
