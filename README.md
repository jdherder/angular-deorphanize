# angular-deorphanize

An Angular 1.x filter (contained in a standalone module) to prevent orphaned text. An optional parameter can be used to increase the extent of orphan prevention, the number of additional words to keep at the end of the string from breaking. Note: Use with ng-bind-html as non-breaking spaces are inserted to make this work.

Add the module to your app as a dependency:

    angular
        .module('app', [
            'deorphanizeFilter',
            'app.otherModule'
        ]);
        
Then, in a partial, utilize the filter to prevent an orphaned word in a string:

    <p class="text-large" ng-bind-html="vm.test | deorphanize"></p>
    
Let's assume that vm.test contained a string of 'Angular is a pretty cool framework'. Essentially what would get output becomes: 
    
    'Angular is a pretty cool&nbsp;framework'
    
The insertion of a non-breaking space ensures no line break between the last two words and therefore no orphans.
    
    
Additionally, the 'strength' can be increased with an optional parameter:

    <p ng-bind-html="vm.test | deorphanize:3"></p>
    
So, 'Angular is a pretty cool framework' would now become: 

    'Angular is a&nbsp;pretty&nbsp;cool&nbsp;framework'