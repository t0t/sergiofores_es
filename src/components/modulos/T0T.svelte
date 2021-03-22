<script>
    let items = [0]
    let value = ""
    const addItem = () => {
      items = [...items, value]
      value = ""
    }
</script>

<style lang="scss">
    @import "../../sass/_global.scss";
    text {
        fill: $black;
        font-family: $secondary_font;
        @include type-setting(4);
        font-weight: bold;
    }
    circle {
        fill: none;
        stroke: $quaternary;
        stroke-width: 4;
    }
    .controls {
        padding: 4px;
        border: 1px dotted $grey_0;
    }
</style>

<svg viewBox="0 0 6886 4363" id="lienzo">
    <circle 
    cx="102436" cy="13939" r="550" 
    transform="matrix(2.90714 0 0 2.90721 -294363 -38341)"/>
    <circle 
    cx="102436" cy="13939" r="550" 
    transform="matrix(1.45283 0 0 1.45285 -144580 -18069)"/>
    <circle 
    cx="102436" cy="13939" r="550" 
    transform="matrix(1.45283 0 0 1.45285 -146179 -18118)"/>
    <!-- matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() ) -->
    <text transform="matrix(3 0 0 3 3359 2258)">
      {items[1]}
    </text>
    <text transform="matrix(3 0 0 3 1702 2258)">
      {items[0]}
    </text>
    <text transform="matrix(3 0 0 3 4912 2258)">
      {items[4]}
    </text>
    <text transform="matrix(3 0 0 3 4156 1508)">
      {items[3]}
    </text>
    <text transform="matrix(3 0 0 3 4155 3106)">
      {items[2]}
    </text>
  </svg>

<div class="controls">
    <input 
        type="text" 
        placeholder="0,infinitud..." 
        bind:value
    >
    <button on:click={addItem}>Add</button>
</div>

<slot></slot>