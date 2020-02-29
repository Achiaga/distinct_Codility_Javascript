function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)

	let solution = {};

	for (leti in A) {
		if (!solution[A[i]]) {
			solution[A[i]] = true;
		}
	}

	return Object.keys(solution).length;
}
