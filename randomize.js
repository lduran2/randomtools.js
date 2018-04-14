(function randomize_problems() {
	var random = Math.random;
	var n = 1000000;
	alert(JSON.stringify(discreteWeightedFrom(outputsOf(n, randomInt, [random, 4, 6]))));

	function frequencies(countMap, arrLength) {
		return countMap.map(n => (n / arrLength))
	} /* end function frequencies(countMap, arrLength) */

	function counts(arr) {
		const countMap = {};
		arr.reduce(counter, countMap);

		return countMap;

		function counter(acc, key) {
			acc[key] = (acc[key] || 0);
			++acc[key];
			return acc;
		}
	} /* end function counts(arr) */

	function outputsOf(n, fn, args) {
		const outputs = [];
		for (var k = n; (k > 0); --k) {
			outputs.push(fn.apply(this, args));
		} /* end for (var k = n; (k > 0); --k) */
		return outputs;
	} /* end function outputsOf(n, fn, args) */

	function discreteWeightedFrom(fnp, arr, weights) {
		const i = discreteInt(fnp(), 0, arr.length);
		var k;
		for (k = arr.length; k > 0; --k) {
			if (inRange(weights[k], i, weights[k-1])) {
				return k[i];
			} /* end if (inRange(weights[k], i, weights[k-1])) */
		} /* end for (k = arr.length; k > 0; --k) */
	} /* end function discreteWeightedFrom(fnp, arr, weights) */

	function inRange(min, x, max) {
		return ((min <= x) && (x < max));
	} /* end function inRange(min, x, max) */

	function discreteFrom(fnp, arr) {
		return arr[discreteInt(fnp, 0, arr.length)];
	} /* end function discreteFrom(fnp, arr) */

	function discreteInt(fnp, min, max) {
		return (Math.floor(fnp() * (max - min + 1)) + min);
	} /* end function discreteInt(fnp, min, max) */
} /* end function randomize_problems() */)();
