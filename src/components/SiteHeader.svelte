<style lang="scss">
    @import "../sass/_main.scss";
    header {
        background-image: url("../img/cover1.jpg");
        background-position: right center;
        background-size: cover;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        text-align: center;
        display: grid;
        grid-template-columns: 1fr;
        @include padding-top(3);
        @include padding-bottom(3);
        
        @include media(s2) {
            margin-bottom: 0;
            /* margin-right: $h2; */
        }
    }

    h1 {
        color: $light;
        align-self: center;
        justify-self: center;
        em {
            color: $tertiary;
            font-weight: normal;
        }
    }
</style>
<header>
    <h1>Sergio Forés<br>
    <em>sentir orden es crear conexión</em></h1>
</header>