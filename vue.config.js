// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// module.exports = {
//   css: {
//     loaderOptions:{
//       sass:{
//         additionalData: '@import "@/assets/variables/variables.scss";'
//       }
//     }
//   }
// };

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/styles/variables.scss";`
            },
        },
    }
};

// http://localhost:5000/api/shop/products