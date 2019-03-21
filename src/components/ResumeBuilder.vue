<template>
    <div id="builder_wrapper">
        
    </div>
</template>
<script>
export default {
    created(){
        console.log("from resume builder");
    }
}
</script>
<style>
    #builder_wrapper {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 50%;
        overflow-y: auto;
        background: red;
    }
</style>