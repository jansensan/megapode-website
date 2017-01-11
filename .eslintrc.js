module.exports = {
  "env": {
    "browser": true
  },
  "extends": "eslint:recommended",
  "globals": {
    // vendors
    "_": true,
    "$": true,
    "angular": true,
    "signals": true
  },
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console": 0,
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
