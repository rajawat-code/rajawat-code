const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)){
    fs.mkdirSync(assetsDir);
}

const createHeaderSVG = (text, iconColor, textColor) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 50">
  <defs>
    <linearGradient id="gradText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#70a5fd" />
      <stop offset="100%" stop-color="#bf91f3" />
    </linearGradient>
  </defs>
  <text x="45" y="38" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="900" fill="url(#gradText)">${text}</text>
</svg>`;

const createIconSVG = (pathData, color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}">
  <path d="${pathData}"/>
</svg>`;

const assets = {
  'header-tech.svg': createHeaderSVG('Tech Arsenal'),
  'header-about.svg': createHeaderSVG('About Me'),
  'header-focus.svg': createHeaderSVG('Current Focus'),
  'header-stats.svg': createHeaderSVG('GitHub Analytics'),
  'header-trophy.svg': createHeaderSVG('Achievements & Contributions'),
  'header-connect.svg': createHeaderSVG('Connect With Me'),
  'icon-code.svg': createIconSVG('M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z', '#70a5fd'),
  'icon-user.svg': createIconSVG('M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', '#bf91f3'),
  'icon-target.svg': createIconSVG('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z', '#38bdae'),
  'icon-frontend.svg': createIconSVG('M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z', '#70a5fd'),
  'icon-backend.svg': createIconSVG('M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H5v-2h6v2zm0-4H5v-2h6v2zm8-4h-6v-2h6v2zm0-4h-6V5h6v2z', '#bf91f3'),
  'icon-cloud.svg': createIconSVG('M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z', '#38bdae'),
  'icon-ai.svg': createIconSVG('M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a2 2 0 0 1-2-2 2 2 0 0 1 2-2h1a7 7 0 0 1 7-7h1V5.73A2 2 0 1 1 12 2zm-5 7a5 5 0 0 0-5 5v5h16v-5a5 5 0 0 0-5-5H7zm2 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z', '#f3a291'),
  
  'icon-telescope.svg': createIconSVG('M14 11a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3zm-9 9a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3z', '#70a5fd'),
  'icon-book.svg': createIconSVG('M12 21c-2.4 0-4.8-.8-6.5-2.2-.3-.2-.5-.6-.5-1V5c0-.6.4-1 1-1h6c1.6 0 3.2.4 4.5 1.2 1.3-.8 2.9-1.2 4.5-1.2h6c.6 0 1 .4 1 1v12.8c0 .4-.2.8-.5 1-1.7 1.4-4.1 2.2-6.5 2.2-1.6 0-3.2-.4-4.5-1.2-1.3.8-2.9 1.2-4.5 1.2z', '#bf91f3'),
  'icon-web3.svg': createIconSVG('M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', '#38bdae'),
  'icon-opensource.svg': createIconSVG('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z', '#f3a291'),
};

for (const [name, content] of Object.entries(assets)) {
  fs.writeFileSync(path.join(assetsDir, name), content);
}
console.log('Successfully generated custom SVG assets.');
