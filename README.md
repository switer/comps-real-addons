# comps-real-addons

Template rendering syntax sugar for [Real](https://github.com/switer/real) using [Comps](https://github.com/switer/comps)

> Noti: Requires version of Real since `1.5.0`

## Usage

Install:
```bash
npm install comps-real-addons --save
```

Set custom tag:
```js
var comps = require('comps')
var compsRealAddons = require('comps-real-addons')

compsRealAddons(comps)
```



## Syntax

* **{%= $expression /%}**

    Will be compiled to real's **r-text** directive:
    ```html
    <span r-text>{$expression}</span>
    ```

* **{%= $expression /%}**

    Will be compiled to real's **r-text** directive with **r-if**:
    ```html
    <span r-if="{$expression}" r-text>{$expression}</span>
    ```


* **{%- $expression /%}**

    Will be compiled to real's **r-html** directive:
    ```html
    <span r-html>{$expression}</span>
    ```
