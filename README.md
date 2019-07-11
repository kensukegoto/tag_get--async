# async / await

- ES2017
- await出現時に待機が開始される（promiseの解決を待つ）
- async関数からの`return`を`.then`でつなげて受け取れる
- async関数からは`Promise`を返さないとしても`return`を受け取れる

--- 

promiseの例題

```JS
function sleep(ms){
  console.log('おやすみなさい...');
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('おはよう');
    },ms*1000);
  });
}

sleep(2).then(m=>console.log(m));
```