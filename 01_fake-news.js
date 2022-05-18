const news = [true, false, false, true, false, false, false, true, true, true];

const fakeNews = (news)=>{
    const count = news.filter(ele => ele===false ).length
    console.log(count);
}
// function fakeNews(news){
//     countt = 0;
// for(let i = 0;i< news.length;i++)
// {
//     if(news[i] == false){
//         countt +=1;
//     }
   
// }
// return countt;
// }
console.log(fakeNews(news));
console.log(fakeNews(news));


