<script>
    import Rock from "./Rock.svelte";
    import Scissors from "./Scissors.svelte";
    import Paper from "./Paper.svelte";
    import { navigate } from "svelte-routing";
    import {playerSelected} from './store'

    let selectedImage
    function browse(e){
        selectedImage = e
        playerSelected.update(value => {
            value = selectedImage
            return value = selectedImage
        })
        navigate("/picked", { replace: true })
    }


</script>
    <!--icons for paper rock scissors-->
<div class="images my-auto mx-auto relative bg-no-repeat bg-contain bg-center " style="background-image: url(./img/bg-triangle.svg);">
    <div class="paper absolute" id="paper"  on:click={ () => browse("paper")}>
        <Paper />
    </div>
    <div class="scissors absolute" id="scissors"  on:click={ () => browse("scissors")}>
        <Scissors />
    </div>
    <div class="rock absolute" on:click={ () => browse("rock")}>
        <Rock />
    </div>
</div>
<style>
    .images{
        width: 305px;
        height: 277px;
    }
    .rock{
        left: calc((50% - 3rem));
        top:calc(100% - 6rem);
    }
    .paper{
        left: -1rem;
        top:-3rem;
    }
    .scissors{
        right: -1rem;
        top:-3rem;
    }



</style>