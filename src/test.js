describe('peanutButter Tests', () => {
  it('singular test', () => {
    expect(2).toEqual(2);
  });

  it('throw error test', () => {
    expect(() => {
      throw new Error('Fail');
    }).toThrowError();
  });

  it('throw error message test', () => {
    expect(() => {
      throw new Error('Fail');
    }).toThrowErrorMessage('Fail');
  });
});
