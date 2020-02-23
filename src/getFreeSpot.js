const getFreeSpot = spot => {
    if ((spot == 36) || (spot == 29) || (spot == 22) || (spot == 15) 
    || (spot == 8) || (spot == 1)) {
        for (let i = 36; i >= 1; i = i-7) {
            if (Array[i] === undefined) {
                return i;
            }
        }
    } else if ((spot == 37) || (spot == 30) || (spot == 23) || (spot == 16) 
    || (spot == 9) || (spot == 2)) {
        for (let i = 37; i > 1; i = i-7) {
            if (Array[i] === undefined) {
                return i;
            }
        }
    } else if ((spot == 38) || (spot == 31) || (spot == 24) || (spot == 17) 
    || (spot == 10) || (spot == 3)) {
        for (let i = 38; i > 1; i = i-7) {
            if (Array[i] === undefined) {
                return i;
            }
        }
    } else if ((spot == 39) || (spot == 32) || (spot == 25) || (spot == 18) 
    || (spot == 11) || (spot == 4)) {
        for (let i = 39; i >= 1; i = i-7) {
            if (Array[i] === undefined) {
                return i;
            }
        }
    } else if ((spot == 40) || (spot == 33) || (spot == 26) || (spot == 19) 
    || (spot == 12) || (spot == 5)) {
        for (let i = 40; i >= 1; i = i-7) {
            if (Array[i] === undefined) {
                return i;
            }
        }
    } else if ((spot == 41) || (spot == 34) || (spot == 27) || (spot == 20) 
    || (spot == 13) || (spot == 6)) {
        for (let i = 41; i >= 1; i = i-7) {
            if (Array[i] === undefined) {
                return i;
            }
        }
    } else if ((spot == 42) || (spot == 35) || (spot == 28) || (spot == 21) 
    || (spot == 14) || (spot == 7)) {
        for (let i = 42; i >= 1; i = i-7) {
            if (Array[i] === undefined) {
                return i;
            }
        }
    } else {
        return;
    }
}