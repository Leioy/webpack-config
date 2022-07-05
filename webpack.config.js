const path = require("path")
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
		    use: [
					'style-loader',
			    'css-loader',
			    'sass-loader',
		    ]
	    },
    ],
  },
}
