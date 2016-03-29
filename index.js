function addQueryHashToURL(url, paramObj, hash) {
    var queryIndex = url.indexOf('?');
    var hashIndex = url.indexOf('#');
    if (paramObj) {
        if (queryIndex !== -1) {
            if (hashIndex > 0 && hashIndex < queryIndex) {
                url = url.replace('#', '?' + buildQueryString(paramObj) + '#')
            } else {
                url = url.replace(/\?([^#]*)/, '?$1' + buildQueryString(paramObj))
            }
        } else {
            if (hashIndex > 0) {
                url = url.replace('#', '?' + buildQueryString(paramObj) + '#')
            } else {
                url += '?' + buildQueryString(paramObj);
            }
        }
    }
    if (hash) {
        if (hashIndex !== -1) {
            url = url.replace(/#.*/, '#' + hash)
        } else {
            url += '#' + hash;
        }
    }
    return url;
}

function buildQueryString(param) {
    if (typeof(param) == 'object') {
        return Object.keys(param).map(function(key){
            return '&' + encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
        }).join('');
    } else if (param) {
        return ('&' + param + "");
    }
}

function getParamObj(url) {
    var queryString = url.split('?')[1];
    if(queryString &&
        (url.indexOf('#')==-1 || url.indexOf('#') >= url.indexOf('?'))
    ){
        var res = {};
        queryString.split('&').forEach(function(each){
            var kv = each.split('=');
            if(!res[kv[0]])
                res[kv[0]] = kv[1];
        })
        return res;
    }
}

function getParamsObj(url) {
    var queryString = url.split('?')[1];
    if(queryString &&
        (url.indexOf('#')==-1 || url.indexOf('#') >= url.indexOf('?'))
    ){
        var res = {};
        queryString.split('&').forEach(function(each){
            var kv = each.split('=');
            if(res[kv[0]]){
                if(typeof(res[kv[0]]) == 'string'){
                    res[kv[0]] = [res[kv[0]],kv[1]]
                }else{
                    res[kv[0]].push(kv[1])
                }
            }else{
                res[kv[0]]=kv[1];
            }
        })
        return res;
    }
}

function getHash(url) {
    return url.split('#')[1]
}
module.exports = {
    addQueryHashToURL: addQueryHashToURL,
    getHash: getHash,
    getParamObj:getParamObj,
    getParamsObj:getParamsObj
}
