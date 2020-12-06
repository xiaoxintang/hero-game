/**数组乱序 */
function shuffle<T>(sortArr: T[]): T[] {
	let len = sortArr.length;
	while (len) {
		let index = Math.floor(Math.random() * len--);
		[sortArr[len],sortArr[index]] = [sortArr[index],sortArr[len]]
	}
	return sortArr
}