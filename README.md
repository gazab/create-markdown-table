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

With specific columns specified
```yaml
steps:
  - uses: gazab/create-markdown-table@v1
    id: create_table
    with:
      file: ./table-data.json
      columns: '[ "Id", "Name" ]'
  - run: echo ${{ steps.create_table.outputs.table }}

```
## Inputs

#### `file`
**(Required)** Path to the JSON/YAML file to convert to a Markdown table

#### `columns`
JSON formatted list of columns and their order you want the table to include

#### `capitalize`
Capitalize the first letter of each column name in the header. Default: `true`.

## Outputs

#### `table`
The created Markdown table
