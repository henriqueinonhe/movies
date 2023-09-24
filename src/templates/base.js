export const renderBase = ({ stylesheets, scripts, content }) => `
<!doctype html>
<html lang="en">
  <head>
    ${stylesheets
      .map((href) => `<link rel="stylesheet" href="${href}" />`)
      .join("")}
    <link rel="stylesheet" href="/global.css" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cineminer</title>
    ${scripts.map((src) => `<script src="${src}" defer></script>`).join("")}
  </head>

  <body>
    <header class="header_container">
      <h1 class="header_brand"><a href="/">Cineminer</a></h1>
      <div class="header_strip"></div>
    </header>

      ${content}
  </body>
</html>
`;
