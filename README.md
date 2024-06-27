# Svelte + TypeScript + Vite: University STEM Map

This project visualizes estimated student counts and female STEM graduates' percentages for universities worldwide using Svelte, TypeScript, and Vite. The map is rendered using ArcGIS API for JavaScript, with performance optimizations to handle a large number of data points efficiently.

## Overview

The map displays hexagons representing university data points, with hexagon layers visualizing the data attributes. The hexagon size and color are determined by the estimated student count and the percentage of female STEM graduates, respectively.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Technical Considerations

This template provides a minimal setup for Vite + TypeScript + Svelte, optimized for developer experience with features like HMR and intellisense. It is a good starting point for beginners and can be easily migrated to SvelteKit if extended capabilities are required.

## Functionality

### Data Loading

Data is loaded from a CSV file (`MapData.csv`) containing information about universities, including latitude, longitude, estimated student count, and percentage of female STEM graduates. The data is processed and visualized on the map using hexagon layers.

### Hexagon Generation

Hexagons are generated for each data point to visualize the data. Each hexagon consists of multiple layers with decreasing elevation to create a 3D effect. The hexagon size represents the estimated student count, and the color represents the percentage of female STEM graduates.

### Clustering for Performance

To handle a large number of data points, a clustering algorithm is implemented using the `RBush` spatial index library. Nearby data points are grouped into clusters, and a single hexagon is created for each cluster. This reduces the number of hexagons rendered and improves performance.

### Performance Improvements

Several performance optimizations have been applied:

1. **Batch Processing**: Graphics are added to the map in batches to avoid blocking the main thread.
2. **Spatial Indexing**: `RBush` spatial index is used to quickly find and cluster nearby data points.
3. **Simplified Geometries**: Hexagon geometries and symbols are simplified to reduce rendering overhead.
4. **Level of Detail (LOD)**: Implementing LOD to dynamically reduce the number of hexagons based on zoom level (potential future improvement).

## Data Gathering

The data used in this project is based on information provided by [Our World in Data](https://ourworldindata.org/grapher/share-graduates-stem-female). The original dataset includes the share of female STEM graduates over time for various countries.

### Estimation Process

To create a comprehensive dataset for this project, the following steps were taken:

1. **Data Source**: The base data was obtained from Our World in Data, focusing on the share of female STEM graduates.
2. **Time Factor Removal**: The time factor was removed to provide a static estimation.
3. **Estimations for Missing Countries**: For countries missing from the dataset, estimations were made based on five factors:
   - Gross Domestic Product (GDP)
   - Education expenditure
   - Internet penetration rate
   - Urbanization rate
   - Gender parity index in education
4. **Normalization and Integration**: The data was normalized and integrated into a single CSV file (`MapData.csv`) used in the project.

## Code Structure

The main code files include:

- `main.ts`: Entry point of the application, initializing the Svelte app.
- `App.svelte`: Main Svelte component, setting up the map container.
- `map.ts`: Contains the map initialization and data processing logic.
- `store.ts`: Example of an external store for state management.

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository:

```sh
git clone <repository_url>
cd <repository_directory>
```

2. Install dependencies:

```sh
npm install
```

3. Run the development server:

```sh
npm run dev
```

4. Open the project in your browser at `http://localhost:3000`.

## Contribution

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.