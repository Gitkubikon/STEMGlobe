<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  export let show = false;
  export let onClose: () => void = () => {};

  const closeModal = () => {
    onClose();
  };
</script>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    background: #1a1a2e;
    color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    text-align: left;
    line-height: 1.6;
  }

  .modal::-webkit-scrollbar {
    width: 12px;
  }

  .modal::-webkit-scrollbar-track {
    background: #161629;
    border-radius: 8px;
  }

  .modal::-webkit-scrollbar-thumb {
    background-color: #00d4ff;
    border-radius: 8px;
    border: 3px solid #161629;
  }

  .modal::-webkit-scrollbar-thumb:hover {
    background-color: #1e90ff;
  }

  .modal h2, .modal h3 {
    color: #00d4ff;
    margin-top: 0;
  }

  .modal p {
    color: #cccccc;
    margin-bottom: 1rem;
  }

  .modal ul {
    color: #cccccc;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  .modal ul li {
    margin-bottom: 0.5rem;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #00d4ff;
    cursor: pointer;
  }

  .close-button:hover {
    color: #1e90ff;
  }

  .modal a {
    color: #8a2be2;
    text-decoration: none;
  }

  .modal a:hover {
    color: #ba55d3;
  }

  .fly-in-out {
    transition: all 0.3s ease;
  }

  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a1a2e 25%, #161629 25%, #161629 50%, #1a1a2e 50%, #1a1a2e 75%, #161629 75%, #161629 100%);
    background-size: 56.57px 56.57px;
    opacity: 0.2;
    z-index: -1;
  }

  .section {
    margin-bottom: 1.5rem;
  }

  .section h3 {
    margin-bottom: 0.5rem;
  }

  .connect {
    display: flex;
    gap: 1rem;
  }

  .connect a {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: #00d4ff;
    color: #1a1a2e;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .connect a:hover {
    background-color: #1e90ff;
    color: #ffffff;
  }
</style>

{#if show}
  <div class="modal-overlay" on:click="{closeModal}" transition:fade>
    <div class="modal fly-in-out" on:click|stopPropagation transition:fly={{ y: 20, duration: 500 }}>
      <div class="modal-background"></div>
      <button class="close-button" on:click="{closeModal}">&times;</button>
      <h2>University STEM Map Project</h2>
      <div class="section">
        <p>
          This project visualizes estimated student counts and the percentage of female STEM graduates for universities worldwide. Built with Svelte, TypeScript, and Vite, it leverages the ArcGIS API for JavaScript to render a detailed and interactive map. The primary focus of this project is to provide insightful visualizations while maintaining optimal performance even with large datasets.
        </p>
      </div>
      <div class="section">
        <h3>Data Gathering</h3>
        <p>
          The data for this project is sourced from 
          <a href="https://ourworldindata.org/grapher/share-graduates-stem-female" target="_blank">Our World in Data</a>. This dataset includes the share of female STEM graduates over time for various countries. For countries missing data, estimations were made based on a machine learning model trained on known data. The model considers the following factors:
        </p>
        <ul>
          <li>Gross Domestic Product (GDP)</li>
          <li>Education Expenditure</li>
          <li>Internet Penetration Rate</li>
          <li>Urbanization Rate</li>
          <li>Gender Parity Index in Education</li>
        </ul>
        <p>
          The machine learning model was trained using a dataset of countries with complete information on these factors. It uses regression techniques to estimate the percentage of female STEM graduates for countries with missing data. This approach ensures a comprehensive dataset for visualizing global trends in STEM education.
        </p>
      </div>
      <div class="section">
        <h3>Key Features</h3>
        <ul>
          <li><strong>Data Loading:</strong> Efficient loading and processing of data from CSV files.</li>
          <li><strong>Hexagon Visualization:</strong> Utilizes hexagons to represent data points, with size and color denoting different metrics.</li>
          <li><strong>Clustering:</strong> Implements spatial indexing to cluster nearby data points, improving rendering performance.</li>
          <li><strong>Batch Processing:</strong> Adds graphics to the map in batches to prevent main thread blocking.</li>
          <li><strong>Optimized Rendering:</strong> Simplifies symbols and geometries to reduce rendering overhead.</li>
        </ul>
      </div>
      <div class="section">
        <h3>Connect with Me</h3>
        <p>
          For more information about this project or to connect with me, visit my profiles:
        </p>
        <div class="connect">
          <a href="https://github.com/Gitkubikon" target="_blank">GitHub: Gitkubikon</a>
          <a href="https://www.linkedin.com/in/nikita-friesen/" target="_blank">LinkedIn: Nikita Friesen</a>
        </div>
      </div>
    </div>
  </div>
{/if}
