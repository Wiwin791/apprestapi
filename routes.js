'use strict';

module.exports = function(app) {
    let  jsonku = require('./controller');
    //let  jsnku = require ('./koneksi');

    app.route('/')
        .get(jsonku.index);
        app.route('/tampildata')
        
        app.route('/tampil')
            .get(jsonku.tampilsemuamahasiswa);

        app.route('/tampil/:id')
            .get(jsonku.tampilberdasarkanid);
}