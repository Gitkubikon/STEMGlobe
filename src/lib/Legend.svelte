<script lang="ts">
    export let colorScale;
  </script>
  
  <style>
    .legend-container {
      background-color: rgba(26, 26, 46, 0.9); /* Match the dark theme background */
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      font-size: 0.9rem;
      color: #ffffff;
      width: 240px;
    }
  
    .legend-title {
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #00d4ff; /* Match the neon blue color */
    }
  
    .legend-item {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }
  
    .color-box {
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
      border-radius: 4px;
    }
  
    .hexagon-size {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
    }
  
    .hexagon-example {
      width: 20px;
      height: 20px;
      background-color: #00d4ff;
      clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
      margin-right: 0.5rem;
    }
  </style>
  
  <div class="legend-container">
    <div class="legend-title">Legend</div>
    <div class="legend-item">
      <div class="color-box" style="background-color: {colorScale(0)};"></div>
      <div>0% Female STEM Graduates</div>
    </div>
    <div class="legend-item">
      <div class="color-box" style="background-color: {colorScale(50)};"></div>
      <div>50% Female STEM Graduates</div>
    </div>
    <div class="legend-item">
      <div class="color-box" style="background-color: {colorScale(100)};"></div>
      <div>100% Female STEM Graduates</div>
    </div>
    <div class="hexagon-size">
      <div class="hexagon-example"></div>
      <div>Estimated Student Count</div>
    </div>
  </div>
  