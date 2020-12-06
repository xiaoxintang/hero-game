enum Color {
	Red,
	Black
}
enum Suit {
	/**黑桃 */
	Spade,
	/**红桃 */
	Heart,
	/**方块 */
	Diamond,
	/**梅花 */
	Club
}
type NormalPoint = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10"
type SpecialPoint = "A" | "J" | "Q" | "K"
type Point = SpecialPoint | NormalPoint
class Game {

}
class Card {
	point: Point;
	suit: Suit;
	constructor(suit: Suit, point: Point,) {
		this.point = point;
		this.suit = suit
	}
}
class CardStack {
	stack: Card[] = [];
	init() {
		/**杀 */
		this.pushPointCard(["7", "8", "9", "10", "8", "9", "10"], Suit.Spade);
		this.pushPointCard(["10", "10", "J"], Suit.Heart)
		this.pushPointCard(["6", "7", "8", "9", "10", "K"], Suit.Diamond)
		this.pushPointCard(["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "8", "9", "10", "J"], Suit.Club)
		/**闪 */
		this.pushPointCard(["2", "3", "4", "5", "6", "7", "8", "9", "10", "J",], Suit.Diamond)
		this.pushPointCard(["2", "2", "K"], Suit.Heart)
		/**桃 */
		this.pushPointCard(["3", "4", "6", "7", "8", "9", "Q",], Suit.Heart)
		this.pushPointCard(["Q"], Suit.Diamond)
		/**桃园结义 */
		this.pushPointCard(["A"], Suit.Heart)
		/**五谷丰登 */
		this.pushPointCard(["3", "4",], Suit.Heart)
		/**万箭齐发 */
		this.pushPointCard(["A"], Suit.Heart)
		/**南蛮入侵 */
		this.pushPointCard(["7", "K",], Suit.Spade)
		this.pushPointCard(["7",], Suit.Club)
		/**过河拆桥 */
		this.pushPointCard(["3", "4", "Q"], Suit.Spade)
		this.pushPointCard(["3", "4",], Suit.Club)
		this.pushPointCard(["Q"], Suit.Heart)
		/**顺手牵羊 */
		this.pushPointCard(["3", "4", "J"], Suit.Spade)
		this.pushPointCard(["3", "4"], Suit.Diamond)
		/**借刀杀人 */
		this.pushPointCard(["Q", "K"], Suit.Club)
		/**无懈可击 */
		this.pushPointCard(["Q", "K"], Suit.Club)
		this.pushPointCard(["J"], Suit.Spade)
		/**无中生有 */
		this.pushPointCard(["7", "8", "9", "J"], Suit.Heart)

		/**装备 */
		/**-1马 */
		this.pushSuitCard([Suit.Spade, Suit.Diamond], "K")
		this.pushSuitCard([Suit.Heart], "5")
		/**+1马 */
		this.pushSuitCard([Suit.Heart], "K")
		this.pushSuitCard([Suit.Club, Suit.Spade], "5")
		/**诸葛连弩 */
		this.pushSuitCard([Suit.Diamond, Suit.Club], "A")
		/**雌雄双股剑 */
		this.pushSuitCard([Suit.Spade], "2")
		/**青龙偃月刀 */
		this.pushSuitCard([Suit.Spade], "5")
		/**贯石斧 */
		this.pushSuitCard([Suit.Diamond], "5")
		/**麒麟弓 */
		this.pushSuitCard([Suit.Heart], "5")
		/**青纲剑*/
		this.pushSuitCard([Suit.Spade], "6")
		/**方天画戟 */
		this.pushSuitCard([Suit.Diamond], "Q")
		/**丈八蛇矛 */
		this.pushSuitCard([Suit.Spade], "Q")
		/**闪电 */
		this.pushSuitCard([Suit.Spade], "A")


		/**决斗 */
		this.pushSuitCard([Suit.Club, Suit.Diamond, Suit.Spade], "A")
		/**八卦阵 */
		this.pushSuitCard([Suit.Club, Suit.Spade], "2")
		/**乐不思蜀 */
		this.pushSuitCard([Suit.Club, Suit.Spade, Suit.Heart], "6")

	}
	/**添加额外4张平衡牌 */
	pushExCard() {
		/**仁王盾 */
		this.pushSuitCard([Suit.Club], "2")
		/**寒冰剑 */
		this.pushSuitCard([Suit.Spade], "2")
		/**闪电 */
		this.pushSuitCard([Suit.Heart], "Q")
		/**无懈可击 */
		this.pushSuitCard([Suit.Diamond], "Q")
	}
	pushPointCard(arr: Point[], suit: Suit) {
		arr.forEach((el) => this.stack.push(new Card(Suit.Spade, el)));
	}
	pushSuitCard(arr: Suit[], point: Point) {
		arr.forEach((el) => this.stack.push(new Card(el, point)));
	}
}