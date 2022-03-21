import ChildWithBtn from "./ChildWithBtn";

describe('test component functionality', () => {
  test('check initial event subscription', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');

    const child = new ChildWithBtn({})
    child.componentDidMount();

    expect(setInterval).toHaveBeenCalled()
  });
});
