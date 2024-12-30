const nova = require('novaxjs2');
const app = nova();
const port = 3000;

// Adding style functionality
app.style = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f9;
    color: #333;
  }
  h3 {
    color: #007BFF;
  }
  p {
    font-size: 1.2em;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    background-color: #0096cc;
  }
`;

app.get('/', () => {
  return `
    <html>
      <head>
        <title>Novaxjs2 App</title>
      </head>
      <body>
        <h3>App is working</h3>
        <p>Welcome to the Novaxjs2 application. Explore the features of this lightweight framework!</p>
        <a href="/about">About</a>
      </body>
    </html>
  `;
});

// Adding another route
app.get('/about', () => {
  return `
    <html>
      <head>
        <title>About Novaxjs2</title>
      </head>
      <body>
        <h3>About Novaxjs2</h3>
        <p>Novaxjs2 is a custom lightweight framework for building simple web applications with ease.</p>
        <a href="/">Home</a>
      </body>
    </html>
  `;
});

// Start the server
app.at(port, () => {
  console.log(`App is running on https://localhost:${port}`);
});