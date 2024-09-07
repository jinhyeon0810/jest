const fetchProduct = require("../async");

describe("Async", () => {
  //   test("fetchProduct", () => {
  //     expect(() => {
  //       fetchProduct("error");
  //     }).toThrow("network error");
  //   });

  test("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  test("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  test("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  test("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });
  test("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
