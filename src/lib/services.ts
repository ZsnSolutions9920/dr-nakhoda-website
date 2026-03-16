export interface ServiceCategory {
  name: string;
  subServices: string[];
}

export const allServices: ServiceCategory[] = [
  {
    name: "Botox",
    subServices: [
      "Upper Face Botox",
      "Botox for Crow's Feet",
      "Botox for Frown Lines",
      "Botox for Forehead Lines",
      "Massetter Botox",
      "Botox for Nose Slimming",
      "Lip Flip",
      "DAO (Botox to Remove Resting Sad Face)",
      "Botox for Jawline",
      "Botox for Neck",
      "Nefrettiti Lift (Neck and Jawline)",
      "Traptox (Shoulder Slimming and Tension)",
      "Botox for Migraine Relief",
      "Botox for Hyperhydrosis (Excessive Sweating)",
      "Botox for Hyperhydrosis (Excessive Sweating) - Double Dosage",
    ],
  },
  {
    name: "Fillers",
    subServices: [
      "Full Facial Transformation",
      "Lip and Perioral Rejuvenation with Fillers",
      "Liquid Rhinoplasty (Nose Fillers and Botox)",
      "Butt Fillers with HA",
      "Breast Fillers with HA",
      "Maili",
      "Restylane",
      "Neuvia",
      "Hyamira and Other Fillers",
    ],
  },
  {
    name: "Injectable Biostimulators",
    subServices: [
      "PDRN Eyes",
      "PDRN Face",
      "PDRN Face, Neck, Eyes",
      "Neauvia Biostimulator",
      "Radiesse 1.5ml (Face or Hands or Neck)",
      "Profhilo (Face or Neck)",
      "Profhilo Structura",
      "Jalupro Super Hydro",
      "Jalapro HMW",
      "Jalapro Classic",
      "Jalupro Young Eyes",
      "Face Sculptra/Ghana/Lanluma (Face, Neck, Hands)",
      "Body Sculptra/Chana/Lanluna (Butt Fillers)",
      "Pluryal Densify",
      "Pluryal Silk",
    ],
  },
  {
    name: "Laser Hair Removal",
    subServices: [
      "Candela Gentlemax Pro",
      "Soprano Ice TITANIUM",
      "Revlite",
    ],
  },
  {
    name: "Slimming",
    subServices: [
      "Diet Plan with Mounjaro",
      "Diet Plan with Saxenda",
    ],
  },
  {
    name: "Energy Based Devices",
    subServices: [
      "Endolift",
      "Ultherapy",
      "Ultraformer",
      "Fractional CO2 Laser Resurfacing",
      "Erbium Yag Laser Resurfacing",
      "EMFACE Upper Face (Cheeks and Forehead)",
      "EMFACE Lower Face (Cheeks and Double Chin)",
      "EMFACE (Under Eyes)",
      "Forma (Red Carpet Facial)",
      "Fotona 4D",
      "GlowTox",
      "Alma Skin Tightening",
      "Pulse Dye Laser (Acne, Rosacea, PWS)",
      "Advatx Laser (Acne, Rosacea, PWS)",
      "Smooth Eyes",
      "LipLase",
      "Carboxytherapy",
      "Starwalker Eyes for Dark Circles",
      "Starwalker",
      "Picoway",
      "Revlite",
      "Clear and Bright",
      "Spectra Gold Toning",
      "Carbon Peel",
      "Tattoo Removal",
      "Birthmark Removal",
      "Morpheus",
      "Scarlet RF",
      "Sylfirm X",
      "Vivace",
      "Dermapen",
    ],
  },
  {
    name: "Hydrafacial",
    subServices: [
      "Hydrafacial Signature (Basic)",
      "Hydrafacial Delux (with LED)",
      "Hydrafacial Platinum (with LED and Lymphatic Drainage)",
      "Hydrafacial with Cryofacial",
      "Britriol (Brightening Serum) - Add On Booster",
      "Dermabuilder (Antiageing Peptides) - Add On Booster",
      "Glysal Prep (Glycolic and Salicylic Acid Exfoliation) - Add On Booster",
    ],
  },
  {
    name: "Gyne (Women) Intimate Areas",
    subServices: [
      "Emsella Chair (Urinary Incontinence)",
      "Starformer Intimawave (Urinary Incontinence)",
      "Intimalase (Tightening)",
      "Incontinlase (Urinary Incontinence)",
      "Renovalase (Post Menopausal Dryness)",
      "PRX T Lady (Pigmentation)",
      "Lasers for Pigmentation",
      "Labia Rejuvenation with Fillers",
    ],
  },
  {
    name: "IV / Drip",
    subServices: [
      "Vit C",
      "NAD 50",
      "NAD 100",
      "NAD 150",
      "NAD 250",
      "NAD 500",
      "Antiageing",
      "Weightloss",
      "Hairloss",
      "Meyers Drip",
      "Royal Flush",
      "Migraine/Headache",
      "Antibiotic",
    ],
  },
  {
    name: "Thread Lifting",
    subServices: [
      "Silhouette Soft 3 Pairs",
      "Silhouette Soft 5 Pairs",
      "Aptos Hammock Method for Neck Lift",
      "Aptos Light Lift for Upper Face",
      "Aptos Light Lift for Lower Face",
      "Aptos Visage Excellence Method Soft 10pcs",
      "Aptos Visage Excellence Method 10pcs",
      "Aptos Visage Excellence Method HA 10pcs",
      "Aptos Excellence Visage NAMICA with HA",
      "PCL Cannula",
      "PCL Tornado",
    ],
  },
  {
    name: "PRX-T33",
    subServices: [
      "PRX-T33 No Needle Rejuvenation Face",
      "PRX-T33 No Needle Rejuvenation Face and Neck",
      "PRX-T33 No Needle Rejuvenation Hands/Knees",
    ],
  },
  {
    name: "Hair Restoration",
    subServices: [
      "PRP HYCOX",
      "PRP-K",
      "PRP-D",
      "Xomage 10B",
      "Exovex Revive 5Billion",
      "Bioscience 5B",
      "Exovex 10Billion",
      "Bioscience 10B",
      "MCT Exosomes",
      "Fotona Hair Restart",
      "Exosome and PDRN Cocktail",
      "Xtra Hair Restoration Vials",
      "Regenera Active",
    ],
  },
  {
    name: "Exosomes",
    subServices: [
      "Exovex Rejuve 1B",
      "Xomage 10B",
      "Exovex Revive 5B",
      "Bioscience 5B (Skin)",
      "Exovex 10B",
      "Bioscience 10B (Hair)",
      "Bioscience 25B (Scars, Keloids)",
      "Invitra 10B",
      "Invitra 40B",
    ],
  },
  {
    name: "Body Contouring",
    subServices: [
      "Lemon Bottle/Kybella/Fat Dissolving Injections",
      "PB Serum (Fat Dissolving Injections)",
      "BTL Emsculpt Neo (Muscle Toning)",
      "Tightwave (Muscle Toning)",
      "BTL Lymphatism (Lymphatic Drainage Massage)",
      "Ultraformer Body (Skin Tightening and Cellulite)",
      "Morpheus Body (Skin Tightening, Cellulite, Stretch Marks)",
      "Cristal Pro (Coolsculpting)",
      "Tightsculpting",
      "Cryotherapy",
      "Endolift",
    ],
  },
  {
    name: "Glycolic Acid Peel",
    subServices: [],
  },
  {
    name: "Cryofacial",
    subServices: [],
  },
  {
    name: "Healite",
    subServices: [],
  },
  {
    name: "Lasers for Men",
    subServices: [
      "Fotona Nightlase for Snoring",
      "Fotona 4D MAN",
      "Emsella Chair (Urinary Incontinence)",
    ],
  },
];

// Flat list of all service category names for use in Header dropdown etc.
export const allServiceCategoryNames = allServices.map((s) => s.name);

// Get all sub-service names as a flat list (for BookingForm dropdown)
export function getAllSubServiceNames(): string[] {
  const names: string[] = [];
  for (const cat of allServices) {
    if (cat.subServices.length === 0) {
      names.push(cat.name);
    } else {
      for (const sub of cat.subServices) {
        names.push(sub);
      }
    }
  }
  return names;
}

export function serviceCategoryToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
