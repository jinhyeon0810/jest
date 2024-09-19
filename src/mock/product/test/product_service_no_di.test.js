const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

jest.mock("../product_client.js");

//단위테스트 서로 모듈간의 상호작용 테스트하면 안됨
//딱 그 단위 테스트하나만해야함

describe("ProductService", () => {
  let productService;

  const fetchItems = jest.fn(async () => [
    {
      item: "milk",
      available: true,
    },
    {
      item: "banana",
      available: false,
    },
  ]);
  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([
      {
        item: "milk",
        available: true,
      },
    ]);
  });
});
