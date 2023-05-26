<template>
  <div class="row mt-3">
    <!-- individual els -->
    <div class="item_wrapper col-md-12">
      <div class="row" @click="toggleExpand(item)">
        <h5 class="col-md-10">{{ item['attr1'] }} at {{ item['attr2'] }}</h5>
        <i class="fas fa-trash-alt delete_icon col-md-1 mt-3 px-2" @click="deleteItem(skill);"></i>
        <i class="fas fa-chevron-down expand_icon col-md-1 mt-3"></i>
      </div>

      <!-- end of individual els -->
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
</style>


