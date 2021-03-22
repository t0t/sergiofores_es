<script>
    // import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		{
            href: "../img/0810.jpg",
            text: "'Aquel que sabe contar hasta cuatro puede conocer el universo entero' __Pitágoras"
        },
		{
            href: "../img/01234-7.jpg",
            text: "Del griego hermeneutikos; Hermeneuo (Yo descifro) y Tekné (Arte, técnica, tejer). La Hermenéutica nace como 'el arte o la técnica de explicar, descifrar o interpretar'"
        },
		{
            href: "../img/02234-14.jpg",
            text: "'Lo que la realidad es, es su símbolo; el es, es el símbolo de lo real' __Raimon Panikkar"
        }
	]
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .Slider {
        height: 100vh;
        position: relative;
        overflow: hidden;
        display: grid;
        place-items: center;
        
        .img {
            z-index: 1;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            /* object-fit: cover; */
        }

        .Texto {
            @include type-setting(3);
            position: absolute;
            z-index: 2;
            padding: $h3;
            color: $white;
        }

        .SliderNav {
            @include type-setting(2);
            position: absolute;
            top: 60%;
            z-index: 30;
            color: antiquewhite;
            padding: $h2;
            user-select: none;
            transition: all 0.5s ease-out;
            &:hover {
                cursor: pointer;
                transform: translateX($h2) scale(1.2);
            }
        }
    }
</style>

<section class="Slider">
{#each [carouselPhotos[index]] as slide, index}
    <div class="Texto">
        <blockquote>{@html slide.text}</blockquote>
    </div>
    <div class="img" style="background-image:url({slide.href});">
    </div>
{/each}
<div class="SliderNav" on:click={next}> ⟹ </div>
</section>
