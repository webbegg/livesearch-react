# LiveSearch React

## Instructions

### Download repository

```bash
git clone https://github.com/webbegg/livesearch-react
```

### Install dependencies

```bash
cd livesearch-react
yarn # or npm install
```

### Run in dev mode

```bash
yarn start # or npm start
```

## Run App with example

```bash
cd livesearch-react
yarn # or npm install
yarn build # or npm run build
cd example
yarn start # or npm start
```

## Component Usage

## JSX

```js
<LiveSearchInput
  name='main-search'
  label='Encuentra profesionales de confianza'
  placeholder='Qué necesitas ...'
  getData={searchApi}
  onChange={searchChangeHandle}
/>
```

### Props

- getData: Func (required) - Function that returns results, recive search term as parameter.
- name: String (required) - Name and Id of the html input element
- label: String - Component label
- placeholder: String - Input placeholder
- itemsHeight: Number - default: 42 - Define the result items height
- itemsVisible: Number - default: 6 - Define the result list number of visible items
- itemRenderer: React component - Define a custom result list item component

### Events

- onChange: Func - Function that recives the selected option

## License

MIT © [webbegg](https://github.com/webbegg)
