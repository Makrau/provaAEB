"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 0, username: 'Zero', password: 'Senha01' },
            { id: 11, username: 'Mr. Nice', password: 'Senha02' },
            { id: 12, username: 'Narco', password: 'Senha03' },
            { id: 13, username: 'Bombasto', password: 'Senha04' },
            { id: 14, username: 'Celeritas', password: 'Senha05' },
            { id: 15, username: 'Magneta', password: 'Senha06' },
            { id: 16, username: 'RubberMan', password: 'Senha07' },
            { id: 17, username: 'Dynama', password: 'Senha08' },
            { id: 18, username: 'Dr IQ', password: 'Senha09' },
            { id: 19, username: 'Magma', password: 'Senha10' },
            { id: 20, username: 'Tornado', password: 'Senha11' }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map