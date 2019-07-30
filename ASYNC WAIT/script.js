async function getSth(url){
    try{
        const aha = await fetch(url)
       const data = await aha.json()
      return data.items
// bez await by to byly tylko obiekt promis a tak jest rozwiazany i zwraca wartosc. to tak jak byc dac then
    }catch(error){
        console.log('error is:', error)
    }
    
}
const myData = getSth('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
console.log(myData)