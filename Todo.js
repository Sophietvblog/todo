
var _data = []

//Add
exports.add = (body) => {
    try {
        const result = JSON.parse(body)
        _data.push(result)
        return { 'code': 201, 'body': 'Created!' }
    } catch (err) {
        return { 'code': 404, 'body': 'Not Found.' }
    }
}

//List 
exports.list = () => {
    return { 'code': 200, 'body': _data }
}

//Remove 
exports.remove = () => {
    if (_data.length > 0) {
        _data.pop()
        return { 'code': 201, 'body': 'Done' };
    } else {
        return { 'code': 404, 'body': 'Not done.' };
    }
}