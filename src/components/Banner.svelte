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

        h2 {
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
        <h1>Hay una verdad que puede ser conocida...</h1>
        <h2>¿Percibes<sub>2</sub> ese orden<sub>1</sub> atravesándote<sub>0</sub> en la forma<sub>4</sub> del encuentro<sub>3</sub>? Es lo inefable conociéndose a través de la Creación. 01234 son las llaves de tus ojos. Éstas son las cosas que yo he visto, a donde me llevan las corrientes de todas las formas...</h2>
    </div>
</div>