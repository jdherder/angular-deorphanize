(function() {
    angular
        .module('deophanizeFilter', [])
        .filter('deophanize', function () {
            return function (input, n) {

                if (!input) {
                    return input;
                }

                var loops = parseInt(n) || 1;
                var deophanize = input;
                var tags = input.match(/<(.|\n)*?>/g);
                var placeholders;

                for (var h = 0; h < tags.length; h++) {
                    deophanize = deophanize.replace(tags[h], '###' + h + '###');
                }

                for (var i = 0; i < loops; i++) {
                    deophanize = deophanize.replace(/\s(?=[^\s]*$)/, '&nbsp;');
                }

                placeholders = deophanize.match(/###\d###/g);

                for (var j = 0; j < placeholders.length; j++) {
                    deophanize = deophanize.replace(placeholders[j], tags[j]);
                }

                return deophanize;
            }
        });
})();