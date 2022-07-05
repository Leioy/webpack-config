const path = require("path")

const loaders = (...loaders) =>[
	'style-loader',
	{
		loader: 'css-loader',
		options: {
			modules: 'icss'
		}
	},
	...loaders
]
module.exports = {
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
	    {
				test: /\.s[ac]ss$/,
		    exclude: /node_modules/,
		    use:loaders({
			    loader:'sass-loader',
			    options: {
				    additionalData: `@import "@/scss-vars";`,
			    }
		    }),
	    },
	    {
				test: /\.less$/,
		    use: loaders({
			    loader:'less-loader',
			    options: {
				    additionalData: `@import "@/less-vars";`,
			    }
		    })
	    }
    ],
  },
}
