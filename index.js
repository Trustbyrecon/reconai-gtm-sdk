// ReconAI GTM SDK - Entry Point (Image 1 style)
console.log("✅ ReconAI GTM SDK server initialized.");

// Simulate running logic (can evolve to Express later)
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ReconAI GTM SDK Server is Live");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🌐 Server listening on port ${PORT}`);
});
