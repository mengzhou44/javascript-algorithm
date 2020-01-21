/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let result = [];

    T.map((t, index) => {
        let daysBeforeWarmer = findDaysBeforeWarmer(T, index);
        result.push(daysBeforeWarmer);
    });
    return result;
};

function findDaysBeforeWarmer(T, index) {
    if (index === T.length - 1) {
        return 0;
    }

    for (let i = index + 1; i < T.length; i++) {
        if (T[i] > T[index]) {
            return i - index;
        }
    }

    return 0;
}
