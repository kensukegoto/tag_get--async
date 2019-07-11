function get_all_json({code,page}){

    return new Promise(async (resolve,reject)=>{

      let jsons = [];

      try{
        while(true){
          ++page;
          const {hasNext,items} = await ((code,page)=>{
  
            let page2str = ('000' + page).slice(-3);
  
            return new Promise((resolve,reject)=>{
          
              $.ajax({
                url: `https://ドメイン/パス/0000${code}_${page2str}.json`,
                dataType: 'json'
              })
              .then(json=>{
                resolve({
                  hasNext: json.channel.hasNext,
                  items: json.channel.item
                });
              })
              .fail(err=>{
                reject('エラー！');
              })
          
          
            })
          })(code,page);
  
          jsons.push(items)
          if(!hasNext) break;
        }
      }catch(e){
        reject(e);
      }
  
      const items = jsons.reduce((sum,json)=>{
        return sum.concat(json);
      },[])
  
      resolve(items);

    });

  
}

/**
 *  get_all_jsonがPromiseを返す
 *  get_all_json内のエラーをキャッチ出来る
 * 
 *  get_all_jsonがPromiseを返さない
 *  get_all_json内のエラーをキャッチ出来ない
 */
get_all_json({code:271,page:0})
  .then(res=>{
    console.log(res)
  })
  .catch(e=>{
    console.log(e)
  })
