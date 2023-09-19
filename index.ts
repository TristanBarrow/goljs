const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url)
        return new Response(Bun.file('./index.html'));
    },
});
  
console.log(`Listening on http://localhost:${server.port}`);