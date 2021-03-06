const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"/LeiYan.github.io/",
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
        Object.assign(definitions[0]['process.env'], {
          NODE_HOST: '"http://localhost:8888"',
        });
        return definitions;
    })
  },
  chainWebpack: config =>{
    config.plugin('html')
      .tap(args => {
        args[0].title = "欢迎来到这里!";
        return args;
      })
  }
})
