<script>
    import { flip } from "svelte/animate";
    import Button from "../Button.svelte";

    export let slides;
    export let speed = 1000;
    
    const rotateLeft = () => {
        const transitioningSlide = slides[slides.length-1]
        document.getElementById(transitioningSlide.id).style.opacity = 0;
        slides = [slides[slides.length-1], ...slides.slice(0, slides.length-1)]
        setTimeout(() => document.getElementById(transitioningSlide.id).style.opacity = 1, speed);
    }
    
    const rotateRight = () => {
        const transitioningSlide = slides[0]
        document.getElementById(transitioningSlide.id).style.opacity = 0;
        slides = [...slides.slice(1, slides.length), slides[0]]
        setTimeout(() => document.getElementById(transitioningSlide.id).style.opacity = 1, speed);
    }
</script>

<style lang="scss">
    @import "../../../sass/_global.scss";
    
    .SliderContainer {
        position: relative;
        background-color: $grey_5;
        width: 100%;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
    .SlidesGroup {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        mask: linear-gradient(to right,transparent, black 40%,black 70%,transparent);
        > figure {
        }
    }
    .Slide {
        width: 500px;
        height: 600px;
        position: relative;
        display: grid;
        place-content: center;
        background-size: cover;
        background-position: center;

        .Caption {
            text-align: center;
            padding-left: $h3;
            padding-right: $h3;
        }
    }
    .SliderNav {
        position: absolute;
        top: 0;
        right: 0;
        width: 240px;
        display: flex;
        flex-wrap: nowrap;
        // align-items: center;
        justify-content: space-between;
        padding-top: 0;
        padding: 0 $h3;
    }
</style>

<div class="SliderContainer">
    <div class="SlidesGroup">
        {#each slides as slide (slide.id)}
    
        <div class="Slide"
        style="background-image: url({slide.href});"
        animate:flip={{duration: speed}}>
            <div class="Caption">{@html slide.text}</div>
            <!-- <img src={slide.href} alt={slide.id} id={slide.id}> -->
        </div>
        
        {/each}
    </div>
    <nav class="SliderNav">
        <Button variante={0} text="Left" 
        on:click={rotateLeft} />
        <Button variante={0} text="Right" 
        on:click={rotateRight} />
    </nav>
</div>