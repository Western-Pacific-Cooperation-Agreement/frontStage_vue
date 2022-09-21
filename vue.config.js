const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
 
})



 
// // const { defineConfig } = require('@vue/cli-service')
// //在vue中使用proxy进行跨域的原理是：
// //将域名发送给本地的服务器（启动vue项目的服务,loclahost:8080），
// //再由本地的服务器去请求真正的服务器。
// module.exports = {
//   devServer:{
//     proxy:{
//       '/':{//表示拦截以/api开头的请求路径
//         target:'http://localhost:18888',
//         changOrigin: true,//是否开启跨域
//         pathRewrite:{
//           '^/api':'' //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
//         }
//       }
//     }
//   }
// }
