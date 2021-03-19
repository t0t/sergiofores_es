<script>
    let arjes = [0,1,2,3,4]
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

<svg viewBox="0 0 6886 4363">
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
      {arjes[1]}
    </text>
    <text transform="matrix(3 0 0 3 1702 2258)">
      {arjes[0]}
    </text>
    <text transform="matrix(3 0 0 3 4912 2258)">
      {arjes[4]}
    </text>
    <text transform="matrix(3 0 0 3 4156 1508)">
      {arjes[3]}
    </text>
    <text transform="matrix(3 0 0 3 4155 3106)">
      {arjes[2]}
    </text>
  </svg>

<div class="controls">
    <input 
        type="text" 
        placeholder="0,infinitud..." 
        bind:value={arjes[0]}
    >
    <input 
        type="text" 
        placeholder="1, espíritu..." 
        bind:value={arjes[1]}
    >
    <input 
        type="text" 
        placeholder="2, alma..." 
        bind:value={arjes[2]}
    >
    <input 
        type="text" 
        placeholder="3, mente..." 
        bind:value={arjes[3]}
    >
    <input 
        type="text" 
        placeholder="4, cuerpo..." 
        bind:value={arjes[4]}
    >
</div>

<slot></slot>