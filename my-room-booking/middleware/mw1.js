export default function(context){
    console.log("THIS IS MW1 in middleware")
    console.log(context);

    // context.error({
    //     statusCode: 404,
    //     message: 'cannot find page'
    // })
}

// context.params
// context.query
// context.store
// context.error()
// context.query.msg