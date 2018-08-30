var fs = require('fs');
var path = require('path');

var EXAMPLES_DIR = path.resolve(__dirname, 'examples');

module.exports = {
	/*
	entry: {
		//app: ['./app/main.js', '.lib/index.js'],
		app: './01-hello-world/app.js'
	},
	*/
	entry: fs.readdirSync(EXAMPLES_DIR).reduce(function (entries, dir) {
		if (fs.statSync(path.join(EXAMPLES_DIR, dir)).isDirectory()) {
			if(dir != 'build')
				entries[dir] = path.join(EXAMPLES_DIR, dir, 'app.js');
		}

		return entries
	}, {}),

	output: {
		// path: __dirname + "/build",
		path: path.join(__dirname, "examples/build"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js",
		publicPath: '/'
	},

	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				options: {
					presets: ["react", "env"],
					plugins: [
						"transform-object-rest-spread",
						"transform-class-properties",
						"transform-async-to-generator"
					  ],
                    cacheDirectory: true
                }
			}
		]
	},

	devServer: {
        inline: true,
        host: '127.0.0.1',
        port: 4000,
        historyApiFallback: true,
        contentBase: path.join(__dirname, './examples'),
    }
}