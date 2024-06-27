<script lang="ts">
  import Legend from './lib/Legend.svelte';
  import Map from './lib/Map.svelte';
  import Popup from './lib/Popup.svelte';
  import { writable } from 'svelte/store';
  import * as d3 from "d3";

  let showPopup = writable(false);
  const colorScale = d3.scaleSequential(d3.interpolateCool).domain([0, 100]);

  const togglePopup = () => {
    showPopup.update(n => !n);
  };
</script>

<main>
  <div class="controls">
    <Legend {colorScale} />
    <button on:click="{togglePopup}">About this Project</button>
  </div>
  <Map />
  <Popup bind:show={$showPopup} onClose="{() => showPopup.set(false)}" />
</main>

<style>
  main {
    position: relative;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .controls {
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  button {
    padding: .6rem;
    background-color: rgba(26, 26, 46, 0.9);
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
    width: 272px; /* Match width of the legend */
  }

  button:hover {
    background-color: #00d4ff;
    color: #1a1a2e;
  }
</style>
