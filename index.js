export const handler = async (event, context) => {

    console.log(event)
    console.log(context)

    return { statusCode: 200, body: JSON.stringify('Hello World!') }
}