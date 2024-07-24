const myURL = new URL("http://example.org:8080/foo?username=choi#bar");
console.log("1. " + myURL.search);
console.log("2. " + myURL.searchParams.get("username"));
console.log("3. " + myURL.protocol);
console.log("4. " + myURL.host);
console.log("5. " + myURL.hostname);
console.log("6. " + myURL.hash);
console.log("7. " + myURL.pathname);
