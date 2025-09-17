# Pure Argv Parser

An ultra-lightweight command-line argument parser for Node.js with no external dependencies.

## Installation

```bash
npm install pure-argv-parser
```

## Example Usage
```javascript
const parseArgs = require('pure-argv-parser');
const args = parseArgs();
console.log(args);
```

## Supported Formats
- --key=value
- --key value
- -k value (short option)
- --flag (boolean)
- -f (short boolean flag)
- command (positional args)