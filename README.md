# react-dot-loader

> React Dot Loader Component 

[![NPM](https://img.shields.io/npm/v/react-dot-loader.svg)](https://www.npmjs.com/package/react-dot-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dot-loader
```

## Usage

```jsx
import React, { Component } from 'react'

import DotLoader from 'react-dot-loader'
import 'react-dot-loader/dist/index.css'

class Example extends Component {
  render() {
    return <DotLoader type={5}/> // type range - 0 to 49
  }
}
```

## Properties

| Propertie    | Description                          |
| ------------ | -------------------------------------|
|    type      | Type of Loader you want (Default -4) |



## Preview of all dot loaders with type 



<img src="./dot-loader.gif" alt="Result" width="1000" height="700" />



## License


MIT © [surajraccha](https://github.com/surajraccha)
