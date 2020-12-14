<script>
    export let text = "Name";
    export let url = "url";
    export let variante = 0;
    let modificador = [
        "Default",
        "Inverse"
    ];
</script>

<style lang="scss">
    @import "../sass/_main.scss";
    a {
        color: $light_grey;
        padding: $h1;
        border: 1px solid $light_grey;
        &:hover {
            color: $dark;
            background-color: $light_grey;
            text-decoration: none;
        }
    }
    button { 
        border: none;
    }
    .Inverse {
        color: $primary;
        background-color: $primary;
        @include margin-top(1);
    }
</style>

<button class="{modificador[variante]}">
    <a href="{url}" target="_blank">{text}</a>
</button>