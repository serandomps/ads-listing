var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');

dust.loadSource(dust.compile(require('./template'), 'advertisements-find'));

module.exports = function (ctx, sandbox, options, done) {
    dust.render('advertisements-find', options, function (err, out) {
        sandbox.append(out);
        sandbox.on('click', '.edit', function (e) {
            serand.direct($(this).closest('.thumbnail').attr('href') + '/edit');
            return false;
        });
        done(null, function () {
            $('.advertisements-find', sandbox).remove();
        });
    });
};
