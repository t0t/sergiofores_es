<style lang="scss">
    @import "../sass/_main.scss";
    header {
        height: 20vh;
        background-image: url("../img/cover1.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: $dark_grey;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr;
        @include padding-top(3);
        @include padding-bottom(3);
        /* mix-blend-mode: soft-light; */
    }

    h1 {
        color: $light;
        align-self: center;
        justify-self: center;
        span {
            font-weight: normal;
        }
    }
</style>
<header>
    <h1>Sergio Forés · <span>Arte y Metafísica</span></h1>
</header>