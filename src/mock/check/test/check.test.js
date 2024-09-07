const check = require("../check");

test("check의 첫번째 인자가 true면 onSuccess 함수호출", () => {
  let onSuccess = jest.fn();
  let onFail = jest.fn();
  check(() => true, onSuccess, onFail);
  expect(onSuccess).toHaveBeenCalledTimes(1);
  expect(onSuccess).toHaveBeenCalledWith("yes");
});

test("check의 첫번째 인자가 false onFail 함수호출", () => {
  let onSuccess = jest.fn();
  let onFail = jest.fn();
  check(() => false, onSuccess, onFail);
  expect(onFail).toHaveBeenCalledTimes(1);
  expect(onFail).toHaveBeenCalledWith("no");
});
