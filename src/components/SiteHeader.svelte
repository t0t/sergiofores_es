<style lang="scss">
    @import "../sass/_main.scss";
    header {
        background-image: url("../img/cover1.jpg");
        background-position: right center;
        background-size: cover;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        align-items: start;
        display: grid;
        grid-template-columns: 1fr;
        /* @include padding-top(3);
        @include padding-bottom(3); */
        padding-top: $h1;
        padding-bottom: $h1;
        @include media(s2) {
            /* margin-bottom: 0; */
        }
    }

    h1 {
        color: $light;
        align-self: center;
        margin-left: $h4;
        /* justify-self: center; */
        /* em {
            color: $tertiary;
            font-weight: normal;
        } */
    }
</style>
<header>
    <h1>Sergio Forés
    <i>sentir orden es crear conexión</i></h1>
</header>