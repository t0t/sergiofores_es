<style lang="scss">
    @import "../sass/_main.scss";
    header {
        height: 100vh;
        background-image: url("../img/cover1.jpg");
        background-position: right 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: $dark_grey;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr;
        @include padding-top(3);
        @include padding-bottom(3);
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
    <h1>Sergio Forés<br>
    <span>sentir orden es crear conexión</span></h1>
</header>