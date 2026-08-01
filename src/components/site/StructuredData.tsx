const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hasan Bukhari",
  url: "https://hasanbukhari.dev",
  email: "mailto:hasan.bukhari25@gmail.com",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Southern Mississippi",
  },
  sameAs: [
    "https://www.linkedin.com/in/hasan-bukhari",
    "https://github.com/glitchmatrix-jpg",
    "https://github.com/PurplePoet25",
  ],
  knowsAbout: [
    "Software engineering",
    "Computational biology",
    "Game development",
    "Poetry",
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replaceAll("<", "\\u003c"),
      }}
    />
  );
}
