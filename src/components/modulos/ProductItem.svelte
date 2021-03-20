<script>
    export let title;
    export let description;
    export let imagen;
    export let thumb;
    export let referencia;
    export let productos = [];
    export let id;

    let active;
    let current_el_id=2;
    
    function showElementInfo(event) {
        active = true
        current_el_id = event.srcElement.id;
        // console.log(`active es ${active}`)
        // if (active) {
        //     console.log(`current element is ${current_el_id}`)
        //     console.log(`active is ${active}`)
        // } else {
        //     active = !active
        // }
    };
    $: console.log(current_el_id)
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .Obra {
        border-radius: 50%;
        object-fit: cover;
        padding: $h3;

      &:hover {
        cursor: zoom-in;
        background: $grey_1;
      }
      
    }

    figure {
      display: grid;
      justify-items: center;
      position: relative;
    }

    .active + figcaption {
        display: grid;
        transform-style: preserve-3d;
        transform: scale(1);
        transition: 0.25s;
        opacity: 1;
        /* z-index: 100; */
        cursor: revert;
    }

    figcaption {
        z-index: 10000;
        display: none;
        align-items: center;
        justify-items: center;
        padding: $h3;
        transition: 0.2s;
        opacity: 0;
        transform: scale(0.7);
        width: 100%;
        height: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        background-color: $grey_1;
        border-radius: 50%;
        text-align: center;

        > img {
            border-radius: 50%;
            width: $h5;
            height: $h5;
            align-self: end;
            mix-blend-mode: luminosity;
        }
        h3 {
            font-weight: bold;
        }
        p {
            font-style: italic;
            align-self: start;
            text-align: center;
        }
    }
    
</style>

<article>
    <figure>
        {#if active}
        <figcaption>
            <img src="../{thumb}">
            <h3>{title}</h3>
            <p>
                {description} <br>
                <span>Ref: {referencia}</span>
            </p>
        </figcaption>
        {:else}
        no caption
        {/if }
      <img src="../{imagen}" alt="{title}"
      class="Obra" on:click={showElementInfo} {id}>
    </figure>
</article>