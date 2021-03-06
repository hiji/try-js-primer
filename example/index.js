console.log(1); // => 1

// typeof演算子でデータ型を調べられる
console.log(typeof true); // => boolean

// テンプレートリテラルだと変数展開できる
const string = "文字列";
console.log(`これは${string}です`);

// 複数行も書ける
const multiString = `複数行の
文字列を
入れたい`;
console.log(multiString);

// オブジェクトリテラル。
const object = {
    "key": "value",
    "123": "value"
};
console.log(object.key);
console.log(object["key"]);
// console.log(object.123); 数字始まりは識別子名ではNGなので、この記法では書けない
console.log(object["123"]);

// 配列リテラル
const emptyArray = [];
const array = [1, 2, 3];
console.log(array[0]); // インデックスは0始まり

// 正規表現
const numberRegExp = /\d+/;
console.log(numberRegExp.test(123));

// べき乗演算子 => **
console.log(2 ** 4); // 2の4乗
console.log(Math.pow(2, 4)); // これと同じ

// Nan "Not a Number"
console.log(NaN === NaN); // => false
console.log(typeof NaN); // => number
console.log(Number.isNaN(NaN)); // => true

// 厳密等価演算子 "==="
console.log(1 === 1); // => true
console.log(1 === "1"); // => false
const objA = {};
const objB = {};
const objC = objA;
console.log(objA === objB); // => false
console.log(objA === objC); // => true

// 等価演算子
// 同じデータ型を比較するなら厳密等価演算子と同じ
console.log(objA === objB); // => false
console.log(objA === objC); // => true
// 型が違うと暗黙的な型変換をされてしまう
console.log(1 == "1"); // => true
console.log(1 == "01"); // => true
console.log(0 == false); // => true
console.log(0 == null); // => false
console.log(null == undefined); // => true
// バグが起きやすいので、基本的には厳密等価演算子を使うべき

// 分割代入
const arrayA = [1, 2];
const [a, b] = arrayA;
console.log(a); // => 1
console.log(b); // => 2
const objectA = {
    "key": "value"
};
const { key } = object;
console.log(key); // => "value"

// 明示的な型変換
Boolean(1); // => true
String(1); // => "1"
Number("1"); // => 1
Number.parseInt("1");
Number.parseFloat("1");
Number("文字列"); // => NaN
Number(undefined); // => NaN
Number({}); // => NaN

// 関数の定義
function multiple(num) {
    return num * 2;
}
console.log(multiple(10)); // => 20

function fn() {}
console.log(fn()); // => undefined

function echo(x) {
    return x;
}
console.log(echo(1)); // => 1
console.log(echo()); // => undefined（仮引数にはundefinedが入る）

function echo2(x = "デフォルト値") {
    return x;
}
console.log(echo2(1)); // => 1
console.log(echo2()); // => "デフォルト値"（仮引数にはデフォルト値が入る）

function add(x, y) {
    return x + y;
}
console.log(add(1, 3, 5)); // => 4（引数が多い場合は無視される）

// 可変長引数（Rest parameters）
function log(...args) {
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    // 昔からのやり方で、argumentsを使っても同じことができる。いまはRest parameterがあるので必要ない。
    // Array-likeなだけでArrayでない、Arrow Functionで使えない等のデメリットがある
    console.log(arguments[0]); // => "a"
    console.log(arguments[1]); // => "b"
    console.log(arguments[2]); // => "c"
}
log("a", "b", "c");
// Rest parameter は最後の引数でないとダメ
function log2(arg1, ...restArgs) {
    console.log(arg1);
    console.log(restArgs);
}
log2("a", "b", "c");

// 分割代入（Destructuring assignment）
// まずは使わない書き方
function printUserId(user) {
    console.log(user.id);
}
const user = {
    id: 42
};
printUserId(user);
// 分割代入を使った書き方
// 第1引数のオブジェクトから`id`プロパティを変数`id`として定義する
function printUserId2({ id }) {
    console.log(id);
}
printUserId2(user);
// 配列でもできる
function printUserId3([first, second]) {
    console.log(first);
    console.log(second);
}
printUserId3([1, 2]);

// 関数はオブジェクト。括弧をつけなければオブジェクト参照になる。
function fnObj() {
    console.log("fnObjが呼び出されました");
}
const myFunc = fnObj;
myFunc();

// 関数式（function方式）
// 関数名を省略できる。匿名関数。
const funNoName = function() {
    return "function";
};
// 関数名をつけることもできるが、関数内からでしか呼び出せない。
// factorialは関数の外から呼び出せる名前
// innerFactは関数の外から呼び出せない名前
const factorial = function innerFact(n) {
    if (n === 0) {
        return 1;
    }
    // innerFactを再帰的に呼び出している
    return n * innerFact(n - 1);
};
console.log(factorial(3)); // => 6

