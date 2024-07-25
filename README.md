# base256_lib
Base 256 encoder/decoder

## Installation

```bash
$ npm i base256_lib
```

## Usage

From uint8 array to base256 string:

```javascript
import {uint82base256} from "base256_lib";
...
const str = "Hello, World!";
const base256 = uint82base256(uint8_array);

console.log(base256); // should prints: "ĨŅŌŌŏČĀķŏŒŌńā"
```

From base256 string to uint8 array:
```javascript
import {base2562uint8} from "base256_lib";
...
const base256_str = "ĨŅŌŌŏČĀķŏŒŌńā";
const uint8_array = base2562uint8(base256_str);

console.log(uint8_array.toString()); // should prints "Hello, World!"
```

## Charset

Charset used :
```
àáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉ=_-`~|[]{}ƞ?,()^*$%!#.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

## License
[MIT](LICENSE)