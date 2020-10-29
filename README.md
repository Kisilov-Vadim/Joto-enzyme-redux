## Jest Enzyme tests on Joto app with Redux

In this project, I am learning how to write unit tests with Jest Enzyme.

1) npm i -D enzyme jest-enzyme enzyme-adapter-react-16
2) 
  - npm i -D babel-plugin-react-remove-properties
  - npm run eject
  - add configuration in package.json (
    "env": {
      "production": {
        "plugins": [
          ["react-remove-properties", {"properties": ["data-test", "data-foo"]}]
        ]
      }
    },
  )
  - npm run build
