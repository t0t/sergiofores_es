<script>
    import Button from './Button.svelte';
</script>

<style lang="scss">
    @import "../sass/_main.scss";
    /* :global(h1) {
        color: $light_grey;
    } */

    .Banner {
        background-color: $primary;
        padding: $s0;

        @include media(s1) {
            @include padding-top(3);
            @include padding-bottom(3);
        }
        @include media(s2) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        p {
            margin-left: $h1;
            margin-right: 0;
        }
        .BannerText {
            align-self: center;
        }
    }
</style>

<div class="Banner">
    <img src="../img/01234.svg" alt="">
    <div class="BannerText">
        <h1>+0+ 1234 <br> Hermenéutica Universal</h1>
        <p>De momento es sólo otro Work in progress. La verdad es que escribir nunca ha sido mi intención y me cuesta horrores hacerlo, sin embargo no puedo evitarlo. Necesito vaciarme de las cosas que me vienen a la cabeza. </p>
        <p>Aún no sé si finalmente será en formato ebook, en papel o un audiolibro. El tiempo dirá...</p>
        <Button variante={1} text="Leer libro en Google Docs >" url="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" />
    </div>
</div>