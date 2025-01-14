const asyncIterator={
    [Symbol.asyncIterator](){
        let i=0;
        return {
            async next(){
                if(i<3){
                    return new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            resolve({value:i++,done:false});
                        },2000);
                    });
                }
                return {value:undefined,done:true};
            }
        }
    },
};
(async ()=>{
    for await (let  i of asyncIterator){
        console.log(i);
    }
})();