// 関数式（Arrow Function）
const fnA = () => { /* 仮引数が無い時 */ };
const fnB = (x) => { /* 仮引数が1つのみの時 */ };
const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数の時 */ };
// 値の渡し方。次の2つは同じ意味。
const mulA = x =>  { return x * x; }; /// ブロックの中でreturn
const mulB = x => x * x;

// function方式で書いたコールバック関数
const orgArray = [1, 2, 3];
// 1,2,3と順番に値が渡されコールバック関数（匿名関数）が処理する
const doubleArray = orgArray.map(function(value) {
    return value * 2; // 返した値をまとめた配列ができる
});
console.log(doubleArray); // => [2, 4, 6]
// Arrow Functionで書くとこうなる
const doubleArrayAtArrow = orgArray.map(value => value * 2);
console.log(doubleArrayAtArrow);

// コールバック関数
// コールバック関数を受け取る関数を高階関数と呼ぶ
// 例えば、Array.forEachは高階関数で、要素に対してコールバック関数を呼び出す。
const callBackArray = [1, 2, 3];
const output = (value) => {
    console.log(value);
};
callBackArray.forEach(output);
// 毎回定義するのは手間なので、匿名関数で渡したりする
callBackArray.forEach(value => console.log(value));

// メソッド
// 関数とメソッドで機能的な違いは無い。オブジェクトのプロパティにある場合にメソッドと呼んだりする。
const objWithMethod = {
    method1: function() {
        console.log("method1");
    },
    method2: () => {
        console.log("method2")
    }
};
objWithMethod.method1();
objWithMethod.method2();
// 空のオブジェクトを用意して後から代入もできる
const emptyObj = {};
emptyObj.method = function() {
    console.log("this is method");
};
emptyObj.method();
// ES2015ではfunctionキーワードを省略できる
const objWithMethod2015 = {
    method() {
        return "this is method";
    }
};
console.log(objWithMethod2015.method()); // => "this is method"

// 配列の関数
function isEven(number) {
    return number % 2 === 0;
}
const testNumber = [1, 5, 10, 15, 20];
console.log(testNumber.some(isEven)); // => true
console.log(testNumber.filter(isEven)); // => [10, 20]

// for in
const forObj = {
    "a": 1,
    "b": 2,
    "c": 3
};
for (const key in forObj) {
    const value = forObj[key];
    console.log(`key:${key}, value:${value}`);
}
Object.keys(forObj).forEach(key => {
    const value = forObj[key];
    console.log(`key:${key}, value:${value}`);
});
// forで更新する変数はletにしないといけない
const forNums = [5, 10];
let total = 0;
for (const num in forNums) {
    total += num;
}
console.log(total); // => "001"
// letじゃなくconstにするため、reduceで実装
function sumForReduce(numbers) {
    return numbers.reduce((total, num) => {
        return total + num;
    }, 0); // 初期値が0;
}
console.log(sumForReduce([1, 2, 3, 4, 5]));

// プロパティ名と変数名が同じなら省略できる
let name = "名前";
const nameObject = {
    name
};
console.log(nameObject.name); // => 名前
name = "名前変更";
console.log(nameObject.name); // => 名前 （影響ない）

// オブジェクトリテラルとnew演算子は同じ
// オブジェクトリテラルの方が簡潔なので、newを使う必要は無い
const newObject = new Object();
console.log(newObject); // => {}

// プロパティへのアクセス方法は2種類
const propObject = {
    key: "value",
    123: "value2"
};
console.log(propObject.key); // => "value" ドット記法で参照
console.log(propObject["key"]); // => "value" ブラケット記法で参照
console.log(propObject["123"]); // => "value2" ブラケット記法だと、数字始まりでもアクセスできる
// ブラケット記法だと変数が使える
const languages = {
    ja: "日本語",
    en: "英語"
};
const myLang = "ja";
console.log(languages[myLang]); // => "日本語"

const keyStr = "key-string";
const keyObject = {};
keyObject[keyStr] = "value of key";
console.log(keyObject[keyStr]); // => "value of key"
// Symbolは例外的に文字列化されず扱える
const symbolKey = Symbol("シンボルは一意な値");
object[symbolKey] = "value of symbol";
console.log(object[symbolKey]); // => "value of symbol"

//  オブジェクトリテラル内でのブラケット記法を使ったプロパティ。Computed property names。
const bracketNameObject = {
    [keyStr]: "value"
};
console.log(bracketNameObject[keyStr]); // => "value"

// プロパティを消すのはdelete
// constでも消せる
const deleteObject = {
    key1: "value1",
    key2: "value2"
};
// key1プロパティを削除
delete deleteObject.key1;
// key1プロパティが削除されている
console.log(deleteObject); // => { "key2": "value2" }

