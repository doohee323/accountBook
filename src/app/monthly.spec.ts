import { Monthly } from './monthly';

describe('Monthly', () => {
  it('should create an instance', () => {
    expect(new Monthly()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let monthly = new Monthly({
      row1: 'hello1',
      row2: 'hello2',
      row3: 'hello3'
    });
    expect(monthly.row1).toEqual('hello1');
    expect(monthly.row2).toEqual('hello2');
    expect(monthly.row3).toEqual('hello3');
  });
});
