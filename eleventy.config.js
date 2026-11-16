const slugify = (s) =>
  (s || "")
    .toString()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

module.exports = function (eleventyConfig) {
  // --- Static marketing site: copied verbatim, never templated ---
  const passthrough = [
    "src/assets",
    "src/screenshots",
    "src/styles.css",
    "src/app.js",
    "src/i18n.js",
    "src/admin",
    "src/index.html",
    "src/aviso-legal.html",
    "src/consent.js",
    "src/lead-form.js",
    "src/robots.txt",
    "src/llms.txt",
    "src/_headers",
  ];
  passthrough.forEach((p) => eleventyConfig.addPassthroughCopy(p));
  ["src/index.html", "src/aviso-legal.html"].forEach((p) => eleventyConfig.ignores.add(p));

  // --- Filters ---
  eleventyConfig.addFilter("slug", slugify);
  eleventyConfig.addFilter("dateES", (d) =>
    new Date(d).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("byCategory", (posts, name) =>
    (posts || []).filter((p) => p.data.category === name)
  );

  // --- Collections ---
  eleventyConfig.addCollection("post", (c) =>
    c.getFilteredByTag("post").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("categories", (c) => {
    const map = new Map();
    c.getFilteredByTag("post").forEach((p) => {
      const cat = p.data.category;
      if (cat) map.set(cat, (map.get(cat) || 0) + 1);
    });
    return [...map.entries()].map(([name, count]) => ({ name, slug: slugify(name), count }));
  });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
