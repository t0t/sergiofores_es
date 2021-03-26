<script>
    import { onMount, onDestroy } from "svelte";

    onMount(() => {
       console.log("MOUNTED COMPONENT") 
    })
    
    onDestroy(() => {
       console.log("DESTROYED COMPONENT") 
    })
</script>

playground

<slot></slot>