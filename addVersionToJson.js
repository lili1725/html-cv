(function() {

    let indexJson = require('./fr-trad.json');

    if(!indexJson) {
        console.error('Missing translation json file');
        indexJson = {};
    }

    require('child_process').exec('git log --pretty=format:\'%h\' -n 1', function(err, stdout) {
        console.log('Last commit hash on this branch is:', stdout);
        indexJson.version = stdout;
        require('fs').writeFile('./index.json', JSON.stringify(indexJson), function(err) {
                if (err) throw err;
                console.log('completed');
            }
        );
    });
})();

