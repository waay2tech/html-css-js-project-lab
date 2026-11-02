import test from "node:test";
import assert from "node:assert/strict";
import {
  convertTemperature,
  choices,
  countCharacters,
  ageOn,
  remainingMs,
  otpDigits,
  cartTotal,
} from "../episodes/20-age-calculator/logic.js";

test("temperature known points, round trips and physical lower boundary", () => {
  assert.equal(convertTemperature(0, "C"), 32);
  assert.equal(convertTemperature(212, "F"), 100);
  assert.equal(convertTemperature(-40, "C"), -40);
  assert.ok(Math.abs(convertTemperature(-273.15, "C") + 459.67) < 1e-8);
  for (const value of [-200, -40, 0, 37, 100, 900])
    assert.ok(
      Math.abs(
        convertTemperature(convertTemperature(value, "C"), "F") - value,
      ) < 1e-8,
    );
  for (const value of [NaN, Infinity, -Infinity, "0"])
    assert.throws(() => convertTemperature(value, "C"));
  assert.throws(() => convertTemperature(-274, "C"));
});
test("choice parser trims empty fields and preserves literal markup as text", () => {
  assert.deepEqual(choices(" CSS, \n HTML\n,,JS "), ["CSS", "HTML", "JS"]);
  assert.deepEqual(choices(" ,\n "), []);
  assert.deepEqual(choices("<img onerror=alert(1)>"), [
    "<img onerror=alert(1)>",
  ]);
});
test("counter counts Unicode code points rather than UTF-16 units", () => {
  assert.equal(countCharacters(""), 0);
  assert.equal(countCharacters("abc"), 3);
  assert.equal(countCharacters("A😀"), 2);
  assert.equal(countCharacters("e\u0301"), 2);
});
test("age uses local birthdays and does not count a future anniversary", () => {
  const today = new Date(2026, 10, 2);
  assert.equal(ageOn("2000-11-02", today), 26);
  assert.equal(ageOn("2000-11-03", today), 25);
  assert.equal(ageOn("2000-11-01", today), 26);
  assert.equal(ageOn("2026-11-02", today), 0);
  assert.throws(() => ageOn("2026-11-03", today));
});
test("leap-day policy is March 1; invalid dates and year zero rejected", () => {
  assert.equal(ageOn("2000-02-29", new Date(2025, 1, 28)), 24);
  assert.equal(ageOn("2000-02-29", new Date(2025, 2, 1)), 25);
  for (const date of [
    "2025-02-29",
    "2000-13-01",
    "2000-04-31",
    "0000-01-01",
    "garbage",
    "",
  ])
    assert.throws(() => ageOn(date, new Date(2026, 10, 2)));
});
test("deadline countdown accounts for delayed ticks and paused state", () => {
  const running = { running: true, deadline: 100000, remaining: 60000 };
  assert.equal(remainingMs(running, 40000), 60000);
  assert.equal(remainingMs(running, 99900), 100);
  assert.equal(remainingMs(running, 120000), 0);
  assert.equal(
    remainingMs({ running: false, deadline: 0, remaining: 25000 }, 900000),
    25000,
  );
});
test("OTP strips non-digits and caps at six without verification claims", () => {
  assert.equal(otpDigits("12 34-56"), "123456");
  assert.equal(otpDigits("abc123456789"), "123456");
  assert.equal(otpDigits("abc"), "");
});
test("cart total comes from selected quantities and ignores absent products", () => {
  const products = [
    { id: "laptop", price: 49900 },
    { id: "notebook", price: 390 },
  ];
  assert.equal(cartTotal(products, {}), 0);
  assert.equal(cartTotal(products, { laptop: 1, notebook: 1 }), 50290);
  assert.equal(cartTotal(products, { notebook: 3 }), 1170);
});