// プロパティの存在確認方法はいくつかある
// undefinedとの比較する方法
const checkObject = { key: "value" };
// `key`プロパティが`undefined`ではないなら、プロパティが存在する?
if (checkObject.key !== undefined) {
    console.log("`key`プロパティの値は`undefined`");
}
// この方法では、キーが無い場合と、値がundefinedだった場合の区別がつかない
const checkObject2 = { key: undefined };
// `key`プロパティの値が`undefined`
if (checkObject2.key !== undefined) {
    // 実行されない文
    console.log("実行されない文");
}
// in演算子を使う方法
if ("key" in checkObject) {
    console.log("`key`プロパティは存在する");
}
// in演算子を使う方法
if (checkObject.hasOwnProperty("key")) {
    console.log("`key`プロパティは存在する");
}

// オブジェクトのマージ
const mergeObjectA = { a: "a" };
const mergeObjectB = { b: "b" };
const merged = Object.assign({}, mergeObjectA, mergeObjectB);
console.log(merged); // => { a: "a", b: "b" }
// オブジェクトのspread構文でのマージ (ES2018)
const mergedBySpread = {
    ...mergeObjectA,
    ...mergeObjectB
};
console.log(mergedBySpread); // => { a: "a", b: "b" }

// オブジェクトの複製
// `object`を浅く複製したオブジェクトを返す
const shallowClone = (object) => {
    return Object.assign({}, object);
};
const sourceObject = {
    level: 1,
    nest: {
        level: 2
    },
};
const cloneObject = shallowClone(sourceObject);
console.log(cloneObject); // => { a: "a" }
// オブジェクトを複製しているので、異なるオブジェクトとなる
console.log(sourceObject === cloneObject); // => false
// shallow copyなので深いプロパティは同じ
console.log(cloneObject.nest === sourceObject.nest); // => true
// Deep Copy を実装してみる
// `object`を深く複製したオブジェクトを返す
function deepClone(object) {
    const newObject = shallowClone(object);
    // プロパティがオブジェクト型であるなら、再帰的に複製する
    Object.keys(newObject)
        .filter(k => typeof newObject[k] === "object")
        .forEach(k => newObject[k] = deepClone(newObject[k]));
    return newObject;
}
const deepCloneObject = deepClone(sourceObject);
// `nest`オブジェクトも再帰的に複製されている
console.log(deepCloneObject.nest === sourceObject.nest); // => false

// in演算子とObject#hasOwnPropertyメソッドの違い
const testObject = {};
// `object`のインスタンス自体に`toString`メソッドが定義されているわけではない
console.log(testObject.hasOwnProperty("toString")); // => false
// `in`演算子は指定されたプロパティ名が見つかるまで親を辿るため、`Object.prototype`まで見に行く
console.log("toString" in testObject); // => true

// プロトタイプの継承。継承元を明示。
// const object = {} と同じ
const extObject = Object.create(Object.prototype);
// `object`は`Object.prototype`を継承している
console.log(extObject.hasOwnProperty === Object.prototype.hasOwnProperty); // => true

// 配列
const testArray = ["A", "B", "C"];
console.log(testArray.length); // => 3
testArray.length = 0; // lengthで要素を削除することもできる
console.log(testArray.length); // => 0

// undefined要素と未定義要素を判別
const denseArray = [1, undefined, 3];
const sparseArray = [1, , 3];
// インデックスだと区別がつかない
console.log(denseArray[1]); // => undefined
console.log(sparseArray[1]); // => undefined
// hasOwnPropertyで区別できる
// 要素自体は`undefined`値が存在する
console.log(denseArray.hasOwnProperty(1)); // => true
// 要素自体がない
console.log(sparseArray.hasOwnProperty(1)); // => false

const indexArray = ["Java", "JavaScript", "Ruby"];
const indexOfJS = indexArray.indexOf("JavaScript");
console.log(indexOfJS); // => 1
console.log(array[indexOfJS]); // => "JavaScript"
// "JS" という要素はないため `-1` が返される
console.log(array.indexOf("JS")); // => -1

// colorプロパティを持つオブジェクトの配列
const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトのインデックスを取得
const indexOfBlue = colors.findIndex((object) => {
    return object.color === "blue";
});
console.log(indexOfBlue); // => 2
console.log(colors[indexOfBlue]); // => { "color": "blue" }

// `color`プロパティが"blue"のオブジェクトを取得
const blueColor = colors.find((object) => {
    return object.color === "blue";
});
console.log(blueColor); // => { "color": "blue" }
// 該当する要素がない場合は`undefined`を返す
console.log(colors.find((object) => object.color === "white")); // => undefined

// 要素が含まれているかはincludesで判定できる（2015）
// `includes`は含まれているなら`true`を返す
const includesArray = ["Java", "JavaScript", "Ruby"];
if (includesArray.includes("JavaScript")) {
    console.log("配列にJavaScriptが含まれている");
}

const variableArray = ["A", "B", "C"];
variableArray.push("D"); // "D"を末尾に追加
console.log(variableArray); // => ["A", "B", "C", "D"]
const popedItem = variableArray.pop(); // 最末尾の要素を削除し、その要素を返す
console.log(popedItem); // => "D"
console.log(variableArray); // => ["A", "B", "C"]
array.unshift("S"); // "S"を先頭に追加
console.log(array); // => ["S", "A", "B", "C"]
const shiftedItem = array.shift(); // 先頭の要素を削除
console.log(shiftedItem); // => "S"
console.log(array); // => ["A", "B", "C"]

