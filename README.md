# JSON to VCF Converter

## Description
This repository contains a TypeScript application that converts a JSON file containing contact information into a VCF (vCard) file. VCF files are widely used for sharing contact details between devices and applications.

## Features
- Reads a JSON file with contact details.
- Converts the contacts to the vCard format (VCF).
- Saves the generated VCF file locally.

## Prerequisites
Before running the application, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [TypeScript](https://www.typescriptlang.org/) (v4 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/json-to-vcf.git
cd json-to-vcf

Install dependencies:
```
```bash
npm install
```
Compile the TypeScript code:
```bash
tsc
```
Usage
Place your JSON file with contact details in the root of the project directory. Ensure the file is named contacts.txt and follows the expected structure:

```json

{
  "contacts": {
    "list": [
      {
        "first_name": "John",
        "last_name": "Doe",
        "phone_number": "+123456789"
      },
      {
        "first_name": "Jane",
        "last_name": "Smith",
        "phone_number": "+987654321"
      }
    ]
  }
}
```
Run the script:

```bash
node dist/json-to-vcf.js
```
The VCF file (contact.vcf) will be generated in the project directory.

File Structure

json-to-vcf/
├── src/
│   └── json-to-vcf.ts  # Main TypeScript file
├── contacts.txt         # Input JSON file with contact details
├── dist/
│   └── json-to-vcf.js   # Compiled JavaScript file
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md  
# Documentation
Customization
Input File: To change the input file name or path, update the fs.readFile call in json-to-vcf.ts.
Output File: To change the output file name or path, update the outputPath variable in json-to-vcf.ts.
Troubleshooting
JSON Parse Errors: Ensure the JSON file is valid and formatted according to the expected structure.
Missing Dependencies: Run npm install to ensure all required packages are installed.
Contributing
Contributions are welcome! If you have any ideas or suggestions, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.