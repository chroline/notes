const withNextBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE,
});
module.exports = withNextBundleAnalyzer({});
