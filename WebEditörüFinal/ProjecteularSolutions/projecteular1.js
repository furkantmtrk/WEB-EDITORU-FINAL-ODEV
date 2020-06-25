//1-Multiples of 3 and 5

k = 1000 - 1;
n3 = Math.floor(k / 3);
m3 = 3 * n3 * (n3 + 1) / 2;
n5 = Math.floor(k / 5);
m5 = 5 * n5 * (n5 + 1) / 2;
n15 = Math.floor(k / 15);
m15 = 15 * n15 * (n15 + 1) / 2;
ans = m3 + m5 - m15;
