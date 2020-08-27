<script>
    import Home from "./Home.svelte";
    import {Router, Link, Route} from "svelte-routing";

    export let url = "";
    import Loadable from "svelte-loadable";
    import Header_game from './Header_game.svelte'
    import Rules from "./Rules.svelte";
    import {playerScore} from "./playerscore";
    let yourScore
    playerScore.subscribe(value => {
        yourScore = value
        console.log(value,'value')
    })
</script>

<style>
    .container{
        display: grid;
        grid-template-rows: 0.5fr 5fr 0.5fr;
        grid-row-gap: 4rem;
        height: 100vh;
    }
    @media screen and (min-width: 768px) {
        .container {
            grid-row-gap: 6rem;
        }
    }
</style>

<main>
    <Router url="{url}">
        <div class="container mx-auto  px-8 ">
            <Header_game yourScore={yourScore} />
            <Route path="picked">
                <Loadable loader={() => import("./Picked.svelte")} />
            </Route>
            <Route path="/"><Home /></Route>
            <Rules />
        </div>
    </Router>
</main>
