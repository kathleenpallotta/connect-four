const verifyDiagonalUpright = () => {
        for (let i = 4, score = 0; i > 22; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 29, score = 0; i > 5; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 36, score = 0; i > 6; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }
            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 37, score = 0; i > 7; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 38, score = 0; i > 14; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

        for (let i = 38, score = 0; i > 14; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }
        
        for (let i = 39, score = 0; i > 21; i = i - 6) {
            if (Array[i] !== undefined
                && (Array[i] === Array[i-6])) {
                score++
            } else {
                score = 0;
            }

            if (score === 3) {
                return Array[i]
            }
        }

    }