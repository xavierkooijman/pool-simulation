// addition of two vectors
export function add(v, w) {
  return { x: v.x + w.x, y: v.y + w.y };
}

// subtraction of two vectors
export function sub(v, w) {
  return { x: v.x - w.x, y: v.y - w.y };
}

// scale a vector
export function scale(r, v) {
  return { x: r * v.x, y: r * v.y };
}

// distance between two vectors
export function distance(p, q) {
  return Math.sqrt(Math.pow(p.x - q.x, 2) + Math.pow(p.y - q.y, 2));
}

// dot product of two vectors
export function dotProduct(v, w) {
  return v.x * w.x + v.y * w.y;
}