// 配列の高階関数とメソッドチェーン
// ECMAScriptのバージョン名と発行年
const ECMAScriptVersions = [
    { name: "ECMAScript 1", year: 1997 },
    { name: "ECMAScript 2", year: 1998 },
    { name: "ECMAScript 3", year: 1999 },
    { name: "ECMAScript 5", year: 2009 },
    { name: "ECMAScript 5.1", year: 2011 },
    { name: "ECMAScript 2015", year: 2015 },
    { name: "ECMAScript 2016", year: 2016 },
    { name: "ECMAScript 2017", year: 2017 },
];
const versionNames = ECMAScriptVersions
    // 2000年以下のデータに絞り込み
    .filter(ECMAScript => ECMAScript.year <= 2000)
    // それぞれの要素から`name`プロパティを取り出す
    .map(ECMAScript => ECMAScript.name);
console.log(versionNames); // => ["ECMAScript 1", "ECMAScript 2", "ECMAScript 3"]

// 文字コード
// 文字列"あ"の0番目のCode Pointを取得
console.log("あ".codePointAt(0)); // => 12354
// 符号位置12354の文字を取得する
console.log(String.fromCodePoint(12354)); // => "あ"
// "あ"のCode Pointは12354
// 12354の16進数表現は3042
console.log("\u{3042}"); // => "あ"
// サロゲートペア
// 上位サロゲート + 下位サロゲートの組み合わせ
console.log("\uD867\uDE3D"); // => "𩸽"
// Code Pointでの表現
console.log("\u{29e3d}"); // => "𩸽"

// 文字列の分割と結合
const strings = "赤・青・緑".split("・");
console.log(strings); // => ["赤", "青", "緑"]
console.log(strings.join("、")); // => "赤、青、緑"
// splitで空文字を指定して文字単位に分割するのは、Code Unit単位に分割されるので問題がある
// "𩸽"はサロゲートペアであるため2つのCode Unit（\uD867\uDE3D）からなる
// サロゲートペアを含む文字列を各Code Unitに分解
const codeUnitElements = "𩸽のひらき".split("");
// サロゲートペアを各CodeUnitに分解したため、文字化けしている
console.log(codeUnitElements); // ["�", "�", "の", "ひ", "ら", "き"]
// IteratorだとCode Point単位に扱ってくれるので分割できる
const codePointString = "𩸽のひらき";
// Array.fromメソッドで文字列を分解
console.log(Array.from(codePointString)); // => ["𩸽", "の", "ひ", "ら", "き"]
// ...（spread構文）で文字列を展開しものを配列にする
console.log([...codePointString]); // => ["𩸽", "の", "ひ", "ら", "き"]
// for...ofもIteratorを列挙するため、Code Pointごとで列挙できる
for (const codePoint of codePointString) {
    console.log(codePoint);
}

// lengthもCode Point単位に扱われる
console.log("文字列".length); // => 3
// 評価結果の文字列の要素数（Code Unit数）であるため1つ
console.log("\u{3042}".length); // => 1
// サロゲートペアを含むためCode Unitは6つ
console.log("𩸽のひらき".length); // => 6

// 部分文字列(slice)
const baseString = "ABCDE";
console.log(baseString.slice(1)); // => "BCDE"
console.log(baseString.slice(1, 5)); // => "BCDE"
// マイナスを指定すると後ろからの位置となる
console.log(baseString.slice(-1)); // => "E"
// 位置:1から4の範囲を取り出す
console.log(baseString.slice(1, 4)); // => "BCD"
// 第一引数 > 第二引数の場合、常に空文字を返す
console.log(baseString.slice(4, 1)); // => ""
// 実例
const url = "https://example.com?param=1";
const indexOfQuery = url.indexOf("?");
const queryString = url.slice(indexOfQuery);
console.log(queryString); // => "?param=1"

// 部分文字列(substring)
console.log(baseString.substring(1)); // => "BCDE"
console.log(baseString.substring(1, 5)); // => "BCDE"
// マイナスを指定すると0として扱われる
console.log(baseString.substring(-1)); // => "ABCDE"
// 位置:1から4の範囲を取り出す
console.log(baseString.substring(1, 4)); // => "BCD"
// 第一引数 > 第二引数の場合、引数が入れ替わる
// string.substring(1, 4)と同じ結果になる
console.log(baseString.substring(4, 1)); // => "BCD"

// 正規表現での検索
// 3つの連続するスペースにマッチする正規表現
const pattern = /\s{3}/;
// RegExp
const spaceCount = 3;
// `/\s{3}/`の正規表現を動的に生成する
// "\"がエスケープ文字であるため、"\"自身を文字列として書くには、"\\"のように2つ書く
const rpattern = new RegExp(`\\s{${spaceCount}}`);

