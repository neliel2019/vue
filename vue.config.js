module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    devServer: {
        open: true,
        host: 'localhost',
        port: '8081',
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000', // 要请求的地址
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^': ''
                }
            }
        }
    }
};