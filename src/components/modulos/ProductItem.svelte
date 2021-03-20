<script>
    export let title;
    export let description;
    export let imagen;
    export let referencia;
    export let id;
    let active = false
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .Obra {
        border-radius: 50%;
        &:hover {
            cursor: help;
        }
        
    }

    figure {
      display: grid;
      justify-items: center;
      position: relative;
      margin: $h3 $h2;
    }

    figcaption {
        z-index: 100;
        display: grid;
        place-content: center;
        padding: $h3;
        transition: 0.2s;
        width: 100%;
        height: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        color: $white;
        user-select: none;

        &:hover {
            cursor: pointer;
        }

        user

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
    <figure on:click={() => active = !active}>
        <img 
        src="../{imagen}" alt="{title}" 
        class="Obra" 
        {id}>
        <h2>{active ? '-' : '+'}</h2>
        {#if active}
        <figcaption>
            <h3>{title}</h3><p>{description} <br><span>Ref: {referencia}</span></p>
        </figcaption>
        {/if}
    </figure>
</article>