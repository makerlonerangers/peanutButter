describe('peanutButter Tests', () => {
  it('singular test', () => {
    expect(2).toEqual(2);
  });

  it('tests toContain', () => {
    expect([1, 2, 3]).toContain(2);
  });
  it('tests not.toEqual when false', () => {
    expect(2).not.toEqual(2);
  });
  it('tests not.toEqual when true', () => {
    expect(3).not.toEqual(2);
  });
  it('tests not.toContain when false', () => {
    expect([1, 2, 3]).not.toContain(2);
  });
  it('tests not.toContain when true', () => {
    expect([1, 2, 3]).not.toContain(4);
  });
});
