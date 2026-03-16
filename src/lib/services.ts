export interface SubService {
  name: string;
  children?: string[];
}

export interface ServiceCategory {
  name: string;
  subServices: SubService[];
}

export const allServices: ServiceCategory[] = [
  {
    name: "Botox",
    subServices: [
      { name: "Upper Face Botox" },
      { name: "Botox for Crow's Feet" },
      { name: "Botox for Frown Lines" },
      { name: "Botox for Forehead Lines" },
      { name: "Massetter Botox" },
      { name: "Botox for Nose Slimming" },
      { name: "Lip Flip" },
      { name: "DAO (Botox to Remove Resting Sad Face)" },
      { name: "Botox for Jawline" },
      { name: "Botox for Neck" },
      { name: "Nefrettiti Lift (Neck and Jawline)" },
      { name: "Traptox (Shoulder Slimming and Tension)" },
      { name: "Botox for Migraine Relief" },
      { name: "Botox for Hyperhydrosis (Excessive Sweating)" },
      { name: "Botox for Hyperhydrosis (Excessive Sweating) - Double Dosage" },
    ],
  },
  {
    name: "Fillers",
    subServices: [
      { name: "Full Facial Transformation" },
      { name: "Lip and Perioral Rejuvenation with Fillers" },
      { name: "Liquid Rhinoplasty (Nose Fillers and Botox)" },
      { name: "Butt Fillers with HA" },
      {
        name: "Breast Fillers with HA",
        children: ["Maili", "Restylane", "Neuvia"],
      },
      { name: "Hyamira and Other Fillers" },
    ],
  },
  {
    name: "Injectable Biostimulators",
    subServices: [
      { name: "PDRN Eyes" },
      { name: "PDRN Face" },
      { name: "PDRN Face, Neck, Eyes" },
      { name: "Neauvia Biostimulator" },
      { name: "Radiesse 1.5ml (Face or Hands or Neck)" },
      { name: "Profhilo (Face or Neck)" },
      { name: "Profhilo Structura" },
      { name: "Jalupro Super Hydro" },
      { name: "Jalapro HMW" },
      { name: "Jalapro Classic" },
      { name: "Jalupro Young Eyes" },
      { name: "Face Sculptra/Ghana/Lanluma (Face, Neck, Hands)" },
      { name: "Body Sculptra/Chana/Lanluna (Butt Fillers)" },
      { name: "Pluryal Densify" },
      { name: "Pluryal Silk" },
    ],
  },
  {
    name: "Laser Hair Removal",
    subServices: [
      { name: "Candela Gentlemax Pro" },
      { name: "Soprano Ice TITANIUM" },
      { name: "Revlite" },
    ],
  },
  {
    name: "Slimming",
    subServices: [
      { name: "Diet Plan with Mounjaro" },
      { name: "Diet Plan with Saxenda" },
    ],
  },
  {
    name: "Energy Based Devices",
    subServices: [
      { name: "Endolift" },
      { name: "Ultherapy" },
      { name: "Ultraformer" },
      { name: "Fractional CO2 Laser Resurfacing" },
      { name: "Erbium Yag Laser Resurfacing" },
      { name: "EMFACE Upper Face (Cheeks and Forehead)" },
      { name: "EMFACE Lower Face (Cheeks and Double Chin)" },
      { name: "EMFACE (Under Eyes)" },
      { name: "Forma (Red Carpet Facial)" },
      { name: "Fotona 4D" },
      { name: "GlowTox" },
      { name: "Alma Skin Tightening" },
      { name: "Pulse Dye Laser (Acne, Rosacea, PWS)" },
      { name: "Advatx Laser (Acne, Rosacea, PWS)" },
      { name: "Smooth Eyes" },
      { name: "LipLase" },
      { name: "Carboxytherapy" },
      { name: "Starwalker Eyes for Dark Circles" },
      { name: "Starwalker" },
      { name: "Picoway" },
      { name: "Revlite" },
      { name: "Clear and Bright" },
      { name: "Spectra Gold Toning" },
      { name: "Carbon Peel" },
      { name: "Tattoo Removal" },
      { name: "Birthmark Removal" },
      { name: "Morpheus" },
      { name: "Scarlet RF" },
      { name: "Sylfirm X" },
      { name: "Vivace" },
      { name: "Dermapen" },
      {
        name: "Add Ons",
        children: ["PRP", "PDRN", "MCT Exosomes", "Exosomes"],
      },
    ],
  },
  {
    name: "Hydrafacial",
    subServices: [
      { name: "Hydrafacial Signature (Basic)" },
      { name: "Hydrafacial Delux (with LED)" },
      { name: "Hydrafacial Platinum (with LED and Lymphatic Drainage)" },
      { name: "Hydrafacial with Cryofacial" },
      {
        name: "With Add On Booster",
        children: [
          "Britriol (Brightening Serum)",
          "Dermabuilder (Antiageing Peptides)",
          "Glysal Prep (Glycolic and Salicylic Acid Exfoliation)",
        ],
      },
    ],
  },
  {
    name: "Gyne (Women) Intimate Areas",
    subServices: [
      { name: "Emsella Chair (Urinary Incontinence)" },
      { name: "Starformer Intimawave (Urinary Incontinence)" },
      { name: "Intimalase (Tightening)" },
      { name: "Incontinlase (Urinary Incontinence)" },
      { name: "Renovalase (Post Menopausal Dryness)" },
      { name: "PRX T Lady (Pigmentation)" },
      { name: "Lasers for Pigmentation" },
      { name: "Labia Rejuvenation with Fillers" },
    ],
  },
  {
    name: "IV / Drip",
    subServices: [
      { name: "Vit C" },
      { name: "NAD 50" },
      { name: "NAD 100" },
      { name: "NAD 150" },
      { name: "NAD 250" },
      { name: "NAD 500" },
      { name: "Antiageing" },
      { name: "Weightloss" },
      { name: "Hairloss" },
      { name: "Meyers Drip" },
      { name: "Royal Flush" },
      { name: "Migraine/Headache" },
      { name: "Antibiotic" },
    ],
  },
  {
    name: "Thread Lifting",
    subServices: [
      { name: "Silhouette Soft 3 Pairs" },
      { name: "Silhouette Soft 5 Pairs" },
      { name: "Aptos Hammock Method for Neck Lift" },
      { name: "Aptos Light Lift for Upper Face" },
      { name: "Aptos Light Lift for Lower Face" },
      { name: "Aptos Visage Excellence Method Soft 10pcs" },
      { name: "Aptos Visage Excellence Method 10pcs" },
      { name: "Aptos Visage Excellence Method HA 10pcs" },
      { name: "Aptos Excellence Visage NAMICA with HA" },
      { name: "PCL Cannula" },
      { name: "PCL Tornado" },
    ],
  },
  {
    name: "PRX-T33",
    subServices: [
      { name: "PRX-T33 No Needle Rejuvenation Face" },
      { name: "PRX-T33 No Needle Rejuvenation Face and Neck" },
      { name: "PRX-T33 No Needle Rejuvenation Hands/Knees" },
    ],
  },
  {
    name: "Hair Restoration",
    subServices: [
      { name: "PRP HYCOX" },
      { name: "PRP-K" },
      { name: "PRP-D" },
      { name: "Xomage 10B" },
      { name: "Exovex Revive 5Billion" },
      { name: "Bioscience 5B" },
      { name: "Exovex 10Billion" },
      { name: "Bioscience 10B" },
      { name: "MCT Exosomes" },
      { name: "Fotona Hair Restart" },
      { name: "Exosome and PDRN Cocktail" },
      { name: "Xtra Hair Restoration Vials" },
      { name: "Regenera Active" },
    ],
  },
  {
    name: "Exosomes",
    subServices: [
      { name: "Exovex Rejuve 1B" },
      { name: "Xomage 10B" },
      { name: "Exovex Revive 5B" },
      { name: "Bioscience 5B (Skin)" },
      { name: "Exovex 10B" },
      { name: "Bioscience 10B (Hair)" },
      { name: "Bioscience 25B (Scars, Keloids)" },
      { name: "Invitra 10B" },
      { name: "Invitra 40B" },
    ],
  },
  {
    name: "Body Contouring",
    subServices: [
      { name: "Lemon Bottle/Kybella/Fat Dissolving Injections" },
      { name: "PB Serum (Fat Dissolving Injections)" },
      { name: "BTL Emsculpt Neo (Muscle Toning)" },
      { name: "Tightwave (Muscle Toning)" },
      { name: "BTL Lymphatism (Lymphatic Drainage Massage)" },
      { name: "Ultraformer Body (Skin Tightening and Cellulite)" },
      { name: "Morpheus Body (Skin Tightening, Cellulite, Stretch Marks)" },
      { name: "Cristal Pro (Coolsculpting)" },
      { name: "Tightsculpting" },
      { name: "Cryotherapy" },
      { name: "Endolift" },
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
      { name: "Fotona Nightlase for Snoring" },
      { name: "Fotona 4D MAN" },
      { name: "Emsella Chair (Urinary Incontinence)" },
    ],
  },
];

// Flat list of all service category names for use in Header dropdown etc.
export const allServiceCategoryNames = allServices.map((s) => s.name);

// Count total leaf-level items for a category
export function countSubServices(category: ServiceCategory): number {
  let count = 0;
  for (const sub of category.subServices) {
    if (sub.children && sub.children.length > 0) {
      count += sub.children.length;
    } else {
      count++;
    }
  }
  return count || 1;
}

// Get all sub-service names as a flat list (for BookingForm dropdown)
export function getAllSubServiceNames(): string[] {
  const names: string[] = [];
  for (const cat of allServices) {
    if (cat.subServices.length === 0) {
      names.push(cat.name);
    } else {
      for (const sub of cat.subServices) {
        if (sub.children && sub.children.length > 0) {
          for (const child of sub.children) {
            names.push(child);
          }
        } else {
          names.push(sub.name);
        }
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
