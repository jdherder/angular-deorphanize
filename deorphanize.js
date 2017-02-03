(function () {
  angular
    .module('deorphanizeFilter', [])
    .filter('deorphanize', function () {
      return function (input, n) {

        if (!input) {
          return input;
        }

        var loops = parseInt(n) || 1;
        var deorphanize = input;
        var tags = input.match(/<(.|\n)*?>/g) || [];
        var placeholders;

        for (var h = 0; h < tags.length; h++) {
          deorphanize = deorphanize.replace(tags[h], '###' + h + '###');
        }

        for (var i = 0; i < loops; i++) {
          deorphanize = deorphanize.replace(/\s(?=[^\s]*$)/, '&nbsp;');
        }

        placeholders = deorphanize.match(/###\d###/g) || [];

        for (var j = 0; j < placeholders.length; j++) {
          deorphanize = deorphanize.replace(placeholders[j], tags[j]);
        }

        return deorphanize;
      };
    });
})();