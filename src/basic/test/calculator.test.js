const Calculator = require("../calculator.js");

//공통적으로 테스트 전에 필요한 것들은 beforeEach에서 초기화 작업
//테스트 전에 새로운 object를 만듬 : 각각의 테스트는 독립적으로,개별적으로 서로에게 영향을 주지않도록 만듬
describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  test("0 초기화", () => {
    expect(cal.value).toBe(0);
  });

  test("set", () => {
    cal.set(10);
    expect(cal.value).toBe(10);
  });

  test("clear", () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  test("add", () => {
    cal.add(10);
    expect(cal.value).toBe(10);
  });

  test("add는 value가 100이넘으면 에러 뱉습니다", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("value는 100보다 클수없어요");
  });

  test("subtract", () => {
    cal.subtract(10);
    expect(cal.value).toBe(-10);
  });

  test("multiply", () => {
    cal.set(5);
    cal.multiply(2);
    expect(cal.value).toBe(10);
  });

  describe("divides", () => {
    test("0나누기0은 NAN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    test("1/0 는 Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    test("같은수를 나누면 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
