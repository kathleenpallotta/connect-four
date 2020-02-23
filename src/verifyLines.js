verifyLines = () => {
    let countingSpaces = -1;
    for (let i = 0; i < 6; i++) {
        for (let y = 0; y < 7; y++) {
            countingSpaces++
            if (
                (Array[countingSpaces] !== undefined)
                && (Array[countingSpaces] === Array[countingSpaces+1])
                && (Array[countingSpaces] === Array[countingSpaces+2])
                && (Array[countingSpaces] === Array[countingSpaces+3])
            ) {

                if ((countingSpaces > 3 && countingSpaces <= 6) ||
                    (countingSpaces > 10 && countingSpaces <= 13) ||   
                    (countingSpaces > 17 && countingSpaces <= 20) ||
                    (countingSpaces > 24 && countingSpaces <= 27) ||
                    (countingSpaces > 31 && countingSpaces <= 34) || 
                    (countingSpaces > 39 && countingSpaces <= 41)) {
                        return;
                    } else {
                        return Array[countingSpaces]
                    }
            }

        }
    }

}