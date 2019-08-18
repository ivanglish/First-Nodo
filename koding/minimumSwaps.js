function minimumSwaps(q) {
    let result = 0;
    let len = q.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (q[j] > q[j + 1]) {
                let tmp = q[j];
                q[j] = q[j + 1];
                q[j + 1] = tmp;
                result++;
            } 
        }
    }
    console.log(result);
};

module.exports = minimumSwaps

// 4 3 1 2
// 1 3 4 2
// 