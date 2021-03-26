<script>
    import Links from "./components/generic/Links.svelte"
</script>

<style lang="scss">
    @use "sass/_index.scss" as *;
</style>

<main>
    <slot name="content-container"></slot>
</main>
    
<footer>
    <slot name="footer">
        <Links/>
    </slot>
</footer>
