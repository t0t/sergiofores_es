<script>
    import Button from './Button.svelte';
</script>
<style lang="scss">
    @import "../sass/_main.scss";
    /* :global(h1) {
        color: $light_grey;
    } */

    .ClaimYoutube {
        background-color: $dark_grey;
        padding: $s0;

        @include media(s2) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            @include padding-top(3);
            @include padding-bottom(3);
        }

        .ClaimYoutubeText {
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

<div class="ClaimYoutube">
    <div class="ClaimYoutubeText">
        <p>Éste es mi último video en el que vuelco reflexiones acerca de la metafísica, el arte y el símbolo desde una  perspectiva hermenéutica arquetípica clásica. (+0+1234.)</p>
        <Button variante={1} text="Mi canal de Youtube" url="https://www.youtube.com/channel/UC9C6HRn2RDG3bmWC4Soxtcw" />
    </div>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/7BtDRQuPjDg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>