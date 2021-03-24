<script>
    import { afterUpdate } from 'svelte';
    import {clickOutside} from './clickOutside.js';
    import SiteLogo from './modulos/SiteLogo.svelte'

    const navOptions = [
        {
            name: '⨀ Cover',
            href: '#01234'
        },
        {
            name: '⧰ About',
            href: '#about'
        },
        {
            name: '➥ Art Works',
            href: '#artwork'
        }
    ];
    let currentitem, y;
    let activemenu = false;
    
    afterUpdate(() => { 
        if ( y > 100 && y < 500 ) { 
            currentitem = "" 
        }
    });
    
    function cuandoClick(event) {
        currentitem = event.path[0].hash
    }
    function contraeMainMenu() {
		activemenu = false
	}
</script>

<style lang="scss">
	@import '../sass/_global.scss';

    .MainNav {
        display: none;
        position: fixed;
        top: $h4 + $h1;
        left: $h0;
        z-index: 500;
        list-style: none;
        padding-top: $h0;
        padding-bottom: $h0;
        @include type-setting(0);
        background-color: rgba(0,0,0,0.75);

        .NavItem {
            text-decoration: none;
            user-select: none;
            padding: $h0 $h2;
            display: block;
            &:hover {
                color: $white;
            }
        }
    }
    .MainNavVisible {
        display: flex;
        flex-wrap: wrap;
        /* min-height: 150px; */
        justify-content: space-between;
        flex-direction: column;
        @include animation(slide);
    }
    .ButtonNav {
        position: fixed;
        z-index: 1000;
        top: $h2;
        left: $h2;
        &:hover {
            cursor: pointer;
        }
    }
    .active {
        color: $white;
    }
    a {
        color: $grey_1;
    }
</style>

<svelte:window bind:scrollY={y} />

<div use:clickOutside on:click_outside={contraeMainMenu}>

<div class="ButtonNav"
    on:click={() => {
        activemenu = !activemenu
    }}>
    <SiteLogo />
</div>

<ul class="{activemenu ? "MainNav MainNavVisible" : "MainNav"}">
    {#each navOptions as link, i}
    <li>
        { #if y == i }
            <a href="{link.href}" class="NavItem active">{link.name}</a>
        { :else }
            <a on:click="{(event)=>cuandoClick(event)}" class="{
            link.href == currentitem ? 'NavItem active' : 'NavItem'}" href="{link.href}" id={i}>{link.name}</a>
        { /if }
    </li>
    {/each}
</ul>
</div>