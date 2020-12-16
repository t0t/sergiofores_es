<script>
    export let text = "Name";
    export let url = "url";
    export let variante = 0;
    let modificador = [
        "Light",
        "Dark",
        "Colored"
    ];
</script>

<style lang="scss">
    @import "../sass/_main.scss";
    a {
        padding: $h1;
        text-decoration: none;
        border-width: 1px;
        border-style: solid;
    }

    .Dark {
        color: $secondary;
        border-color: $quaternary;
        &:hover {
            color: $light;
            background-color: $quaternary;
            border-color: $quaternary;
        }
    }
    .Light {
        color: $primary;
        border-color: $primary;
        &:hover {
            color: $light;
            background-color: $primary;
            border-color: $primary;
        }
    }
    .Colored {
        color: $light_grey;
        border-color: $light_grey;
        &:hover {
            color: $dark;
            background-color: $light;
            border-color: $light;
        }
    }
</style>

<a href="{url}" target="_blank" class="{modificador[variante]}">
    {text}
</a>
