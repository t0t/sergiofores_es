<script>
    import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		'../img/0810.jpg',
		'../img/01234-7.jpg',
		'../img/0877.jpg',
		'../img/02234-14.jpg'
	]
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .Slider {
        height: 71vh;
        position: relative;
        overflow: hidden;
        
        img {
            position: absolute;
            top: $h2;
            z-index: 1;
            object-fit: cover;
        }

        .Texto {
            @include type-setting(2);
            position: absolute;
            z-index: 2;
            padding: $h4 $h4 $h4 $h4;
            margin-left: $h6;
            color: $grey_1;
            background-color: $grey_4;
        }

        .SliderNav {
            @include type-setting(2);
            position: absolute;
            top: 151px;
            right: 10%;
            z-index: 30;
            color: antiquewhite;
            padding: $h2;
            &:hover {
                cursor: pointer;
                text-indent: $h0;
            }
        }
    }
</style>

<section class="Slider">
    <div class="Texto">
        <h2>El fundamento de la Creación radica en un orden arquetípico universal. Percibir ese orden conforma la conexión trascendental.</h2>
    </div>
    <div class="SliderNav" on:click={next}>
        ⟹
    </div>
    
    {#each [carouselPhotos[index]] as src (index)}
        <img transition:fade {src} alt="" />	
    {/each}
    
</section>