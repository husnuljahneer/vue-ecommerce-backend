const request = require("supertest");
let link = `http://localhost:${process.env.PORT}`;

//UNKNOWN ROUTE

describe("Unknown Route", function() {
    it("responds with json", function(done) {
        request(link)
            .get("/unknownRoute")
            // deepcode ignore ContentTypeNoCharset/test: <please specify a reason of ignoring this>
            .set("Accept", "application/json")
            .expect(404, done);
    });
});

//GET

describe("GET /", function() {
    it("responds with json", function(done) {
        request(link)
            .get("/")
            // deepcode ignore ContentTypeNoCharset/test: <No need to specify charset>
            .set("Accept", "application/json")
            .expect(200, done);
    });
});

describe("GET /products", function() {
    it("responds with json", function(done) {
        request(link)
            .get("/products")
            // deepcode ignore ContentTypeNoCharset/test: <No need to specify charset>
            .set("Accept", "application/json")
            .expect(200, done);
    });
});

describe("GET /products/:id", function() {
    it("responds with json", function(done) {
        request(link)
            .get("/products/1")
            // deepcode ignore ContentTypeNoCharset/test: <please specify a reason of ignoring this>
            .set("Accept", "application/json")
            .expect(200, done);
    });
});

describe("GET /products/userProducts/:id", function() {
    it("responds with json", function(done) {
        request(link)
            .get("/userProducts/34")
            // deepcode ignore ContentTypeNoCharset/test: <please specify a reason of ignoring this>
            .set("Accept", "application/json")
            .expect(200, done);
    });
});

describe("GET /users", function() {
    it("responds with json", function(done) {
        request(link)
            .get("/users")
            // deepcode ignore ContentTypeNoCharset/test: <please specify a reason of ignoring this>
            .set("Accept", "application/json")
            .expect(200, done);
    });
});

describe("GET /users/:id", function() {
    it("responds with json", function(done) {
        request(link)
            .get("/users/11")
            // deepcode ignore ContentTypeNoCharset/test: <please specify a reason of ignoring this>
            .set("Accept", "application/json")
            .expect(200, done);
    });
});

//POST

describe("POST /createProduct", function() {
    it("responds with json", function(done) {
        request(link)
            .post("/createProduct")
            .send({
                name: "Test Product",
                price: "100",
                description: "Test Description",
                image: "https://unsplash.com/photos/QQ-ZQy9qQZs",
            })
            // deepcode ignore ContentTypeNoCharset/test: <please specify a reason of ignoring this>
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });
    });
});