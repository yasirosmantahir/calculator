<script>
    import { result , operation } from "$lib/components/global.js";

    

</script>

<div class="screen">
    <textarea class="operation" value="{$operation.join('')}" rows="3" cols="20"
    ></textarea>
    <div class="result">{$result}</div>
</div>

<style>

    .screen{
        background-color: rgb(0, 0, 0);
        width: 100%;
        height: 120px;
        
    }
    .operation{
        text-align: end;
        font-size: 25px;
        color : white;
        height: 70px;
        background-color: black;
        border: 0px solid;
        overflow:hidden;
        resize:none;

    }
    
    .operation:focus{
        
        border: 0px solid black;
    }

    .result{
        text-align: end;
        font-size: 30px;
        color : white;
    }
</style>