const searchString = "ABC あいう DE えお";
// gフラグなしでは、最初の結果のみを持つ配列を返す
const results = searchString.match(/[a-zA-Z]+/);
console.log(results); // => ["ABC"]
// aからZのどれかの文字が1つ以上連続するパターンにマッチするものを繰り返した（gフラグ）結果を返す
const resultsWithG = searchString.match(/[a-zA-Z]+/g);
console.log(resultsWithG[0]); // => "ABC"
console.log(resultsWithG[1]); // => "DE"

// "ECMAScript (数字+)"にマッチするが、欲しい文字列は数字の部分のみ
const groupPattern = /ECMAScript (\d+)/i;
// 返り値は0番目がマッチした全体、1番目がキャプチャの1番目というように対応している
// [マッチした全部の文字列, キャプチャの1番目, キャプチャの2番目 ....]
// `pattern.exec("ECMAScript 6")`も返り値は同じ
const [all, capture1] = "ECMAScript 6".match(groupPattern);
console.log(all); // => "ECMAScript 6"
console.log(capture1); // => "6"

// replaceでコールバック関数
function toDateJa(dateString) {
    // パターンにマッチしたときのみ、コールバック関数で置換処理が行われる
    return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/, (all, year, month, day) => {
        // `all`には、マッチした文字列全体が入っているが今回は利用しない
        // `all`が次の返す値で置換されるイメージ
        return `${year}年${month}月${day}日`;
    });
}
// マッチしない文字列の場合は、そのままの文字列が返る
console.log(toDateJa("本日ハ晴天ナリ")); // => "本日ハ晴天ナリ"
// マッチした場合は置換した結果を返す
console.log(toDateJa("今日は2017-03-01です")); // => "今日は2017年03月01日です"

// タグ付きテンプレート関数
const input = "/";
// URLエスケープして結合した場合
const URL = `https://example.com/search?query=${encodeURIComponent(input)}&sort=desc`;
// `/`が`%2F`へURLエスケープされている
console.log(URL); // => "https://example.com/search?query=%2F&sort=desc"
// タグ関数は引数の形が決まっていること以外は関数と同じ
function tag(strings, ...values) {
    // stringsには文字列部分が${}で区切られて順番に入る
    console.log(strings); // => ["template "," literal ",""]
    // valuesには${}の評価値が順番に入る
    console.log(values); // => [0, 1]
}
tag`template ${0} literal ${1}`;

// テンプレートを順番どおりに結合した文字列を返すタグ関数
function stringRaw(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + values[i - 1] + string;
    });
}
// 関数`テンプレートリテラル` という形で呼び出す
console.log(stringRaw`template ${0} literal ${1}`); // => "template 0 literal 1"

// 変数をURLエスケープするタグ関数
function escapeURL(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + encodeURIComponent(values[i - 1]) + string;
    });
}
const input2 = "A&B";
// escapeURLタグ関数を使ったタグ付きテンプレート
const escapedURL = escapeURL`https://example.com/search?q=${input2}&sort=desc`;
console.log(escapedURL); // => "https://example.com/search?q=A%26B&sort=desc"

// ラッパーオブジェクト
const str = "string";
// プリミティブ型の値に対してメソッド呼び出しを行うとき、次のような変換が行われる
str.toUpperCase();
// `str`へアクセスする際に、"string"がラッパーオブジェクトへ変換される
// ラッパーオブジェクトはStringのインスタンスなのでメソッドを呼び出せる
console.log((new String(str)).toUpperCase());
// プリミティブ型の値を取得する
const stringWrapper = new String("文字列");
console.log(stringWrapper.valueOf()); // => "文字列"

// スコープチェーン
{
    // OUTERブロックスコープ
    const x = "outer";
    {
        // INNERブロックスコープ
        const x = "inner";
        // 現在のスコープ(INNERブロックスコープ)にある`x`を参照する
        console.log(x); // => "inner"
    }
    // 現在のスコープ(OUTERブロックスコープ)にある`x`を参照する
    console.log(x); // => "outer"
}

// letとは違い、var宣言より前に参照してもエラーにならない
// 変数宣言だけもっとも違いスコープの先頭に巻き上げられる
console.log(x); // => undefined
var x = "varのx";

// `hello`関数の宣言より前に呼び出せる。関数宣言もvarと同じで巻き上げられる。
console.log(hello()); // => "Hello"
function hello(){
    return "Hello";
}

// 即時実行関数
(function() {
    // 関数のスコープ内でfoo変数を宣言している
    var foo = "foo";
    console.log(foo); // => "foo"
})();
// foo変数のスコープ外
console.log(typeof foo === "undefined"); // => true

// letとconstが使えるようになった2015では、即時実行関数はブロックスコープで置き換えられる
{
    // ブロックスコープ内でfoo変数を宣言している
    const foo = "foo";
    console.log(foo); // => "foo"
}
// foo変数のスコープ外
console.log(typeof foo === "undefined"); // => true

