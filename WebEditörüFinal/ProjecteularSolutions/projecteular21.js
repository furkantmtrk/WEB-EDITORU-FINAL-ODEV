// 21-Amicable numbers

ans = 0;
ui = [];
for (i = 1; i < 10000; i++) {
  ui[i] = 1;
  for (j = 2; j * j <= i; j++) {
    if (i % j == 0) {
      ui[i] += j;
      if (j * j != i) {
        ui[i] += i / j;
      }
    }
  }
  if (ui[i] < i) {
    if (ui[ui[i]] == i) {
      ans += ui[i];
      ans += i;
    }
  }
}