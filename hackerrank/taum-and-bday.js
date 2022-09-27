function taumBday(b, w, bc, wc, z) {
  b = BigInt(b);
  w = BigInt(w);
  bc = BigInt(bc);
  wc = BigInt(wc);
  z = BigInt(z);

  let dif = bc> wc ?  bc - wc : wc-bc

  if (dif <= z) {
    return b * bc + w * wc;
  }

  if (bc - wc > z) return b * (wc + z) + w * wc;

  if (wc - bc > z) return b * bc + w * (bc + z);
}

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924));

617318315833461200;
617318315833461267;
