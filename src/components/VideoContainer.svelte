<script>
    import Button from './Button.svelte';
</script>
<style lang="scss">
    @import "../sass/_main.scss";
    /* :global(h1) {
        color: $light_grey;
    } */

    video {
        width: 100%;
        object-fit: cover;
    }

    .VideoContainer {
        color: $dark;
        background-color: $light;
        padding: $s0;

        @include media(s2) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            @include padding-top(3);
            @include padding-bottom(3);
        }

        .VideoContainerText {
            align-self: center;
            justify-self: center;
            margin-bottom: $h2;

            @include media(s2) {
                margin-bottom: 0;
                margin-right: $h2;
                max-width: $bp1;
            }
        }
    }
</style>

<div class="VideoContainer">
    <div class="VideoContainerText">
        <p><strong>Nueva obra disponible.</strong></p>
        <p>"Las obras de arte son formas simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia."</p>
        <Button variante={1} text="Chat por Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />
    </div>
    <video 
        poster="/img/cover2.jpg"
        loop
        playsinline
        controls="controls"
    >
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Su navegador no soporta vídeos HTML5.</p>
    </video>
</div>

