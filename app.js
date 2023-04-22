const arr1 = [1,2,4,5,6];
const arr2 = [1,6,8,9,0];

const resultArr = arr1.filter((value, index) => {
    if(arr2.includes(value)){
        return value;
    }
});

console.log(resultArr);

const arr3 = [1,54,6,7];
const resultArr2 = arr3.map((item, index) => {
    return item + 5;
})

console.log(resultArr2);
    
const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 }
  ];
  
  const playersModified = players.reduce((acc, player) => {
    acc[player.id] = player;
    return acc;
  }, {});
  
  console.log(playersModified);