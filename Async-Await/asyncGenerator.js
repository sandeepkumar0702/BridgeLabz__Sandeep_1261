async function* get() {
    let p=1;
    while(p<3){
        yield await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${p}`)
        .then((result)=>{
            return result.json();
        })
        p++;
    }
}

(async ()=>{
    for await(let i of get()){
    console.log(i);
}})();