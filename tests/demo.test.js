test("This test no should fail", () => {
  if (1 === 0) {
    throw new Error("HAHAHA");
  }
});
