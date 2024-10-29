
# Calculator App

A simple and responsive calculator application built with React and Vite. This app supports basic arithmetic operations and is designed with intuitive buttons and a clean user interface.

## Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Responsive Layout**: Adjusts to various screen sizes
- **Clear & Delete**: Options to clear all inputs or delete the last digit
- **Decimal Support**: Allows precise decimal calculations

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed. Vite requires Node.js version 12.0.0 or higher.

### Installation

1. **Clone the repository**:

   ```bash
   git clone git@github.com:lucky-ikefe/calculator.git
   cd calculator
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

### Building for Production

To build the app for production, run:

```bash
npm run build
```

This will create a `dist` folder with optimized static files for deployment.

### Previewing the Production Build

To test the production build locally:

```bash
npm run preview
```

## Usage

- **Numbers**: Click the number buttons to enter values.
- **Operations**: Click an operation button to perform addition, subtraction, multiplication, or division.
- **AC (All Clear)**: Resets all inputs and clears previous calculations.
- **DEL**: Deletes the last digit.
- **Equal (=)**: Computes the result based on the current inputs and selected operation.

## Code Structure

- **App.jsx**: Main component that renders the calculator display and buttons.
- **DigitButton.jsx**: Component to handle numeric button inputs.
- **OperationButton.jsx**: Component to handle operation button inputs.
- **Reducer Logic**: Implements logic for calculator operations within the `reducer` function.


---

## Contributing

Feel free to fork this repository and submit pull requests. Please ensure code quality and consistency with the existing structure.

## Credits

This project was recreated based on Youtube tutorial video titled "The Perfect Beginner React Project"  by Web Dev Simplified.
