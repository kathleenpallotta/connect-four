const verifyDiagonalUpleft = () => {
    for (let i = 15, score = 0; i < 39; i = i + 8) {
        if (Array[i] !== undefined
            && (Array[i] === Array[i+8])) {
            score++
        } else {
            score = 0;
        }

        if (score === 3) {
            return Array[i]
        }
    }

    for (let i = 8, score = 0; i < 40; i = i + 8) {
        if (Array[i] !== undefined
            && (Array[i] === Array[i+8])) {
            score++
        } else {
            score = 0;
        }

        if (score === 3) {
            return Array[i]
        }
    }

    for (let i = 1, score = 0; i < 41; i = i + 8) {
        if (Array[i] !== undefined
            && (Array[i] === Array[i+8])) {
            score++
        } else {
            score = 0;
        }

        if (score === 3) {
            return Array[i]
        }
    }

    for (let i = 2, score = 0; i < 42; i = i + 8) {
        if (Array[i] !== undefined
            && (Array[i] === Array[i+8])) {
            score++
        } else {
            score = 0;
        }

        if (score === 3) {
            return Array[i]
        }
    }

    for (let i = 3, score = 0; i < 35; i = i + 8) {
        if (Array[i] !== undefined
            && (Array[i] === Array[i+8])) {
            score++
        } else {
            score = 0;
        }

        if (score === 3) {
            return Array[i]
        }
    }

    for (let i = 4, score = 0; i < 28; i = i + 8) {
        if (Array[i] !== undefined
            && (Array[i] === Array[i+8])) {
            score++
        } else {
            score = 0;
        }

        if (score === 3) {
            return Array[i]
        }
    }
}