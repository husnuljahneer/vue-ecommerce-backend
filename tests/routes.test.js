const request = require("supertest");
let link = "http://localhost:3000";

//GET

describe("GET /", function() {
    it("responds with json", function(done) {
        request(link).get("/")
            .set("Accept", "application/json")
            .expect(200, done);
    });
});

describe("GET /products", function() {
    it("responds with json", function(done) {
        request(link)
            .get("/products")
            .set("Accept", "application/json")
            .expect(200, done);
    });
});

describe("GET /users", function() {
    it("responds with json", function(done) {
        request(link)
            .get("/users")
            .set("Accept", "application/json")
            .expect(200, done);
    });
});