export default function parseJson(json){

    let resStr = '<ul>';

    function doParse(json){
        Object.keys(json).forEach( k => {
            let val = json[k];
        
            if(typeof val === 'object'){
                resStr += '<li>'+k+'<ul>';
                doParse(json[k]);
                resStr += '</li>';
            }else{
                resStr += '<li>'+k+':'+val.toString()+'</li>';
            }

        })

        resStr += '</ul>';

        return resStr;
    }

    return doParse(json);

}   