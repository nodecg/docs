module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: [
        "http://localhost/light.html?theme=light",
        "http://localhost/docs/creating-bundles-light?theme=light",
        "http://localhost/dark.html?theme=dark",
        "http://localhost/docs/creating-bundles-dark?theme=dark"
      ],
      staticDistDir: "./build"
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "offscreen-images": "off",
        "uses-webp-images": "off",

        // Our tests themselves are not http2.
        "uses-http2": "off",

        // Most of the failures here are Docusaurus' own fault, not ours.
        "tap-targets": "warn",

        // Way too much of a pain in the ass.
        "uses-responsive-images": "warn",

        // This rule is broken, fails on pages that have perfectly valid description tags.
        "meta-description": "off"
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
}
