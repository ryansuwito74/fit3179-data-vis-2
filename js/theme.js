/**
 * Vega-Lite Custom Theme: Mental Health Landscape in Australia
 * Designed to maintain unified sightlines, typography, and clear legends.
 */
const customTheme = {
  background: "transparent",
  font: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  
  autosize: {
    type: "fit-x",
    contains: "padding"
  },

  axis: {
    domainColor: "#cbd5e1",
    domainWidth: 1,
    gridColor: "#f1f5f9",
    gridWidth: 1,
    labelFont: "Inter, sans-serif",
    labelFontSize: 12,
    labelColor: "#475569",
    titleFont: "Inter, sans-serif",
    titleFontSize: 13,
    titleFontWeight: 600,
    titleColor: "#1e293b",
    titlePadding: 10,
    tickColor: "#cbd5e1",
    tickSize: 5
  },

  legend: {
    orient: "bottom",
    direction: "horizontal",
    titleFont: "Inter, sans-serif",
    titleFontSize: 12,
    titleFontWeight: 600,
    titleColor: "#1e293b",
    titlePadding: 6,
    labelFont: "Inter, sans-serif",
    labelFontSize: 11,
    labelColor: "#475569",
    symbolSize: 80,
    padding: 8
  },

  range: {
    // Categorical palette: deep teal, warm amber, muted slate, rose coral
    category: ["#0d9488", "#d97706", "#64748b", "#db2777", "#4f46e5", "#0284c7"],
    // Sequential ramp for heatmaps and choropleths
    heatmap: ["#f8fafc", "#ccfbf1", "#5eead4", "#14b8a6", "#0f766e", "#115e59"]
  },

  view: {
    stroke: "transparent"
  }
};