class XPlugin {
	constructor(options = {}) {
		this.options = options
	}
	
	apply(compiler) {
		// Webpack 注册 plugin 时会执行它的 apply 方法
		const pluginName = XPlugin.name
		
		const { RawSource } = compiler.webpack.sources
		
		// 在初始化之前注册一个事件
		compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
			compilation.hooks.processAssets.tap(pluginName, (assets, callback) => {
				const keys = Object.keys(assets)
				const jsFileArray = keys.filter(key => !!key.endsWith('.js'))
				const ouputContent = `
        <html>
            <head>
                <meta charset="utf-8" />
                <title>Webpack App</title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                ${jsFileArray.map(jsFile => `<script defer="defer" src="${jsFile}"></script>`).join('')}
            </head>
            <body></body>
        </html>
      `
				compilation.emitAsset("app.html", new RawSource(ouputContent)) // 添加一个新的 asset
			})
		})
	}
}

module.exports = { XPlugin }
