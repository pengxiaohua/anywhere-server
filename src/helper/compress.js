const { createGzip, createDeflate } = require('zlib'); // 引入zlib里的两种压缩方式

module.exports = (rs, req, res) => {
    const acceptEncoding = req.headers['accept-encoding'];
    if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
        return rs;
    } else if (acceptEncoding.match(/\bgzip\b/)) {
        res.setHeader('Content-Encoding', 'gzip');
        return rs.pipe(createGzip());
    } else if (acceptEncoding.match(/\bdeplate\b/)) {
        res.setHeader('Content-Encoding', 'deplate');
        return rs.pipe(createDeflate());
    }
};
