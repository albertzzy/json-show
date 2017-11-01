let resStr = '<ul>';

export default function parseJson(json){
    Object.keys(json).forEach( k => {
        let val = json[k];
    
        if(typeof val === 'object'){
            resStr += '<li>'+k+'<ul>';
            parseJson(json[k]);
            resStr += '</li>';
        }else{
            resStr += '<li>'+k+':'+val.toString()+'</li>';
        }

    })

    resStr += '</ul>';

    return resStr;
}
