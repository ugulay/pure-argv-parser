# Pure Argv Parser

An ultra-lightweight command-line argument parser for Node.js with no external dependencies.

## Installation

```bash
npm install benim-argv-parser
```

## Example Usage
```javascript
const parseArgs = require('benim-argv-parser');
const args = parseArgs();
console.log(args);
```

## Supported Formats
- --key=value
- --key value
- -k value (kısa opsiyon)
- --flag (boolean)
- -f (kısa boolean flag)
- command (pozisyonel argümanlar)