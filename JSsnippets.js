{
    "Console Log with string description": {
        "prefix": "cls",
        "body": "console.log('$1', $2)",
        "description": "console log with string "
    },
    "Console Log": {
        "prefix": "clv",
        "body": "console.log($1)",
        "description": "console log with variable"
    },
    "Arrow function": {
        "prefix": "afn",
        "body": ["const $1 = ($2) => {", "  $3", "}"],
        "description": "Arrow function"
    },
    "hook": {
        "prefix": "hook",
        "body": ["const [$1, set$2] = React.useState($3)"],
        "description": "hook"
    },
    "Import React": {
        "prefix": "irfc",
        "body": [
            "import React from \"react\"",
            "",
            "const $1 = ($2) => {",
            "",
            " return (",
            "  <$4>",
            "  </>",
            ")",
            "}",
            "export default $3"
        ],
        "description": "Import React Functional component"
    }
}
