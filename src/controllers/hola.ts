export default function hola2 () {
return new Promise((resolve, reject) => {
    console.log('1');
    resolve({
      statusCode:200,
      body:{}
    });
  });
}