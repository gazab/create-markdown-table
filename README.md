<p align="center">
  <a href="https://github.com/gazab/create-markdown-table/actions"><img alt="create-markdown-table status" src="https://github.com/gazab/create-markdown-table/workflows/build-test/badge.svg"></a>
</p>

# Create Markdown Table Action

## Usage

Basic example:
```yaml
steps:
  - uses: gazab/create-markdown-table@v1
    id: create_table
    with:
      file: ./table-data.json
  - run: echo ${{ steps.create_table.outputs.table }}

```
## Inputs

#### `file`
**(Required)** Path to the JSON/YAML file to convert to a Markdown table

## Outputs

#### `table`
The created Markdown table
## Development

Install the dependencies  
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:  
```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

