var webpack = require("webpack");

module.exports = {
	//用于调试，告知错误发生地点
	devtool:"source-map",
	
	//入口文件
	entry: __dirname + "/main.js",
	
	//导出文件
	output:{
		//路径
		path: __dirname + "/public",
		//生成bundle.js文件
		filename: "bundle.js"
	},
	
	//此处的意义是找到node_modules/vue/dist/vue.js
	resolve:{
		alias:{
			vue:'vue/dist/vue.js',
		}
	},
	
	module:{
		loaders:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		},{
			test: /\.html$/,
			loader: "html-loader"
		},{
			test: /\.vue$/,
			loader: "vue-loader"
		},{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		},{
			test: /\.scss$/,
			loader: "sass-loader"
		},{
			test: /\.less$/,
			loader: "less-loader"
		},{
			test: /\.(jpg|png|gif|jpeg)$/,
			loader: "url-loader"
		},{
			test: /\.(ttf|svg|woff|eot)$/,
			loader: "file-loader"
		}]
	},
	//配置服务器
	devServer:{
		//服务器文件夹
		contentBase:"./public",
		//实时更新
		inline: true
	},
	plugins: [
		//代码压缩
		//new webpack.optimize.UglifyJsPlugin()
	]
}
