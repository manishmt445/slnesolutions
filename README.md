# Sri Lakshmi Narasimha Engineering Solutions
## Premium Industrial Engineering & Calibration Corporate Website

A complete, modern, responsive corporate website built for **Sri Lakshmi Narasimha Engineering Solutions** (SLN Engineering Solutions) based in Kukatpally, Hyderabad, Telangana, India.

---

### Key Architectural Highlights

- **Design Inspiration**: Modeled after the corporate structure, spacious layout, and visual presentation of [African Foods DXB](https://www.africanfoodsdxb.com/).
- **Engineering Disciplines**: Covers all seven core industrial service categories referenced from [ProCalMe](https://procalme.com/).
- **Company Branding**:
  - **Company Name**: Sri Lakshmi Narasimha Engineering Solutions
  - **Short Name**: SLN Engineering Solutions
  - **Phone**: `1234567890` (Formatted: `+91 1234567890`)
  - **Email**: `slne@gmail.com`
  - **Location**: Kukatpally, Hyderabad, Telangana, India
  - **Logo**: Incorporated from `logo.jpeg`
  - **Color Palette**: Primary Navy (`#102B50`), Secondary Navy (`#173D66`), Light Surface (`#F4F7FA`), Steel Grey (`#64748B`), Accent Blue (`#2875B9`).

---

### Pages & Routes

1. **Homepage (`/`)**
   - Section 1: Sticky Navigation Bar with Desktop Dropdown & Mobile Drawer
   - Section 2: Hero Banner with Industrial Visuals & Dual Call-to-Action
   - Section 3: Company Statistics (4 Descriptive Highlight Cards without invented numbers)
   - Section 4: About Our Company (Two-Column Layout with Image & Badging)
   - Section 5: Vision and Mission Side-by-Side Cards
   - Section 6: Our Services (Numbered 01–07 Cards with Key Applications & Links)
   - Section 7: Our Industries (8 Core Sectors Grid)
   - Section 8: Why Choose Us (6 Professional Feature Cards)
   - Section 9: Core Values (6 Ethical & Technical Values)
   - Section 10: Contact Call to Action Banner
   - Section 11: Contact Us (Left: Company Details & Google Maps Embed; Right: Interactive RFQ Form)
   - Section 12: Premium Navy Footer with Links to All 7 Services

2. **About Us Page (`/about`)**
   - Comprehensive profile, vision, mission, core values, quality commitment, and technical capabilities.

3. **Services Overview Page (`/services`)**
   - Catalog of all seven engineering services with live search filter.

4. **Seven Individual Service Detail Pages (`/services/:slug`)**
   - `/services/calibration-certification` (01. Calibration & Certification of Process Instruments)
   - `/services/pipe-freezing` (02. Pipe Freezing Services)
   - `/services/valve-repair` (03. Valve Repair & Refurbishment)
   - `/services/annual-maintenance` (04. Annual Maintenance & Shutdown Jobs)
   - `/services/flow-btu-meter-calibration` (05. Flow & BTU/Energy Meter Calibration)
   - `/services/equipment-hire-manpower` (06. Equipment on Hire & Skilled Manpower Supply)
   - `/services/mapping-validation` (07. Mapping & Validation Services)
   *(Each page includes banner, scope, equipment used, benefits, applicable sectors, interactive FAQs accordion, quote buttons, and related services).*

5. **Industries Page (`/industries`)**
   - Detailed coverage of Oil & Gas, Manufacturing, Pharmaceuticals, Power & Energy, Chemical Industries, Food Processing, Water Treatment, and Industrial Facilities.

6. **Why Choose Us Page (`/why-choose-us`)**
   - Deep dive into the 6 pillars, traceability standards, and client assurance checklist.

7. **Contact Page (`/contact`)**
   - Dedicated contact hub, direct dialing, maps, operational hours, and quotation support FAQs.

---

### Functional Features

- **Interactive Quote Request Modal**: Can be launched from any button across the site with pre-filled service context.
- **Form Validation & Backend Handling**:
  - Full client-side validation for all fields.
  - Realistic submission handling with loading indicators.
  - Enquiry reference ID generation (e.g. `SLN-ENQ-XXXXXX`).
  - LocalStorage persistence (`sln_engineering_enquiries`).
  - Downloadable Enquiry/Quotation Receipt in text format for immediate client records.
- **SEO & Structured Data**:
  - `index.html` configured with meta tags, Open Graph, and Schema.org `LocalBusiness` JSON-LD.
  - `public/robots.txt` and `public/sitemap.xml` included.
- **Responsive Layout**: Designed for mobile phones, tablets, laptops, and wide desktop screens.
- **Scroll-to-top handler**: Automatically resets viewport scroll on page navigation.

---

### Running the Project

To start the local development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```
