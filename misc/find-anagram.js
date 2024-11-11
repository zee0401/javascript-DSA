// 1st approach

const isAnagram1 = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

// anagram => [a,n,a,g,r,a,m] => [a,a,a,m,n,r] => aaamnr

// 2nd approach