// クロージャー
const createCounter = () => {
    let count = 0;
    return function increment() {
        // `increment`関数は外のスコープの変数`count`を参照している
        // これがクロージャーと呼ばれる
        count = count + 1;
        return count;
    };
};
// createCounter()の実行結果は、内側で定義されていた`increment`関数
const myCounter = createCounter();
// myCounter関数の実行結果は`count`の評価結果
console.log(myCounter()); // => 1
console.log(myCounter()); // => 2
const newCountUp = createCounter();
// 参照してる関数(オブジェクト)は別であるため===は一致しない
console.log(myCounter === newCountUp);// false
// それぞれの状態も別となる
console.log(newCountUp()); // => 1

// thisでベースオブジェクトのプロパティを参照
const person = {
    fullName: "Brendan Eich",
    sayName: function() {
        // `person.fullName`と書いているのと同じ
        return this.fullName;
    }
};
// `person.fullName`を出力する
console.log(person.sayName()); // => "Brendan Eich"

// thisの問題。呼び出し方で変わってしまう。
const say = person.sayName;
// 代入したメソッドを関数として呼ぶ
// この`say`関数はどのオブジェクトにも所属していない
// `this`はundefinedとなるため例外を投げる
console.log(say()); // => TypeError: Cannot read property 'fullName' of undefined

// call, apply, bind
function sayB(message) {
    return `${message} ${this.fullName}！`;
}
const personB = {
    fullName: "Brendan Eich"
};
// `this`を`person`にして`say`関数を呼びだす
console.log(sayB.call(personB, "こんにちは")); // => "こんにちは Brendan Eich！"
console.log(sayB.apply(personB, ["こんにちは"])); // => "こんにちは Brendan Eich！"
// `this`を`person`に束縛した`say`関数をラップした関数を作る
const sayPerson = sayB.bind(person, "こんにちは");
console.log(sayPerson()); // => "こんにちは Brendan Eich！"

// Arrow Functionでコールバック関数を定義すれば、常に外側のthisを使える
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map((string) => {
            // Arrow Function自体は`this`を持たない
            // `this`は外側の`prefixArray`関数がもつ`this`を参照する
            // そのため`this.prefix`は"pre"となる
            return this.prefix + "-" + string;
        });
    }
};
// この時、`prefixArray`のベースオブジェクトは`Prefixer`となる
// つまり、`prefixArray`メソッド内の`this`は`Prefixer`を参照する
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]

function outer() {
    // Arrow Functionで定義した関数を返す
    return () => {
        // この関数の外側には`outer`関数が存在する
        // `outer`関数に`this`を書いた場合と同じ
        return this;
    };
}
// `outer`関数の返り値はArrow Functionにて定義された関数
const innerArrowFunction = outer();
console.log(innerArrowFunction()); // => window or undefined

// クラスの定義
class MyClass {
    constructor() {
        // コンストラクタ関数の処理
    }
}

const MyCaseClass = class MyClass {
    constructor() {}
};

const AnnonymousClass = class {
    constructor() {}
};

class Counter {
    constructor() {
        this.count = 0;
    }
    // `increment`メソッドをクラスに定義する
    increment() {
        // `this`は`Counter`のインスタンスを参照する
        this.count++;
    }
}
const counterA = new Counter();
const counterB = new Counter();
// `counterA.increment()`のベースオブジェクトは`counterA`インスタンス
counterA.increment();
// 各インスタンスのもつプロパティ(状態)は異なる
console.log(counterA.count); // => 1
console.log(counterB.count); // => 0
// 各インスタンスオブジェクトのメソッドは共有されている(同じ関数を参照している)
console.log(counterA.increment === counterB.increment); // => true

class NumberValue {
    constructor(value) {
        this._value = value;
    }
    // `_value`プロパティの値を返すgetter
    get value() {
        console.log("getter");
        return this._value;
    }
    // `_value`プロパティに値を代入するsetter
    set value(newValue) {
        console.log("setter");
        this._value = newValue;
    }
}

const number = new NumberValue(1);
// "getter"とコンソールに表示される
console.log(number.value); // => 1
// "setter"とコンソールに表示される
number.value = 42;
// "getter"とコンソールに表示される
console.log(number.value); // => 42

// プロトタイプメソッド
class PrototypeClass {
    constructor() {
        this.method2 = () => {
            console.log("インスタンスのメソッド");
        };
    }
    method() {
        console.log("プロトタイプのメソッド");
    }
    method2() {
        console.log("プロトタイプのメソッド")
    }

}
console.log(typeof PrototypeClass.prototype.method === "function"); // => true
console.log(PrototypeClass.prototype.constructor === PrototypeClass); // => true

// インスタンスのメソッドがあればそれを優先
const protoTypeInstance = new PrototypeClass();
protoTypeInstance.method2(); // => "インスタンスのメソッド"

