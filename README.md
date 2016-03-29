# url-utils

## addQueryHashToURL
    addQueryHashToURL('asdfasdf', {
        '哇哈哈': 'asdf'
    }, 12312)
    // "asdfasdf?&%E5%93%87%E5%93%88%E5%93%88=asdf#12312"
## getParamObj
    getParamObj('asdfasdf?asdfae=123&asdfae=1233&bbb=aaa') // {bbb:'aaa',asdfae:'1233'}
## getParamsObj
    getParamsObj('asdfasdf?asdfae=123&asdfae=1233&bbb=aaa') // {bbb:'aaa',asdfae:['123','1233']}
## getHash
    getHash('asdfasdf#24') // "24"
