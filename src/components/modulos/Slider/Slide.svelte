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
        height: 600px;
        overflow: hidden;
    }
    .SlidesGroup {
        display: grid;
        grid-column: span 1;
        grid-template-columns: repeat(4,1fr);
        -webkit-mask: linear-gradient(to right,transparent, black 40%,black 70%,transparent);
        > figure {
        }
    }
    .Slide {
        height: 600px;
        display: grid;
        place-items: center;

        img {
            position: absolute;
            top: 0;
            bottom: 0;
            object-fit: cover;
            // height: -webkit-fill-available;
            // left: 0;
            z-index:-1;
        }
        .Caption {
            p {
                text-align: center;
                padding-left: $h3;
                padding-right: $h3;
            }
        }
    }
    .SliderNav {
        position: absolute;
        top: 36%;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding-top: 0;
        padding: 0 $h3;
    }
</style>

<div class="SliderContainer">
    <div class="SlidesGroup">
        {#each slides as slide (slide.id)}
    
        <figure class="Slide"
            animate:flip={{duration: speed}}>
            <img src={slide.href} alt={slide.id} id={slide.id}>
            <caption class="Caption"><p>{@html slide.text}</p></caption>
        </figure>
        
        {/each}
    </div>
    <nav class="SliderNav">
        <Button variante={0} text="Left" 
        on:click={rotateLeft} />
        <Button variante={0} text="Right" 
        on:click={rotateRight} />
    </nav>
</div>