// instanceの`[[Prototype]]`内部プロパティは`PrototypeClass.prototype`と一致する
const Prototype = Object.getPrototypeOf(protoTypeInstance);
console.log(Prototype === PrototypeClass.prototype); // => true

// 継承
// 親クラス
class Parent {
    constructor(...args) {
        console.log("Parentコンストラクタの処理", ...args);
        this.name = "Parent";
        this.method2 = () => {
            console.log("Parent#method2");
        };
    }
    method() {
        console.log("Parent#method");
    }
    static hello() {
        return "Hello";
    }
}
// Parentを継承したChildクラスの定義
class Child extends Parent {
    constructor(...args) {
        // Parentのコンストラクタ処理を呼びだす
        // 子クラスでは`super()`を`this`に触る前に呼び出さなければならない
        super(...args);
        // 子クラスのコンストラクタ処理
        console.log("Childコンストラクタの処理", ...args);
        // 親クラスで書き込まれた`name`は上書きされる
        this.name = "Child";
    }
}
const parent = new Parent("引数1", "引数2");
console.log(parent.name); // => "Parent"
const child = new Child("引数1", "引数2");
console.log(child.name); // => "Child"

// `Child`のインスタンスは`Parent`のプロトタイプメソッドを継承している
const childInstance = new Child();
childInstance.method(); // "Parent#method"
// インスタンスメソッドも継承している
childInstance.method2(); // "Parent#method2"
// 静的メソッドも継承される
console.log(Child.hello()); // => "Hello"
console.log(childInstance);
console.log(childInstance.constructor === Child); // => true

// 例外処理
try {
    console.log("この文は実行されます");
    // 未定義の関数を呼び出してReferenceError例外が発生する
    undefinedFunction();
    // この文は実行されません
} catch (error) {
    // 例外が発生したあとはこのブロックが実行される
    console.log("この文は実行されます");
    console.log(error instanceof ReferenceError); // => true
    console.log(error.message); // => "undefinedFunction is not defined"
} finally {
    // このブロックはかならず実行される
    console.log("この文は実行されます");
}

// 非同期処理
function blockTime(timeout) {
    const startTime = Date.now();
    while (true) {
        const diffTime = Date.now() - startTime;
        if (diffTime >= timeout) {
            return; // 指定時間経過したら関数の実行を終了
        }
    }
}
console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行します");
setTimeout(() => {
    console.log("3. ブロックする処理を開始します");
    blockTime(1000); // 他の処理を1秒間ブロックする
    console.log("4. ブロックする処理が完了しました");
}, 10);
// ブロックする処理は非同期なタイミングで呼び出されるので、次の行が先に実行される
console.log("2. 同期的な処理を実行します");

const startTime = Date.now();
// 10ミリ秒後にコールバック関数を呼び出すようにタイマーに登録する
setTimeout(() => {
    const endTime = Date.now();
    console.log(`非同期処理のコールバックが呼ばれるまで${endTime - startTime}ミリ秒かかりました`);
}, 10);
console.log("ブロックする処理を開始します");
blockTime(1000); // 1秒間処理をブロックする
console.log("ブロックする処理が完了しました");

try {
    setTimeout(() => {
        throw new Error("非同期的なエラー");
    }, 10);
} catch (error) {
    // この文は実行されません
}
console.log("この文は実行されます");

// 非同期での例外処理

/**
 * 1000ミリ秒未満のランダムなタイミングでレスポンスを擬似的にデータ取得する関数
 * 指定した`path`にデータがある場合は`callback(null, レスポンス)`を呼ぶ
 * 指定した`path`にデータがない場合は`callback(エラー)`を呼ぶ
 */
function dummyFetch(path, callback) {
    setTimeout(() => {
        // /success から始まるパスにはリソースがあるという設定
        if (path.startsWith("/success")) {
            callback(null, { body: `Response body of ${path}` });
        } else {
            callback(new Error("NOT FOUND"));
        }
    }, 1000 * Math.random());
}
// /success/data にリソースが存在するので、`response`にはデータが入る
dummyFetch("/success/data", (error, response) => {
    if (error) {
        // この文は実行されません
    } else {
        console.log(response); // => { body: "Response body of /success/data" }
    }
});
// /failure/data にリソースは存在しないので、`error`にはエラーオブジェクトが入る
dummyFetch("/failure/data", (error, response) => {
    if (error) {
        console.log(error.message); // => "NOT FOUND"
    } else {
        // この文は実行されません
    }
});

// 非同期処理（Promise）
/**
 * 1000ミリ秒未満のランダムなタイミングでレスポンスを擬似的にデータ取得する関数
 * 指定した`path`にデータがある場合は成功として`resolve`を呼ぶ
 * 指定した`path`にデータがない場合は失敗として`reject`を呼ぶ
 */
