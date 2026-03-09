export interface Treatment {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  whoIsItFor: string;
  procedure: string;
  results: string;
  recovery: string;
  image: string;
}

export const serviceCategories = [
  "Laser Hair Removal",
  "Weightloss & Slimming",
  "Skin Rejuvenation",
  "Anti-Aging Rejuvenation",
  "Dermatology",
  "Hair Restoration",
  "Intimate Health",
];

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

export function slugToCategory(slug: string): string | undefined {
  return serviceCategories.find((c) => categoryToSlug(c) === slug);
}

export const treatments: Treatment[] = [
  // --- Laser Hair Removal ---
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Laser Hair Removal",
    shortDescription: "Permanent hair reduction with 20+ years of expertise and advanced laser technology.",
    description:
      "Dr. Nakhoda's Skin Institute has over 20 years of expertise in laser hair removal, offering permanent hair reduction for all skin types using the most advanced laser systems available. The clinic uses GentleMax Pro Plus, Soprano ICE Titanium, Helios III, and RevLite systems to deliver safe, effective, and long-lasting results.",
    benefits: [
      "Permanent hair reduction in 3-7 sessions",
      "Safe for all skin types and tones",
      "Quick treatments – upper lip takes less than a minute",
      "Eliminates need for waxing, shaving, and threading",
      "Cost-effective long-term solution",
    ],
    whoIsItFor: "Anyone tired of temporary hair removal methods. Suitable for all skin types, both facial and full-body hair removal.",
    procedure: "Concentrated light energy targets hair follicles, damaging them to prevent future growth while protecting surrounding skin. Multiple sessions are needed as hair grows in cycles. All body areas can be treated except eyebrows.",
    results: "Noticeable reduction after the first session. 80-90% permanent reduction after completing the full course of 3-7 sessions.",
    recovery: "Minimal downtime. Treated area may be slightly red for a few hours. Avoid sun exposure for 48 hours.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/laserhairremoval-1.jpg",
  },

  // --- Weightloss & Slimming ---
  {
    id: "coolsculpting",
    name: "Coolsculpting® by Zeltiq",
    category: "Weightloss & Slimming",
    shortDescription: "Freeze away stubborn fat cells permanently – no surgery, no downtime.",
    description:
      "Coolsculpting® uses controlled cooling technology to freeze and eliminate stubborn fat cells that resist diet and exercise. The treatment permanently removes fat cells from targeted areas, resulting in a noticeably slimmer contour.",
    benefits: [
      "Non-surgical fat reduction",
      "Permanently destroys fat cells",
      "No anesthesia required",
      "Visible results in inches lost",
      "FDA-cleared and clinically proven",
    ],
    whoIsItFor: "Those with stubborn pockets of fat that don't respond to diet and exercise. Ideal for abdomen, love handles, thighs, double chin, and arms.",
    procedure: "A gel pad and applicator are placed on the target area. Controlled cooling freezes fat cells without harming surrounding tissue. Sessions last 35-60 minutes per area.",
    results: "Results appear gradually over 2-3 months as the body naturally eliminates the frozen fat cells. Up to 25% fat reduction per session.",
    recovery: "No downtime. You can return to normal activities immediately. Some temporary numbness, redness, or tingling in the treated area.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/CoolSculpting-by-Zeltiq-.jpg",
  },
  {
    id: "emsculpt-neo",
    name: "Emsculpt Neo",
    category: "Weightloss & Slimming",
    shortDescription: "Build muscle and burn fat simultaneously – the next level of body sculpting.",
    description:
      "Emsculpt Neo by BTL combines radiofrequency heating and HIFEM+ energy to simultaneously build muscle and reduce fat. It targets abs, arms, and glutes for a more toned, sculpted physique without surgery or downtime.",
    benefits: [
      "Builds muscle and burns fat at the same time",
      "Non-invasive with no downtime",
      "Equivalent to thousands of crunches per session",
      "Clinically proven results",
      "Treats abs, arms, calves, and glutes",
    ],
    whoIsItFor: "Those looking to tone their body, reduce stubborn fat, or enhance muscle definition. Ideal post-weight loss or as part of a body contouring plan.",
    procedure: "An applicator is placed on the target area, delivering synchronized RF and HIFEM+ energy. The treatment feels like an intensive workout. Each session lasts 30 minutes.",
    results: "On average 25% more muscle and 30% less fat in the treated area after a series of 4 sessions.",
    recovery: "No downtime. You may feel mild muscle soreness similar to an intense workout.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/weightloss5.jpg",
  },
  {
    id: "fat-dissolving",
    name: "Fat Dissolving Injections",
    category: "Weightloss & Slimming",
    shortDescription: "Target stubborn fat with injectable treatments that melt it away – perfect for double chin, arms, and love handles.",
    description:
      "Fat dissolving injections target stubborn fat deposits with injectable treatments including Lemon Bottle, Kybella, and PB Serum. These non-invasive treatments break down fat cells in areas like the double chin, arms, love handles, and more, giving you a slimmer profile without surgery.",
    benefits: [
      "Non-surgical fat reduction",
      "Targets double chin, arms, and love handles",
      "Multiple product options (Lemon Bottle, Kybella, PB Serum)",
      "Quick in-clinic treatment",
      "Gradual, natural-looking results",
    ],
    whoIsItFor: "Those with small, stubborn fat deposits who prefer a non-surgical option. Especially effective for double chin and small body areas.",
    procedure: "A fat-dissolving solution is injected into the targeted area using fine needles. The solution breaks down fat cells which are then naturally eliminated by your body. Multiple sessions may be needed.",
    results: "Gradual improvement over 4-6 weeks as fat cells are eliminated. Most patients need 2-4 sessions for optimal results.",
    recovery: "Mild swelling and tenderness for a few days. No major downtime required.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/weight_loss.jpg",
  },

  // --- Skin Rejuvenation ---
  {
    id: "hydrafacial",
    name: "HydraFacial MD®",
    category: "Skin Rejuvenation",
    shortDescription: "Cleanse, extract, hydrate, and glow – all in one no-downtime session.",
    description:
      "HydraFacial MD® is a non-invasive facial rejuvenation treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one session. Dr. Nakhoda's Skin Institute is the only clinic in Karachi using the authentic HydraFacial MD device with original patented serums for guaranteed results.",
    benefits: [
      "Deep cleansing and pore extraction",
      "Instant hydration and radiance",
      "No downtime – return to your day immediately",
      "Suitable for all skin types",
      "Reduces fine lines, wrinkles, and hyperpigmentation",
    ],
    whoIsItFor: "Anyone looking for a quick skin refresh. Perfect before special events, for dull or congested skin, or as a regular maintenance treatment for healthy, glowing skin.",
    procedure: "The treatment uses a patented vortex suction technology to cleanse, extract impurities, and infuse nourishing serums into the skin. The entire procedure takes about 30-45 minutes.",
    results: "Visible improvement in skin tone, texture, and hydration immediately after the first session. Best results with regular monthly sessions.",
    recovery: "Zero downtime. You can apply makeup and resume normal activities right away.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/closeup-portrait-beautiful-woman-during-cosmetology-therapy-beauty-salon-professional-dermatology-procedures-lifting-rejuvenation-modern-devices-healthcare_197531-2785.png",
  },
  {
    id: "prx-t33",
    name: "PRX-T33",
    category: "Skin Rejuvenation",
    shortDescription: "Needle-free, pain-free Italian bio-revitaliser for instant skin lifting and brightening.",
    description:
      "PRX-T33 is an Italian bio-revitaliser that provides needle-free, pain-free facial rejuvenation. It lifts, brightens, and smoothens your skin without any peeling or irritation. This innovative treatment works beneath the skin surface to stimulate collagen production.",
    benefits: [
      "No needles and no pain",
      "Instant lifting and brightening",
      "Smoothens skin texture",
      "No peeling or irritation",
      "Safe for all skin types and all seasons",
    ],
    whoIsItFor: "Ideal for patients who want visible skin improvement without needles, downtime, or seasonal restrictions. Great for those with dull, aging, or uneven skin.",
    procedure: "A bio-revitalising solution is massaged into the skin, penetrating deep layers to stimulate collagen without causing peeling. The treatment takes approximately 20-30 minutes.",
    results: "Immediate glow and firmness. Optimal results are achieved with a series of 4-6 sessions.",
    recovery: "No downtime. Skin may appear slightly flushed for a few hours.",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/6721e59dacdc8aa70e3cd103_Screenshot-2024-10-30-155132.png",
  },
  {
    id: "rf-microneedling",
    name: "RF Microneedling",
    category: "Skin Rejuvenation",
    shortDescription: "Advanced microneedling with radiofrequency for deep skin remodeling and tightening.",
    description:
      "RF Microneedling combines microneedling with radiofrequency energy to stimulate deep collagen production. The clinic offers multiple RF microneedling platforms including Scarlet RF for scars and texture, Vivace RF with LED therapy, Morpheus8 for deep remodeling, and Sylfirm X for melasma and rosacea.",
    benefits: [
      "Tightens and firms skin",
      "Reduces acne scars and pore size",
      "Improves skin texture and tone",
      "Treats melasma and rosacea (Sylfirm X)",
      "Stimulates deep collagen production",
    ],
    whoIsItFor: "Those with acne scars, enlarged pores, skin laxity, melasma, rosacea, or anyone wanting overall skin texture improvement.",
    procedure: "Tiny needles create micro-channels in the skin while delivering radiofrequency energy to deeper layers. This dual action stimulates collagen and elastin production. Treatment takes 30-60 minutes with numbing cream applied beforehand.",
    results: "Improvement visible within 2-4 weeks, with optimal results after 3-4 sessions. Collagen continues building for up to 6 months.",
    recovery: "Mild redness for 1-3 days. Avoid sun exposure and active skincare ingredients for a few days post-treatment.",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/LED_Mask_2_343ef630-9506-4665-89b8-6359434ee78b_800x800_crop_center.webp",
  },
  {
    id: "chemical-peel",
    name: "Chemical Peel",
    category: "Skin Rejuvenation",
    shortDescription: "Reveal fresh, radiant skin by gently removing damaged outer layers.",
    description:
      "Chemical peels use specially formulated solutions to exfoliate and remove damaged outer layers of skin, revealing smoother, brighter skin underneath. Different strengths are available depending on your skin concerns and desired results.",
    benefits: [
      "Reduces hyperpigmentation and dark spots",
      "Smooths fine lines and wrinkles",
      "Improves acne and acne scars",
      "Evens skin tone and texture",
      "Stimulates new cell growth",
    ],
    whoIsItFor: "Those dealing with uneven skin tone, sun damage, acne scars, fine lines, or dull complexion. Suitable for various skin types when properly selected.",
    procedure: "A chemical solution is applied to cleansed skin and left for a specific duration. The solution causes controlled exfoliation of the outer skin layers. Treatment takes 20-30 minutes.",
    results: "Light peels show results within a week. Medium peels may take 1-2 weeks for full results. Skin appears brighter, smoother, and more even.",
    recovery: "Light peels have minimal downtime. Medium to deep peels may cause peeling for 5-7 days. Sun protection is essential during recovery.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/rejuvination-image-2x.jpg",
  },
  {
    id: "prp",
    name: "PRP (Platelet Rich Plasma)",
    category: "Skin Rejuvenation",
    shortDescription: "Use your body's own healing power for skin rejuvenation and hair restoration.",
    description:
      "PRP therapy uses your own blood's concentrated platelets to stimulate healing and rejuvenation. Rich in growth factors, PRP is used for both skin rejuvenation and hair restoration at Dr. Nakhoda's clinic, now enhanced with the Hycoox™ Micro-injector for precision delivery.",
    benefits: [
      "100% natural – uses your own blood",
      "Stimulates collagen and elastin production",
      "Effective for hair restoration",
      "Improves skin texture and tone",
      "Minimal risk of allergic reaction",
    ],
    whoIsItFor: "Those seeking natural skin rejuvenation or experiencing hair thinning. Ideal for patients who prefer treatments using their own body's healing abilities.",
    procedure: "A small amount of blood is drawn and processed in a centrifuge to concentrate the platelets. The PRP is then injected into the target area using micro-injections. Treatment takes about 45-60 minutes.",
    results: "Gradual improvement over 2-4 weeks. Optimal results after 3-4 sessions spaced 4-6 weeks apart.",
    recovery: "Minimal downtime. Mild redness and swelling for 1-2 days. Avoid washing the treated area for 12 hours.",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/darkcircle.jpg",
  },

  // --- Anti-Aging Rejuvenation ---
  {
    id: "botox",
    name: "Botox® (Allergan)",
    category: "Anti-Aging Rejuvenation",
    shortDescription: "Smooth wrinkles and fine lines with the world's most trusted anti-aging injectable.",
    description:
      "Botox® by Allergan is an FDA-approved injectable treatment that relaxes facial muscles to smooth wrinkles and fine lines. At Dr. Nakhoda's Skin Institute, only authentic Allergan Botox is used, administered by experienced professionals for natural-looking results.",
    benefits: [
      "Smooths forehead lines and crow's feet",
      "Prevents new wrinkle formation",
      "Non-surgical with minimal discomfort",
      "Results last 3-6 months",
      "Can treat jawline, neck, and hyperhidrosis",
    ],
    whoIsItFor: "Women and men looking to reduce visible signs of aging, prevent future wrinkles, or treat conditions like excessive sweating and migraines.",
    procedure: "Small amounts of Botox are injected into targeted muscles using ultra-fine needles. The procedure takes 10-15 minutes. Applications include upper face, lower face, jawline slimming, Nefertiti lift, neck bands, shoulder slimming, and migraine relief.",
    results: "Results appear within 3-7 days and last 3-6 months. Regular treatments help maintain a youthful, refreshed appearance.",
    recovery: "No downtime. Avoid rubbing the treated area for 24 hours. Minor redness may occur at injection sites.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/antiaging-beauty-treatment_23-2149123619.jpg",
  },
  {
    id: "dermal-fillers",
    name: "Dermal Fillers",
    category: "Anti-Aging Rejuvenation",
    shortDescription: "Restore volume, enhance contours, and achieve a naturally youthful look.",
    description:
      "Dermal fillers are injectable treatments that restore lost volume, smooth deep lines, and enhance facial contours. The clinic uses premium brands including Restylane, Maili, and Neuvia for safe, natural-looking results. Treatments include lip enhancement, cheek augmentation, jawline contouring, and liquid rhinoplasty.",
    benefits: [
      "Instant volume restoration",
      "Natural-looking facial contouring",
      "Smooths nasolabial folds and marionette lines",
      "Lip enhancement and definition",
      "Results last 6-18 months",
    ],
    whoIsItFor: "Anyone experiencing volume loss due to aging, or those wanting enhanced facial features like fuller lips, defined cheeks, or a more sculpted jawline.",
    procedure: "Hyaluronic acid-based fillers are carefully injected into targeted areas using fine needles or cannulas. Numbing cream is applied beforehand for comfort. The treatment takes 20-45 minutes depending on the area.",
    results: "Immediate visible improvement. Final results settle within 1-2 weeks as any swelling subsides.",
    recovery: "Minimal downtime. Some swelling or bruising may occur for 2-5 days. Avoid strenuous exercise for 24 hours.",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/images.jpg",
  },
  {
    id: "thread-lift",
    name: "Thread Lift",
    category: "Anti-Aging Rejuvenation",
    shortDescription: "Non-surgical face lift using dissolvable threads for instant lifting and tightening.",
    description:
      "Thread lift is a minimally invasive procedure that uses dissolvable threads to lift and tighten sagging skin. Dr. Nakhoda is a certified trainer for Silhouette Soft Threads, ensuring the highest standard of care and technique.",
    benefits: [
      "Immediate lifting effect",
      "Stimulates natural collagen production",
      "Non-surgical alternative to facelift",
      "Results last 1-2 years",
      "Minimal downtime compared to surgery",
    ],
    whoIsItFor: "Those experiencing mild to moderate skin sagging who want a non-surgical lifting solution. Ideal for jawline, cheeks, brows, and neck.",
    procedure: "Fine dissolvable threads are inserted under the skin using thin needles. The threads are gently pulled to lift the skin into a more youthful position. The procedure takes 30-60 minutes under local anesthesia.",
    results: "Immediate lifting visible right after the procedure. Results continue to improve over 2-3 months as collagen builds around the threads.",
    recovery: "Mild swelling and bruising for 3-5 days. Avoid wide mouth opening and strenuous exercise for 1-2 weeks.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/antiaging-beauty-treatment_23-2149123619.jpg",
  },

  // --- Dermatology ---
  {
    id: "acne-treatment",
    name: "Acne Treatment",
    category: "Dermatology",
    shortDescription: "Comprehensive acne management from mild breakouts to severe cystic acne.",
    description:
      "Dr. Nakhoda's Skin Institute offers comprehensive acne treatment plans that address the root cause of breakouts. Using a combination of medical-grade topical treatments, oral medications, chemical peels, and advanced laser therapy, we create personalized plans for every type of acne — from mild to severe cystic acne.",
    benefits: [
      "Personalized treatment plans",
      "Addresses root cause of breakouts",
      "Reduces acne scarring",
      "Medical-grade products and treatments",
      "Long-term skin health improvement",
    ],
    whoIsItFor: "Teenagers and adults struggling with any form of acne — hormonal, cystic, or persistent breakouts that have not responded to over-the-counter products.",
    procedure: "After a thorough skin assessment, Dr. Nakhoda designs a customized treatment plan which may include topical treatments, oral medication, chemical peels, HydraFacial, or laser treatments depending on the severity.",
    results: "Visible clearing within 4-8 weeks depending on severity. Ongoing maintenance ensures long-term clear skin.",
    recovery: "Varies by treatment. Most in-clinic treatments have minimal downtime.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/rejuvination-image-2x.jpg",
  },
  {
    id: "vitiligo-treatment",
    name: "Vitiligo Treatment",
    category: "Dermatology",
    shortDescription: "Advanced treatment options for vitiligo to restore your natural skin color.",
    description:
      "We offer advanced treatment options for vitiligo including targeted phototherapy, topical treatments, and combination therapies. Our approach focuses on halting the progression of vitiligo and encouraging repigmentation using the latest dermatological protocols.",
    benefits: [
      "Targeted phototherapy available",
      "Combination therapy for best results",
      "Halts progression of vitiligo",
      "Encourages natural repigmentation",
      "Compassionate, personalized care",
    ],
    whoIsItFor: "Anyone experiencing patches of lost skin color who wants to explore treatment options for repigmentation and management of their condition.",
    procedure: "Treatment depends on the extent and location of vitiligo. Options include topical corticosteroids, calcineurin inhibitors, targeted UVB phototherapy, and combination approaches tailored to each patient.",
    results: "Repigmentation can be gradual, with visible results over several months. Response varies by location and extent of vitiligo.",
    recovery: "Most treatments have no downtime. Phototherapy sessions are quick and comfortable.",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/darkcircle.jpg",
  },
  {
    id: "psoriasis-treatment",
    name: "Psoriasis & Skin Diseases",
    category: "Dermatology",
    shortDescription: "Expert management of psoriasis, eczema, fungal infections, and other skin conditions.",
    description:
      "Dr. Nakhoda provides expert management of chronic skin conditions including psoriasis, eczema, fungal infections, and other dermatological diseases. Treatment plans combine the latest medical therapies with lifestyle guidance to manage symptoms and improve quality of life.",
    benefits: [
      "Expert diagnosis by board-certified dermatologist",
      "Latest medical treatment protocols",
      "Management of chronic conditions",
      "Lifestyle and skincare guidance",
      "Follow-up and monitoring",
    ],
    whoIsItFor: "Patients dealing with chronic skin conditions such as psoriasis, eczema, dermatitis, fungal infections, or any persistent skin issue requiring expert dermatological care.",
    procedure: "A detailed consultation and skin examination is followed by a personalized treatment plan which may include topical treatments, systemic medications, phototherapy, or combination therapy.",
    results: "Improvement varies by condition. Many patients see significant improvement within weeks of starting treatment.",
    recovery: "Most treatments are non-invasive with no downtime.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/Mask-Group-3.png",
  },

  // --- Hair Restoration ---
  {
    id: "regenera-activa",
    name: "Regenera Activa",
    category: "Hair Restoration",
    shortDescription: "Advanced stem-cell based hair regrowth treatment with visible results in 2-3 months.",
    description:
      "Regenera Activa is a non-surgical hair restoration treatment that uses your own stem cells and progenitor cells to stimulate dormant hair follicles. A tiny scalp sample is processed and re-injected to trigger natural hair regrowth.",
    benefits: [
      "Visible regrowth in 2-3 months",
      "Results last over a year",
      "Single 45-minute session",
      "No rejection risk – uses your own cells",
      "Minimal downtime",
    ],
    whoIsItFor: "Men and women experiencing hair thinning or early-stage hair loss who want a non-surgical solution backed by regenerative science.",
    procedure: "A tiny sample of scalp tissue rich in stem cells is collected, processed using the Regenera Activa device, and re-injected into areas of thinning. The entire procedure takes about 45 minutes.",
    results: "Visible new hair growth typically appears within 2-3 months. Results continue to improve over 6-12 months and last over a year.",
    recovery: "Minimal downtime. Small collection site heals within a few days. Resume normal activities the same day.",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/1.png",
  },
  {
    id: "hair-prp",
    name: "Hair PRP & Exosomes",
    category: "Hair Restoration",
    shortDescription: "Platelet-rich plasma and exosome therapy for thicker, healthier hair growth.",
    description:
      "Combining PRP (Platelet Rich Plasma) with the latest MCT Exosome technology, this treatment delivers concentrated growth factors directly to hair follicles. The Hycoox™ Micro-injector ensures precise, consistent delivery for maximum effectiveness and comfort.",
    benefits: [
      "Richer growth-factor delivery with exosomes",
      "Smoother, less painful injections",
      "Fewer sessions needed for lasting results",
      "Boosts mitochondrial ATP and reduces inflammation",
      "Can complement other hair restoration treatments",
    ],
    whoIsItFor: "Those experiencing hair thinning who want a powerful, natural treatment to boost hair density and health.",
    procedure: "Blood is drawn and processed to concentrate platelets. PRP is combined with exosomes and precisely injected into the scalp using the Hycoox™ Micro-injector for consistent depth and distribution.",
    results: "Gradual improvement over 2-4 months. Optimal results after a series of sessions.",
    recovery: "Minimal downtime. Mild scalp tenderness for 1-2 days.",
    image: "https://drnakhodas.com/wp-content/uploads/2025/06/1-1.png",
  },

  // --- Intimate Health ---
  {
    id: "thermiva",
    name: "THERMIva® Intimate Rejuvenation",
    category: "Intimate Health",
    shortDescription: "Non-surgical vaginal and vulva rejuvenation using gentle radiofrequency energy.",
    description:
      "THERMIva® is a non-surgical, comfortable treatment for vaginal and vulva rejuvenation using gentle radiofrequency energy. It addresses common concerns that many women face but may feel hesitant to discuss, including laxity, dryness, and mild urinary incontinence.",
    benefits: [
      "Non-surgical and pain-free",
      "No downtime required",
      "Improves vaginal laxity",
      "Addresses dryness and discomfort",
      "Can help with mild urinary incontinence",
    ],
    whoIsItFor: "Women experiencing vaginal laxity, dryness, or mild stress urinary incontinence, particularly post-childbirth or during menopause.",
    procedure: "A small wand delivers gentle radiofrequency energy to the internal and external treatment areas. The treatment is comfortable and requires no anesthesia. Each session takes about 30 minutes.",
    results: "Many patients notice improvement after the first session. A series of 3 sessions is typically recommended for best results.",
    recovery: "Zero downtime. Resume all normal activities immediately.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/Skin-Tightening.jpg",
  },
  {
    id: "emsella",
    name: "Emsella Chair",
    category: "Intimate Health",
    shortDescription: "A breakthrough treatment for pelvic floor strengthening – fully clothed, completely non-invasive.",
    description:
      "The Emsella Chair uses high-intensity focused electromagnetic (HIFEM) technology to stimulate pelvic floor muscles. You remain fully clothed throughout the treatment. It is equivalent to doing thousands of Kegel exercises in a single session, helping treat urinary incontinence and improve intimate wellness.",
    benefits: [
      "Completely non-invasive – stay fully clothed",
      "Strengthens pelvic floor muscles",
      "Treats urinary incontinence",
      "Equivalent to thousands of Kegels per session",
      "Comfortable 28-minute sessions",
    ],
    whoIsItFor: "Women experiencing urinary incontinence, pelvic floor weakness, or those wanting to strengthen their pelvic floor for overall intimate wellness.",
    procedure: "Simply sit on the Emsella Chair fully clothed. The electromagnetic technology stimulates deep pelvic floor muscles throughout the 28-minute session.",
    results: "Many patients notice improvement after just one session. A course of 6 sessions over 3 weeks is recommended for optimal results.",
    recovery: "No downtime at all. Continue your day as normal.",
    image: "https://drnakhodas.com/wp-content/uploads/2024/01/Skin-Tightening.jpg",
  },
];
