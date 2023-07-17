# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Design Decisions

### State Management
For this project I used React Context as the application is not complex enough to justify the use case for Redux or similar project. I would have gone with Redux Toolkit or React query if it was calling api frequently. 

For the purpose of this project I am maintaining the list of DataSources in State. The data sources are added as default state in the context - ideally it should be done through an api call. And when the User apply a data source to map and field is set to true and that layer is displayed in layer list. For the purpose of this project this approach works well but as the application will grow we might need to improve it by splitting it.
### CSS in JS
For styling I used Material UI. The UI is simple and didn't require much customization. I have used `style`` and `sx`` props of Material UI components when required. This is not the best approach but worked in this context. Ideally the styles should be applied using styled components through `styled` from '@mui/material/styles'. Also we could have created headless components first and then applied styles in a complex project. 


### Project Structure
I have kept the structure minimal. The components folder contain the UI components. The structure is flat but ideally there could have been nesting to represent the relation between components. For example: DataSourceMenu -> DataSourceList -> DataSourceListItem etc. 

Views folder contain the pages, layout that stich the components together and create a page.