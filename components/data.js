const storename = "algo4all_localstore_30w03a@wrv";
const storedata = async () => {
        const data = await fetch('https://fastify-production-3682.up.railway.app/names')
        const res = await data.json()
        window.localStorage.setItem(storename, JSON.stringify(res))
}

const sizefilter =  (arrList, page) => {
    const x =  arrList;
    const l = x.length;
    const f_end = 30;
    let begin = 30
    let end = 30;
    
    begin = (page - 1) * 30;
    end = page * 30;
    const paginations = Math.round(l / f_end) || 1;
    return ({"data": x.slice(begin, end) , "tpagi": paginations, page })
}

const isData = async ()=>{
    const ls = JSON.parse(window.localStorage.getItem(storename));
    if(!ls || typeof ls === Object){
        await storedata()
        return true
    }
        return true;
    
}

const filter = (data, param)=>{
    const fdata = []
    for(let i = 0; i < data.length; i++){
        const x = data[i].name.toLowerCase();
        const inc = x.includes(param.toLowerCase());
        if(inc){
            fdata.push(data[i]);
        }
    }
    return fdata;
    


}

const newName = (name)=>{
    const c = name.split('-').splice(1).join('-')
    const d = c.charAt(0).toUpperCase() + c.slice(1)
    return d
}

module.exports = {
    storedata,
    sizefilter,
    isData,
    filter,
    newName
}