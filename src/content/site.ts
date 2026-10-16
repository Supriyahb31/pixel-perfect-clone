// Bilingual site content. Facts sourced from Wikipedia (A._N._Krishna_Rao) and
// the Deccan Herald article it cites. Items marked `verify: true` should be
// checked against primary sources before publication.
export type Lang = "en" | "kn";

export const nav = [
  { id: "home", en: "Home", kn: "ಮುಖಪುಟ" },
  { id: "biography", en: "Biography", kn: "ಜೀವನ ಚರಿತ್ರೆ" },
  { id: "works", en: "Literary Works", kn: "ಸಾಹಿತ್ಯ ಕೃತಿಗಳು" },
  { id: "legacy", en: "Legacy", kn: "ಪರಂಪರೆ" },
  { id: "archive", en: "Archive", kn: "ದಾಖಲೆಗಳು" },
  { id: "contact", en: "Contact", kn: "ಸಂಪರ್ಕ" },
] as const;

export const t = {
  name: { en: "A. N. Krishna Rao", kn: "ಎ. ಎನ್. ಕೃಷ್ಣರಾವ್" },
  eyebrow: { en: "The Legacy of Kannada Literature", kn: "ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಪರಂಪರೆ" },
  heroKn: "ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಅನನ್ಯ ಧ್ವನಿ",
  heroEn: "A Life Written in the Language of the People",
  heroIntro: {
    en: "Novelist, playwright and critic, Anakru (1908–1971) wrote for some four decades and is credited with beginning the Pragatishila — progressive — movement in Kannada literature.",
    kn: "ಕಾದಂಬರಿಕಾರ, ನಾಟಕಕಾರ ಹಾಗೂ ವಿಮರ್ಶಕರಾದ ಅನಕೃ (1908–1971) ಸುಮಾರು ನಾಲ್ಕು ದಶಕಗಳ ಕಾಲ ಬರೆದರು. ಕನ್ನಡ ಸಾಹಿತ್ಯದಲ್ಲಿ ಪ್ರಗತಿಶೀಲ ಚಳವಳಿಯ ಆರಂಭದ ಶ್ರೇಯ ಅವರಿಗೆ ಸಲ್ಲುತ್ತದೆ.",
  },
  ctaLife: { en: "Explore His Life", kn: "ಜೀವನ ಪಯಣ" },
  ctaWorks: { en: "Discover His Works", kn: "ಸಾಹಿತ್ಯ ಕೃತಿಗಳು" },
  scroll: { en: "Scroll", kn: "ಕೆಳಗೆ" },
  imgCaption: {
    en: "Illustrative still life — not an archival photograph. Replace with a licensed portrait.",
    kn: "ಸಾಂಕೇತಿಕ ಚಿತ್ರ — ದಾಖಲಾತಿ ಛಾಯಾಚಿತ್ರವಲ್ಲ. ಅನುಮತಿ ಪಡೆದ ಭಾವಚಿತ್ರದಿಂದ ಬದಲಿಸಿ.",
  },
  bioTitle: { en: "The Life Behind the Literature", kn: "ಸಾಹಿತ್ಯದ ಹಿಂದಿನ ಜೀವನ" },
  bio: {
    en: [
      "Arakalagudu Narasingarao Krishna Rao was born on 9 May 1908 in Kolar, in the then Kingdom of Mysore. His family traced its roots to Arkalgud in Hassan district — the source of the initials that became his celebrated pen name, Anakru.",
      "Early in his career he edited the literary magazines Katha Manjari and Vishva Vani, and later Kannada Nudi, the journal of the Kannada Sahitya Parishath. He was an outspoken advocate for the Kannada language and for the unification of Kannada-speaking regions.",
      "He lived much of his life at his home, Annapoorna, in Vishveshwarapuram, Bangalore, where he died on 8 July 1971.",
    ],
    kn: [
      "ಅರಕಲಗೂಡು ನರಸಿಂಗರಾವ್ ಕೃಷ್ಣರಾವ್ ಅವರು 1908ರ ಮೇ 9ರಂದು ಅಂದಿನ ಮೈಸೂರು ಸಂಸ್ಥಾನದ ಕೋಲಾರದಲ್ಲಿ ಜನಿಸಿದರು. ಅವರ ಕುಟುಂಬದ ಮೂಲ ಹಾಸನ ಜಿಲ್ಲೆಯ ಅರಕಲಗೂಡು — ಅದರಿಂದಲೇ ‘ಅನಕೃ’ ಎಂಬ ಕಾವ್ಯನಾಮ ರೂಪುಗೊಂಡಿತು.",
      "ವೃತ್ತಿಜೀವನದ ಆರಂಭದಲ್ಲಿ ‘ಕಥಾ ಮಂಜರಿ’, ‘ವಿಶ್ವವಾಣಿ’ ಪತ್ರಿಕೆಗಳನ್ನು, ನಂತರ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತಿನ ‘ಕನ್ನಡ ನುಡಿ’ಯನ್ನು ಸಂಪಾದಿಸಿದರು. ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಕನ್ನಡ ನಾಡಿನ ಏಕೀಕರಣಕ್ಕಾಗಿ ದನಿಯೆತ್ತಿದರು.",
      "ಬೆಂಗಳೂರಿನ ವಿಶ್ವೇಶ್ವರಪುರದ ತಮ್ಮ ‘ಅನ್ನಪೂರ್ಣ’ ಮನೆಯಲ್ಲಿ ಬಹುಕಾಲ ನೆಲೆಸಿದ್ದ ಅವರು 1971ರ ಜುಲೈ 8ರಂದು ನಿಧನರಾದರು.",
    ],
  },
  readBio: { en: "Read the full biography", kn: "ಪೂರ್ಣ ಜೀವನ ಚರಿತ್ರೆ ಓದಿ" },
  timelineTitle: { en: "A Timeline of a Literary Life", kn: "ಸಾಹಿತ್ಯ ಜೀವನದ ಕಾಲರೇಖೆ" },
  worksTitle: { en: "Featured Literary Works", kn: "ಪ್ರಮುಖ ಸಾಹಿತ್ಯ ಕೃತಿಗಳು" },
  worksNote: {
    en: "Typographic covers are design placeholders, not original editions.",
    kn: "ಮುಖಪುಟಗಳು ವಿನ್ಯಾಸ ಮಾದರಿಗಳು ಮಾತ್ರ — ಮೂಲ ಆವೃತ್ತಿಗಳಲ್ಲ.",
  },
  explore: { en: "Explore work", kn: "ಕೃತಿ ನೋಡಿ" },
  movementTitle: { en: "Literature as an Instrument of Change", kn: "ಬದಲಾವಣೆಯ ಸಾಧನವಾಗಿ ಸಾಹಿತ್ಯ" },
  movement: {
    en: [
      "When Anakru began writing, the Navodaya style dominated Kannada letters. He felt it was too often the work of aesthetes, removed from the hard realities of ordinary life, and set out on a different path.",
      "His themes gave shape to the Pragatishila, or progressive, movement. Writers including Ta Ra Su, Basavaraj Kattimani and Anupama Niranjana went on to write within the genre. His unsentimental approach and extensive use of dialogue helped win him a vast readership.",
    ],
    kn: [
      "ಅನಕೃ ಬರೆಯಲು ಆರಂಭಿಸಿದಾಗ ನವೋದಯ ಶೈಲಿ ಪ್ರಬಲವಾಗಿತ್ತು. ಅದು ಜನಜೀವನದ ಕಠಿಣ ವಾಸ್ತವದಿಂದ ದೂರವಿದೆ ಎಂದು ಭಾವಿಸಿದ ಅವರು ಹೊಸ ದಾರಿ ಹಿಡಿದರು.",
      "ಅವರ ವಿಷಯವಸ್ತುಗಳು ಪ್ರಗತಿಶೀಲ ಚಳವಳಿಗೆ ರೂಪ ನೀಡಿದವು. ತರಾಸು, ಬಸವರಾಜ ಕಟ್ಟೀಮನಿ, ಅನುಪಮಾ ನಿರಂಜನ ಮುಂತಾದವರು ಈ ಪ್ರಕಾರದಲ್ಲಿ ಬರೆದರು. ನೇರ ಶೈಲಿ ಮತ್ತು ಸಂಭಾಷಣೆಯ ಬಳಕೆ ಅವರಿಗೆ ಅಪಾರ ಓದುಗರನ್ನು ತಂದಿತು.",
    ],
  },
  archiveTitle: { en: "The Archive", kn: "ದಾಖಲೆ ಸಂಗ್ರಹ" },
  archiveEmpty: {
    en: "Verified photographs, manuscripts and press clippings will appear here once their sources and usage rights are confirmed.",
    kn: "ಮೂಲ ಮತ್ತು ಬಳಕೆಯ ಹಕ್ಕು ದೃಢಪಟ್ಟ ನಂತರ ಛಾಯಾಚಿತ್ರಗಳು, ಹಸ್ತಪ್ರತಿಗಳು ಹಾಗೂ ಪತ್ರಿಕಾ ವರದಿಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",
  },
  closingKn: "ಸಾಹಿತ್ಯದ ಮೂಲಕ ಉಳಿಯುವ ನೆನಪುಗಳು",
  closingEn: "Stories endure. A literary legacy lives on.",
  ctaArchive: { en: "Explore the Archive", kn: "ದಾಖಲೆಗಳನ್ನು ನೋಡಿ" },
  ctaBio: { en: "Read the Biography", kn: "ಜೀವನ ಚರಿತ್ರೆ ಓದಿ" },
  contactTitle: { en: "Contact", kn: "ಸಂಪರ್ಕ" },
  contactNote: {
    en: "Contact details will be published once approved by the project team.",
    kn: "ಯೋಜನಾ ತಂಡದ ಅನುಮೋದನೆಯ ನಂತರ ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ಪ್ರಕಟಿಸಲಾಗುವುದು.",
  },
  sources: { en: "Sources", kn: "ಆಧಾರಗಳು" },
  rights: { en: "A digital literary heritage project.", kn: "ಡಿಜಿಟಲ್ ಸಾಹಿತ್ಯ ಪರಂಪರೆ ಯೋಜನೆ." },
} as const;

