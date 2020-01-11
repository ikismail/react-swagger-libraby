
# React Swagger Library - SwaggerUI 

Developed an **API Manager** to manage all the swagger files in one place usig React and Swagger-UI.

**Live Demo** : [React Swagger Library](http://ikismail-reactsl.surge.sh/)
  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Configurations:
1. Create & copy your swagger files and move it under `/public/assets/data/` directory.
2. Add the file entry to `environment.js`

    ```
        export const FilePath = [
            {
                id: 1,
                name: "<YOUR FILE TITLE>",
                url: `${process.env.PUBLIC_URL}/assets/data/<YOUR_SWAGGER_FILE>`
            }
        ]
    ```
    ### **Note: It accepts both JSON & YAML files.**



### Screenshots:
![Alt Text](https://i.ibb.co/tpmYLZm/Screenshot-2020-01-11-at-10-58-02-AM.png "Home Page")
