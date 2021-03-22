<script>
    import {fade} from 'svelte/transition'
    import Button from "./Button.svelte";
	
	const carouselPhotos = [
		{
            href: "../img/bg1.jpg",
            text: "'Aquel que sabe contar hasta cuatro puede conocer el universo entero' <br> __Pitágoras"
        },
		{
            href: "../img/bg2.jpg",
            text: "Del griego hermeneutikos; <strong>Hermeneuo</strong> <i>(Yo descifro)</i> y <strong>Tekné</strong> <i>(Arte, técnica, tejer)</i>. La Hermenéutica nace como 'el arte o la técnica de explicar, descifrar o interpretar'"
        },
		{
            href: "../img/bg3.jpg",
            text: "El fundamento de la Creación radica en un orden arquetípico universal. ...Percibir ese orden conforma un tipo de conexión trascendental."
        }
	]
	let visible=true;
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}
</script>

<style lang="scss">
    @import "../../sass/_global.scss";
    .SliderContainer {
        position: relative;
    }
    .Slider {
        width: 100%;
        overflow: hidden;
        min-height: 400px;
        display: grid;
        place-items: center;
        background-color: $grey_5;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        
        @include media(s2) {
            height: 100vh;
        }

        .Caption {
            align-self: end;
            @include type-setting(1);
            z-index: 2;
            padding-left: $h3;
            padding-right: $h3;
            color: $grey_0;
        }
    }
    .SliderNav {
        align-self: start;
        padding-top: 0;
    }
</style>

<section class="SliderContainer">
{#if visible}
    {#each [carouselPhotos[index]] as slide, index}
        <article class="Slider" transition:fade
        style="
        background-image:url({slide.href});
        ">
            <main class="Caption">
                <blockquote>{@html slide.text}</blockquote>
            </main>
            <nav class="SliderNav">
                <Button variante={0} text="⟹" on:click={next} />
            </nav>
        </article>
    {/each}
{/if}
</section>
