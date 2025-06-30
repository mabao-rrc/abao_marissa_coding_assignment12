# abao_marissa_ui_garden
## A React + TypeScript Web Component Library featuring reusable components like Button, Card, Label, Text, Table, Dropdown, RadioButton, Img, HeroImage, and more. Includes Storybook for interactive documentation and testing.

### 1. Getting Started
### Clone this repository
git clone https://github.com/your-username/abao_marissa_ui_garden.git
cd abao_marissa_ui_garden

### 2. Install dependencies
npm install

### 3. Run Storybook locally
npm run storybook
Open your browser at http://localhost:6006

### 4. Run tests
npm run test
This runs Jest tests for all components.

## Docker Production Build
### 5. Build Docker image
docker build -t abao-marissa-ui-garden-prod -f Dockerfile.prod .

### 6. Run Docker container
docker run -p 8080:80 abao-marissa-ui-garden-prod
Open your browser at http://localhost:8080 to view the Storybook build served by Nginx.

## Project Structure
.storybook
dist
node_modules
public
src/
    components/
        Button
        Card
        Dropdown
        HeroImage
        Img
        RadioButton
        SmartRating
        Table
        Text
        index.ts
    stories
    App.css
    App.test.tsx
    App.tsx
    index.ts
    index.tsx
    logo.svg
    reportWebVitals.ts
    setupTests.ts
storybook-static
.gitignore
babel.config.js
Dockerfile.prod
global.d.ts
jest.config.js
package-lock.json
package.json
README.md
rollup.config.js
setupTests.ts
tsconfig.json
vitest.config.ts
vitest.shims.d.ts

## Technologies Used
### React + TypeScript
### Styled-components (for styling)
### Storybook (component documentation)
### Jest + React Testing Library (unit testing)
### Rollup (bundling)
### Docker + Nginx (production deployment)

## Notes
### All components support:

A default and disabled state

Customization via props

Accessibility with labels and test IDs

## All components have:

At least 2 tests: visible check and disabled style check