<script>
    export let text = "";
    export let url = "";
    export let target = "_blank";
    export let variante = 0;
    let modificador = [
        "Light",
        "Dark",
        "Colored",
        "ColoredInvert"
    ];
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    button {
        background-color: transparent;
        user-select: none;
        &:focus {
            outline: none;
            border-color: $grey_0;
            border-style: dashed;
        }
    }

    a,
    button {
        font-size: inherit;
        display: flex;
        align-items: center;
        padding: $h0 $h1;
        text-decoration: none;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        @include margin-top(1);
        @include margin-bottom(1);
        max-width: $h8;
        position: relative;
        &:after {
            font-size: $h2;
            padding-left: $h0;
        }
        &:hover {
            cursor: pointer;
        }
    }
    
    .Dark {
        color: $grey_5;
        border-color: $grey_5;
        &:hover {
            color: $grey_0;
            background-color: $quaternary;
            border-color: $quaternary;
        }
    }
    .Light {
        color: $grey_1;
        border-color: $grey_1;
        &:hover {
            color: $grey_5;
            background-color: $grey_1;
            border-color: $grey_1;
        }
    }
    .Colored {
        color: $grey_2;
        border-color: $grey_2;
        &:hover {
            color: $grey_5;
            background-color: $grey_0;
            border-color: $grey_0;
        }
    }
    .ColoredInvert {
        color: $grey_3;
        border-color: $grey_3;
        &:hover {
            color: $grey_5;
            background-color: $grey_0;
            border-color: $grey_0;
        }
    }
</style>

{#if url}
    <a href="{url}" target="{target}" class="{modificador[variante]}">
        {text}
    </a>
{:else}
    <button on:click class="{modificador[variante]}">
        {text}
    </button>
{/if}
