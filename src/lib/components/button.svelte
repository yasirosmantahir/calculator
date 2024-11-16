<script>
    export let label = "1";
    export let width = "25%";
    export let height = "50px";
    export let color = "#FFFFFF";
    export let bg = "#414547";
    

    import { handleClick } from "./global.js";


    

   


    
</script>

<button   style="--width:{width}; --height:{height}; --bg:{bg}; --color:{color};"
        on:click={()=>handleClick(label)}>
    {label}
</button>

<style>
    button{
        width: var(--width);
        height: var(--height);
        background-color: var(--bg);
        color: var(--color);
        border-radius: 20px;
        border : 0 solid; 
        font-size: 20px;
        margin: 0%;

    }
    button:active {
            transform: scale(0.95);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 3px 2px 2px 1px rgba(119, 116, 116, 0.34);
            /* Lowering the shadow */
        }
</style>
