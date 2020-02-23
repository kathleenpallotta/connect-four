const verifyColumns = () => {
    for (let y = 0; y < 7; y++){
        for (let i = y; i <= (y+35); i = i + 7) {
            if (Array[i] && (Array[i] === Array[i+7]) && (Array[i] === Array[i+14]) 
            && (Array[i] === Array[i+21])) {
                return Array[i]
            }
        }
    }
}