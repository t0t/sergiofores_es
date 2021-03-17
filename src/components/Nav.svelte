<script>
    const navOptions = [
        {
            name: 'ↂ',
            href: '+0+1234'
        },
        {
            name: 'About',
            href: 'About'
        },
        {
            name: 'Artwork',
            href: 'Artwork'
        }
    ];
</script>

<style lang="scss">
	@import '../sass/_global.scss';

    .MainNav {
        position: fixed;
        z-index: 1000;
        list-style: none;
        padding: $h3;
        @include type-setting(0);
        a {
            text-decoration: none;
            color: $light_2;
            &:hover {
                color: $light;
            }
        }
    }
</style>

<ul class="MainNav">
    {#each navOptions as link}
        <li>
            <a href="#{link.href}">{link.name}</a>
        </li>
    {/each}
</ul>