function dummyFetchByPromise(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/success")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
// `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
// /success/data のリソースは存在するので成功しonFulfilledが呼ばれる
dummyFetchByPromise("/success/data").then(function onFulfilled(response) {
    console.log(response); // => { body: "Response body of /success/data" }
}, function onRejected(error) {
    // この文は実行されません
});
// /failure/data のリソースは存在しないのでonRejectedが呼ばれる
dummyFetchByPromise("/failure/data").then(function onFulfilled(response) {
    // この文は実行されません
}, function onRejected(error) {
    console.log(error); // Error: "NOT FOUND"
});

function delay(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeoutMs);
    });
}
// `then`メソッドで成功時のコールバック関数だけを登録
delay(10).then(() => {
    console.log("10ミリ秒後に呼ばれる");
});

function throwPromise() {
    return new Promise((resolve, reject) => {
        // Promiseコンストラクタの中で例外は自動的にキャッチされrejectを呼ぶ
        throw new Error("xxx 例外が発生");
        // 例外が発生するとそれ以降の処理は実行されない
        // この文は実行されません
    });
}

throwPromise().catch(error => {
    console.log(error.message); // => "例外が発生"
});

const promise = new Promise((resolve) => {
    console.log("1. resolveします");
    resolve();
});
promise.then(() => {
    console.log("3. コールバック関数が実行されました");
});
console.log("2. 同期的な処理が実行されました");

// Promiseインスタンスでメソッドチェーン
Promise.resolve()
// thenメソッドは新しい`Promise`インスタンスを返す
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    });

Promise.resolve(1).then((value) => {
    console.log(value); // => 1
    return value * 2;
}).then(value => {
    console.log(value); // => 2
    return value * 2;
}).then(value => {
    console.log(value); // => 4
    // 値を返さない場合は undefined を返すのと同じ
}).then(value => {
    console.log(value); // => undefined
});

Promise.resolve().then(function onFulfilledA() {
    return Promise.reject(new Error("失敗"));
}).then(function onFulfilledB() {
    console.log("onFulfilledBは呼び出されません");
}).catch(function onRejected(error) {
    console.log(error.message); // => "失敗"
}).then(function onFulfilledC() {
    console.log("onFulfilledCは呼び出されます");
});

function asyncFunction() {
    return Promise.reject(new Error("エラー"));
}
function main() {
    return asyncFunction().catch(error => {
        // asyncFunctionで発生したエラーのログを出力する
        console.log(error);
        // Promiseチェーンはそのままエラーを継続させる
        return Promise.reject(error);
    });
}
// mainはRejectedなPromiseを返す
main().then(() => {
    console.log("この行は呼び出されません");
}).catch(error => {
    console.log("メインの処理が失敗した");
});

function dummyFetch2(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
// リソースを取得中かどうかのフラグ
let isLoading = true;
dummyFetch2("/resource/A").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
}).finally(() => {
    isLoading = false;
    console.log("Promise#finally");
});

// Promiseで直列処理
function dummyFetch3(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}

const promiseResults = [];
// Resource Aを取得する
dummyFetch3("/resource/A").then(response => {
    promiseResults.push(response.body);
    // Resource Bを取得する
    return dummyFetch3("/resource/B");
}).then(response => {
    promiseResults.push(response.body);
}).then(() => {
    console.log(promiseResults); // => ["Response body of /resource/A", "Response body of /resource/B"]
});

// Promise all
const promise1 = delay(1);
const promise2 = delay(2);
const promise3 = delay(3);

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values); // => [1, 2, 3]
});


const fetchedPromise = Promise.all([
    dummyFetch3("/resource/A"),
    dummyFetch3("/resource/B")
]);
fetchedPromise.then(([responseA, responseB]) => {
    console.log(responseA.body); // => "Response body of /resource/A"
    console.log(responseB.body); // => "Response body of /resource/B"
});

// Async（2017）
async function doAsync() {
    return "値";
}
// doAsync関数はPromiseを返す
doAsync().then(value => {
    console.log(value); // => "値"
});

async function asyncMain() {
    const value = await Promise.resolve(42);
    console.log(value); // => 42
}
asyncMain(); // Promiseインスタンスを返す


class AsyncStorage {
    constructor() {
        this.dataMap = new Map();
    }
    async save(key, value) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.dataMap.set(key, value);
                resolve();
            }, 100);
        });
    }
    async load(key) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.dataMap.get(key));
            }, 50);
        });
    }
}
// Async Storageを作成する
const storage = new AsyncStorage();
// 1. AsyncStorageにデータを保存する
async function saveUsers(users) {
    users.forEach(async(user) => {
        await storage.save(user.id, user);
    });
}
// 2. AsyncStorageからデータを読み取る
async function loadUser(userId) {
    return storage.load(userId);
}
async function asyncMain2() {
    const users = [{ id: 1, name: "John" }, { id: 5, name: "Smith" }, { id: 7, name: "Ayo" }];
    await saveUsers(users);
    // idが5のユーザーデータを取り出す
    const user = await loadUser(5);
    // しかしまだ保存が完了していないためundeinedとなる
    console.log(user); // => undefined
}
asyncMain2();