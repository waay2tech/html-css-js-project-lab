export function convertTemperature(value, from) {
  if (typeof value !== "number" || !Number.isFinite(value))
    throw new Error("Enter a finite temperature.");
  const c = from === "C" ? value : ((value - 32) * 5) / 9;
  if (c < -273.15 - 1e-9)
    throw new Error("Temperature cannot be below absolute zero.");
  return from === "C" ? (value * 9) / 5 + 32 : c;
}
export function choices(text) {
  return text
    .split(/[\n,]+/u)
    .map((x) => x.trim())
    .filter(Boolean);
}
// Counts Unicode code points; this is deliberately not a byte or grapheme counter.
export const countCharacters = (text) => Array.from(text).length;
export function ageOn(iso, today) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) throw new Error("Choose a valid birth date.");
  const [, ys, ms, ds] = match,
    y = Number(ys),
    m = Number(ms),
    d = Number(ds);
  const birth = new Date(0);
  birth.setFullYear(y, m - 1, d);
  birth.setHours(0, 0, 0, 0);
  if (
    y < 1 ||
    birth.getFullYear() !== y ||
    birth.getMonth() !== m - 1 ||
    birth.getDate() !== d
  )
    throw new Error("Choose a valid birth date.");
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (birth > now) throw new Error("Birth date cannot be in the future.");
  let anniversary = new Date(0);
  anniversary.setFullYear(now.getFullYear(), m - 1, d);
  anniversary.setHours(0, 0, 0, 0);
  // Feb 29 birthdays reach their anniversary on March 1 in non-leap years.
  return now.getFullYear() - y - (now < anniversary ? 1 : 0);
}
export function remainingMs({ remaining, deadline, running }, now) {
  return running ? Math.max(0, deadline - now) : remaining;
}
export const otpDigits = (text) => text.replace(/\D/g, "").slice(0, 6);
export function cartTotal(products, cart) {
  return products.reduce((sum, p) => sum + p.price * (cart[p.id] || 0), 0);
}
