# __name__

__description__

## Installation

```sh
    npm install __name__
```

## Usage

CLI:

```
    $ node __name__ -h
```

JavaScript API:

```javascript
    var __module__ = require("__short__");

    var __short__ = new __module__(opts);

    __short__.on("complete", function(res) {
        console.log(res);
    });

    __short__.on("error", function(err) {
        console.error(err);
    });

    __short__.on("progress", function(info) {
        console.log(info);
    });

    __short__.__method__(input, function(err, res) {
        if (err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });
```

## Author

@kawanet

## Licence

Copyright 2013 @kawanet

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
