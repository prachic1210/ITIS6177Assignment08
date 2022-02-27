exports.handler = async (event, context,callback) => {
    let keyword = event.keyword;
    let greeting = 'Prachi says '+ keyword;
    
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(greeting)
    });
    
};