export const facts = [
  { value: "1908", en: "Born in Kolar", kn: "ಕೋಲಾರದಲ್ಲಿ ಜನನ" },
  { value: "ಅನಕೃ", en: "Pen name, Anakru", kn: "ಕಾವ್ಯನಾಮ" },
  { value: "100+", en: "Novels authored", kn: "ಕಾದಂಬರಿಗಳು" },
  { value: "42nd", en: "Sahitya Sammelana president", kn: "ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನದ ಅಧ್ಯಕ್ಷ" },
];

export const timeline = [
  { year: "1908", en: "Born in Kolar", kn: "ಕೋಲಾರದಲ್ಲಿ ಜನನ", dEn: "Born on 9 May to Narasinga Rao and Annapoornamma.", dKn: "ಮೇ 9ರಂದು ನರಸಿಂಗರಾವ್ ಮತ್ತು ಅನ್ನಪೂರ್ಣಮ್ಮ ದಂಪತಿಗೆ ಜನನ." },
  { year: "Early career", en: "Editor of literary magazines", kn: "ಸಾಹಿತ್ಯ ಪತ್ರಿಕೆಗಳ ಸಂಪಾದಕ", dEn: "Edits Katha Manjari and Vishva Vani, later Kannada Nudi.", dKn: "ಕಥಾ ಮಂಜರಿ, ವಿಶ್ವವಾಣಿ, ನಂತರ ಕನ್ನಡ ನುಡಿ ಸಂಪಾದನೆ." },
  { year: "Debut", en: "First novel, Jeevanayathre", kn: "ಮೊದಲ ಕಾದಂಬರಿ ‘ಜೀವನಯಾತ್ರೆ’", dEn: "Begins some forty years of writing. Year to be verified.", dKn: "ಸುಮಾರು ನಲವತ್ತು ವರ್ಷಗಳ ಬರವಣಿಗೆಯ ಆರಂಭ. ವರ್ಷ ದೃಢೀಕರಿಸಬೇಕು." },
  { year: "1940", en: "Natasarvabhowma published", kn: "‘ನಟಸಾರ್ವಭೌಮ’ ಪ್ರಕಟ", dEn: "His magnum opus on the world of Kannada drama companies.", dKn: "ಕನ್ನಡ ನಾಟಕ ಕಂಪನಿಗಳ ಜಗತ್ತಿನ ಕುರಿತ ಮಹತ್ಕೃತಿ." },
  { year: "Manipal", en: "Presides over the 42nd Sahitya Sammelana", kn: "42ನೇ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನದ ಅಧ್ಯಕ್ಷತೆ", dEn: "Held at Manipal. Year to be verified.", dKn: "ಮಣಿಪಾಲದಲ್ಲಿ. ವರ್ಷ ದೃಢೀಕರಿಸಬೇಕು." },
  { year: "1971", en: "Passes away in Bangalore", kn: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ನಿಧನ", dEn: "Died on 8 July, aged 63.", dKn: "ಜುಲೈ 8ರಂದು, 63ನೇ ವಯಸ್ಸಿನಲ್ಲಿ." },
];

export const works = [
  { kn: "ನಟಸಾರ್ವಭೌಮ", en: "Natasarvabhowma", year: "1940", cat: { en: "Novel", kn: "ಕಾದಂಬರಿ" }, dEn: "A 750-page novel following the fictional actor Rajacharya and the Kannada drama companies of the early twentieth century.", dKn: "ಇಪ್ಪತ್ತನೇ ಶತಮಾನದ ಆರಂಭದ ನಾಟಕ ಕಂಪನಿಗಳು ಮತ್ತು ನಟ ರಾಜಾಚಾರ್ಯರ ಕಥೆ." },
  { kn: "ಜೀವನಯಾತ್ರೆ", en: "Jeevanayathre", year: "", cat: { en: "Novel · Debut", kn: "ಮೊದಲ ಕಾದಂಬರಿ" }, dEn: "“Journey of Life” — his first novel.", dKn: "ಅವರ ಮೊದಲ ಕಾದಂಬರಿ." },
  { kn: "ಸಂಧ್ಯಾರಾಗ", en: "Sandhyaraga", year: "", cat: { en: "Novel", kn: "ಕಾದಂಬರಿ" }, dEn: "Description pending verification.", dKn: "ವಿವರ ದೃಢೀಕರಣ ಬಾಕಿ." },
  { kn: "ಉದಯರಾಗ", en: "Udayaraga", year: "", cat: { en: "Novel", kn: "ಕಾದಂಬರಿ" }, dEn: "Description pending verification.", dKn: "ವಿವರ ದೃಢೀಕರಣ ಬಾಕಿ." },
  { kn: "ಮಿಯಾ ಮಲ್ಹಾರ್", en: "Miya Malhar", year: "", cat: { en: "Novel", kn: "ಕಾದಂಬರಿ" }, dEn: "Description pending verification.", dKn: "ವಿವರ ದೃಢೀಕರಣ ಬಾಕಿ." },
];
