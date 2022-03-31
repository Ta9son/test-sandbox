// テンプレート文字列
const name = "tset";
const age = 30;
const message = `わたしの　名前は${name}です。年齢は${age}歳です`;
console.log(message);

// アロー関数
// 従来の関数
function func1(str) {
  return str;
}
const func2 = function (str) {
  return str;
};

console.log(func1("m"));
console.log(func2("m2"));

// アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("m3"));
// こう言った書き方もある
const func4 = (str) => str;
console.log(func4("m4"));

// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとまる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);

// map ,  filterを使った処理

const nameArr = ["aaa", "bbb", "ccc"];
// 従来の繰り返し処理
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// mapを使ってみる
const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2);

nameArr.map((name) => console.log(name));

// 順番のをフル場合
nameArr.map((name, index) => console.log(`${index + 1}番目は ${name}です`));

// filter を使ってみる
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "ccc") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
