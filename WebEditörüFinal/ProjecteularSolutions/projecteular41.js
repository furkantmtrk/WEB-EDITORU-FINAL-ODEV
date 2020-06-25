// 41- pandigital prime

function isPrime(number) {
var s = Math.sqrt(number);
for (var b = 2; b <= s; b++) {
    if (number % b === 0) {
        return false;
    }
}
return true;
}

function push(array) {
buffer.push(array.join(''));
}

function generate(length) {
var max = length;
for (var u = 1; u <= max; u++) {
    if (max === 1) {
        push([u]);
    }
    for (var i = 1; i <= max; i++) {
        if (i === u || max < 2) {
            continue;
        }
        if (max === 2) {
            push([u, i]);
        }
        for (var o = 1; o <= max; o++) {
            if (o === i || o === u || max < 3) {
                continue;
            }
            if (max === 3) {
                push([u, i, o]);
            }
            for (var p = 1; p <= max; p++) {
                if (p === i || p === o || p === u || max < 4) {
                    continue;
                }
                if (max === 4) {
                    push([u, i, o, p]);
                }
                for (var a = 1; a <= max; a++) {
                    if (a === i || a === o || a === p || a === u || max < 5) {
                        continue;
                    }
                    if (max === 5) {
                        push([u, i, o, p, a]);
                    }
                    for (var s = 1; s <= max; s++) {
                        if (s === a || s === p || s === o || s === i || s === u || max < 6) {
                            continue;
                        }
                        if (max === 6) {
                            push([u, i, o, p, a, s]);
                        }
                        for (var d = 1; d <= max; d++) {
                            if (d === s || d === a || d === p || d === o || d === i || d === u || max < 7) {
                                continue;
                            }
                            if (max === 7) {
                                push([u, i, o, p, a, s, d]);
                            }
                            for (var f = 1; f <= max; f++) {
                                if (f === d || f === s || f === a || f === p || f === o || f === i || f === u || max < 8) {
                                    continue;
                                }
                                if (max === 8) {
                                    push([u, i, o, p, a, s, d, f]);
                                }
                                for (var g = 1; g <= max; g++) {
                                    if (g === f || g === d || g === s || g === a || g === p || g === o || g === i || g === u || max < 9) {
                                        continue;
                                    }
                                    push([u, i, o, p, a, s, d, f, g]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
}

for (var i = 1; i <= 8; i++) {
generate(i);
}

for (var i = buffer.length - 1; i >= 0; i--) {
if (isPrime(buffer[i])) {
    greatest = buffer[i];
    break;
}
}

